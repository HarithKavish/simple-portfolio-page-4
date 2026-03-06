document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add fade-in animations for portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${entry.intersectionRatio * 0.5}s`;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    portfolioItems.forEach(item => {
        observer.observe(item);
    });

    // Hover effects for portfolio cards
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    portfolioCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('img').style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', () => {
            card.querySelector('img').style.transform = 'scale(1)';
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const formObject = Object.fromEntries(formData.entries());

            // In a real implementation, you would send this data to a server
            console.log('Form submitted:', formObject);

            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Thank you! Your message has been received.';
            successMessage.style.color = 'var(--secondary-color)';
            successMessage.style.fontWeight = 'bold';
            successMessage.style.marginTop = '1rem';
            this.insertBefore(successMessage, this.firstChild);

            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    }

    // Add sticky navigation on scroll
    const header = document.querySelector('.portfolio-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(52, 152, 219, 0.95)';
        } else {
            header.style.backgroundColor = 'var(--dark-color)';
        }
    });
});