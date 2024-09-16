/* scripts.js */
document.addEventListener("DOMContentLoaded", () => {
    const qualityImage = document.querySelector('.quality-image');
    qualityImage.classList.add('fadeIn');
});


/* scripts.js */
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.image-left, .image-logo, .image-right, .text-wrapper');
    images.forEach(image => {
        image.classList.add('fadeIn');
    });
});


/* scripts.js */
document.addEventListener("DOMContentLoaded", () => {
    const textSection = document.querySelector('.text-section');
    const imageSection = document.querySelector('.image-section');

    textSection.classList.add('fadeInLeft');
    imageSection.classList.add('fadeInRight');
});


/* scripts.js */
document.addEventListener("DOMContentLoaded", () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
});




