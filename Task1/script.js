document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#555'; // Change background color when scrolled
        } else {
            navbar.style.backgroundColor = '#333'; // Revert to original color when not scrolled
        }
    });
});
