// Menunggu hingga seluruh konten halaman dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', () => {

    // Fungsi untuk smooth scrolling saat link navigasi di-klik
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fungsi untuk animasi mengetik di bagian hero
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const text = "Full Stack Developer & IT Consultant";
        let index = 0;
        
        function type() {
            if (index < text.length) {
                typingElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 100); // Kecepatan mengetik (ms)
            }
        }
        type(); // Memulai animasi
    }

    // Fungsi untuk validasi dan pengiriman form kontak
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    alert('Thank you for your message! I will get back to you soon.');
                    contactForm.reset();
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            alert(data["errors"].map(error => error["message"]).join(", "));
                        } else {
                            alert('Oops! There was a problem submitting your form.');
                        }
                    })
                }
            }).catch(error => {
                alert('An unexpected error occurred. Please try again later.');
                console.error('Error:', error);
            });
        });
    }

    // Fungsi untuk membuat header menjadi 'sticky' saat di-scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky-header');
        } else {
            header.classList.remove('sticky-header');
        }
    });

    // Fungsi untuk menu hamburger di versi mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        // Toggle menu saat ikon hamburger di-klik
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Menutup menu saat salah satu link di dalam menu di-klik
        document.querySelectorAll('.nav-links li a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Fungsi untuk menampilkan tahun copyright secara otomatis
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});