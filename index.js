// JavaScript to handle page elements once the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    const mainImage = document.querySelector('.main-image');
    const highlightBox = document.querySelector('.highlight-box');

    // Add class to make elements visible when the page loads
    setTimeout(() => {
        if (mainImage) mainImage.classList.add('visible');
        if (highlightBox) highlightBox.classList.add('visible');
    }, 100);
});

// Function to scroll to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show the scroll-to-top button when the user scrolls down 20px from the top
window.addEventListener('scroll', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 20) {
        scrollToTopBtn.style.display = 'block'; // Show button
    } else {
        scrollToTopBtn.style.display = 'none'; // Hide button
    }
});

// The following code related to custom carousel logic is unnecessary for Bootstrap's native carousel.
// It has been removed to prevent conflicts with Bootstrap's built-in functionality.
// Bootstrap handles the carousel behavior using the HTML data attributes such as `data-bs-ride`, `data-bs-target`, etc.

// If you need additional customization or further enhancements, those can be re-added specifically where necessary,
// ensuring they do not conflict with the Bootstrap initialization and control mechanisms.
