/* ============================================================
   HOUSE OF KAIZEN — main.js
   ⚙️  EDITA AQUÍ: cambia tus datos en CONFIG y todo el sitio se actualiza.
   ============================================================ */
const CONFIG = {
  // Número de WhatsApp en formato internacional SIN "+", espacios ni guiones.
  // Ejemplo Colombia: 57 + 3001234567  ->  "573001234567"
  whatsappNumber: "573114305953",        // House of Kaizen (Colombia +57)

  // Mensaje para SEPARAR AGENDA (botón directo y formulario).
  whatsappMessage: "Hola HOUSE OF KAIZEN 👋 Quiero separar mi agenda para una KEYBOARD RUG del DROP 001.",
  // Mensaje para CANCELAR / gestionar un pedido existente.
  cancelMessage: "Hola HOUSE OF KAIZEN, necesito gestionar / cancelar mi pedido del DROP 001.",

  instagram: "https://instagram.com/houseofkaizen",  // @houseofkaizen

  // Precio base mostrado en toda la página (cámbialo en un solo lugar).
  priceBase: "$120.000 COP",

  // Cupos del drop (controla el contador de escasez de la sección Exclusividad)
  slotsTotal: 20,
  slotsTaken: 13,
};

/* ---------- Helpers ---------- */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const waLink = (msg) =>
  `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg || CONFIG.whatsappMessage)}`;

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Año dinámico ---------- */
  const y = $("#year"); if (y) y.textContent = new Date().getFullYear();

  /* ---------- Enlaces de WhatsApp / Instagram ---------- */
  const waBtn = $("#waBtn");      if (waBtn) waBtn.href = waLink();
  const waFoot = $("#waFooter");  if (waFoot) waFoot.href = waLink();
  const waCancel = $("#waCancel"); if (waCancel) waCancel.href = waLink(CONFIG.cancelMessage);
  const ig = $("#igFooter");      if (ig) ig.href = CONFIG.instagram;

  /* ---------- Precio base (un solo lugar → toda la página) ---------- */
  $$("[data-price]").forEach((el) => (el.textContent = CONFIG.priceBase));

  /* ---------- Contador de cupos ---------- */
  const left = Math.max(CONFIG.slotsTotal - CONFIG.slotsTaken, 0);
  const taken = $("#slotsTaken"); if (taken) taken.textContent = CONFIG.slotsTaken;
  const leftEl = $("#slotsLeft"); if (leftEl) leftEl.textContent = left;
  const total = $('[data-count]'); if (total) total.textContent = CONFIG.slotsTotal;

  /* ---------- Barra de progreso de scroll ---------- */
  const bar = $("#progressBar");
  const onScroll = () => {
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    if (bar) bar.style.width = pct + "%";
    // Nav sólido tras pasar el hero
    nav.classList.toggle("is-stuck", h.scrollTop > 40);
  };
  const nav = $("#nav");
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
  $$("[data-reveal]").forEach((el) => io.observe(el));

  /* ---------- Barra de cupos: se llena al entrar en vista ---------- */
  const slotsBar = $("#slotsBar");
  if (slotsBar) {
    const pct = Math.min((CONFIG.slotsTaken / CONFIG.slotsTotal) * 100, 100);
    const sObs = new IntersectionObserver((ents) => {
      ents.forEach((e) => { if (e.isIntersecting) { slotsBar.style.width = pct + "%"; sObs.disconnect(); } });
    }, { threshold: 0.4 });
    sObs.observe(slotsBar);
  }

  /* ---------- Spotlight que sigue el cursor en el hero (solo desktop) ---------- */
  const hero = $("#hero");
  const spot = $("#heroSpot");
  const fine = window.matchMedia("(pointer:fine)").matches;
  if (hero && spot && fine) {
    hero.addEventListener("pointermove", (e) => {
      const r = hero.getBoundingClientRect();
      spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
      spot.style.setProperty("--my", `${e.clientY - r.top}px`);
      spot.style.opacity = "1";
    });
    hero.addEventListener("pointerleave", () => (spot.style.opacity = "0"));
  }

  /* ---------- Parallax sutil del escenario del hero ---------- */
  const stage = $("[data-tilt]");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (stage && !reduce) {
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const sc = window.scrollY;
        stage.style.transform = `translateY(${sc * 0.18}px) scale(${1 + sc * 0.00008})`;
        stage.style.opacity = Math.max(1 - sc / 700, 0).toFixed(2);
        ticking = false;
      });
    }, { passive: true });
  }

  /* ---------- FAQ: un solo panel abierto a la vez ---------- */
  const faqItems = $$(".faq__item");
  faqItems.forEach((item) =>
    item.addEventListener("toggle", () => {
      if (item.open) faqItems.forEach((o) => { if (o !== item) o.open = false; });
    })
  );

  /* ---------- Formulario de reserva → abre WhatsApp con los datos ---------- */
  /* Funciona sin backend. Si despliegas en Netlify, los campos también
     quedan guardados como lead (data-netlify="true").                      */
  const form = $("#reserveForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = new FormData(form);
      const msg =
`✦ SEPARAR AGENDA · DROP 001 — KEYBOARD RUGS
Nombre: ${d.get("nombre") || "-"}
Contacto: ${d.get("contacto") || "-"}
Tamaño: ${d.get("tamano") || "-"}
Ubicación: ${d.get("ubicacion") || "-"}
Idea: ${d.get("idea") || "-"}`;
      window.open(waLink(msg), "_blank", "noopener");
    });
  }

  /* ---------- Waitlist Drop 002 ---------- */
  const wl = $("#waitlistForm");
  if (wl) {
    wl.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = $("input", wl).value;
      window.open(waLink(`Quiero entrar a la lista del DROP 002 (CAR RUGS). Mi email: ${email}`), "_blank", "noopener");
      wl.reset();
      const btn = $(".btn", wl); if (btn) btn.textContent = "✓ En la lista";
    });
  }
});
