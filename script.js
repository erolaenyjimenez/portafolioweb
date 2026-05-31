// Navbar cambia al hacer scroll
window.addEventListener('scroll', () => {

  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 50) {
    navbar.classList.add('shadow');
  } else {
    navbar.classList.remove('shadow');
  }

});

// Animación al cargar
window.addEventListener('load', () => {

  const heroText = document.querySelector('.hero-text');

  heroText.style.opacity = '0';
  heroText.style.transform = 'translateY(30px)';

  setTimeout(() => {
    heroText.style.transition = 'all 1s ease';
    heroText.style.opacity = '1';
    heroText.style.transform = 'translateY(0)';
  }, 300);

});

// Formulario contacto
const form = document.getElementById('contactForm');

if(form){

  form.addEventListener('submit', (e) => {

    e.preventDefault();

    alert('Mensaje enviado correctamente');

    form.reset();

  });

}

// Animación de aparición al hacer scroll
const sections = document.querySelectorAll('section');

const mostrarSeccion = () => {

  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {

    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < triggerBottom){

      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';

    }

  });

};

// Estado inicial
sections.forEach(section => {

  section.style.opacity = '0';
  section.style.transform = 'translateY(50px)';
  section.style.transition = 'all 0.8s ease';

});

window.addEventListener('scroll', mostrarSeccion);

mostrarSeccion();