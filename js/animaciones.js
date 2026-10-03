(function () {
  var reducido =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var conAnime = typeof anime !== 'undefined' && !reducido;

  var burger = document.querySelector('.navbar-burger');
  var menu = document.getElementById('menu-links');

  if (burger && menu) {
    burger.addEventListener('click', function () {
      var abierto = burger.classList.toggle('is-active');
      menu.classList.toggle('is-active', abierto);
      burger.setAttribute('aria-expanded', abierto);

      if (abierto && conAnime) {
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

  var nav = document.getElementById('menu-principal');

  function alScroll() {
    if (nav) {
      nav.classList.toggle('navbar-scrolled', window.scrollY > 8);
    }
  }

  window.addEventListener('scroll', alScroll, { passive: true });
  alScroll();

  var formulario = document.querySelector('.formulario-reserva');

  if (formulario) {
    formulario.addEventListener('submit', function (evento) {
      evento.preventDefault();
    });
  }

  if (!conAnime) {
    return;
  }

  function limpiar(anim) {
    (anim.targets || []).forEach(function (elemento) {
      if (elemento && elemento.style) {
        elemento.style.transform = '';
        elemento.style.opacity = '';
      }
    });
  }

  function alEntrar(selector, inicial, anim) {
    var objetivos = document.querySelectorAll(selector);
    if (!objetivos.length || !('IntersectionObserver' in window)) {
      return;
    }

    anime.set(objetivos, inicial);

    var observador = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            var opciones = { targets: selector, complete: limpiar };
            for (var clave in anim) {
              opciones[clave] = anim[clave];
            }
            anime(opciones);
            observador.disconnect();
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -70px 0px' }
    );

    objetivos.forEach(function (objetivo) {
      observador.observe(objetivo);
    });
  }

  anime({
    targets: '.navbar-marca .icon',
    rotate: [-7, 7],
    direction: 'alternate',
    loop: true,
    duration: 2300,
    easing: 'easeInOutSine'
  });

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

  anime({
    targets: '.hero-dato .icon',
    opacity: [0, 1],
    scale: [0.2, 1],
    delay: anime.stagger(160, { start: 850 }),
    duration: 700,
    easing: 'easeOutBack'
  });

  var tarjetas = document.querySelectorAll('.tarjeta-servicio');

  if (tarjetas.length && 'IntersectionObserver' in window) {
    anime.set(tarjetas, { opacity: 0, translateY: 50, scale: 0.955 });

    var observadorTarjetas = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            anime({
              targets: '.tarjeta-servicio',
              opacity: [0, 1],
              translateY: [50, 0],
              scale: [0.955, 1],
              delay: anime.stagger(140),
              duration: 650,
              easing: 'easeOutCubic',
              complete: limpiar
            });
            observadorTarjetas.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    tarjetas.forEach(function (tarjeta) {
      observadorTarjetas.observe(tarjeta);
    });
  }

  alEntrar(
    '.experiencia-etiqueta, .seccion-experiencia .title.is-4',
    { opacity: 0, translateX: -24 },
    {
      opacity: [0, 1],
      translateX: [-24, 0],
      duration: 650,
      delay: anime.stagger(130),
      easing: 'easeOutCubic'
    }
  );

  alEntrar(
    '.icono-redondo',
    { opacity: 0, scale: 0.3, rotate: -20 },
    {
      opacity: [0, 1],
      scale: [0.3, 1],
      rotate: [-20, 0],
      duration: 850,
      delay: anime.stagger(150),
      easing: 'easeOutElastic(1, 0.62)'
    }
  );

  alEntrar(
    '.experiencia-dato .title, .experiencia-dato p',
    { opacity: 0, translateY: 18 },
    {
      opacity: [0, 1],
      translateY: [18, 0],
      duration: 600,
      delay: anime.stagger(80),
      easing: 'easeOutCubic'
    }
  );

  alEntrar(
    '.seccion-encabezado > *',
    { opacity: 0, translateY: 28 },
    {
      opacity: [0, 1],
      translateY: [28, 0],
      duration: 700,
      delay: anime.stagger(120),
      easing: 'easeOutCubic'
    }
  );

  alEntrar(
    '.reserva-etiqueta, .seccion-reserva .title, .reserva-texto',
    { opacity: 0, translateY: 26 },
    {
      opacity: [0, 1],
      translateY: [26, 0],
      duration: 650,
      delay: anime.stagger(110),
      easing: 'easeOutCubic'
    }
  );

  alEntrar(
    '.reserva-dato',
    { opacity: 0, translateX: -30 },
    {
      opacity: [0, 1],
      translateX: [-30, 0],
      duration: 600,
      delay: anime.stagger(130),
      easing: 'easeOutCubic'
    }
  );

  alEntrar(
    '.formulario-reserva',
    { opacity: 0, translateY: 40, scale: 0.97 },
    {
      opacity: [0, 1],
      translateY: [40, 0],
      scale: [0.97, 1],
      duration: 750,
      easing: 'easeOutCubic'
    }
  );

  alEntrar(
    '.footer .columns .column',
    { opacity: 0, translateY: 26 },
    {
      opacity: [0, 1],
      translateY: [26, 0],
      duration: 650,
      delay: anime.stagger(130),
      easing: 'easeOutCubic'
    }
  );
})();
