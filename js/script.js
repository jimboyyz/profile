// Scroll Reveal Animations (pakai ScrollReveal library)
ScrollReveal({
  distance: '60px',
  duration: 1200,
  delay: 200,
  easing: 'ease-in-out',
  reset: false // kalau mau animasi sekali aja, ubah ke false
});

// Home section
ScrollReveal().reveal('.home-content h3', { origin: 'left', delay: 300 });
ScrollReveal().reveal('.home-content h1', { origin: 'right', delay: 500 });
ScrollReveal().reveal('.home-content h3 span', { origin: 'bottom', delay: 700 });
ScrollReveal().reveal('.home-content p', { origin: 'left', delay: 900 });
ScrollReveal().reveal('.home-content .social-media a', { origin: 'bottom', interval: 200, delay: 1100 });
ScrollReveal().reveal('.home-img img', { origin: 'bottom', delay: 1300 });

// About section
ScrollReveal().reveal('.about-img', { origin: 'left', delay: 400 });
ScrollReveal().reveal('.about-content', { origin: 'right', delay: 600 });

// Services (questions)
ScrollReveal().reveal('.services h2, .services h3', { origin: 'top', delay: 400 });
ScrollReveal().reveal('.services-box', { origin: 'bottom', interval: 200, delay: 600 });

// Portfolio (projects)
ScrollReveal().reveal('.portfolio h2', { origin: 'top', delay: 400 });
ScrollReveal().reveal('.portfolio-box', { origin: 'bottom', interval: 200, delay: 600 });

// Blog section (contact diubah blog)
ScrollReveal().reveal('.blog h2', { origin: 'top', delay: 400 });
ScrollReveal().reveal('.blog-post', { origin: 'bottom', interval: 200, delay: 600 });

// Typed.js untuk teks dinamis di home
const typed = new Typed('.multiple-text', {
  strings: ['Mathematicians', 'Problem Solvers', 'Innovators', 'Dreamers'],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1500,
  loop: true
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }

  // Scroll spy
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 70;
    const sectionId = current.getAttribute('id');
    const navLink = document.querySelector(`.navbar a[href*=${sectionId}]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  });
});

// Menu mobile toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x'); // ubah icon menu jadi silang
  navbar.classList.toggle('active');
});

// Close navbar when link clicked (mobile)
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
});
