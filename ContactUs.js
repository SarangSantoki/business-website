document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 300);
    });
});


document.querySelectorAll('.footer-social a').forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.color = '#FF8C00';
    });

    link.addEventListener('mouseout', function() {
        this.style.color = '#FFA500';
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
