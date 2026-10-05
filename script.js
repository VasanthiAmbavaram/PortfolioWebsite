let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

  let header = document.querySelector('header');

  header.classList.toggle('sticky',window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

ScrollReveal({ 
  distance: '80px',
  duration: 2000,
  delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
  strings:['Frontend Developer','YouTuber','Blogger'],
  typeSpeed:100,
  backSpped:100,
  backDelay:1000,
  loop:true
});


// Skills: fill bars and count up when the section scrolls into view
const skillsSection = document.querySelector('.skills');
const skillItems = document.querySelectorAll('.skill');
let skillsAnimated = false;

function animateSkills() {
  skillItems.forEach(item => {
    const fill = item.querySelector('.skill-fill');
    const label = item.querySelector('.skill-percent');
    const target = parseInt(fill.dataset.percent, 10);

    fill.style.width = target + '%';

    let current = 0;
    const timer = setInterval(() => {
      current++;
      label.textContent = current + '%';
      if (current >= target) clearInterval(timer);
    }, 1600 / target);
  });
}

new IntersectionObserver((entries, observer) => {
  if (entries[0].isIntersecting && !skillsAnimated) {
    skillsAnimated = true;
    animateSkills();
    observer.disconnect();
  }
}, { threshold: 0.3 }).observe(skillsSection);
