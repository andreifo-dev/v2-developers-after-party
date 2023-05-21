const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    splash.classList.add('display-none');
  }, 2000);
  setTimeout(() => {
    splash.style.display = 'none';
  }, 4000);
});

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}
