// 1. Data Model (Dynamic Content)
const projects = [
  { name: "Java Inventory Pro", tech: "Java / OOP", info: "Management system for warehouse logistics." },
  { name: "C-Lang Data Engine", tech: "C / DSA", info: "Implementing Stacks and Queues for high-speed data processing." },
  { name: "SQL Retail DB", tech: "SQL / MySQL", info: "Complex relational schema for E-Commerce platforms." }
];

// 2. Render View (DOM Manipulation)
const grid = document.querySelector('.js-project-grid');
grid.innerHTML = projects.map(p => `
  <article class="card">
    <small style="color: #2563eb; font-weight: bold;">${p.tech}</small>
    <h3 style="margin: 15px 0;">${p.name}</h3>
    <p style="color: #64748b; font-size: 0.9rem;">${p.info}</p>
  </article>
`).join('');

// 3. Custom Cursor Controller (Simple Animation)
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
  dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  outline.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// 4. Navigation Toggle
const menuBtn = document.querySelector('.js-menu-toggle');
const navLinks = document.querySelector('.js-nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-active');
  menuBtn.innerHTML = navLinks.classList.contains('mobile-active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// 5. Intersection Observer (Scroll Reveal)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(section => observer.observe(section));

// 6. Smooth Scroll & Form Validation
document.querySelectorAll('.js-nav-item').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

const form = document.querySelector('.js-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector('.js-email').value;
  const msg = document.querySelector('.js-msg');
  
  if (email.includes('@')) {
    msg.innerText = "Message sent! I'll be in touch.";
    msg.style.color = "green";
    form.reset();
  } else {
    msg.innerText = "Please provide a valid email.";
    msg.style.color = "red";
  }
});