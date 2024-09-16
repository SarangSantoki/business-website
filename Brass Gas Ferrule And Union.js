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