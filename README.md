# 1% Mejor

Un tema para crecer, cada semana, en 2 minutos: claves prácticas, un reto y, si hay, una noticia tech.

- Página principal: https://nayrojas.github.io/1-mejor/
- Versión clásica (una sola pantalla): https://nayrojas.github.io/1-mejor/clasica/

## Cómo actualizarlo cada semana

Edita **solo `contenido.js`**. Las dos versiones de la página leen ese archivo.

1. Copia la semana más reciente del bloque `SEMANAS` y pégala **al inicio** de la lista.
2. Cambia estos campos:
   - `numero` y `fechas`
   - `soft`: `categoria`, `titulo` (el tema), `ayuda` (en qué ayuda, en una frase), `tips` (máximo 5), `fuente` y `reto`
   - `repaso` (opcional): una pregunta sobre la semana anterior, con sus `opciones`, la `correcta` (0 = la primera) y una `explica`. Solo se muestra en la versión clásica.
   - `tech` (opcional): `etiqueta`, `titulo`, `resumen`, `porQue` (por qué nos importa) y `link`. Si no hay noticia, omite el bloque.
   - `en` (opcional): la misma semana en inglés, con `fechas`, `soft` y `tech` traducidos. Si falta, el botón EN muestra esa semana en español.
3. Haz commit. GitHub Pages publica los cambios en uno o dos minutos.

El botón **ES | EN** cambia el idioma y la página recuerda la elección de cada persona.

La imagen `og.png` es la que aparece al compartir el link en Teams, WhatsApp u Outlook.

Creado por Nay Rojas.
