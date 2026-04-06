// 1. Project Model
const projects = [
    { title: "Java Inventory System", tech: "Java / OOP", desc: "A management tool for tracking warehouse assets." },
    { title: "C Data Structures", tech: "C / Algorithms", desc: "Implementation of custom linked lists and stacks." },
    { title: "Relational DB Design", tech: "MySQL / SQL", desc: "E-commerce schema design with normalization." }
];

// 2. Render Projects (DOM Manipulation)
const grid = document.querySelector('.js-project-grid');
grid.innerHTML = projects.map(p => `
    <div class="project-card" style="background:#f8fafc; padding:3rem; border-radius:24px; margin-bottom:2rem;">
        <small style="color:#2563eb; font-weight:bold;">${p.tech}</small>
        <h3 style="margin:1rem 0; font-size:1.5rem;">${p.title}</h3>
        <p style="color:#64748b;">${p.desc}</p>
    </div>
`).join('');

// 3. Custom Cursor Track
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// 4. Scroll Reveal (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 5. Form Validation
const form = document.querySelector('.js-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('.js-email').value;
    const feedback = document.querySelector('.js-feedback');
    if (email.includes('@')) {
        feedback.innerText = "Message sent successfully!";
        feedback.style.color = "green";
        form.reset();
    }
});