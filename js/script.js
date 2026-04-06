// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.fade').forEach(el => observer.observe(el));

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Skill bars animation
const skillBars = document.querySelectorAll('.progress-bar');

skillBars.forEach(bar => {
  bar.style.width = "0";
});

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.width;
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));