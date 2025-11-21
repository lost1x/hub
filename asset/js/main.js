// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Card click navigation
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        const pagePath = this.getAttribute('data-page');
        if (pagePath) {
            // Add a subtle animation before navigation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                window.location.href = pagePath;
            }, 200);
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for card animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Add particle effect on mouse move (optional enhancement)
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero-bg-animation');
    if (hero) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        hero.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)`;
    }
});