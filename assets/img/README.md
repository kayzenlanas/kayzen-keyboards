# Imágenes y video — HOUSE OF KAIZEN

Coloca aquí tus archivos reales. El sitio ya está diseñado para verse premium
con o sin fotos (usa placeholders elegantes mientras tanto). Cuando agregues
los archivos con estos nombres exactos, solo descomenta/ajusta el HTML indicado.

## Archivos recomendados

| Archivo            | Dónde se usa                | Formato / proporción            | Notas |
|--------------------|-----------------------------|---------------------------------|-------|
| `hero.mp4`         | Sección 1 (fondo)           | MP4 H.264, 1920×1080, < 6 MB    | Loop corto (6–10s). Setup oscuro con RGB. |
| `hero-poster.jpg`  | Póster del video            | 1920×1080                       | Primer frame, por si el video tarda. |
| `og-cover.jpg`     | Preview al compartir el link| 1200×630                        | **Clave para redes.** Producto + "DROP 001". |
| `producto.jpg`     | Sección 3 (Drop 001)        | 4:5 vertical                    | La foto hero del producto. |
| `proceso-1..4.jpg` | Sección 4 (Proceso)         | 1:1 cuadrada                    | Diseño, tufting, material, acabado. |

## Cómo activar el video del hero
En `index.html`, dentro de `.hero__media`, descomenta el bloque `<video>` y
borra (o deja detrás) el `<div class="stage">`.

## Cómo cambiar una foto de placeholder
Busca `<div class="placeholder ...">` y reemplázalo por:
```html
<img src="assets/img/producto.jpg" alt="Keyboard rug premium — Drop 001" />
```

## Consejos de captura (para que se vea como un drop, no como catálogo)
- Luz baja, fondo oscuro, una sola fuente de luz cálida + RGB de acento.
- Close-ups del tejido/fibra (textura = percepción de calidad).
- Manos trabajando la pieza (craft = valor).
- El rug dentro de un setup real, no flotando en blanco.
- Consistencia de color en todas las fotos (mismo grado de edición).
