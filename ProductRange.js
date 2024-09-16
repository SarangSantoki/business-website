// script.js

document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
    });
});
