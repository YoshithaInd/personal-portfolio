// 1. Data Model (Your Actual Projects)
const engineeringProjects = [
  { name: "C- DSA Engine", tech: "C Programming", info: "Efficient data structure implementations for academia." },
  { name: "Java Inventory System", tech: "Java / OOP", info: "Management application for warehouse logistics." },
  { name: "SQL DB Schema", tech: "MySQL / Database", info: "Relational database design for a university platform." }
];

// 2. Dynamic Rendering
const grid = document.querySelector('.js-projects-grid');
grid.innerHTML = engineeringProjects.map(p => `
  <article class="cardreveal">
    <small style="color: #2563eb; font-weight: 700;">${p.tech}</small>
    <h3 style="margin: 15px 0; font-size: 1.5rem;">${p.name}</h3>
    <p style="color: #64748b; font-size: 0.95rem;">${p.info}</p>
    <a href="#" style="display: inline-block; margin-top: 20px; text-decoration: none; color: black; font-weight: 600;">View Code →</a>
  </div>
`).join('');

// 3. Lively Mouse Interaction (Simple Animation)
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// 4. Navigation Menu Toggle
const menuBtn = document.querySelector('.js-menu-toggle');
const navLinks = document.querySelector('.js-nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuBtn.innerHTML = navLinks.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// 5. Intersection Observer (Scroll Animation)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 6. Smooth Scrolling & Form Validation
document.querySelectorAll('.js-nav-item').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    if(navLinks.classList.contains('active')) menuBtn.click(); // Close mobile menu
  });
});

const form = document.querySelector('.js-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const feedback = document.querySelector('.js-msg');
  if (document.querySelector('.js-email-input').value.includes('@')) {
    feedback.innerText = "Thanks! I'll get back to you soon.";
    feedback.style.color = "green";
    form.reset();
  } else {
    feedback.innerText = "Please enter a valid email address.";
    feedback.style.color = "red";
  }
});