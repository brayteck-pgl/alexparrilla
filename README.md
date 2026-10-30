# ALEX PARRILLA — proyecto del taller

Sitio web demostrativo para un restaurante de hamburguesas y parrilla al carbón. Está construido con HTML5, CSS3 y JavaScript puro, sin frameworks.

## Archivos

- `index.html`: estructura semántica y contenido.
- `style.css`: identidad visual, distribución y responsive.
- `app.js`: menú móvil, filtros del menú y formulario de consulta para eventos.
- `DOCUMENTACION_TALLER.md`: brief, prompts, propuesta visual, registro de validación y reflexión.

## Cómo abrir el proyecto

1. Descarga y descomprime la carpeta.
2. Abre `ALEX-PARRILLA` en Visual Studio Code.
3. Abre `index.html` en el navegador. También puedes usar la extensión Live Server si ya la tienes instalada.
4. Para las pruebas responsive, usa las herramientas de desarrollador del navegador y revisa anchos de 360 px, 768 px y 1200 px.

## Configuración pendiente

En `app.js`, busca la constante `WHATSAPP_NUMBER` y reemplaza la cadena vacía por el número real del restaurante en formato internacional, sin el signo `+`, espacios ni guiones. Ejemplo de formato: `57` seguido del número. No uses el ejemplo como teléfono real.

En `index.html` debes reemplazar la dirección, los horarios, los precios, los nombres y descripciones de productos por los datos autorizados del restaurante.

## Imágenes y conexión

Las fotografías se cargan desde URLs de Unsplash, por lo que requieren conexión a internet. Se pueden reemplazar por fotografías propias conservando las etiquetas `alt` y la estructura de las imágenes.

## Alcance real de las funcionalidades

- El menú móvil abre y cierra.
- Los botones del menú filtran tarjetas por categoría.
- El formulario comprueba campos requeridos y prepara un mensaje para WhatsApp.
- El formulario no guarda datos ni envía información a un servidor. Para abrir WhatsApp es necesario configurar el número real.
- La ubicación, los horarios y los precios incluidos son demostrativos.

## Tecnologías

HTML5, CSS3 (Grid, Flexbox, variables y media queries) y JavaScript moderno con `addEventListener`.
