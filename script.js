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

// Typing animation for hero section (only on home page)
const heroTitle = document.querySelector('.hero h2');
if (heroTitle) {
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

    typingAnimation(heroTitle, 'Full Stack Developer & IT Consultant', 100);
}

// Form submission handling with validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
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
            // Menggunakan fetch untuk mengirim data ke Formspree
            fetch('https://formspree.io/f/xkgnnqod', {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    alert('Thank you for your message! I will get back to you soon.');
                    contactForm.reset();
                } else {
                    alert('There was an error submitting the form. Please try again.');
                }
            }).catch(error => {
                alert('An unexpected error occurred. Please try again later.');
                console.error('Error:', error);
            });
        } else {
            alert('Please fill in all fields.');
        }
    });
}


// Sticky header with background color change on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky-header');
    } else {
        header.classList.remove('sticky-header');
    }
});

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}