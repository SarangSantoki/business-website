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



document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


