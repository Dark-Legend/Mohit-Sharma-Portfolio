'use strict'

// // ==========scroll on reveal=====================

const sr = ScrollReveal({
  origin: 'top',
  distance: '90px',
  duration: 2000,
  reset: true,
})

// ==================scroll home===================
sr.reveal('.logo');
sr.reveal('.list');
sr.reveal('.heading-text', {});
sr.reveal('.arrow', {delay: 200});
sr.reveal('.header-img', {origin: 'right',delay: 300});

sr.reveal('.menu',{
  origin: 'right'
});

sr.reveal('.aboutme-para', {
  delay:200,
  origin: 'bottom'
});



// ============scroll about=======================
sr.reveal('.about-heading', {delay: 200});
sr.reveal('.circle', {delay: 200});
sr.reveal('.intro-text', {delay: 300});
sr.reveal('.desigination', {delay: 400});
sr.reveal('.paragraph', {delay: 400});
sr.reveal('.links-icon', {
  delay: 500,
  interval: 100
});
sr.reveal('.download-btn',{
  delay: 500,
  interval: 250
});

// ==============scroll skills=====================

sr.reveal('.skill', {delay:50});
sr.reveal('.skill-icons', {
  distance:'20px',
  delay: 100,
  interval: 100
});

// =============scroll projects==================

sr.reveal('.project-text');
sr.reveal('.bb', {interval: 100});
sr.reveal('.pro');

// =============scroll blog============
sr.reveal('.blog-text');
sr.reveal('.blog1',{
  origin: 'left',
  delay: 100
});

sr.reveal('.blog2',{
  origin: 'right',
  delay: 100
});

// ===========scroll contact=================

sr.reveal('.contact-text');
sr.reveal('.details',{
  origin: 'left',
  delay: 200
});

sr.reveal('.contact-form',{
  origin: 'right',
  delay:200
});

sr.reveal('.name', {delay:100,origin: 'right'});
sr.reveal('.email', {delay: 200, origin: 'right'});
sr.reveal('.message',{
  delay: 200,
  origin: 'right'
});
sr.reveal('.button',{
  delay: 250,
  origin: 'right'
});

// ================scroll footer====================

sr.reveal('.about-me');
sr.reveal('.explore');
sr.reveal('.social');


// ======================menu show==============================

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if(toggle && nav){
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}

showMenu('nav-toggle','list-menu');
