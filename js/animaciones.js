(function () {
  var burger = document.querySelector('.navbar-burger');
  var menu = document.getElementById('menu-links');

  if (burger && menu) {
    burger.addEventListener('click', function () {
      var abierto = burger.classList.toggle('is-active');
      menu.classList.toggle('is-active', abierto);
      burger.setAttribute('aria-expanded', abierto);

      if (abierto) {
        anime({
          targets: '#menu-links .navbar-item',
          opacity: [0, 1],
          translateY: [-14, 0],
          delay: anime.stagger(55),
          duration: 420,
          easing: 'easeOutQuad'
        });
      }
    });

    menu.querySelectorAll('a').forEach(function (enlace) {
      enlace.addEventListener('click', function () {
        burger.classList.remove('is-active');
        menu.classList.remove('is-active');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  anime({
    targets: '.navbar-marca',
    opacity: [0, 1],
    translateX: [-18, 0],
    duration: 650,
    easing: 'easeOutQuad'
  });

  anime({
    targets: '#menu-links .navbar-item',
    opacity: [0, 1],
    translateY: [-10, 0],
    delay: anime.stagger(90, { start: 250 }),
    duration: 550,
    easing: 'easeOutQuad'
  });

  anime({
    targets: ['.hero-etiqueta', '.seccion-hero .title', '.hero-texto', '.hero-contenido .buttons', '.hero-datos'],
    opacity: [0, 1],
    translateY: [26, 0],
    delay: anime.stagger(110, { start: 180 }),
    duration: 700,
    easing: 'easeOutCubic'
  });

  anime({
    targets: ['.hero-foto-principal', '.hero-foto-secundaria', '.hero-sello'],
    opacity: [0, 1],
    scale: [0.95, 1],
    delay: anime.stagger(140, { start: 350 }),
    duration: 800,
    easing: 'easeOutCubic'
  });

  var tarjetas = document.querySelectorAll('.tarjeta-servicio');

  if (tarjetas.length && 'IntersectionObserver' in window) {
    anime.set(tarjetas, { opacity: 0, translateY: 50 });

    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          anime({
            targets: '.tarjeta-servicio',
            opacity: [0, 1],
            translateY: [50, 0],
            delay: anime.stagger(140),
            duration: 650,
            easing: 'easeOutCubic'
          });
          observador.disconnect();
        }
      });
    }, { threshold: 0.2 });

    tarjetas.forEach(function (tarjeta) {
      observador.observe(tarjeta);
    });
  }

  var formulario = document.querySelector('.formulario-reserva');

  if (formulario) {
    formulario.addEventListener('submit', function (evento) {
      evento.preventDefault();
    });
  }
})();
