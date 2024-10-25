// script.js

// Handle product menu item click and content change
document.querySelectorAll('.product-menu li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.product-menu .active').classList.remove('active');
        item.classList.add('active');

        // Change content based on the selected item
        const productContent = document.querySelector('.product-content');
        productContent.querySelector('h1').textContent = item.textContent;
        productContent.querySelector('p').textContent = `Description for ${item.textContent}`;
        // Update the image source as needed
        productContent.querySelector('.product-image').src = `path/to/${item.textContent.replace(/ /g, '-').toLowerCase()}.jpg`;
    });
});

// Handle FAQ section toggle
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        // Toggle the active class
        faq.classList.toggle("active");

        // Toggle the visibility of the answer
        const answer = faq.querySelector(".answer");
        if (faq.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";  // Dynamically adjust height
        } else {
            answer.style.maxHeight = null;
        }
    });
});

// Handle scroll to top button visibility and scroll functionality
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.querySelector('#scrollToTopBtn');

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

// Function to show or hide the scroll to top button
window.onscroll = function () {
    scrollFunction();
};

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
