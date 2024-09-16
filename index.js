document.addEventListener('DOMContentLoaded', function () {
    const mainImage = document.querySelector('.main-image');
    const highlightBox = document.querySelector('.highlight-box');

    // Add class to make elements visible when the page loads
    setTimeout(() => {
        mainImage.classList.add('visible');
        highlightBox.classList.add('visible');
    }, 100);
});




const carousel = document.querySelector('.carousel');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;

function showSlide(index) {
    const totalSlides = carousel.children.length;
    if (index >= totalSlides) {
        index = 0;
    } else if (index < 0) {
        index = totalSlides - 1;
    }

    carousel.style.transform = `translateX(-${index * 100}%)`;

    indicators.forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });

    currentIndex = index;
}

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => showSlide(index));
});

setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000); // Change slide every 5 seconds





// Function to scroll to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show the button when the user scrolls down 20px from the top
window.onscroll = function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

window.onscroll = function () {
    console.log('Scrolling...'); // Add this line for debugging
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

