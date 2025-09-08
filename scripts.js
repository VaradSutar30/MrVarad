
// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = document.getElementById('darkIcon');
    icon.textContent = body.classList.contains('dark-mode') ? 'SUN' : 'MOON';
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Animate on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});
document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// Contact form handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
    contactForm.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize animations for skill bars
window.addEventListener('load', () => {
    const skillBars = document.querySelectorAll('.skill-bar div');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});
