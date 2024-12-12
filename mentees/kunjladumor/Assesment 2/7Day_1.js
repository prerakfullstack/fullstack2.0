{
  function loadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(`Loaded image: ${url}`);
      img.onerror = () => reject(`Failed to load image: ${url}`);
    });
  }

  // Example usage with multiple image URLs
  const imageUrls = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/250",
  ];

  Promise.all(imageUrls.map(loadImage))
    .then((results) => console.log("All images loaded:", results))
    .catch((error) => console.error("Error loading images:", error));
}
