// Navigation effect on scroll
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

// Portfolio model
const portfolioModals = document.querySelectorAll('.portfolio-model');
const imgCards = document.querySelectorAll('.img-card');
const portfolioCloseBtns = document.querySelectorAll('.portfolio-close-btn');

let portfolioModal = function (modalClick) {
  portfolioModals[modalClick].classList.add('active');
};

imgCards.forEach((imgCard, i) => {
  imgCard.addEventListener('click', () => {
    portfolioModal(i);
  });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
  portfolioCloseBtn.addEventListener('click', () => {
    portfolioModals.forEach((portfolioModalView) => {
      portfolioModalView.classList.remove('active');
    });
  });
});

// Scroll to top button
const scrollTopBtn = document.querySelector('.scrollToTop-btn');

window.addEventListener('scroll', function () {
  scrollTopBtn.classList.toggle('active', window.scrollY > 500);
});

scrollTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Active nav menu
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let id = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-items a[href*=' + id + ']').classList.add('active');
    } else {
      document.querySelector('.nav-items a[href*=' + id + ']').classList.remove('active');
    }
  });
});

// Responsive menu toggle
const menuBtn = document.querySelector('.nav-menu-btn');
const closeBtn = document.querySelector('.nav-close-btn');
const navigation = document.querySelector('.navigation');
const navItems = document.querySelectorAll('.nav-items a');

menuBtn.addEventListener('click', () => {
  navigation.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  navigation.classList.remove('active');
});

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    navigation.classList.remove('active');
  });
});

// Scroll reveal
// ScrollReveal({
//   reset: true,
//   distance: '60px',
//   duration: 2500,
//   delay: 100,
// });

// ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02 ', {
//   delay: 500,
//   origin: 'left',
// });
// ScrollReveal().reveal('.home .info h3, .home .info p, about-info .btn ', {
//   delay: 600,
//   origin: 'right',
// });
// ScrollReveal().reveal('.home .info .btn ', {
//   delay: 700,
//   origin: 'bottom',
// });
// ScrollReveal().reveal('.media-icons i, .contact-left li ', {
//   delay: 500,
//   origin: 'left',
//   interval: 200,
// });
// ScrollReveal().reveal('.home-img, .about-img, .follow ', {
//   delay: 500,
//   origin: 'bottom',
// });
// ScrollReveal().reveal('.about .description, .copyright ', {
//   delay: 600,
//   origin: 'right',
// });
// ScrollReveal().reveal('.about, .scroll-down ', {
//   delay: 500,
//   origin: 'right',
//   interval: 200,
// });
// ScrollReveal().reveal('.skills-description, .info ', {
//   delay: 700,
//   origin: 'left',
// });
// ScrollReveal().reveal('.education, .portfolio .img-card ', {
//   delay: 800,
//   origin: 'bottom',
//   interval: 200,
// });
// ScrollReveal().reveal('.footer, .group ', {
//   delay: 500,
//   origin: 'top',
//   interval: 200,
// });
