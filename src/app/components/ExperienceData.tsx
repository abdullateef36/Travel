"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Define the shape of a Photo object
interface Photo {
  id: number;
  title: string;
  url: string;
}

function ExperienceData() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  // For pagination (if needed)
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const res = await fetch(`/api/photos?limit=6&page=${page}&orderBy=id&orderDir=asc`);
        const data = await res.json();
        // Note: our API returns the array of photos under "photos"
        setPhotos(data.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
  }, [page]);

  if (loading) return <p>Loading experiences...</p>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {photos.map((photo) => (
          <div key={photo.id} className="relative">
            <Image
              src={photo.url}
              alt={photo.title}
              width={600}
              height={250}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold">{photo.title}</h3>
            </div>
          </div>
        ))}
      </div>
      {/* Simple Pagination Controls */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="px-4 py-2 bg-gray-200 rounded text-sm"
        >
          Prev
        </button>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-orange-500 text-white rounded text-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ExperienceData;