// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  hamburger.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('nav')) {
    navMenu.classList.remove('show');
    hamburger.classList.remove('active');
  }
});

// Smooth Scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Form Validation
const contactForm = document.querySelector('#contact form');
contactForm.addEventListener('submit', (e) => {
  const name = contactForm.querySelector('input[type="text"]');
  const email = contactForm.querySelector('input[type="email"]');
  const phone = contactForm.querySelector('input[type="number"]');
  
  if (!name.value.trim()) {
    e.preventDefault();
    alert('Please enter your name');
    name.focus();
    return;
  }
  
  if (!email.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
    e.preventDefault();
    alert('Please enter a valid email address');
    email.focus();
    return;
  }
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

