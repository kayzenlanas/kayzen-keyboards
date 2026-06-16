# HOUSE OF KAIZEN — DROP 001 · KEYBOARD RUGS

> **No es decoración, es declaración.**
> Experiencia digital de lanzamiento (no ecommerce) para validar demanda y
> conseguir los primeros pedidos reales.

Sitio estático premium, oscuro y cinematográfico. Sin dependencias, sin build,
mobile-first. Se despliega gratis en segundos.

---

## 🚀 Puesta en marcha (3 pasos)

1. **Edita tus datos** en `assets/js/main.js` → objeto `CONFIG`:
   - `whatsappNumber` (formato internacional sin `+`, ej. `573001234567`)
   - `instagram`
   - `slotsTotal` / `slotsTaken` (contador de escasez)
2. **Agrega tus fotos/video** en `assets/img/` (ver `assets/img/README.md`).
3. **Publica** (cualquiera de estas):
   - **Netlify (recomendado):** arrastra la carpeta a <https://app.netlify.com/drop>.
     Bonus: el formulario queda guardado como lead automáticamente (Netlify Forms).
   - **Vercel:** `vercel` en la carpeta, o conecta el repo.
   - **GitHub Pages:** Settings → Pages → Deploy from branch.
   - **Local:** abre `index.html`, o `python3 -m http.server`.

> El sitio funciona **sin backend**: WhatsApp es el canal principal de pedidos.
> El formulario compone el mensaje y lo abre en WhatsApp con todos los datos.

---

## 🧠 Estrategia (las 6 respuestas del brief)

### 1. Plataforma
**Sitio propio codificado** (esto). Por qué, frente a las opciones que diste:
- **Shopify** → es checkout/ecommerce, justo lo que NO quieres. Descartado.
- **Framer / Webflow** → buenos, pero suscripción mensual y estética de plantilla.
- **Sitio propio** → cero costo, único (no template), carga instantánea, control
  total del "drop". Si en el futuro quieres no-code para editar tú mismo, Framer
  es el mejor de los tres — pero para *validar demanda ya*, esto es superior.

### 2. Cómo se ve
Oscuro casi negro (`#0A0A0B`), blanco cálido, **monocromo con un solo guiño RGB**
usado con mucha mesura (eso = lujo). Tipografía: Syne (display), Inter (texto),
Space Mono (etiquetas tipo "spec sheet" — guiño teclado/setup). Grano de film,
viñetas, animaciones suaves de entrada, marquee, contador de cupos.

### 3. Copy por sección
Ya está escrito e integrado (ver tabla abajo). Tono: corto, declarativo,
sensorial. Vende identidad, no producto.

### 4. Cómo se siente exclusivo
- Escasez real y visible (cupos limitados, barra que se llena).
- "Esto no se compra en un carrito, se reserva en una conversación".
- Lenguaje de edición/drop ("DROP 001", "por agenda", "pieza única").
- Teaser misterioso del **DROP 002 (CAR RUGS)** censurado → construye hype.

### 5. Flujo para pedidos reales
Hero → manifiesto → producto → craft → escasez → **reserva**. El CTA no es
checkout: es WhatsApp directo + formulario que compone el mensaje. Fricción baja,
conversación personal alta = más conversión en validación temprana.

### 6. Cómo se ve como un drop oficial
Numeración (`DROP 001`), edición limitada, estética de lanzamiento, OG image
para que el link se vea premium al compartir en IG/TikTok, y el teaser del
siguiente drop.

---

## 🗂️ Estructura de secciones y copy

| # | Sección       | ID              | Mensaje central |
|---|---------------|-----------------|-----------------|
| 1 | Hero          | `#hero`         | "No es decoración. Es declaración." |
| 2 | Manifiesto    | `#manifiesto`   | Tu espacio = tu identidad (Kaizen) |
| 3 | Drop 001      | `#drop`         | Keyboard Rugs como pieza, no accesorio |
| 4 | Proceso       | `#proceso`      | Hecho a mano, punto por punto |
| 5 | Exclusividad  | `#exclusividad` | Producción limitada por agenda |
| 6 | Reserva (CTA) | `#reservar`     | WhatsApp + formulario premium |
| + | Teaser        | `#drop002`      | DROP 002 · CAR RUGS (misterio) |

---

## 📁 Archivos

```
index.html              · Toda la experiencia (6 secciones + teaser)
assets/css/styles.css   · Sistema visual premium
assets/js/main.js       · Interacciones + CONFIG (tus datos)
assets/img/             · Tus fotos/video (guía dentro)
netlify.toml            · Config de despliegue
```

## ✅ Próximos pasos sugeridos
- [ ] Poner WhatsApp e Instagram reales en `CONFIG`.
- [ ] Subir 1 video de hero + 5 fotos (producto + proceso).
- [ ] Crear `og-cover.jpg` (lo que se ve al compartir el link).
- [ ] Conectar dominio (ej. `houseofkaizen.co`).
- [ ] Lanzar el link en bio de IG/TikTok y medir reservas.
