var bubble = document.getElementById("bubble");
document.body.addEventListener("mousemove", function(e) {
  bubble.style.left = e.clientX + "px",
    bubble.style.top = e.clientY + "px";
});

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const hamburger = document.querySelector('.nav-menu-cl');
const navMenu = document.querySelector('.nav-menu-vertical');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('nav-menu-visible');
});
