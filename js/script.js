// =========================
// MOBILE NAV TOGGLE
// =========================
const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// =========================
// ACTIVE NAV HIGHLIGHT ON SCROLL
// =========================
const links = [...nav.querySelectorAll('a')];
const sections = links.map(a => document.querySelector(a.getAttribute('href')));

const setActive = () => {
  let idx = 0;
  const fromTop = scrollY + 80;
  sections.forEach((s, i) => {
    if (s.offsetTop <= fromTop) idx = i;
  });
  links.forEach((l, i) => l.classList.toggle('active', i === idx));
};

addEventListener('scroll', setActive, { passive: true });
setActive();

// =========================
// REVEAL ON SCROLL ANIMATIONS
// =========================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('show');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade').forEach(el => observer.observe(el));

// =========================
// CURRENT YEAR
// =========================
document.getElementById('year').textContent = new Date().getFullYear();


// =========================
// SKILL BAR ANIMATION
// =========================
const skillBars = document.querySelectorAll('.progress-bar');

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.style.width;
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
  skillObserver.observe(bar);
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});