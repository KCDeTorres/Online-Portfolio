const menuIcon = document.getElementById('menuicon');
const navbar = document.querySelector('.navbar');

// Function to close the navbar
function closeNavbar() {
    navbar.classList.remove('active');
}

// Toggle navbar visibility when clicking the menu icon
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close the navbar when clicking outside of it
document.body.addEventListener('click', (event) => {
    const isNavbarClicked = navbar.contains(event.target);
    const isMenuIconClicked = menuIcon.contains(event.target);

    if (!isNavbarClicked && !isMenuIconClicked) {
        closeNavbar();
    }
});

// Close the navbar when clicking on any navbar link
const navbarLinks = document.querySelectorAll('.navbar a');
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeNavbar();
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        menuIcon.style.display = 'block';
    } else {
        menuIcon.style.display = 'none';
    }
});







const images = document.querySelectorAll('.procon img');

images.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transition = 'transform 0.3s ease';
        image.style.transform = 'scale(1.025)';
    });

    image.addEventListener('mouseleave', () => {
        image.style.transition = 'transform 0.3s ease';
        image.style.transform = 'scale(1)';
    });
});


