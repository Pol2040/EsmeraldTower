// Header Scroll Effect
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scene Navigation
const navLinks = document.querySelectorAll('.nav-links a, .logo');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get target ID
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId === '#' ? '#inicio' : targetId);

        if (targetSection) {
            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Show target section
            targetSection.classList.add('active');

            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            if (link.classList.contains('logo')) {
                document.querySelector('.nav-links a[href="#inicio"]').classList.add('active');
            } else {
                link.classList.add('active');
            }

            // Scroll to top of the new "scene"
            window.scrollTo({
                top: 0,
                behavior: 'instant'
            });

            // Update header state if needed
            if (targetId === '#inicio' || targetId === '#') {
                header.classList.remove('scrolled');
            } else {
                header.classList.add('scrolled');
            }
        }
    });
});

// Contact Form Submission (Mockup)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo a la brevedad.');
        contactForm.reset();
    });
}

// Reveal elements on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.amenity-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});
