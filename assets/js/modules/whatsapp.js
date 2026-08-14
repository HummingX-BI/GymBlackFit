export async function initWhatsapp() {
  const waLinks = document.querySelectorAll('[data-wa-msg]');
  if (waLinks.length === 0) return;

  try {
    const response = await fetch('data/contenido.json');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    
    let numero = data.negocio.whatsapp;
    if (numero === 'PENDIENTE_NUMERO' || !numero) {
      console.warn('Advertencia: El número de WhatsApp no está configurado en data/contenido.json. Los enlaces pueden no funcionar correctamente.');
      // Keep it as is or fallback
    }

    // Limpiar número (remover espacios, guiones) si existieran, asumiendo código país 52
    numero = numero.replace(/\D/g, '');
    if (numero.length === 10) {
      numero = '52' + numero; // prepend MX country code if only 10 digits
    }

    waLinks.forEach(link => {
      const msg = link.getAttribute('data-wa-msg');
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
      link.setAttribute('href', url);
    });

  } catch (error) {
    console.error('Error cargando contenido.json para enlaces de WhatsApp:', error);
  }
}
