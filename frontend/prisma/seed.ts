import { PrismaClient } from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient();

const TMDB_API_KEY = process.env.TMDB_API_KEY;

async function main() {
  if (!TMDB_API_KEY) {
    console.error("TMDB_API_KEY is not set in the environment variables.");
    return;
  }

  try {
    // 1. fetch the data from tmdb
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`
    );
    const movies = response.data.results;
    console.log(`Fetched ${movies.length} movies from TMDB.`);

    // 2. Clear existing data to prevent duplicates on re-seeding
    await prisma.movie.deleteMany();
    console.log(`Deleted all movies from the database.`);

    // 3. Create a transaction to save the movies in the database
    const movieCreatePromises = movies.map((movie: any)=>{
        return prisma.movie.create({
            data: {
          id: movie.id,
          title: movie.title,
          posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          year: new Date(movie.release_date).getFullYear(),
          type: 'movies',
          description: movie.overview,
          rating: movie.vote_average,
        },
        });
    });

    await prisma.$transaction(movieCreatePromises);
    console.log(`Seeded ${movies.length} movies into the database.`);
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    await prisma.$disconnect();
  }
}
