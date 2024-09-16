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
