// app/api/updateData/route.js
import { NextResponse } from "next/server";
import { addPhotos, getPhotos } from "../../../../datastore";
import https from "https";

function fetchData() {
  return new Promise((resolve, reject) => {
    https.get("https://jsonplaceholder.typicode.com/photos", (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        try {
          const photos = JSON.parse(data);
          addPhotos(photos);
          console.log("Fetched and stored new photos. Total count:", getPhotos().length);
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    }).on("error", (e) => {
      reject(e);
    });
  });
}

export async function GET() {
  try {
    await fetchData();
    return NextResponse.json({ message: "Data fetch complete" });
  } catch (e) {
    console.error("Error fetching data:", e);
    return NextResponse.json({ message: "Error fetching data" }, { status: 500 });
  }
}