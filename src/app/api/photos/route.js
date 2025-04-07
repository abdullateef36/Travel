// app/api/photos/route.js
import { NextResponse } from "next/server";
import { getPhotos } from "../../../../datastore";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);

  const allPhotos = getPhotos();

  // Debug line
  console.log(`Total photos in memory: ${allPhotos.length}`);

  const start = (page - 1) * limit;
  const paginatedPhotos = allPhotos.slice(start, start + limit);

  return NextResponse.json({
    page,
    limit,
    total: allPhotos.length,
    data: paginatedPhotos,
  });
}