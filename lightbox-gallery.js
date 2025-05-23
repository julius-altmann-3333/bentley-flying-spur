const images = [
  "https://julius-altmann-3333.github.io/lp-flying-spur/jpeg-optimizer_flying-spur (1).jpg",
  "https://julius-altmann-3333.github.io/lp-flying-spur/jpeg-optimizer_flying-spur (9).jpg",
  "https://julius-altmann-3333.github.io/lp-flying-spur/jpeg-optimizer_flying-spur (7).jpg",
  "https://julius-altmann-3333.github.io/lp-flying-spur/jpeg-optimizer_flying-spur (3).jpg",
  "https://julius-altmann-3333.github.io/lp-flying-spur/jpeg-optimizer_flying-spur (4).jpg"
];

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  document.getElementById('lightboxImage').src = images[currentIndex];
  document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('lightboxImage').src = images[currentIndex];
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById('lightboxImage').src = images[currentIndex];
}

document.getElementById('lightbox').addEventListener('click', (e) => {
  if (e.target.id === 'lightbox') closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!document.getElementById('lightbox').classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});
