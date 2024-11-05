let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(event) {
  touchStartX = event.changedTouches[0].screenX; // Get the starting touch point
}

function handleTouchMove(event) {
  touchEndX = event.changedTouches[0].screenX; // Get the ending touch point
}


function handleTouchEnd() {
  if (touchEndX < touchStartX) {
    nextImage(); // Swipe left
  }
  if (touchEndX > touchStartX) {
    prevImage(); // Swipe right
  }
}

function initSwipe() {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return; // Exit if there's no carousel on the page

  carousel.addEventListener('touchstart', handleTouchStart, false);
  carousel.addEventListener('touchmove', handleTouchMove, false);
  carousel.addEventListener('touchend', handleTouchEnd, false);
}


let currentIndex = 0;

function showImage(index) {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const itemWidth = carousel.offsetWidth;
  carousel.style.transform = `translateX(-${index * itemWidth}px)`;
}

function nextImage() {
  const items = document.querySelectorAll('.carousel-item');
  currentIndex = (currentIndex + 1) % items.length;
  showImage(currentIndex);
}

function prevImage() {
  const items = document.querySelectorAll('.carousel-item');
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showImage(currentIndex);
}

function initCarousel() {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return; // Exit if there's no carousel on the page

  showImage(currentIndex);

  // Add event listeners to buttons if they exist
  const nextButton = document.querySelector('.carousel-next');
  const prevButton = document.querySelector('.carousel-prev');

  if (nextButton) nextButton.addEventListener('click', nextImage);
  if (prevButton) prevButton.addEventListener('click', prevImage);

  // Initialize swipe functionality
  initSwipe();

  // Add resize event listener
  window.addEventListener('resize', () => showImage(currentIndex));
}


document.addEventListener('DOMContentLoaded', initCarousel);
