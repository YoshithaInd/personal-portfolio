// 1. Project Data
const projects = [
  { title: "Java OOP System", desc: "University lab project on encapsulation.", link: "https://github.com/YoshithaInd" },
  { title: "Database Design", desc: "MySQL relational schema for e-commerce.", link: "https://github.com/YoshithaInd" },
  { title: "Web Portfolio", desc: "Interactive portfolio using JS and CSS.", link: "https://github.com/YoshithaInd" }
];

// 2. Render Projects
const grid = document.querySelector('.js-projects-grid');
grid.innerHTML = projects.map(p => `
  <div class="project-card">
    <i class="fas fa-code-branch" style="font-size: 2rem; color: #3498db;"></i>
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <a href="${p.link}" target="_blank" class="btn secondary">Code</a>
  </div>
`).join('');

// 3. Custom Cursor Logic
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// 4. Reveal on Scroll (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 5. Navigation & Form Logic
// (Keep your existing Menu Toggle and Form Validation code here)