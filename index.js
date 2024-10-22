document.addEventListener('DOMContentLoaded', function () {
    const mainImage = document.querySelector('.main-image');
    const highlightBox = document.querySelector('.highlight-box');

    // Add class to make elements visible when the page loads
    setTimeout(() => {
        mainImage.classList.add('visible');
        highlightBox.classList.add('visible');
    }, 100);
});



/*
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
*/
document.addEventListener("DOMContentLoaded", function () {
    // Select all the h2 elements within the statistics section
    const statistics = document.querySelectorAll('.statistics-section .statistic h2');

    // Function to count from 0 to the target value
    function countUp(element, target) {
        let count = 0;
        const speed = 50; // Speed of counting
        const increment = Math.ceil(target / 100); // Increment value

        const counter = setInterval(function() {
            count += increment;
            if (count >= target) {
                count = target; // Ensures it stops exactly at the target
                clearInterval(counter);
            }
            element.textContent = count;
        }, speed);
    }

    // Iterate through each statistic and animate its value
    statistics.forEach(function(statistic) {
        let targetValue = parseInt(statistic.getAttribute('data-target')); // Assuming target value is stored in data-target
        countUp(statistic, targetValue);
    });
});



// Function to scroll to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

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










