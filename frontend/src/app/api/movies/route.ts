import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try{
    const movies = [
      {
        id: 1,
        title: 'The Matrix',
        director: 'Lana Wachowski, Lilly Wachowski',
        year: 1999,
        posterUrl: 'https://image.tmdb.org/t/p/w500/f8sOq4R2c040L96LhS4J2yqA31Z.jpg',
      },
      {
        id: 2,
        title: 'Inception',
        director: 'Christopher Nolan',
        year: 2010,
        posterUrl: 'https://image.tmdb.org/t/p/w500/9gk7adHYeZ3w1n7qG3d8wK00010.jpg',
      },
      // Add more movies as needed
    ];

    return NextResponse.json(movies, { status: 200 });
  }catch (error) {
    return NextResponse.json({ error: "Failed to fetch movies" }, { status: 500 });
  }
}