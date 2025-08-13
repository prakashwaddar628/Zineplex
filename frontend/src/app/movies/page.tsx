"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Cards from '@/components/Cards';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import Link from 'next/link';

type Movie = {
  id: number;
  title: string;
  posterUrl: string;
};

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('/api/movies');
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data: Movie[] = await response.json();
        setMovies(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const newlyAddedMovies = movies.slice(0, 4); 
  const trendingMovies = movies.slice(4, 8); 
  const topRatedMovies = movies.slice(8, 12);

  return (
    <div className="relative flex flex-col min-h-screen bg-gray-900 text-white">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/movies.jpg" 
          alt="movies Background" 
          fill 
          style={{ objectFit: 'cover' }} 
          quality={80} 
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-15 px-4 md:px-8">
          <h1 className="text-4xl font-bold text-center mt-5">Movies</h1>

          {loading && (
            <div className="text-center text-xl mt-10">Loading movies...</div>
          )}
          {error && (
            <div className="text-center text-xl mt-10 text-red-500">Error: {error}</div>
          )}
          
          {!loading && !error && (
            <>
              <section className="mb-12">
                <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                  <h2 className="text-2xl font-semibold">Newly Added</h2>
                  <Link href="/movies/newly-added" passHref>
                    <span className="flex items-center text-emerald-300 hover:text-emerald-500 transition-colors duration-300 cursor-pointer">
                      See All <MdKeyboardDoubleArrowRight className="ml-1" />
                    </span>
                  </Link>
                </div>

                <Cards items={newlyAddedMovies} />
              </section>

              <section className="mb-12">
                <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                  <h2 className="text-2xl font-semibold">Trending</h2>
                  <Link href="/movies/trending" passHref>
                    <span className="flex items-center text-emerald-300 hover:text-emerald-500 transition-colors duration-300 cursor-pointer">
                      See All <MdKeyboardDoubleArrowRight className="ml-1" />
                    </span>
                  </Link>
                </div>
                {/* Pass the data to the Cards component */}
                <Cards items={trendingMovies} />
              </section>

              <section className="mb-12">
                <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                  <h2 className="text-2xl font-semibold">Top Rated</h2>
                  <Link href="/movies/top-rated" passHref>
                    <span className="flex items-center text-emerald-300 hover:text-emerald-500 transition-colors duration-300 cursor-pointer">
                      See All <MdKeyboardDoubleArrowRight className="ml-1" />
                    </span>
                  </Link>
                </div>
                {/* Pass the data to the Cards component */}
                <Cards items={topRatedMovies} />
              </section>
            </>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Movies;