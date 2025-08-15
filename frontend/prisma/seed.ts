import { PrismaClient } from "@prisma/client";
import https from "https";

const prisma = new PrismaClient();
const TMDB_API_KEY = process.env.TMDB_API_KEY;

const agent = new https.Agent({ keepAlive: false });

async function fetchWithRetry(url: string, options: any, retries = 3): Promise<Response> {
  let lastError: any;
  for (let i = 0; i < retries; i++) {
    try {
      return await fetch(url, { ...options, agent });
    } catch (err) {
      lastError = err;
      console.warn(`Fetch attempt ${i + 1} failed. Retrying...`);
      await new Promise(r => setTimeout(r, 1000));
    }
  }
  throw lastError;
}

function buildTMDbRequest(endpoint: string) {
  if (!TMDB_API_KEY) {
    throw new Error("TMDB_API_KEY is not set in .env");
  }

  const isBearerToken = TMDB_API_KEY.startsWith("eyJ");
  if (isBearerToken) {
    return {
      url: `https://api.themoviedb.org/3/${endpoint}`,
      options: {
        headers: {
          Authorization: `Bearer ${TMDB_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    };
  } else {
    return {
      url: `https://api.themoviedb.org/3/${endpoint}?api_key=${TMDB_API_KEY}`,
      options: {
        headers: {
          "Content-Type": "application/json",
        },
      },
    };
  }
}

async function main() {
  try {
    console.log("Attempting to fetch data from TMDb...");

    const { url, options } = buildTMDbRequest("movie/popular");

    const response = await fetchWithRetry(url, options);

    if (!response.ok) {
      throw new Error(`Failed to fetch TMDb. Status: ${response.status}`);
    }

    const data = await response.json();
    const movies = data.results;

    if (!movies || movies.length === 0) {
      throw new Error("No movies returned from TMDb.");
    }

    console.log(`Fetched ${movies.length} movies. Clearing DB...`);
    await prisma.movie.deleteMany();

    console.log("Seeding database...");
    await prisma.$transaction(
      movies.map((movie: any) =>
        prisma.movie.create({
          data: {
            id: movie.id,
            title: movie.title,
            posterUrl: movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : null,
            year: movie.release_date
              ? new Date(movie.release_date).getFullYear()
              : null, // Year is now nullable
            type: "movies",
            description: movie.overview || "No description available.",
            rating: movie.vote_average || 0.0,
            videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
          },
        })
      )
    );

    console.log("Database has been successfully seeded!");
  } catch (error) {
    console.error("A critical error occurred during the seeding process:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();