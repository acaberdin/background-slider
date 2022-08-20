const body = document.body;
const slides = document.querySelectorAll('.slide');

const right = document.getElementById('right');
const left = document.getElementById('left');

right.addEventListener('click', () => nextSlide(1));
left.addEventListener('click', () => nextSlide(-1));

let activeSlide = 0;

setBodyBackground();

function setBodyBackground() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function nextSlide(step) {
  activeSlide = (activeSlide + step + slides.length) % slides.length;
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[activeSlide].classList.add('active');
  setBodyBackground();
}