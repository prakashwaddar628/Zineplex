import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const movies = await prisma.movie.findMany();
    return NextResponse.json(movies, { status: 200 });
  } catch (error) {
    console.error('Error fetching the movies:', error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
