"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import VideoPlayer from "@/components/VideoPlayer";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Movie = {
  id: number;
  title: string;
  posterUrl: string | null;
  year: number | null;
  type: "movies" | "anime" | "drama" | "kids";
  description: string | null;
  rating: number | null;
  videoUrl: string | null;
};

const MovieDetailPage = () => {
  const params = useParams();
  const movieId = params.id as string;

  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovie = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/movies/${movieId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch movie");
        }
        const data: Movie = await response.json();
        setMovie(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  if (loading) {
    return (
      <div className="text-center text-xl mt-20">Loading movie details...</div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-xl mt-20 text-red-500">
        Error: {error}
      </div>
    );
  }

  if (!movie) {
    return <div className="text-center text-xl mt-20">Movie not found.</div>;
  }

  const handleWatchNowClick = () => {
    alert(`You're about to watch: ${movie.title}`);
    // Here we will add the logic to show a video player.
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow pt-16 p-8 mt-8">
        <div className="max-w-4xl mx-auto">
          {showPlayer && movie.videoUrl ? (
            // Display the video player if showPlayer is true
            <div className="mb-8">
              <VideoPlayer videoUrl={movie.videoUrl} />
            </div>
          ) : (
            // Display movie details and button
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative w-64 h-96 flex-shrink-0">
                <Image
                  src={
                    movie.posterUrl ||
                    "https://via.placeholder.com/250x375.png?text=No+Image"
                  }
                  alt={movie.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div className="flex-grow">
                <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
                {movie.year && (
                  <p className="text-lg text-gray-400 mb-4">({movie.year})</p>
                )}
                <p className="text-2xl font-semibold mb-2">
                  Rating: {movie.rating?.toFixed(1)} / 10
                </p>
                <p className="text-lg mb-6">{movie.description}</p>
                <button
                  onClick={() => setShowPlayer(true)}
                  className="mt-4 px-4 py-2 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                  Watch Now
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MovieDetailPage;
