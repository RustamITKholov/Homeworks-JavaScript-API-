const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

let currentIndex = 0;

slideImages.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateSlide() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function goToSlide(index) {
    currentIndex = index;
    updateSlide();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideImages.length;
    updateSlide();

}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slideImages.length) % slideImages.length;
    updateSlide();
}


nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);