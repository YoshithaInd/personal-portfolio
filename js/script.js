// 1. Project Data Model
const engineeringProjects = [
  { name: "C Data Structures", tech: "C Programming", info: "Efficient lab implementations of Stacks, Queues, and Lists." },
  { name: "Java Inventory Pro", tech: "Java / OOP", info: "Full-scale application for warehouse asset tracking." },
  { name: "SQL Retail Database", tech: "Database / MySQL", info: "Complex relational schema design for E-Commerce." }
];

// 2. Dynamic Content Rendering
const grid = document.querySelector('.js-projects-grid');
grid.innerHTML = engineeringProjects.map(p => `
  <article class="project-cardreveal">
    <small style="color: #2563eb; font-weight: bold;">${p.tech}</small>
    <h3 style="margin: 15px 0; font-size: 1.5rem;">${p.name}</h3>
    <p style="color: #64748b; font-size: 0.95rem;">${p.info}</p>
    <a href="https://github.com/YoshithaInd" target="_blank" style="display:inline-block; margin-top:20px; text-decoration:none; color:black; font-weight:bold;">View Code →</a>
  </article>
`).join('');

// 3. Lively Mouse Interaction (Simple Animation)
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

document.addEventListener('mousemove', (e) => {
  dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  outline.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// 4. Navigation Menu Toggle
const menuBtn = document.querySelector('.js-menu-toggle');
const navMenu = document.querySelector('.js-nav-links');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menuBtn.innerHTML = navMenu.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// 5. Intersection Observer (Scroll Animation)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 6. Smooth Scrolling & Form Validation
document.querySelectorAll('.js-nav-item').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

const form = document.querySelector('.js-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const feedback = document.querySelector('.js-msg');
  if (document.querySelector('.js-email').value.includes('@')) {
    feedback.innerText = "Thanks! I'll connect soon.";
    feedback.style.color = "green";
    form.reset();
  } else {
    feedback.innerText = "Please provide a valid email.";
    feedback.style.color = "red";
  }
});