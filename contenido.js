/* =========================================================
   1% Mejor · CONTENIDO SEMANAL
   Es el único archivo que necesitas editar cada semana.
   Lo usan la página principal y la versión clásica.

   - Agrega la semana nueva AL INICIO de la lista SEMANAS.
   - "ayuda" = en una frase, qué gana el equipo con el tema.
   - "tips" = máximo 5 claves.
   - "tech" es opcional: si no hay noticia, omite el bloque.
   - "en" es opcional: la misma semana en inglés.
   ========================================================= */
const SEMANAS = [
  {
    numero: 45,
    fechas: "02 – 06 nov",
    soft: {
      categoria: "Comunicación",
      titulo: "Presenta decisiones técnicas que negocio entienda",
      ayuda: "Que aprueben tus propuestas sin necesitar tres reuniones.",
      tips: [
        { titulo: "Ajusta el mensaje a tu audiencia", texto: "Negocio quiere impacto y riesgo; tu equipo, el cómo. No es la misma presentación." },
        { titulo: "Traduce lo técnico a impacto", texto: "En vez de «refactorizar el servicio», di «reducir las caídas en pagos»." },
        { titulo: "Muestra opciones, no solo tu solución", texto: "2 o 3 alternativas con su costo y riesgo, y cuál recomiendas." },
        { titulo: "Cierra con un pedido claro", texto: "Qué decisión, presupuesto o apoyo necesitas, y para cuándo." },
        { titulo: "Prueba con alguien de negocio", texto: "Si no lo entiende en 2 minutos, simplifica." }
      ],
      fuente: "The Pyramid Principle, de Barbara Minto (McKinsey)",
      reto: { titulo: "Tu pedido en 3 partes", texto: "Antes de tu próximo refinamiento o comité, escribe tu pedido así: problema, impacto y qué necesitas." }
    },
    en: {
      fechas: "Nov 02 – 06",
      soft: {
        categoria: "Communication",
        titulo: "Present technical decisions the business understands",
        ayuda: "Get your proposals approved without needing three meetings.",
        tips: [
          { titulo: "Tailor the message to your audience", texto: "The business wants impact and risk; your team wants the how. It's not the same presentation." },
          { titulo: "Translate tech into impact", texto: "Instead of “refactor the service,” say “reduce payment outages.”" },
          { titulo: "Show options, not just your solution", texto: "2 or 3 alternatives with their cost and risk, and the one you recommend." },
          { titulo: "Close with a clear ask", texto: "What decision, budget, or support you need, and by when." },
          { titulo: "Test it with someone from the business", texto: "If they don't get it in 2 minutes, simplify." }
        ],
        fuente: "The Pyramid Principle, by Barbara Minto (McKinsey)",
        reto: { titulo: "Your ask in 3 parts", texto: "Before your next refinement or committee, write your ask as: problem, impact, and what you need." }
      }
    }
  },
  {
    numero: 44,
    fechas: "26 – 30 oct",
    soft: {
      categoria: "Gestión del tiempo",
      titulo: "Protege tu tiempo de foco",
      ayuda: "Avanzar en lo importante sin vivir apagando incendios.",
      tips: [
        { titulo: "Bloquea tu foco", texto: "Reserva 2 bloques de 90 min en tu semana." },
        { titulo: "Planifica tu semana", texto: "Bloquea 1 hora el lunes para organizar tu semana." },
        { titulo: "Define tu «una cosa»", texto: "¿Qué tarea haría de hoy un buen día?" },
        { titulo: "Cierra en 5 minutos", texto: "Anota dónde quedaste y qué sigue." }
      ],
      fuente: "Deep Work, de Cal Newport",
      reto: { titulo: "Tus 3 prioridades", texto: "El lunes, escribe las 3 cosas que harían de tu semana un éxito." }
    },
    tech: {
      etiqueta: "Ciberseguridad",
      titulo: "Criptografía post-cuántica",
      resumen: "Cifrado que resiste ataques de computadoras cuánticas. Top 10 tecnologías emergentes 2026 del Foro Económico Mundial.",
      porQue: "Lo que se roba hoy podría descifrarse mañana.",
      link: { texto: "Ver estándares de NIST", url: "https://csrc.nist.gov/projects/post-quantum-cryptography" }
    },
    en: {
      fechas: "Oct 26 – 30",
      soft: {
        categoria: "Time management",
        titulo: "Protect your focus time",
        ayuda: "Move forward on what matters without constantly putting out fires.",
        tips: [
          { titulo: "Block your focus", texto: "Reserve two 90-minute blocks in your week." },
          { titulo: "Plan your week", texto: "Block 1 hour on Monday to organize your week." },
          { titulo: "Define your “one thing”", texto: "What task would make today a good day?" },
          { titulo: "Close in 5 minutes", texto: "Write down where you left off and what's next." }
        ],
        fuente: "Deep Work, by Cal Newport",
        reto: { titulo: "Your top 3 priorities", texto: "On Monday, write down the 3 things that would make your week a success." }
      },
      tech: {
        etiqueta: "Cybersecurity",
        titulo: "Post-quantum cryptography",
        resumen: "Encryption that resists attacks from quantum computers. One of the World Economic Forum's Top 10 Emerging Technologies of 2026.",
        porQue: "What's stolen today could be decrypted tomorrow.",
        link: { texto: "See NIST standards", url: "https://csrc.nist.gov/projects/post-quantum-cryptography" }
      }
    }
  }
];

/* Textos de la interfaz (no necesitas tocarlos) */
const T = {
  es: { tag: "un tema para crecer, cada semana", week: "Semana", now: "Tema de esta semana", past: "Tema de una semana anterior",
        helps: "Te ayuda a", pastNote: "Estás viendo una semana anterior. Usa la flecha › para volver a la actual.",
        keys: n => `${n} claves para aplicarlo`, read: "Lectura: 2 min", inspired: "Inspirado en:",
        reto: "Reto de la semana", accept: "Acepto el reto", accepted: "✓ Reto aceptado",
        quiz: "Repaso rápido · 1 pregunta", ok: "¡Correcto! ", no: "Casi. ",
        tech: "Además, en tech", why: "Por qué nos importa:",
        foot: "1% Mejor · un tema para crecer, cada semana, en 2 minutos · Creado por",
        nav: "Cambiar de semana", prev: "Semana anterior", next: "Semana siguiente", title: "1% Mejor · el tema de la semana" },
  en: { tag: "one topic to grow, every week", week: "Week", now: "This week's topic", past: "Topic from a past week",
        helps: "Helps you", pastNote: "You're viewing a past week. Use the › arrow to go back to the current one.",
        keys: n => `${n} keys to apply it`, read: "Read: 2 min", inspired: "Inspired by:",
        reto: "Challenge of the week", accept: "I accept the challenge", accepted: "✓ Challenge accepted",
        quiz: "Quick review · 1 question", ok: "Correct! ", no: "Not quite. ",
        tech: "Also in tech", why: "Why it matters to us:",
        foot: "1% Mejor · one topic to grow, every week, in 2 minutes · Created by",
        nav: "Change week", prev: "Previous week", next: "Next week", title: "1% Mejor · this week's topic" }
};
