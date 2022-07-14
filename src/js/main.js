'use strict'

// ==========scroll on reveal=====================

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
sr.reveal('.header-img', {origin: 'right',delay: 400});


// ============scroll about=======================
sr.reveal('.about-heading', {delay: 500});
sr.reveal('.circle', {delay: 500});
sr.reveal('.intro-text', {delay: 300});
sr.reveal('.desigination', {delay: 400});
sr.reveal('.paragraph', {delay: 500});
sr.reveal('.links-icon', {
  delay: 600,
  interval: 200
});
sr.reveal('.download-btn',{
  delay: 650,
  interval: 250
});

// ==============scroll skills=====================

sr.reveal('.skill');
sr.reveal('.skill-icons', {
  distance:'20px',
  delay: 50,
  interval: 100
});

// =============scroll projects==================

sr.reveal('.project-text');
sr.reveal('.bb', {interval: 200});
sr.reveal('.pro');

// =============scroll blog============
sr.reveal('.blog-text');
sr.reveal('.blog1',{
  origin: 'left',
  delay: 200
});

sr.reveal('.blog2',{
  origin: 'right',
  delay: 200
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

sr.reveal('.name', {delay:300,origin: 'right'});
sr.reveal('.email', {delay: 400, origin: 'right'});
sr.reveal('.message',{
  delay: 500,
  origin: 'right'
});
sr.reveal('.button',{
  delay: 450,
  origin: 'right'
});

// ================scroll footer====================

sr.reveal('.about-me');
sr.reveal('.explore');
sr.reveal('.social');
