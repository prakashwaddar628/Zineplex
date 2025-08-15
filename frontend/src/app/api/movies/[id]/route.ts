import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const movieId = Number(params.id);

    if (isNaN(movieId)){
        return NextResponse.json({ error: "Invalid movie ID" }, { status: 400 });
    }

    const movie = await prisma.movie.findUnique({
      where: { id: movieId },
    });

    if (!movie) {
      return NextResponse.json({ error: "Movie not found" }, { status: 404 });
    }

    return NextResponse.json(movie, {status: 200});

  } catch (error) {
    console.error("Error fetching movie:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
