# Casa Nativa

Landing page responsive del proyecto **Casa Nativa**, una casa de hospedaje rural en Pereira, Risaralda. Taller de exploración de frameworks CSS — Momento 1 de Aplicaciones móviles y web.

## Qué tiene la página

- Header con menú que se adapta al celular (menú hamburguesa)
- Hero con el mensaje principal, los dos botones y las fotos
- Franja de experiencia
- Servicios con sus 4 tarjetas
- Formulario de reserva / contacto con todos los campos
- Footer con los datos de contacto

## Framework asignado

**Bulma CSS v1.0.4** (me corresponde Bulma, no usaTailwind).

**Forma de instalación que usé:** por CDN, sin instalar nada. Solo pegué esta línea en el `index.html`, dentro del `<head>`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css">
```

**Tres características que me resultaron útiles:**

1. El sistema de columnas (`columns` y `column is-6`, `is-5`...) — para armar el hero en dos columnas y las tarjetas en pareja, y en celular todo se apila solo sin tocar el CSS.
2. Los helpers de utilidad (`is-medium`, `is-fullwidth`, `is-vcentered`, `is-multiline`, `is-variable`, `is-rounded`) — para resolver tamaños, alinear y espacios sin escribir estilos extra.
3. Las variables de personalización (`--bulma-primary-h/s/l`, `--bulma-link-h/s/l`, `--bulma-family-primary`) — permitieron cambiar los colores base de Bulma por los de mi paleta de colores sin romper su lógica.

**Tres componentes/utilidades del framework que usé en la landing:**

1. `navbar` con `navbar-burger` para la navegación responsive.
2. `box` para las tarjetas de servicios y para la tarjeta que contiene el formulario.
3. `field`, `label`, `input`, `textarea` y `button` para el formulario de reserva (más `tag` para las etiquetas de cada sección).

## Animaciones con Anime.js

Anime.js v3.2.2, también por CDN. Está en dos zonas obligatorias:

- **Menú:** anima la marca, los enlaces y el botón al cargar, y la apertura del menú móvil.
- **Servicios:** las 4 tarjetas entran escalonadas cuando la sección aparece en pantalla.
- Extra: también entra el contenido del hero.

## Colores usados

#364025 #4B3D1A #899064 #CFBB9A #E6D7C4 #131309 #2F3E21 #758956 #6A5746 #3A2C1F

