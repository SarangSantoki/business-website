function showContent(type) {
    const title = document.getElementById('content-title');
    const description = document.getElementById('content-description');
    const image = document.getElementById('content-image');
    const textContent = document.getElementById('content-text');
    const tabs = document.querySelectorAll('.tab-link');
    const content = document.querySelector('.content');

    tabs.forEach(tab => tab.classList.remove('active'));

    content.classList.remove('show');
    setTimeout(() => {
        if (type === 'vision') {
            title.textContent = 'Our Vision at Maruti Brass Industries is to revolutionize the traditional brass industry through our innovative and unconventional thinking.';
            description.textContent = ' With a team of forward-thinking individuals, we strive to provide out-of-the-box solutions that set us apart from other traditional brass manufacturers. In addition to offering the best after-sales support, we provide top-notch consultation to our customers to help them finalize their requirements.';
            image.src = 'work-1.jpg';
            tabs[0].classList.add('active');
        } else if (type === 'mission') {
            title.textContent = 'Our mission is to reduce the delivery timeframe for the entire lifecycle of brass product delivery to our customers.';
            description.textContent = 'We are actively working towards achieving this goal by adopting agile methodologies and incorporating cutting-edge technology into our processes. Our team of highly skilled and experienced professionals is committed to utilizing our equipment efficiently to ensure that we deliver superior products that meet the highest standards of quality and precision.';
            image.src = 'work-2.jpg';
            tabs[1].classList.add('active');
        } else if (type === 'motto') {
            title.textContent = 'At Maruti Brass Industries, our motto is to achieve 100% customer satisfaction and 100% client retention not only in India but worldwide.';
            description.textContent = 'By continuously striving towards this goal, we aim to become a leading global manufacturer and supplier of brass components. Our commitment to achieving total client satisfaction drives us to continuously improve our processes and adopt a virtuous injection component model.';
            image.src = 'work-3.jpg';
            tabs[2].classList.add('active');
        }

        content.classList.add('show');
    }, 300); // Animation delay for text content to fade in and out
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
