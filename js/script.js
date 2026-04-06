// Navigation toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        navLinks.classList.remove('active');
    });
});

// Form validation
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(name && email && message){
        formMessage.style.color = 'green';
        formMessage.textContent = 'Message sent successfully!';
        form.reset();
    } else {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please fill in all fields.';
    }
});

// Render projects dynamically
const projects = [
    { title: "Project 1", description: "Web application using HTML, CSS, JS." },
    { title: "Project 2", description: "Python OOP program." },
    { title: "Project 3", description: "MySQL database project." }
];

const projectsGrid = document.getElementById('projects-grid');

projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;
    projectsGrid.appendChild(card);
});

// Simple scroll animation
window.addEventListener('scroll', () => {
    document.querySelectorAll('.project-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100){
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
});