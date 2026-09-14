const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label','Открыть меню'); nav.classList.remove('is-open'); }
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded',String(open));
  toggle.setAttribute('aria-label',open ? 'Закрыть меню':'Открыть меню');
  nav.classList.toggle('is-open',open);
});
nav.addEventListener('click', e => { if(e.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
document.addEventListener('click', e => { if(!e.target.closest('.header')) closeMenu(); });
matchMedia('(min-width: 768px)').addEventListener('change',closeMenu);
