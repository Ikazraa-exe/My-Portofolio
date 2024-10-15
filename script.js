// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Typing animation for hero section
const typingAnimation = (element, text, speed) => {
    let i = 0;
    element.innerHTML = '';
    const typing = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, speed);
};

const heroTitle = document.querySelector('.hero h2');
typingAnimation(heroTitle, 'Full Stack Developer & IT Consultant', 100);

// Form submission handling with validation
const contactForm = document.getElementById('contact-form');
const formFields = document.querySelectorAll('#contact-form input, #contact-form textarea');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;
    formFields.forEach(field => {
        if (field.value.trim() === '') {
            valid = false;
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });

    if (valid) {
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Sticky header with background color change on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky-header');
    } else {
        header.classList.remove('sticky-header');
    }
});
