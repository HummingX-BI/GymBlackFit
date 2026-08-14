export function initReveal() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const els = document.querySelectorAll('.hero__title-line, .reveal');

  if (prefersReducedMotion.matches) {
    els.forEach(el => {
      el.classList.add('in');
    });
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { 
      if(e.isIntersecting){ 
        e.target.classList.add('in'); 
        io.unobserve(e.target); 
      } 
    });
  }, {threshold: 0.15});

  els.forEach((el, index) => {
    // Add staggered delay for hero lines
    if (el.classList.contains('hero__title-line')) {
      el.style.transitionDelay = `${index * 60}ms`;
    }
    io.observe(el);
  });
}
