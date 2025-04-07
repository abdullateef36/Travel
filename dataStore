// dataStore.js
let photos = [];

export function addPhotos(newPhotos) {
  newPhotos.forEach((photo) => {
    if (!photos.some((p) => p.id === photo.id)) {
      photos.push(photo);
    }
  });
}

export function getPhotos() {
  return photos;
}

async function fetchAndStorePhotos() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    console.log(`Fetched ${data.length} photos`);
    addPhotos(data);
  } catch (error) {
    console.error("Error fetching photos:", error);
  }
}

fetchAndStorePhotos();
setInterval(fetchAndStorePhotos, 60000);
