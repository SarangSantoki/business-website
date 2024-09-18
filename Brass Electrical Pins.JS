// script.js

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



const faqs = document.querySelectorAll(".faq");


faqs.forEach(faq => {
    faq.addEventListener("click", () =>  {
        faq.classList.toggle("active");
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
