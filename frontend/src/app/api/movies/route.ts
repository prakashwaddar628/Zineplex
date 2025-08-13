import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try{
    const movies = [
      {
        id: 1,
        title: 'Su From So',
        director: 'J. P. Thuminad',
        year: 2025,
        posterUrl: '/assets/Su_From_So.jpg',
      },
      {
        id: 2,
        title: 'Fast X',
        director: 'Louis Leterrier[',
        year: 2023,
        posterUrl: 'https://imgs.search.brave.com/9Ydc-H1jL2DVeAk0Ojl9n1uDijMoh2ybkAEc0z0_Y20/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vZi9mMi9G/YXN0X1hfcG9zdGVy/LmpwZw',
      },
      // Add more movies as needed
    ];

    return NextResponse.json(movies, { status: 200 });
  }catch (error) {
    return NextResponse.json({ error: "Failed to fetch movies" }, { status: 500 });
  }
}