export function initNav() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  const anchorLinks = links ? links.querySelectorAll('a') : [];

  if (!nav || !toggle || !links) return;

  function openMenu() {
    links.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    links.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    const isExpanded = links.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    }
  });

  anchorLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (links.getAttribute('aria-expanded') === 'true') {
        closeMenu();
      }
    });
  });

  // Handle scroll for solid nav background
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  }, { passive: true });
}
