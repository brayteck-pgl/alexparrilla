# Taller: Creación de propuestas y maquetaciones web con IA
## Proyecto: ALEX PARRILLA

**Tecnologías:** HTML5, CSS3 y JavaScript puro.  
**Alcance:** sitio demostrativo responsive, sin frameworks ni backend.

## 1. Brief del proyecto

### Propósito
Mostrar los productos del restaurante, atraer clientes y diferenciar la marca mediante una identidad visual atractiva que transmita calidad gastronómica.

### Audiencia
Público general, principalmente personas entre 16 y 45 años. La experiencia prioriza dispositivos móviles y se adapta a tabletas y computadores.

### Contenido
1. Inicio.
2. Menú.
3. Experiencia / Galería.
4. Ubicación.
5. Contacto.

También se presenta el servicio demostrativo de parrilla para eventos, tanto a domicilio como en el establecimiento.

### Estética
Parrilla urbana premium con elementos rústicos: ladrillo a la vista, carbón, fuego y madera. Paleta: negro carbón (#171412), rojo parrilla (#A51E22), naranja fuego (#F07824) y tonos beige cálidos. Hamburguesas y carnes son protagonistas; pinchos y chorizos tienen presencia secundaria.

## 2. Priming

**Objetivo:** proporcionar contexto, rol, tecnologías, restricciones y forma de trabajo a la IA.

**Prompt utilizado (resumen):**

> Actúa como desarrollador frontend con experiencia en HTML5, CSS3 y JavaScript puro. Vamos a crear ALEX PARRILLA, restaurante de hamburguesas y carnes al carbón. La página debe mostrar Inicio, Menú, Experiencia/Galería, Ubicación y Contacto; dirigirse al público general de 16 a 45 años y priorizar móviles. Usa estética urbana premium y rústica con ladrillo, carbón, madera, negro, rojo y naranja fuego. Hamburguesas y carnes son protagonistas; pinchos y chorizos discretos. Separa index.html, style.css y app.js. No uses frameworks ni librerías externas, prioriza accesibilidad, claridad y mantenibilidad. Primero presenta la propuesta y espera aprobación antes de programar. No inventes datos comerciales.

**Aprendizaje:** definir contexto y restricciones reduce resultados fuera del alcance, retrabajo y dependencias no deseadas.

## 3. Meta-prompting

**Objetivo:** pedir a la IA que ayude a construir mejores instrucciones antes de solicitar el diseño.

**Prompt utilizado (resumen):**

> Actúa como especialista en Prompt Engineering y desarrollo frontend. Ayúdame a construir un prompt completo para diseñar ALEX PARRILLA. Identifica información faltante sobre propósito, audiencia, secciones, identidad visual, productos, eventos, navegación, interacciones, responsive, tecnologías y restricciones. Organiza una plantilla, explica cada apartado y formula preguntas. No generes código ni propuesta definitiva hasta aprobar el prompt.

**Aprendizaje:** Meta-prompting permite descubrir requisitos omitidos y estructurar instrucciones más completas; no garantiza un resultado perfecto y requiere validación humana.

## 4. Comparación de técnicas de prompting

Se comparan las cuatro técnicas sobre el mismo brief.

### Zero-shot
Se solicita una propuesta sin ejemplos visuales de otros restaurantes. La IA toma decisiones autónomas sobre secciones, paleta HEX, tipografía, componentes, interacciones y responsive.

**Observación:** permite explorar una dirección propia sin condicionar el resultado con referencias específicas. No garantiza originalidad absoluta.

### One-shot
Se entrega un patrón de referencia: sección de servicios con título alineado a la izquierda, texto introductorio y tres tarjetas en fila; cada tarjeta incluye icono, título, descripción y botón. En móvil se apilan verticalmente.

**Observación:** orienta la estructura de una sección y permite adaptar el patrón a productos y servicios del restaurante.

### Few-shot
Se proporcionan varios patrones: tarjetas con bordes suaves y espaciado uniforme; botones con color primario y estados hover/focus; secciones con título, descripción y grid; columnas adaptadas al tamaño de pantalla.

**Observación:** varios ejemplos ayudan a mantener consistencia entre componentes, sin forzar patrones donde no sean adecuados.

### Chain of Thought / planificación por etapas
Se solicita organizar la propuesta por etapas: necesidades del usuario, jerarquía de secciones, colores y tipografía, productos, interacciones y responsive. Para cada etapa se entrega decisión, justificación breve y criterio verificable.

**Observación:** facilita revisar y justificar decisiones. La documentación registra conclusiones y criterios, no razonamientos internos privados.

### Comparación
| Técnica | Aporte | Limitación |
|---|---|---|
| Zero-shot | Libertad creativa inicial | Puede asumir decisiones inesperadas |
| One-shot | Orienta un patrón concreto | El ejemplo puede limitar alternativas |
| Few-shot | Consistencia entre componentes | Requiere elegir buenos ejemplos |
| Chain of Thought | Organización y justificación | Puede requerir más instrucciones |

Ninguna técnica es universalmente mejor; pueden combinarse según la necesidad.

## 5. Propuesta visual seleccionada

Se combinan los aportes de las cuatro técnicas:
- Libertad de exploración de Zero-shot.
- Organización de tarjetas de One-shot.
- Consistencia de componentes de Few-shot.
- Planificación y criterios verificables de Chain of Thought.

**Arquitectura:** Inicio, Menú, Experiencia/Galería, Ubicación y Contacto/Eventos.  
**Componentes:** encabezado, navegación, tarjetas de productos, filtros, galería, formulario, botones y pie de página.  
**Responsive:** mobile-first; puntos de adaptación CSS en 900, 680 y 380 px. Se debe validar manualmente a 360, 768 y 1200 px.

## 6. Implementación

- `index.html`: estructura semántica y contenido.
- `style.css`: identidad visual, Grid, Flexbox, variables y media queries.
- `app.js`: navegación móvil, filtros de menú, validación del formulario y preparación de consulta para WhatsApp.

**Funcionalidades incluidas:**
- Menú móvil desplegable.
- Filtros para productos.
- Validación de campos requeridos.
- Preparación de mensaje para WhatsApp cuando se configure el número real.
- Mensaje informativo si el número aún no está configurado.

**Límites:** no hay backend, almacenamiento ni envío de formularios a un servidor. Precios, productos, dirección, horarios y servicios son demostrativos y deben confirmarse antes de un uso comercial. Las imágenes externas requieren conexión a internet.

## 7. Validación y refinamiento

### Iteraciones documentadas
1. Estructura HTML y correspondencia con el brief.
2. Paleta, tipografía y variables CSS.
3. Proporciones de tarjetas, galería y jerarquía de productos.
4. Navegación móvil, filtros y validación del formulario.
5. Media queries y adaptación a diferentes anchos.

### Comprobaciones estáticas
- `node --check app.js`: aprobado en la revisión realizada.
- HTML analizado con parser: aprobado en la revisión realizada.
- IDs duplicados: no detectados.
- Siete imágenes con atributo `alt`.
- Elementos semánticos principales presentes.

### Pendiente de validación manual
Las pruebas visuales en navegador no se consideran completadas hasta ejecutarlas en el equipo del estudiante. Guardar capturas reales en `evidencias/`:
- vista móvil 360 px;
- vista tableta 768 px;
- vista escritorio 1200 px;
- filtro de hamburguesas;
- validación de formulario;
- consola sin errores propios del proyecto.

No presentar capturas simuladas ni afirmar que se hicieron pruebas que no se ejecutaron.

## 8. Reflexión final

**¿Qué técnica fue más útil?** Few-shot ayudó a mantener consistencia visual; se complementó con Zero-shot para explorar y la planificación por etapas para justificar decisiones.

**¿Diferencia entre One-shot y Few-shot?** One-shot usa un ejemplo; Few-shot utiliza varios patrones para orientar distintos componentes.

**¿Qué aportó Meta-prompting?** Permitió identificar requisitos que podían faltar: jerarquía, servicios, interacciones, responsive, tecnologías y restricciones.

**¿Qué decisiones requieren revisión humana?** La jerarquía de productos, la identidad rústica, la presencia secundaria de pinchos y chorizos y la veracidad de los datos comerciales.

**¿Qué debe verificarse en el código?** Navegación, filtros, validación, configuración de WhatsApp, imágenes, consola y responsive.

**¿Qué haría diferente?** Confirmaría datos reales desde el inicio, prepararía referencias propias y registraría cada prueba con capturas reales.

## 9. Conclusión

La IA apoya el diseño y la maquetación cuando recibe contexto, objetivos y restricciones claras. Las técnicas de prompting permiten explorar, orientar y organizar propuestas, pero el desarrollador debe revisar las decisiones, comprobar el código y validar el resultado en el navegador.
