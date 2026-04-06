// 1. Save the Data (Model)
const projects = [
  {
    title: "Data Structures in C",
    description: "Implementation of Stacks and Linked Lists.",
    link: "https://github.com/your-username/project1"
  },
  {
    title: "Java OOP System",
    description: "A university lab project focused on encapsulation.",
    link: "https://github.com/your-username/project2"
  },
  {
    title: "SQL Database Design",
    description: "Relational schema for an e-commerce platform.",
    link: "https://github.com/your-username/project3"
  }
];

// 2. Generate the HTML (View)
function renderProjects() {
  let projectsHTML = '';
  
  projects.forEach((project) => {
    projectsHTML += `
      <div class="project-card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View on GitHub</a>
      </div>
    `;
  });
  
  document.querySelector('.js-projects-grid').innerHTML = projectsHTML;
}

// 3. Make it Interactive (Controller)

// Navigation Toggle
const menuBtn = document.querySelector('.js-menu-toggle');
const navMenu = document.querySelector('.js-nav-menu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('is-active');
});

// Form Validation
const contactForm = document.querySelector('.js-contact-form');
const emailInput = document.querySelector('.js-email-input');
const formMessage = document.querySelector('.js-form-message');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Stop page refresh
  
  if (!emailInput.value.includes('@')) {
    formMessage.innerText = "Please enter a valid email.";
    formMessage.style.color = "red";
  } else {
    formMessage.innerText = "Message sent successfully!";
    formMessage.style.color = "green";
    contactForm.reset();
  }
});

// Smooth Scrolling
document.querySelectorAll('.js-smooth-scroll').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Initialize the page
renderProjects();