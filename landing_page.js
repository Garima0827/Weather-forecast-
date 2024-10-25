// Array of images for the background
const images = [
    'https://pics.craiyon.com/2023-09-29/8e5c90a15f344dd5a76b28be92e69714.webp',
    'https://static.vecteezy.com/system/resources/thumbnails/038/079/851/small/abstract-watercolor-colorful-painting-background-colorful-gradient-ink-colors-wet-effect-hand-drawn-canvas-background-photo.jpg',
    'https://c1.wallpaperflare.com/preview/999/976/851/nature-white-sky-weather.jpg',
    'https://www.shutterstock.com/shutterstock/photos/1937151346/display_1500/stock-photo-the-sky-has-the-light-of-the-sun-the-sky-is-blue-there-are-small-and-large-clouds-alternating-and-1937151346.jpg',
    'https://www.shutterstock.com/image-vector/realistic-illustration-autumn-night-rain-600nw-1932348497.jpg'
  ];
  
  let currentImageIndex = 0;
  const heroSection = document.getElementById('heroSection');
  
  // Function to update my page background image
  function updateBackgroundImage() {
    heroSection.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }
  
  // Initial call to set the first image
  updateBackgroundImage();
  
  // every 4 seconds
  setInterval(updateBackgroundImage, 4000);
  