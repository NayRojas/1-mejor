/* =========================================================
   1% Mejor · CONTENIDO SEMANAL
   Es el único archivo que necesitas editar cada semana.
   Lo usan la página principal y la versión clásica.

   - Agrega la semana nueva AL INICIO de la lista SEMANAS.
   - "ayuda" = en una frase, qué gana el equipo con el tema.
   - "tips" = máximo 5 claves.
   - "tech" es opcional: si no hay noticia, omite el bloque.
   - "en" es opcional: la misma semana en inglés.
   - "reto.lista" es opcional: un ejemplo tipo checklist que se muestra
     junto al reto, con "texto", "fecha" y "hecho" (true/false).
   - "publicar" es opcional: la fecha (AAAA-MM-DD) en que la semana aparece.
     Antes de esa fecha solo se ve con el enlace de vista previa (?previa).
   - "reto.accion" es opcional: "calendario" muestra un botón que abre el
     calendario de Teams; si falta, el botón crea un bloque de 15 min.
   - "color" es opcional: el color de la semana, uno para modo
     claro y otro para modo oscuro. Si falta, se usa el verde.
   ========================================================= */
const SEMANAS = [
  {
    numero: 47,
    fechas: "16 – 20 nov",
    publicar: "2026-11-16",                            // aparece sola ese día (hora de Lima)
    color: { claro: "#6d28d9", oscuro: "#a78bfa" },   // violeta: colaboración
    soft: {
      categoria: "Gestión de reuniones",
      titulo: "Haz que cada reunión cuente",
      ayuda: "Llegar preparado, presente y a tiempo, aunque tu agenda esté llena.",
      tips: [
        { titulo: "Entra sabiendo para qué", texto: "Define el propósito de la reunión y qué se espera de ti." },
        { titulo: "Prepara hoy lo de mañana", texto: "Mira tus sesiones de mañana y prepárate con antelación." },
        { titulo: "Que te vean", texto: "Prende tu cámara cuando puedas: la presencia importa y genera confianza." },
        { titulo: "Que tu voz se escuche", texto: "Habla fuerte y claro, y ve al punto." },
        { titulo: "Ninguna invitación sin respuesta", texto: "No negociable: acepta, rechaza o avisa si llegas tarde. Es el tiempo de otra persona y el tuyo." }
      ],
      reto: { titulo: "Agenda al día", accion: "calendario", texto: "Ve a Teams y revisa tu calendario: responde las invitaciones pendientes y confirma para qué es cada reunión de hoy y mañana.",
        lista: [
          { texto: "Reunión de equipo", fecha: "Aceptada", hecho: true },
          { texto: "Sesión de planificación", fecha: "Aceptada", hecho: true },
          { texto: "Revisión de avances", fecha: "Aviso: tarde", hecho: true },
          { texto: "Sesión con otra área", fecha: "Pendiente" }
        ] }
    },
    en: {
      fechas: "Nov 16 – 20",
      soft: {
        categoria: "Meeting management",
        titulo: "Make every meeting count",
        ayuda: "Show up prepared, present, and on time, even with a full calendar.",
        tips: [
          { titulo: "Walk in knowing why", texto: "Define the meeting's purpose and what's expected of you." },
          { titulo: "Prepare today for tomorrow", texto: "Check tomorrow's sessions and get ready ahead of time." },
          { titulo: "Be seen", texto: "Turn on your camera when you can: presence matters and builds trust." },
          { titulo: "Make your voice heard", texto: "Speak loud and clear, and get to the point." },
          { titulo: "No invite left unanswered", texto: "Non-negotiable: accept, decline, or say if you'll be late. It's someone else's time, and yours." }
        ],
        reto: { titulo: "Calendar up to date", accion: "calendario", texto: "Go to Teams and check your calendar: answer pending invites and confirm what each of today's and tomorrow's meetings is for.",
          lista: [
            { texto: "Team meeting", fecha: "Accepted", hecho: true },
            { texto: "Planning session", fecha: "Accepted", hecho: true },
            { texto: "Progress review", fecha: "Late, notified", hecho: true },
            { texto: "Session with another area", fecha: "Pending" }
          ] }
      }
    }
  },
  {
    numero: 46,
    fechas: "09 – 13 nov",
    color: { claro: "#b45309", oscuro: "#fbbf24" },   // ámbar: atención, decide
    soft: {
      categoria: "Gestión de prioridades",
      titulo: "Prioriza cuando todo parece urgente",
      ayuda: "Avanzar en lo que más importa aunque tengas varios frentes abiertos.",
      tips: [
        { titulo: "Separa lo urgente de lo importante", texto: "Antes de reaccionar, pregúntate si es importante o solo urgente. Lo urgente grita; lo importante, casi nunca." },
        { titulo: "Limita lo que tienes en curso", texto: "Máximo 2 o 3 tareas abiertas a la vez. Termina antes de empezar otra." },
        { titulo: "Cuida el costo de cambiar de tarea", texto: "Según Gerald Weinberg, sumar un segundo proyecto te quita cerca del 20% del tiempo. Agrupa reuniones y mensajes." },
        { titulo: "Avisa los choques a tiempo", texto: "Si dos urgencias chocan, no elijas en silencio: avisa a tu líder con las fechas y una propuesta de orden." },
        { titulo: "Haz visible un solo orden", texto: "Una lista ordenada que todos conozcan. Si entra algo nuevo, pregunta: ¿qué bajamos?" }
      ],
      fuente: "Matriz de Eisenhower, Kanban (límites WIP) y Gerald Weinberg",
      reto: { titulo: "Haz visibles tus frentes", texto: "Lista todos los frentes que tienes abiertos con su fecha de entrega y ordénalos para decidir dónde poner tu esfuerzo.",
        lista: [
          { texto: "Fix en producción", fecha: "Hoy", hecho: true },
          { texto: "Release v2.3", fecha: "12 nov" },
          { texto: "Pruebas de regresión", fecha: "14 nov" },
          { texto: "Documentar API", fecha: "20 nov" }
        ] }
    },
    en: {
      fechas: "Nov 09 – 13",
      soft: {
        categoria: "Priority management",
        titulo: "Prioritize when everything seems urgent",
        ayuda: "Move forward on what matters most, even with several fronts open.",
        tips: [
          { titulo: "Separate urgent from important", texto: "Before reacting, ask whether it's important or just urgent. Urgent shouts; important rarely does." },
          { titulo: "Limit your work in progress", texto: "2 or 3 open tasks at most. Finish before starting another." },
          { titulo: "Mind the cost of switching", texto: "According to Gerald Weinberg, adding a second project costs you about 20% of your time. Batch meetings and messages." },
          { titulo: "Flag conflicts early", texto: "If two urgent items clash, don't choose in silence: tell your lead the dates and a proposed order." },
          { titulo: "Make a single order visible", texto: "One ranked list everyone knows. If something new comes in, ask: what moves down?" }
        ],
        fuente: "Eisenhower Matrix, Kanban (WIP limits) and Gerald Weinberg",
        reto: { titulo: "Make your fronts visible", texto: "List every front you have open with its due date, and rank them to decide where to put your effort.",
          lista: [
            { texto: "Production fix", fecha: "Today", hecho: true },
            { texto: "Release v2.3", fecha: "Nov 12" },
            { texto: "Regression tests", fecha: "Nov 14" },
            { texto: "Document API", fecha: "Nov 20" }
          ] }
      }
    }
  },
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
      }
    }
  }
];


/* Publicación programada: una semana con "publicar" en el futuro no se muestra
   hasta ese día (hora de Lima). Para verla antes, abre la página con ?previa al final. */
(() => {
  const previa = /[?&]previa\b/.test(location.search);
  const hoy = new Date(Date.now() - 5 * 3600e3).toISOString().slice(0, 10);
  for (let i = SEMANAS.length - 1; i >= 0; i--)
    if (!previa && SEMANAS[i].publicar && SEMANAS[i].publicar > hoy) SEMANAS.splice(i, 1);
})();

/* Textos de la interfaz (no necesitas tocarlos) */
const T = {
  es: { tag: "un tema para crecer, cada semana", week: "Semana", now: "Tema de esta semana", past: "Tema de una semana anterior",
        helps: "Te ayuda a", pastNote: "Estás viendo una semana anterior. Usa la flecha › para volver a la actual.",
        keys: n => `${n} claves para aplicarlo`, read: "Lectura: 2 min", inspired: "Inspirado en:",
        reto: "Reto de la semana", accept: "Acepto el reto", accepted: "✓ Reto aceptado",
        quiz: "Repaso rápido · 1 pregunta", ok: "¡Correcto! ", no: "Casi. ",
        tech: "Además, en tech", why: "Por qué nos importa:",
        foot: "1% Mejor · un tema para crecer, cada semana, en 2 minutos · Creado por",
        aviso: "Usamos Microsoft Clarity para entender cómo se usa este espacio y mejorarlo.",
        nav: "Cambiar de semana", prev: "Semana anterior", next: "Semana siguiente", title: "1% Mejor · el tema de la semana" },
  en: { tag: "one topic to grow, every week", week: "Week", now: "This week's topic", past: "Topic from a past week",
        helps: "Helps you", pastNote: "You're viewing a past week. Use the › arrow to go back to the current one.",
        keys: n => `${n} keys to apply it`, read: "Read: 2 min", inspired: "Inspired by:",
        reto: "Challenge of the week", accept: "I accept the challenge", accepted: "✓ Challenge accepted",
        quiz: "Quick review · 1 question", ok: "Correct! ", no: "Not quite. ",
        tech: "Also in tech", why: "Why it matters to us:",
        foot: "1% Mejor · one topic to grow, every week, in 2 minutes · Created by",
        aviso: "We use Microsoft Clarity to understand how this space is used and improve it.",
        nav: "Change week", prev: "Previous week", next: "Next week", title: "1% Mejor · this week's topic" }
};
