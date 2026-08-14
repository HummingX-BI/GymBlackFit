import { initReveal } from './modules/reveal.js';
import { initNav } from './modules/nav.js';
import { initWhatsapp } from './modules/whatsapp.js';

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initNav();
  initWhatsapp();
});
