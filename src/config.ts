export const SITE = {
  nombre: 'Personal Pilates Gandía',
  titular: 'Mario Azara',
  telefono: '611 430 218',
  telefonoHref: 'tel:+34611430218',
  email: 'info@personalpilatesgandia.com',
  direccion: ['C/ Rinconada Leandro Calvo, 2, entresuelo', '46701 Gandía, Valencia'],
};

// URL del servicio que recibe los formularios (Formspree, Web3Forms, Netlify Forms…).
// Si se deja vacía, los formularios abren el programa de correo del visitante.
export const FORM_ENDPOINT = import.meta.env.PUBLIC_FORM_ENDPOINT ?? '';
