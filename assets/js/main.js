document.addEventListener('DOMContentLoaded', function () {
  /*=============== SHOW MENU ===============*/
  const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

  /*===== MENU SHOW =====*/
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show-menu'); 
    });
  }

  /* ===== MENU HIDE =====*/
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }

  /*=============== REMOVE MENU MOBILE ===============*/
  const navLink = document.querySelectorAll('.nav__link');

  function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
  }

  navLink.forEach((navLink) => {
    navLink.addEventListener('click', linkAction);
  });
});



/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header');
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrolly >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);

/*=============== POPULAR SWIPER ===============*/
let swiper = new Swiper(".popular__container", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured__content', {
  selectors: {
    target: '.featured_card'
  },
  animation: {
    duration: 300
  }
});


/* Link active featured */
const linkFeatured = document.querySelectorAll('.featured__item')

function activeFeatured() {
  linkFeatured.forEach(l=> l.classList.remove('active-featured'));
  this.classlist.add('active-featured')
}

linkFeatured.forEach(l => l.addEventListener('click', activeFeatured));




/*=============== SHOW SCROLL UP ===============*/

function scrollUp() {
  const scrollup = document.getElementById('scroll-up');

  if (window.scrollY >= 350) {
    scrollup.classList.add('show-scroll');
  } else {
    scrollup.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollUp);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrolly = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance:  '60px',
  duration: 2000,
  delay: 400,
  //reset: true
})

sr.reveal('.home__title .popular__container, features__img, fitured__fil');
sr.reveal('.home__subtitle', { delay: 500 });
sr.reveal('.home__elec', { delay: 600 });
sr.reveal('.home_img', { delay: 800 });
sr.reveal('.home__car-data', { delay: 900, interval: 100, origin: 'bottom' });
sr.reveal('.home_button', { delay: 1000, origin: 'bottom' });
sr.reveal('.about__group, .offer__data', {origin: 'left'})
sr.reveal('.about__data, .offer__img', {origin: 'right'})
sr.reveal('.features__map', {delay: 600, origin: 'bottom'})
sr.reveal('.features__card', {interval: 300})
sr.reveal('.featured__card, .logos__content, .footer__content', {interval: 100})