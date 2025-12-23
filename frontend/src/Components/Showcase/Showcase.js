// script.js
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-to-cart');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents card click if you have one
            const productName = e.target.closest('.product-card').querySelector('h3').innerText;
            alert(`${productName} added to your cart!`);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Select all wishlist buttons
    const wishlistBtns = document.querySelectorAll('.wishlist');

    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            // Toggle the 'active' class
            this.classList.toggle('active');
            
            // Toggle between regular heart and solid heart icons
            const icon = this.querySelector('i');
            if (this.classList.contains('active')) {
                icon.classList.replace('far', 'fas'); // FontAwesome solid
            } else {
                icon.classList.replace('fas', 'far'); // FontAwesome regular
            }
        });
    });
});