let currentIndex = 0;

function showImage(index) {
  const images = document.querySelectorAll('.carousel img');
  images.forEach(img => img.style.display = 'none');
  if (images[index]) {
    images[index].style.display = 'block';
  }
}

function nextImage() {
  const images = document.querySelectorAll('.carousel img');
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  const images = document.querySelectorAll('.carousel img');
  currentIndex = (currentIndex - 1 + images.length) % images.length;
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
}

document.addEventListener('DOMContentLoaded', initCarousel);
