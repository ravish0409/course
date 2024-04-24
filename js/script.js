const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu li a'); // Get all menu links

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Logic to highlight active link
const currentLocation = location.href; // Get the URL of the current page
menuLinks.forEach(link => {
    if (link.href === currentLocation) {
        link.classList.add('active'); 
    }
});
