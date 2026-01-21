// ============================================
// Portfolio Website JavaScript
// ============================================

// Navigation Section Management
function showSection(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll('section');
    
    // Hide all sections
    sections.forEach(section => {
        section.classList.add('hidden-section');
    });
    
    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden-section');
        // Scroll to the section smoothly
        selectedSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Update active nav link
    updateActiveNavLink(sectionId);
}

// Update Active Navigation Link
function updateActiveNavLink(sectionId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Find and activate the corresponding link
    navLinks.forEach(link => {
        if (link.textContent.toLowerCase() === 'home' && sectionId === 'home') {
            link.classList.add('active');
        } else if (link.textContent.toLowerCase() === sectionId.toLowerCase()) {
            link.classList.add('active');
        }
    });
}

// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            
            // Show success message (in real scenario, you'd send to a server)
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }
    
    // Smooth scroll for internal links
    document.querySelectorAll('a[onclick*="showSection"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Intersection Observer for animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe project cards and skill items
    document.querySelectorAll('.project-card, .skill-item').forEach(element => {
        observer.observe(element);
    });
});

// Smooth Scroll Behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation to elements when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    const heroButtons = document.querySelector('.hero-buttons');
    
    if (heroTitle) heroTitle.style.animation = 'slideDown 0.8s ease';
    if (heroSubtitle) heroSubtitle.style.animation = 'slideDown 1s ease';
    if (heroDescription) heroDescription.style.animation = 'slideDown 1.2s ease';
    if (heroButtons) heroButtons.style.animation = 'slideUp 1.4s ease';
});

// ============================================
// End of JavaScript
// ============================================