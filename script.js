const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');
const carouselInner = document.querySelector('.carousel-inner');
let index = 0;

prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = carouselInner.children.length - 1;
    }
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    if (index < carouselInner.children.length - 1) {
        index++;
    } else {
        index = 0;
    }
    updateCarousel();
});

function updateCarousel() {
    const offset = -index * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}
