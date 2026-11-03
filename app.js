// =========================================================================
// POC ANTIGRAVITY · AI SUI MESSAGGI (FASE 2) — 1:1 FIGMA INTERACTIVE ENGINE
// =========================================================================

const ICONS = {
  calendar: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  zap: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  zap16: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  users: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  smile: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
  msgSquare: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  paperclip: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,
  globe: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  chevronUp: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`,
  chevronDown: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  chevronDown16: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  copy: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  trash: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>`,
  play: `<svg width="11" height="11" viewBox="0 0 24 24" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  pause: `<svg width="11" height="11" viewBox="0 0 24 24" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`,
  mic: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>`,
  mic14: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>`,
  sparkles: `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
  sparkles16: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
  clock: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  bookOpen: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  pencil: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>`,
  check: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  thumbsUp: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>`,
  thumbsDown: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg>`,
  fileText: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>`,
  moon: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  mapPin: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  alertTriangle: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  languages: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>`,
  send: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2E54E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  sendWhite: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  arrowRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  bookmarkPlus: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/><line x1="12" x2="12" y1="7" y2="13"/><line x1="15" x2="9" y1="10" y2="10"/></svg>`,
  scanText: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 8h8"/><path d="M7 12h10"/><path d="M7 16h6"/></svg>`,
  info: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  user: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  user10: `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  spinner16: `<svg class="spin-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>`,
  sendHoriz: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 3 3 9-3 9 19-9Z"/><path d="M6 12h16"/></svg>`,
  expandDiag: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>`,
  moreHoriz: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`,
  smile16: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
  paperclip16: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,
  docTemplate14: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  mic16: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>`
};

// State
const state = {
  composerExpanded: true, // true = modalità espansa, false = modalità ridotta a pillola
  bcTemplateOpen: false,
  bcTagsOpen: false,
  bcToneOpen: false,
  bcMoreOpen: false,
  draftOpen: false,      // false = vuoto iniziale, true = bozza attiva
  promptMode: false,     // true = vista "Scrivi prompt / Istruzione" attiva
  promptGenerating: false,
  promptText: '',
  composerMode: 'reply', // 'reply' | 'note'
  noteType: 'Telefonata',
  noteAuthor: 'Sara M. (Reception)',
  noteDraftText: 'Concordato al telefono con l\'ospite il check-in anticipato alle 13:30 senza supplemento.',
  mobileTab: 'chat',     // 'inbox', 'chat', 'ai'
  selectedConvId: 'adam',
  quickFilter: 'all',    // 'all', 'unread', 'Airbnb', 'Booking'
  autoSend: false,
  saveToKb: false,
  autoCancelScheduled: true,
  schedulePopoverOpen: false,
  scheduledTime: '10:00',
  schedHour: '10',
  schedMin: '00',
  schedDay: 2,
  schedMonthLabel: 'Novembre 2026',
  schedPreset: null,
  outboundChannel: 'WhatsApp',
  playingAudio: false,
  hostTradOpen: false,
  guestTradOpen: true,
  schedTradOpen: false,
  acc_consegne: true,
  acc_mp: false,
  acc_tags: false,
  acc_modifica: true,
  activeVariantIdx: 0,
  activeTone: 'Cordiale',
  attachedFile: null,
  manualTags: ['Upsell'],
  drafts: {
    adam: `Ciao Adam! Ti confermo che il posto auto coperto n. 14 per la tua Suite 14 è disponibile nel garage interno (15€/notte). Puoi accedere con il codice Nuki 000000. Fammi sapere se desideri riservarlo!`,
    olga: `Ciao Olga! Grazie per la conferma, restiamo a disposizione per qualsiasi necessità durante il soggiorno nella Suite 14.`,
    maria: `Ciao Maria Camila! La password del Wi-Fi veloce di Casa Aurora è "AuroraGuest2026" e la colazione è servita dalle 07:30 alle 10:00. Buon soggiorno!`,
    cliff: `Ciao Cliff! Grazie di cuore per essere stato nostro ospite. Abbiamo pubblicato una recensione a 5 stelle per te su Airbnb, speriamo di rivederti presto a Casa Aurora!`,
    florian: `Ciao Florian, grazie ancora per aver lasciato l'appartamento in condizioni impeccabili!`
  },
  variants: [
    {
      tone: 'Cordiale',
      text: `Ciao Adam! Ti confermo che il posto auto coperto n. 14 per la tua Suite 14 è disponibile nel garage interno (15€/notte). Puoi accedere con il codice Nuki 000000. Fammi sapere se desideri riservarlo!`
    },
    {
      tone: 'Formale',
      text: `Gentile Adam, Le confermiamo la disponibilità del posto auto coperto n. 14 riservato alla Suite 14 al costo di 15€ a notte, accessibile tramite il Suo codice Nuki 000000. Restiamo in attesa di Sua conferma.`
    },
    {
      tone: 'Più breve',
      text: `Ciao Adam! Sì, il posto auto coperto #14 è libero a 15€/notte (accesso con codice Nuki 000000). Te lo riservo?`
    }
  ]
};

// Exact 5 Conversations from Figma (312:6805) enriched with PoC PMS & Channel Data
const CONVERSATIONS = [
  {
    id: 'adam',
    name: 'Adam Nowak',
    date: '28/10/26 11:30',
    channel: 'Airbnb',
    channelClass: 'ch-airbnb',
    linked: false,
    dateBadge: '06/10 - 11/10 · Suite 14',
    checkin: true,
    dagestire: true,
    positivo: false,
    priorityBadge: null,
    reviewBadge: null,
    preview: '↙ Cześć! Dziękuję za powitanie. Mam pytanie o parking...',
    langCode: 'PL',
    langName: 'Polacco',
    msgCount: 12,
    headerSentiment: 'Positivo',
    headerPriority: null,
    stay: {
      room: 'Suite 14',
      bookingCode: '#DEMO-1048',
      dates: '06/10–11/10 (5 notti)',
      guests: '2 Ospiti (Adulti)',
      mealPlan: 'BB (Colazione inclusa)',
      phone: '+48 602 918 441',
      email: 'adam.nowak@example.pl',
      pmsVerified: true
    },
    systemEvent: 'Prenotazione #DEMO-1048 sincronizzata da Airbnb · Codice smart lock Nuki (000000) generato e inviato · 11:05',
    systemEvent2: 'Lingua Polacco (PL) rilevata automaticamente · 11:20',
    internalNotes: [
      {
        author: 'Sara M. (Reception)',
        channelType: 'Telefonata',
        time: '11:15',
        text: 'Concordato a voce con l\'ospite il posto auto coperto #14 a 15€/notte, attende conferma scritta in chat.'
      }
    ],
    handover: {
      motivo: 'Richiesta tariffa posto auto interno e modalità di accesso.',
      situazione: 'Suite 14 (Check-in) · Da gestire · Positivo',
      fatto: 'Inviato codice Nuki · Promesso: Verifica posto #14',
      azione: 'Conferma posto #14 (15€/notte)',
      fonte: 'Regolamento Parcheggio (15€)'
    }
  },
  {
    id: 'olga',
    name: '↳ Olga Nowak (Stessa pren.)',
    date: '11:18',
    channel: 'WhatsApp',
    channelClass: 'ch-whatsapp',
    linked: true,
    linkedCode: 'Collegata a DEMO-1048',
    preview: "↗ Grazie, abbiamo ricevuto le istruzioni per l'accesso.",
    langCode: 'IT',
    langName: 'Italiano',
    msgCount: 4,
    headerSentiment: 'Positivo',
    headerPriority: 'Priorità Bassa',
    stay: {
      room: 'Suite 14',
      bookingCode: '#DEMO-1048 (Co-ospite)',
      dates: '06/10–11/10 (5 notti)',
      guests: '2 Ospiti · Collegata ad Adam Nowak',
      mealPlan: 'BB (Colazione inclusa)',
      phone: '+48 602 918 990',
      email: 'olga.nowak@example.pl',
      pmsVerified: true
    },
    systemEvent: 'Contatto co-ospite associato automaticamente alla prenotazione #DEMO-1048 · 11:10',
    internalNotes: [
      {
        author: 'Marco T. (Reception)',
        channelType: 'Accordo di persona',
        time: '11:16',
        text: 'Ospite passata in reception per ritirare mappa cartacea del centro storico.'
      }
    ],
    handover: {
      motivo: 'Conferma ricezione codice di accesso Nuki da parte del co-ospite.',
      situazione: 'Suite 14 (Co-ospite) · Gestita · Positivo',
      fatto: 'Inviata guida check-in PDF · Confermato ingresso',
      azione: 'Invia saluto di cortesia',
      fonte: 'Accoglienza Co-ospiti'
    }
  },
  {
    id: 'maria',
    name: 'Maria Camila Villamizar',
    date: '28/10/26 10:15',
    channel: 'Booking',
    channelClass: 'ch-booking',
    linked: false,
    dateBadge: '29/10 - 02/11',
    checkin: true,
    dagestire: false,
    positivo: true,
    priorityBadge: null,
    reviewBadge: null,
    preview: '↗ Si, claro! Muchas gracias por la información.',
    langCode: 'ES',
    langName: 'Spagnolo',
    msgCount: 8,
    headerSentiment: 'Positivo',
    headerPriority: 'Priorità Bassa',
    stay: {
      room: 'Junior Suite 08',
      bookingCode: '#BKG-8821',
      dates: '29/10–02/11 (4 notti)',
      guests: '2 Ospiti',
      mealPlan: 'BB (Colazione inclusa)',
      phone: '+34 611 492 019',
      email: 'm.villamizar@example.es',
      pmsVerified: true
    },
    systemEvent: 'Prenotazione #BKG-8821 sincronizzata da Booking.com via Zucchetti Hub · 09:50',
    internalNotes: [
      {
        author: 'Sara M. (Reception)',
        channelType: 'Telefonata',
        time: '10:05',
        text: 'Chiamata pre-arrivo: confermato arrivo previsto intorno alle 16:30.'
      }
    ],
    handover: {
      motivo: 'Conferma orario di arrivo e richiesta credenziali Wi-Fi.',
      situazione: 'Junior Suite 08 (Pre-arrivo) · Gestita · Positivo',
      fatto: 'Inviate indicazioni parcheggio e orari colazione',
      azione: 'Invia credenziali Wi-Fi struttura',
      fonte: 'Scheda Wi-Fi & Colazione'
    }
  },
  {
    id: 'cliff',
    name: 'Cliff Vanhee',
    date: '28/10/26 09:40',
    channel: 'Airbnb',
    channelClass: 'ch-airbnb',
    linked: false,
    dateBadge: '25/10 - 28/10',
    checkin: false,
    dagestire: true,
    positivo: false,
    priorityBadge: null,
    reviewBadge: '★ Recensione AI',
    preview: "↗ Hello! I'm glad the stay went well. Thank you for th...",
    langCode: 'EN',
    langName: 'Inglese',
    msgCount: 9,
    headerSentiment: 'Positivo',
    headerPriority: 'Check-out',
    stay: {
      room: 'Deluxe 04',
      bookingCode: '#AIR-7740',
      dates: '25/10–28/10 (3 notti)',
      guests: '1 Ospite',
      mealPlan: 'RO (Solo pernottamento)',
      phone: '+32 470 112 889',
      email: 'cliff.vanhee@example.be',
      pmsVerified: true
    },
    systemEvent: 'Check-out completato per #AIR-7740 · Bozza Recensione Ospite AI generata · 09:42',
    internalNotes: [
      {
        author: 'Marco T. (Staff)',
        channelType: 'Accordo di persona',
        time: '09:35',
        text: 'Riconsegna chiavi di persona al check-out: appartamento Deluxe 04 in perfetto ordine, nessun addebito extra.'
      }
    ],
    guestReview: {
      rating: '5.0 ★ (Pulizia 5 · Comunicazione 5 · Regole 5)',
      textIt: 'Cliff è stato un ospite esemplare: puntuale al check-in, molto cordiale nelle comunicazioni e ha lasciato la Deluxe 04 in condizioni impeccabili. Consigliatissimo!',
      textEn: 'Cliff was an exemplary guest: punctual at check-in, very polite in all communications, and left Deluxe 04 in spotless condition. Highly recommended!',
      published: false
    },
    handover: {
      motivo: 'Check-out completato con feedback entusiasta dell\'ospite.',
      situazione: 'Deluxe 04 (Check-out) · Da gestire · Recensione AI pronta',
      fatto: 'Verifica camera completata · Generata recensione ospite 5★',
      azione: 'Pubblica recensione Airbnb e saluto finale',
      fonte: 'Procedura Post Check-out'
    }
  },
  {
    id: 'florian',
    name: 'Florian Griebling',
    date: '26/10/26 04:55',
    channel: 'Airbnb',
    channelClass: 'ch-airbnb',
    linked: false,
    dateBadge: '22/10 - 25/10',
    checkin: false,
    dagestire: false,
    positivo: false,
    priorityBadge: null,
    reviewBadge: null,
    preview: '↗ Hi Florian, I wanted to thank you for leaving the...',
    langCode: 'EN',
    langName: 'Inglese',
    msgCount: 6,
    headerSentiment: 'Positivo',
    headerPriority: 'Archiviata',
    stay: {
      room: 'Suite 12',
      bookingCode: '#AIR-6912',
      dates: '22/10–25/10 (3 notti)',
      guests: '2 Ospiti',
      mealPlan: 'BB (Colazione inclusa)',
      phone: '+49 151 2345 6789',
      email: 'f.griebling@example.de',
      pmsVerified: true
    },
    systemEvent: 'Conversazione archiviata automaticamente e recensione pubblicata su Airbnb · 26/10',
    internalNotes: [],
    handover: {
      motivo: 'Conversazione post-soggiorno conclusa e archiviata.',
      situazione: 'Suite 12 (Archiviata) · Tutto gestito',
      fatto: 'Saluto finale e recensione inviati',
      azione: 'Nessuna azione richiesta',
      fonte: 'Storico Soggiorni'
    }
  }
];

function renderQuickFilters() {
  const filters = [
    { id: 'all', label: 'Tutti (14)', cls: '' },
    { id: 'unread', label: 'Da leggere (2)', cls: 'unread' },
    { id: 'Airbnb', label: 'Airbnb', cls: 'airbnb' },
    { id: 'Booking', label: 'Booking', cls: 'booking' }
  ];
  const html = filters.map(f => `
    <button class="chip-filtro ${f.cls} ${state.quickFilter === f.id ? 'active' : ''}" onclick="setQuickFilter('${f.id}')">
      ${f.label}
    </button>
  `).join('');

  const deskEl = document.getElementById('quickFiltersDesktop');
  const mobEl = document.getElementById('quickFiltersMobile');
  if (deskEl) deskEl.innerHTML = html;
  if (mobEl) mobEl.innerHTML = html;
}

function setQuickFilter(filterId) {
  state.quickFilter = filterId;
  renderQuickFilters();
  renderConversationLists();
}

// Render Conversation List (1:1 with Figma 312:6805)
function renderConversationLists() {
  const query = (document.getElementById('searchInputDesktop')?.value || '').toLowerCase().trim();
  const filtered = CONVERSATIONS.filter(c => {
    return !query || c.name.toLowerCase().includes(query) || c.preview.toLowerCase().includes(query) || (c.dateBadge && c.dateBadge.toLowerCase().includes(query));
  });

  const formatPreviewArrow = (text) => {
    if (text.startsWith('↙')) {
      return `<span class="prev-arrow in">↙</span> ${text.replace(/^↙\s*/, '')}`;
    }
    if (text.startsWith('↗')) {
      return `<span class="prev-arrow out">↗</span> ${text.replace(/^↗\s*/, '')}`;
    }
    return text;
  };

  const html = filtered.map(c => {
    const isSel = c.id === state.selectedConvId;
    const showBozzaBadge = (c.id === state.selectedConvId && state.draftOpen);
    const rawDraftText = (state.drafts[c.id] || c.preview.replace(/^[↗↙]\s*/, '')).replace(/\s+/g, ' ').trim();
    const prevHtml = showBozzaBadge
      ? `<span class="bozza-prefix">Bozza:</span> <span class="bozza-preview-text">${rawDraftText}</span>`
      : formatPreviewArrow(c.preview);

    if (c.linked) {
      return `
        <div class="conv-item linked ${isSel ? 'selected' : ''}" onclick="selectConversation('${c.id}')">
          ${isSel ? '<div class="barra-accento"></div>' : ''}
          <div class="conv-body" style="padding:10px 14px 10px 26px;gap:4px;">
            <div class="conv-top">
              <span class="conv-nome">${c.name}</span>
              <span class="conv-data">${c.date}</span>
            </div>
            <div class="conv-badges">
              <span class="pill date">${ICONS.users} ${c.linkedCode}</span>
            </div>
            <div class="conv-prev">${prevHtml}</div>
          </div>
        </div>
      `;
    }

    return `
      <div class="conv-item ${isSel ? 'selected' : ''} ${c.dagestire ? 'da-gestire' : ''}" onclick="selectConversation('${c.id}')">
        ${c.dagestire ? '<div class="barra-accento gialla"></div>' : (isSel ? '<div class="barra-accento"></div>' : '')}
        <div class="conv-body">
          <div class="conv-top">
            <span class="conv-nome">${c.name}</span>
            <span class="conv-data">${c.date}</span>
          </div>
          <div class="conv-badges">
            ${c.dateBadge ? `<span class="pill date">${ICONS.calendar} ${c.dateBadge}</span>` : ''}
            ${c.checkin ? `<span class="pill checkin">${ICONS.calendar} In corso</span>` : ''}
            ${c.positivo ? `<span class="pill checkin">${ICONS.smile} Positivo</span>` : ''}
          </div>
          <div class="conv-prev">${prevHtml}</div>
          ${c.dagestire ? `<div class="conv-attesa-row"><span class="pill-attesa-risposta">DA GESTIRE</span></div>` : ''}
        </div>
      </div>
    `;
  }).join('');

  const deskEl = document.getElementById('desktopConvList');
  const mobEl = document.getElementById('mobileConvList');
  if (deskEl) deskEl.innerHTML = html;
  if (mobEl) mobEl.innerHTML = html;
}

// Render Thread Header & Messages (1:1 with Figma 312:6932)
function renderThread() {
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];

  const headerLeft = document.getElementById('desktopThreadHeaderLeft');
  if (headerLeft) {
    headerLeft.innerHTML = `
      <span class="titolo-messaggi">Messaggi</span>
      <span class="contatore-msg">${ICONS.msgSquare} ${conv.msgCount}</span>
      <span class="pill-header sent">${ICONS.smile} ${conv.headerSentiment}</span>
    `;
  }

  const langCodeEl = document.getElementById('desktopLangCode');
  const langNameEl = document.getElementById('desktopLangName');
  if (langCodeEl) langCodeEl.textContent = conv.langCode;
  if (langNameEl) langNameEl.textContent = conv.langName;

  const mobName = document.getElementById('mobChatGuestName');
  const mobSub = document.getElementById('mobChatSubInfo');
  const mobLang = document.getElementById('mobLangBadgeLabel');
  const mobAISub = document.getElementById('mobAISubtitle');
  if (mobName) mobName.textContent = conv.name.replace('↳ ', '');
  if (mobSub) mobSub.textContent = `${conv.stay.room} · ${conv.channel} · ${conv.langCode} ${conv.langName}`;
  if (mobLang) mobLang.textContent = `${conv.langCode} ${conv.langName}`;
  if (mobAISub) mobAISub.textContent = `${conv.name.replace('↳ ', '')} · ${conv.stay.room}`;

  // Waveform bars (16 bars: 8 #2E54E8, 8 #CBD5E1, exact heights from Figma 312:6984)
  const barHeights = [8, 14, 18, 10, 16, 20, 12, 15, 9, 17, 13, 7, 14, 11, 8, 12];
  const barsHtml = barHeights.map((h, i) => {
    const color = (state.playingAudio || i < 8) ? '#2E54E8' : '#CBD5E1';
    return `<div class="w-bar" style="height:${h}px;background:${color};"></div>`;
  }).join('');

  const manualTagsHtml = state.manualTags.map((t, idx) =>
    `<span class="pill-msg tag-man" onclick="removeManualTag(${idx})" title="Rimuovi tag manuale">${ICONS.user10} <span>${t}</span> <span>×</span></span>`
  ).join('');

  const internalNotesHtml = (conv.internalNotes || []).map(n => `
    <div class="pill-nota-compatta" onclick="openManualNoteModal()" style="cursor:pointer;" title="Nota manuale registrata nella conversazione (clicca per aggiungerne un'altra)">
      <div class="pill-nota-header">
        <span class="pill-nota-badge">${ICONS.fileText} <span><strong>${n.author}</strong> · ${n.channelType || 'Telefonata'}</span></span>
        <span class="pill-nota-time">${n.time}</span>
      </div>
      <div class="pill-nota-body">${n.text}</div>
    </div>
  `).join('');

  const formatSysEvent = (txt) => txt
    .replace(/(#[A-Z0-9-]+|Nuki \([0-9]+\)|"[^"]+"|Polacco \(PL\)|Priorità [A-Za-z]+|Recensione Ospite AI)/g, '<strong>$1</strong>');

  const sysEvent1Html = conv.systemEvent ? `
    <div class="evento-sistema-row" title="Azione eseguita automaticamente dal sistema (distinta dai messaggi)">
      <span><strong>Sistema</strong> · ${formatSysEvent(conv.systemEvent)}</span>
    </div>
  ` : '';

  const sysEvent2Html = conv.systemEvent2 ? `
    <div class="evento-sistema-row" title="Azione eseguita automaticamente dal sistema (distinta dai messaggi)">
      <span><strong>Sistema</strong> · ${formatSysEvent(conv.systemEvent2)}</span>
    </div>
  ` : '';

  const needsTranslation = conv.langCode !== 'IT';

  const messagesHtml = `
    ${sysEvent1Html}

    <!-- Blocco Msg 1 Host (312:7429) -->
    <div class="blocco-msg host">
      <div class="meta-row">
        <span class="meta-tu">TU</span>
        <span class="meta-ora">· 11:05 ·</span>
        <span class="meta-ch">${conv.channel.toUpperCase()}</span>
      </div>

      <div class="bolla-blu-host">
        Ciao ${conv.name.replace('↳ ', '').split(' ')[0]}, benvenuto a Casa Aurora! Ecco le informazioni utili per il tuo appartamento (${conv.stay.room}): all'ingresso trovi il tastierino numerico, il tuo codice Nuki è 000000. Ti auguriamo un piacevole soggiorno!
      </div>

      <!-- Card Allegato Host (315:7879) -->
      <div class="card-allegato-host" onclick="showToast('Apertura allegato PDF check-in')" style="cursor:pointer;">
        <div class="icona-file-box">${ICONS.paperclip}</div>
        <div class="info-allegato">
          <span class="nome-file">Guida_Checkin_${conv.stay.room.replace(/\s+/g, '')}.pdf</span>
          <span class="meta-file">PDF · 420 KB</span>
        </div>
      </div>

      ${needsTranslation ? `
      <!-- Card Traduzione Richiudibile Host (312:7436) -->
      <div class="card-trad-host">
        <div class="header-trad" onclick="toggleHostTrad()">
          <span style="color:#2E54E8;display:inline-flex;">${ICONS.globe}</span>
          <span class="lbl-trad-host">TRADUZIONE INVIATA (${conv.langName.toUpperCase()})</span>
          <button class="toggle-trad-host" aria-label="Espandi o comprimi traduzione">
            ${state.hostTradOpen ? ICONS.chevronUp : ICONS.chevronDown}
          </button>
        </div>
        ${state.hostTradOpen ? `
          <div class="testo-trad-host">
            Cześć Adam, witaj w Casa Aurora! Oto przydatne informacje o apartamencie (Suite 14): przy wejściu znajduje się klawiatura numeryczna, kod Nuki to 000000. Życzymy miłego pobytu!
          </div>
        ` : ''}
      </div>
      ` : ''}

      <div class="msg-bottom-actions">
        <button class="btn-msg-action copy" onclick="copyThreadMessage('host')" title="Copia messaggio" aria-label="Copia messaggio">
          ${ICONS.copy}
        </button>
        <button class="btn-msg-action delete" onclick="deleteThreadMessage('host')" title="Elimina messaggio" aria-label="Elimina messaggio">
          ${ICONS.trash}
        </button>
      </div>
    </div>

    ${internalNotesHtml}

    <!-- Blocco Msg 2 Ospite (312:7447) -->
    <div class="blocco-msg guest">
      <div class="meta-row">
        <span class="meta-ospite">OSPITE · 11:20</span>
      </div>

      <!-- Bolla Bianca Ospite (312:7451) -->
      <div class="bolla-bianca-ospite">
        <div class="testo-ospite-orig">
          ${conv.id === 'adam'
            ? 'Cześć! Dziękuję za powitanie. Kod działa poprawnie. Mam jeszcze pytanie o parking: czy jest miejsce zarezerwowane dla gości i jaka jest cena za dobę?'
            : conv.preview.replace(/^[↗↙]\s*/, '')}
        </div>
      </div>

      ${needsTranslation ? `
      <!-- Card Traduzione Richiudibile Ospite (312:7453) -->
      <div class="card-trad-ospite">
        <div class="header-trad" onclick="toggleGuestTrad()">
          <span style="color:#B45309;display:inline-flex;">${ICONS.globe}</span>
          <span class="lbl-trad-ospite">TRADUZIONE IN ITALIANO</span>
          <button class="toggle-trad-ospite" aria-label="Espandi o comprimi traduzione">
            ${state.guestTradOpen ? ICONS.chevronUp : ICONS.chevronDown}
          </button>
        </div>
        ${state.guestTradOpen ? `
          <div class="testo-trad-ospite">
            ${conv.id === 'adam'
              ? "Ciao! Grazie per il benvenuto. Il codice funziona correttamente. Ho ancora una domanda sul parcheggio: c'è un posto riservato agli ospiti e qual è il prezzo a notte?"
              : "Ciao! Grazie mille per le informazioni, il soggiorno procede benissimo!"}
          </div>
        ` : ''}
      </div>
      ` : ''}

      <div class="msg-bottom-actions">
        <button class="btn-msg-action copy" onclick="copyThreadMessage('guest')" title="Copia messaggio" aria-label="Copia messaggio">
          ${ICONS.copy}
        </button>
        <button class="btn-msg-action delete" onclick="deleteThreadMessage('guest')" title="Elimina messaggio" aria-label="Elimina messaggio">
          ${ICONS.trash}
        </button>
      </div>
    </div>

    ${sysEvent2Html}

    <!-- Blocco Msg 3 Programmato (312:7464) -->
    <div class="blocco-msg host">
      <div class="meta-row">
        <span style="color:#D97706;display:inline-flex;">${ICONS.clock}</span>
        <span style="font-size:11px;font-weight:600;color:#D97706;">PROGRAMMATO OGGI 11:30 · ${conv.channel.toUpperCase()}</span>
        <span style="font-size:11px;font-weight:600;color:#2E54E8;cursor:pointer;" onclick="openDraftEditor();showToast('Apertura modifica messaggio programmato')">Modifica</span>
        <span style="font-size:11px;font-weight:600;color:#DC2626;cursor:pointer;" onclick="showToast('Invio programmato delle 11:30 messo in pausa')">Annulla</span>
      </div>

      <div class="bolla-programmata">
        Ciao ${conv.name.replace('↳ ', '').split(' ')[0]}, come sta andando il tuo soggiorno? Sul tavolo trovi una breve guida alla raccolta differenziata e alcuni consigli sul quartiere.
      </div>

      ${needsTranslation ? `
      <div class="barra-trad-chiusa" onclick="toggleSchedTrad()">
        <span style="color:#2E54E8;display:inline-flex;">${ICONS.globe}</span>
        <span style="font-size:11px;font-weight:600;color:#2E54E8;flex:1;">TRADUZIONE PROGRAMMATA (${conv.langName.toUpperCase()})</span>
        <span style="color:#2E54E8;display:inline-flex;">${state.schedTradOpen ? ICONS.chevronUp : ICONS.chevronDown}</span>
      </div>
      ${state.schedTradOpen ? `
        <div class="card-trad-host" style="margin-top:2px;">
          <div class="testo-trad-host">
            Cześć Adam, jak mija pobyt? Na stole znajdziesz krótki przewodnik dotyczący segregacji odpadów oraz kilka wskazówek o okolicy.
          </div>
        </div>
      ` : ''}
      ` : ''}

      <div class="msg-bottom-actions">
        <button class="btn-msg-action copy" onclick="copyThreadMessage('sched')" title="Copia messaggio" aria-label="Copia messaggio">
          ${ICONS.copy}
        </button>
        <button class="btn-msg-action delete" onclick="deleteThreadMessage('sched')" title="Elimina messaggio" aria-label="Elimina messaggio">
          ${ICONS.trash}
        </button>
      </div>
    </div>
  `;

  const deskArea = document.getElementById('desktopMessagesArea');
  const mobArea = document.getElementById('mobileMessagesArea');
  if (deskArea) deskArea.innerHTML = messagesHtml;
  if (mobArea) mobArea.innerHTML = messagesHtml;
}

// Render Right AI Sider (Clean, Essential, 1:1 with Figma)
function renderSiderAI() {
  const deskSider = document.getElementById('desktopSiderAI');
  const mobSider = document.getElementById('mobileSiderAI');
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  const currentDraft = state.drafts[state.selectedConvId] || state.drafts.adam;
  const h = conv.handover || CONVERSATIONS[0].handover;

  const isNightHour = (() => {
    const hr = parseInt(state.schedHour || '10', 10);
    return hr >= 22 || hr < 8;
  })();

  const calCells = [
    { d: '', muted: true }, { d: '', muted: true }, { d: '', muted: true }, { d: '', muted: true }, { d: '', muted: true }, { d: '', muted: true }, { d: 1, muted: true },
    { d: 2 }, { d: 3 }, { d: 4 }, { d: 5 }, { d: 6 }, { d: 7 }, { d: 8 },
    { d: 9 }, { d: 10 }, { d: 11 }, { d: 12 }, { d: 13 }, { d: 14 }, { d: 15 },
    { d: 16 }, { d: 17, highlight: true }, { d: 18 }, { d: 19 }, { d: 20 }, { d: 21 }, { d: 22 },
    { d: 23 }, { d: 24 }, { d: 25 }, { d: 26 }, { d: 27 }, { d: 28 }, { d: 29 },
    { d: 30 }, { d: '', muted: true }, { d: '', muted: true }, { d: '', muted: true }, { d: '', muted: true }, { d: '', muted: true }, { d: '', muted: true }
  ];

  const hourOptions = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'))
    .map(h => `<option value="${h}" ${state.schedHour === h ? 'selected' : ''}>${h}</option>`).join('');
  const minOptions = ['00', '15', '30', '45']
    .map(m => `<option value="${m}" ${state.schedMin === m ? 'selected' : ''}>${m}</option>`).join('');

  const isNoteMode = state.composerMode === 'note';
  const headerTitleLabel = isNoteMode
    ? 'Nota manuale'
    : (state.draftOpen ? 'Modifica risposta AI' : 'Modifica risposta');

  const html = `
    <!-- 1. Sezione Passaggio di Consegne AI (Richiudibile) -->
    <div class="sider-section">
      <div class="sider-sec-header" onclick="toggleAccordion('consegne')">
        <div class="icon-badge sm indigo">${ICONS.sparkles16}</div>
        <div class="sec-texts">
          <div class="sec-title">PASSAGGIO DI CONSEGNE AI</div>
          <div class="sec-sub">${state.acc_consegne ? 'Riepilogo contesto e stato autonomia' : h.motivo}</div>
        </div>
        <span style="color:#64748B;display:inline-flex;">${state.acc_consegne ? ICONS.chevronUp : ICONS.chevronDown16}</span>
      </div>

      ${state.acc_consegne ? `
        <div class="card-riassunto-consegne">
          <div class="riga-motivo">${h.motivo}</div>
          <div class="riga-contesto">
            <span class="contesto-icon">${ICONS.check}</span>
            <span>${h.fatto}</span>
          </div>

          <div class="pill-azione-suggerita" onclick="openDraftEditor()" title="Apri bozza con questa azione">
            <div class="pill-azione-left">
              ${ICONS.zap}
              <span>${h.azione}</span>
            </div>
            <span class="pill-azione-arrow">${ICONS.arrowRight}</span>
          </div>

          <div class="div-card"></div>

          <div style="display:flex;gap:6px;">
            <button class="btn-gen primary" style="height:34px;font-size:12px;flex:1;" onclick="openDraftEditor()">
              ${ICONS.sparkles16}
              <span>Genera risposta AI</span>
            </button>
            <button class="btn-gen sky" style="height:34px;font-size:12px;flex:1;" onclick="openPromptMode()">
              ${ICONS.pencil}
              <span>Scrivi prompt / Istruzione</span>
            </button>
          </div>

          <div class="div-card"></div>

          <div class="riga-autonomia">
            <div class="autonomia-meta">
              <span class="badge-autonomia-pct">AI 94%</span>
              <span class="autonomia-sub">Escluso: Tariffa</span>
            </div>
            <div class="autonomia-toggle-wrap" onclick="toggleAutoSend()">
              <span>Auto-invio</span>
              <div class="switch-off ${state.autoSend ? 'on' : ''}">
                <div class="switch-thumb"></div>
              </div>
            </div>
          </div>
        </div>
      ` : ''}
    </div>
  `;

  if (deskSider) deskSider.innerHTML = html;
  if (mobSider) mobSider.innerHTML = html;
  renderBottomComposer();
}

function getChannelBadgeHtml(channel) {
  const ch = (channel || 'WhatsApp').toLowerCase();
  if (ch.includes('whatsapp')) {
    return `<span class="bc-ch-circle whatsapp"><svg width="11" height="11" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 14.01c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.13.11-1.83-.11-.42-.13-.97-.31-1.67-.61-2.95-1.27-4.88-4.25-5.03-4.45-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37.2 0 .4.01.57.01.18 0 .43-.07.67.51.24.59.82 2.01.89 2.16.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.71.81 2 .96.3.15.49.22.57.34.07.13.07.72-.17 1.4z"/></svg></span>`;
  }
  if (ch.includes('airbnb')) {
    return `<span class="bc-ch-circle airbnb"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.3"><path d="M12 3c-3.5 5-7 9.5-7 13a7 7 0 0 0 14 0c0-3.5-3.5-8-7-13z"/></svg></span>`;
  }
  if (ch.includes('booking')) {
    return `<span class="bc-ch-circle booking">B.</span>`;
  }
  if (ch.includes('email')) {
    return `<span class="bc-ch-circle email"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></span>`;
  }
  return `<span class="bc-ch-circle note"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></span>`;
}

function getChannelDisplayLabel(channel) {
  if (!channel || channel === 'WhatsApp') return 'Whatsapp';
  return channel;
}

// Render Bottom Messaging Composer (Expanded & Collapsed modes 1:1 with reference screenshots)
function renderBottomComposer() {
  const deskComp = document.getElementById('desktopBottomComposer');
  const mobComp = document.getElementById('mobileBottomComposer');
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  const draftVal = state.draftOpen ? (state.drafts[conv.id] || '') : '';
  const hasText = draftVal.trim().length > 0 || (state.composerMode === 'note' && (state.noteDraftText || '').trim().length > 0);
  const channelLabel = getChannelDisplayLabel(state.outboundChannel);
  const channelBadge = getChannelBadgeHtml(state.outboundChannel);
  const isNoteMode = state.composerMode === 'note';

  const isNightHour = (() => {
    const hr = parseInt(state.schedHour || '10', 10);
    return hr >= 22 || hr < 8;
  })();

  const calCells = [
    { d: '', muted: true }, { d: '', muted: true }, { d: '', muted: true }, { d: '', muted: true }, { d: '', muted: true }, { d: '', muted: true }, { d: 1, muted: true },
    { d: 2 }, { d: 3 }, { d: 4 }, { d: 5 }, { d: 6 }, { d: 7 }, { d: 8 },
    { d: 9 }, { d: 10 }, { d: 11 }, { d: 12 }, { d: 13 }, { d: 14 }, { d: 15 },
    { d: 16 }, { d: 17, highlight: true }, { d: 18 }, { d: 19 }, { d: 20 }, { d: 21 }, { d: 22 },
    { d: 23 }, { d: 24 }, { d: 25 }, { d: 26 }, { d: 27 }, { d: 28 }, { d: 29 },
    { d: 30 }, { d: '', muted: true }, { d: '', muted: true }, { d: '', muted: true }, { d: '', muted: true }, { d: '', muted: true }, { d: '', muted: true }
  ];

  const hourOptions = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'))
    .map(h => `<option value="${h}" ${state.schedHour === h ? 'selected' : ''}>${h}</option>`).join('');
  const minOptions = ['00', '15', '30', '45']
    .map(m => `<option value="${m}" ${state.schedMin === m ? 'selected' : ''}>${m}</option>`).join('');

  let html = '';

  if (!state.composerExpanded) {
    // COLLAPSED MODE (selettore canale e lingua a sinistra di Invia)
    html = `
      <div class="bc-collapsed">
        <button type="button" class="bc-icon-btn" onclick="toggleAttachFile()" title="Allega file">
          ${ICONS.paperclip16}
        </button>

        <input
          type="text"
          class="bc-collapsed-input"
          placeholder="Scrivi un messaggio o chiedi all'AI..."
          value="${draftVal.replace(/"/g, '&quot;').replace(/\n/g, ' ')}"
          oninput="handleComposerInput(this.value)"
          onkeydown="if(event.key==='Enter')sendReplyNow()"
        />

        <button type="button" class="bc-icon-btn" onclick="triggerVoiceDictation()" title="Dettatura vocale">
          ${ICONS.mic16}
        </button>

        <button type="button" class="bc-expand-btn" onclick="toggleComposerExpand(true)" title="Espandi composer">
          ${ICONS.expandDiag}
          <span>Espandi</span>
        </button>

        <!-- Channel Pill (left of Invia) -->
        <div class="bc-channel-pill" title="Cambia canale di invio">
          ${channelBadge}
          <span class="bc-channel-name">${channelLabel}</span>
          <span class="bc-chevron-muted">${ICONS.chevronDown}</span>
          <select class="bc-select-overlay" onchange="setOutboundChannel(this.value)" aria-label="Canale di invio">
            <option value="WhatsApp" ${state.outboundChannel === 'WhatsApp' ? 'selected' : ''}>Whatsapp</option>
            <option value="Airbnb" ${state.outboundChannel === 'Airbnb' ? 'selected' : ''}>Airbnb</option>
            <option value="Booking" ${state.outboundChannel === 'Booking' ? 'selected' : ''}>Booking.com</option>
            <option value="Email" ${state.outboundChannel === 'Email' ? 'selected' : ''}>Email</option>
            <option value="Nota interna" ${state.outboundChannel === 'Nota interna' ? 'selected' : ''}>Nota interna</option>
          </select>
        </div>

        <!-- Language Pill (left of Invia) -->
        <div class="bc-lang-pill" title="Lingua di traduzione automatica in uscita">
          <span class="bc-lang-code">${conv.langCode}</span>
          <span class="bc-lang-name">${conv.langName}</span>
          <span class="bc-lang-on">(ON)</span>
          <span class="bc-chevron-blue">${ICONS.chevronDown}</span>
          <select class="bc-select-overlay" onchange="setOutboundLanguage(this.value)" aria-label="Lingua di invio">
            <option value="DE" ${conv.langCode === 'DE' ? 'selected' : ''}>DE Tedesco (ON)</option>
            <option value="PL" ${conv.langCode === 'PL' ? 'selected' : ''}>PL Polacco (ON)</option>
            <option value="EN" ${conv.langCode === 'EN' ? 'selected' : ''}>EN Inglese (ON)</option>
            <option value="ES" ${conv.langCode === 'ES' ? 'selected' : ''}>ES Spagnolo (ON)</option>
            <option value="FR" ${conv.langCode === 'FR' ? 'selected' : ''}>FR Francese (ON)</option>
            <option value="IT" ${conv.langCode === 'IT' ? 'selected' : ''}>IT Italiano (ON)</option>
          </select>
        </div>

        <button type="button" class="bc-send-btn collapsed ${hasText ? 'ready' : ''}" onclick="sendReplyNow()">
          ${ICONS.sendHoriz}
          <span>Invia</span>
        </button>
      </div>
    `;
  } else {
    // EXPANDED MODE (1:1 with screenshot 1 + Template & Tag disponibili in the upper part)
    html = `
      <div class="bc-expanded">
        <!-- Popovers anchored above the composer -->
        ${state.bcToneOpen ? `
          <div class="bc-floating-popover tone-pop">
            <div class="bc-pop-header">
              <span>AI Copilot & Tono di voce</span>
              <button type="button" class="bc-pop-close" onclick="toggleBcPopover(null)">✕</button>
            </div>
            <div class="bc-pop-list">
              <button type="button" class="bc-pop-item highlight-ai" onclick="openDraftEditor();toggleBcPopover(null);">
                ${ICONS.sparkles}
                <span>Genera risposta AI completa</span>
              </button>
              <button type="button" class="bc-pop-item highlight-sky" onclick="openPromptMode();toggleBcPopover(null);">
                ${ICONS.pencil}
                <span>Scrivi prompt / Istruzione...</span>
              </button>
              <div class="bc-pop-divider"></div>
              <div class="bc-pop-sublabel">Cambia tono della bozza</div>
              <div class="bc-tone-pills-row">
                <button type="button" class="bc-tone-chip ${state.activeTone === 'Cordiale' ? 'active' : ''}" onclick="state.draftOpen=true;selectTone('Cordiale', 0);toggleBcPopover(null);">😊 Cordiale</button>
                <button type="button" class="bc-tone-chip ${state.activeTone === 'Formale' ? 'active' : ''}" onclick="state.draftOpen=true;selectTone('Formale', 1);toggleBcPopover(null);">👔 Formale</button>
                <button type="button" class="bc-tone-chip ${state.activeTone === 'Più breve' ? 'active' : ''}" onclick="state.draftOpen=true;selectTone('Più breve', 2);toggleBcPopover(null);">⚡ Più breve</button>
              </div>
              <button type="button" class="bc-pop-item" onclick="state.draftOpen=true;improveDraftText();toggleBcPopover(null);">
                ${ICONS.wand}
                <span>Migliora chiarezza e cortesia</span>
              </button>
            </div>
          </div>
        ` : ''}

        ${state.bcMoreOpen ? `
          <div class="bc-floating-popover more-pop">
            <div class="bc-pop-header">
              <span>Azioni aggiuntive</span>
              <button type="button" class="bc-pop-close" onclick="toggleBcPopover(null)">✕</button>
            </div>
            <div class="bc-pop-list">
              <button type="button" class="bc-pop-item" onclick="toggleBcPopover(null);toggleSchedulePopover();">
                ${ICONS.clock}
                <span>Programma invio (${state.schedHour}:${state.schedMin})</span>
              </button>
              <button type="button" class="bc-pop-item" onclick="toggleBcPopover(null);triggerOcrExtract();">
                ${ICONS.scanText}
                <span>Estrai testo da foto (OCR)</span>
              </button>
              <button type="button" class="bc-pop-item" onclick="toggleBcPopover(null);openCreateKbModal();">
                ${ICONS.bookmarkPlus}
                <span>Crea / Aggiorna FAQ in Knowledge Base</span>
              </button>
              <button type="button" class="bc-pop-item" onclick="toggleBcPopover(null);setComposerMode(state.composerMode === 'note' ? 'reply' : 'note');">
                ${ICONS.fileText}
                <span>${isNoteMode ? 'Torna a Risposta ospite' : 'Passa a Nota manuale (Solo staff)'}</span>
              </button>
            </div>
          </div>
        ` : ''}

        ${state.schedulePopoverOpen ? `
          <div class="bc-floating-popover schedule-pop">
            <div class="card-quando-inviarlo" style="margin:0;border:none;box-shadow:none;">
              <div class="qi-header">
                <span class="qi-title">Quando inviarlo</span>
                <button class="qi-close" onclick="toggleSchedulePopover()" title="Chiudi">✕</button>
              </div>
              <div class="qi-presets">
                <button class="qi-pill ${state.schedPreset === '1h' ? 'active' : ''}" onclick="applySchedPreset('1h', 2, '12', '00')">Tra un'ora</button>
                <button class="qi-pill ${state.schedPreset === '18' ? 'active' : ''}" onclick="applySchedPreset('18', 2, '18', '00')">Oggi 18:00</button>
                <button class="qi-pill ${state.schedPreset === 'dom9' ? 'active' : ''}" onclick="applySchedPreset('dom9', 3, '09', '00')">Domani 9:00</button>
              </div>
              <div class="qi-month-nav">
                <button class="qi-nav-arrow" onclick="cycleSchedMonth(-1)">‹</button>
                <span class="qi-month-label">${state.schedMonthLabel}</span>
                <button class="qi-nav-arrow" onclick="cycleSchedMonth(1)">›</button>
              </div>
              <div class="qi-weekdays">
                <span>L</span><span>M</span><span>M</span><span>G</span><span>V</span><span>S</span><span>D</span>
              </div>
              <div class="qi-days-grid">
                ${calCells.map(c => !c.d
                  ? `<span class="qi-day empty"></span>`
                  : `<button class="qi-day ${c.muted ? 'muted' : ''} ${c.highlight && state.schedDay !== c.d ? 'soft-bg' : ''} ${state.schedDay === c.d && !c.muted ? 'selected' : ''}" onclick="selectSchedDay(${c.d})">${c.d}</button>`
                ).join('')}
              </div>
              <div class="qi-time-row">
                <span class="qi-clock-icon">${ICONS.clock}</span>
                <select class="qi-time-select" onchange="updateSchedHour(this.value)">${hourOptions}</select>
                <span class="qi-time-colon">:</span>
                <select class="qi-time-select" onchange="updateSchedMin(this.value)">${minOptions}</select>
              </div>
              ${isNightHour ? `
                <div class="qi-night-warning" style="display:flex;align-items:center;gap:6px;">
                  ${ICONS.moon}
                  <span>Orario notturno (22:00–08:00): consigliato posticipare al mattino.</span>
                </div>
              ` : ''}
              <label class="qi-autocancel-row" onclick="toggleAutoCancelRule()">
                <input type="checkbox" ${state.autoCancelScheduled ? 'checked' : ''} onclick="event.stopPropagation();toggleAutoCancelRule()" />
                <span>Annulla se l'ospite risponde prima</span>
              </label>
              <div class="qi-actions">
                <button class="qi-btn-cancel" onclick="toggleSchedulePopover()">Annulla</button>
                <button class="qi-btn-confirm" onclick="confirmScheduledSend()">
                  ${ICONS.sendWhite}
                  <span>Programma</span>
                </button>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- 1. Top Header Bar (with Template & Tag disponibili in the upper part) -->
        <div class="bc-header">
          <div class="bc-header-left">
            <span class="bc-title-wrap">
              <span class="bc-WaitSparkle">${ICONS.sparkles16}</span>
              <span class="bc-title-text">${isNoteMode ? 'Nota manuale (Staff)' : 'Componi risposta'}</span>
            </span>

            ${!isNoteMode ? `
              <!-- Template Pill (Upper Composer) -->
              <button type="button" class="bc-top-pill template ${state.bcTemplateOpen ? 'active' : ''}" onclick="toggleBcPopover('template')" title="Messaggi pronti / Template">
                ${ICONS.docTemplate14}
                <span>Template</span>
                <span class="bc-chevron-muted">${ICONS.chevronDown}</span>
              </button>

              <!-- Tag Disponibili Pill (Upper Composer) -->
              <button type="button" class="bc-top-pill tags ${state.bcTagsOpen ? 'active' : ''}" onclick="toggleBcPopover('tags')" title="Tag dinamici PMS disponibili">
                ${ICONS.bookOpen}
                <span>Tag disponibili</span>
                <span class="bc-chevron-muted">${ICONS.chevronDown}</span>
              </button>
            ` : `
              <div class="toni-left" style="display:inline-flex;gap:4px;">
                <button class="btn-tono note-pill ${state.noteType === 'Telefonata' ? 'active' : ''}" onclick="selectNoteType('Telefonata')">Telefonata</button>
                <button class="btn-tono note-pill ${state.noteType === 'Di persona' ? 'active' : ''}" onclick="selectNoteType('Di persona')">Di persona</button>
                <button class="btn-tono note-pill ${state.noteType === 'Nota staff' ? 'active' : ''}" onclick="selectNoteType('Nota staff')">Nota staff</button>
              </div>
            `}
          </div>

          <div class="bc-header-right">
            <button type="button" class="bc-collapse-btn" onclick="toggleComposerExpand(false)" title="Riduci a barra compatta">
              ${ICONS.chevronDown}
              <span>Riduci</span>
            </button>
          </div>
        </div>

        <!-- Upper Drawer for Template or Tag Disponibili -->
        ${state.bcTemplateOpen ? `
          <div class="bc-upper-drawer">
            <div class="bc-upper-drawer-head">
              <span class="bc-upper-drawer-title">${ICONS.zap16} <span>MESSAGGI PRONTI (TEMPLATE) · Tocca per inserire</span></span>
              <button type="button" class="bc-pop-close" onclick="toggleBcPopover(null)">✕</button>
            </div>
            <div class="bc-upper-templates-grid">
              <button type="button" class="card-mp" onclick="insertCannedReply('1. Accesso + Omaggio (Ok)');toggleBcPopover(null);">
                <span class="dot-amber"></span>
                <span>1. Accesso + Omaggio (Ok)</span>
              </button>
              <button type="button" class="card-mp" onclick="insertCannedReply('1. Come funziona il Check-In (OK)');toggleBcPopover(null);">
                <span class="dot-amber"></span>
                <span>1. Come funziona il Check-In (OK)</span>
              </button>
              <button type="button" class="card-mp" onclick="insertCannedReply('2. Check-In Online Obbligato + Omaggio (OK)');toggleBcPopover(null);">
                <span class="dot-amber"></span>
                <span>2. Check-In Online Obbligato + Omaggio (OK)</span>
              </button>
              <button type="button" class="card-mp" onclick="insertCannedReply('3. Benvenuto a Catania - Tax (OK)');toggleBcPopover(null);">
                <span class="dot-amber"></span>
                <span>3. Benvenuto a Catania - Tax (OK)</span>
              </button>
              <button type="button" class="card-mp" onclick="insertCannedReply('4. Info Parcheggio Garage Suite 14 (15€/notte)');toggleBcPopover(null);">
                <span class="dot-amber"></span>
                <span>4. Info Parcheggio Garage Suite 14 (15€/notte)</span>
              </button>
            </div>
          </div>
        ` : ''}

        ${state.bcTagsOpen ? `
          <div class="bc-upper-drawer">
            <div class="bc-upper-drawer-head">
              <span class="bc-upper-drawer-title" style="color:#0284C7;">${ICONS.bookOpen} <span>TAG DISPONIBILI (DATI DINAMICI PMS AUTO-RISOLTI)</span></span>
              <button type="button" class="bc-pop-close" onclick="toggleBcPopover(null)">✕</button>
            </div>
            <div class="chip-tag-row">
              <span class="chip-pms" onclick="insertTagPMS('${conv.name.replace('↳ ', '').split(' ')[0]}')">{Ospite}: ${conv.name.replace('↳ ', '').split(' ')[0]}</span>
              <span class="chip-pms" onclick="insertTagPMS('${conv.stay.room}')">{Camera}: ${conv.stay.room}</span>
              <span class="chip-pms" onclick="insertTagPMS('000000')">{Nuki}: 000000</span>
              <span class="chip-pms" onclick="insertTagPMS('15:00')">{Check-in}: 15:00</span>
              <span class="chip-pms" onclick="insertTagPMS('AuroraGuest2026')">{Wi-Fi}: AuroraGuest2026</span>
            </div>
          </div>
        ` : ''}

        <!-- 2. Middle Body Area -->
        <div class="bc-body">
          ${state.promptMode ? `
            <div class="box-prompt-mode" style="padding:0;">
              <div class="prompt-mode-banner">
                Scrivi un'istruzione breve e l'AI prepara il messaggio finale nello stile configurato.
              </div>
              <textarea
                class="prompt-mode-textarea"
                id="initialPromptTextarea"
                placeholder="Scrivi qui l'istruzione (es. conferma posto auto #14 a 15€/notte)..."
                oninput="state.promptText = this.value"
                ${state.promptGenerating ? 'disabled' : ''}
              >${state.promptText || ''}</textarea>
              <div class="prompt-mode-actions">
                <button
                  type="button"
                  class="btn-prompt-generate ${state.promptGenerating ? 'loading' : ''}"
                  onclick="generateFromPromptMode()"
                  ${state.promptGenerating ? 'disabled' : ''}
                >
                  ${state.promptGenerating ? ICONS.spinner16 : ICONS.sparkles16}
                  <span>Genera da prompt</span>
                </button>
                <button
                  type="button"
                  class="btn-prompt-cancel"
                  onclick="cancelPromptMode()"
                  ${state.promptGenerating ? 'disabled' : ''}
                >
                  Annulla
                </button>
              </div>
            </div>
          ` : isNoteMode ? `
            <textarea
              class="bc-textarea"
              id="noteTextarea"
              placeholder="Registra qui cosa è stato detto al telefono o concordato di persona..."
              oninput="updateNoteDraftText(this.value, this)"
            >${state.noteDraftText}</textarea>
          ` : `
            <textarea
              class="bc-textarea"
              id="draftTextarea"
              placeholder="Scrivi un messaggio in italiano..."
              oninput="handleComposerInput(this.value, this)"
            >${draftVal}</textarea>
          `}

          ${state.attachedFile ? `
            <div class="bc-attached-chip">
              <div style="display:flex;align-items:center;gap:6px;">
                <span style="color:#2563EB;display:inline-flex;">${ICONS.paperclip}</span>
                <span>${state.attachedFile}</span>
              </div>
              <button type="button" class="bc-attached-remove" onclick="toggleAttachFile()">×</button>
            </div>
          ` : ''}

          ${state.draftOpen && !state.promptMode && !isNoteMode ? `
            <div class="bc-ai-feedback-row">
              <div class="bc-ai-rate-left">
                <span>${state.aiRating === 'up' ? 'Risposta AI valutata utile' : state.aiRating === 'down' ? 'Risposta AI segnalata da migliorare' : 'Valuta risposta AI'}</span>
                <button type="button" class="btn-rate-ai rate-up ${state.aiRating === 'up' ? 'active' : ''}" onclick="rateAiSuggestion('up')" title="Risposta AI utile">${ICONS.thumbsUp}</button>
                <button type="button" class="btn-rate-ai rate-down ${state.aiRating === 'down' ? 'active' : ''}" onclick="rateAiSuggestion('down')" title="Segnala risposta AI da migliorare">${ICONS.thumbsDown}</button>
              </div>
              <button type="button" class="bc-kb-inline-btn" onclick="openCreateKbModal()">
                ${ICONS.bookmarkPlus}
                <span>${state.saveToKb ? 'FAQ salvata in KB' : 'Salva come FAQ in KB'}</span>
              </button>
            </div>
          ` : ''}
        </div>

        <!-- 3. Bottom Toolbar -->
        <div class="bc-footer">
          <div class="bc-tools-left">
            <button type="button" class="bc-icon-btn" onclick="toggleAttachFile()" title="Allega file">
              ${ICONS.paperclip16}
            </button>
            <button type="button" class="bc-icon-btn" onclick="insertTagPMS('😊')" title="Inserisci emoji">
              ${ICONS.smile16}
            </button>
            <button type="button" class="bc-pill-btn ai-tone ${state.bcToneOpen ? 'active' : ''}" onclick="toggleBcPopover('tone')">
              ${ICONS.sparkles}
              <span>AI Tono</span>
            </button>
            <button type="button" class="bc-icon-btn" onclick="triggerVoiceDictation()" title="Dettatura vocale">
              ${ICONS.mic16}
            </button>
            <button type="button" class="bc-icon-btn ${state.bcMoreOpen ? 'active' : ''}" onclick="toggleBcPopover('more')" title="Altre opzioni (Programma invio, OCR, FAQ, Nota manuale)">
              ${ICONS.moreHoriz}
            </button>
          </div>

          <div class="bc-tools-right">
            ${isNoteMode ? `
              <button type="button" class="bc-send-btn expanded ready" onclick="saveManualNoteFromComposer()">
                ${ICONS.sendHoriz}
                <span>Salva nota</span>
              </button>
            ` : `
              <!-- Channel Pill (in basso a sinistra di Invia) -->
              <div class="bc-channel-pill" title="Canale di invio">
                ${channelBadge}
                <span class="bc-channel-name">${channelLabel}</span>
                <span class="bc-chevron-muted">${ICONS.chevronDown}</span>
                <select class="bc-select-overlay" onchange="setOutboundChannel(this.value)" aria-label="Canale di invio">
                  <option value="WhatsApp" ${state.outboundChannel === 'WhatsApp' ? 'selected' : ''}>Whatsapp</option>
                  <option value="Airbnb" ${state.outboundChannel === 'Airbnb' ? 'selected' : ''}>Airbnb</option>
                  <option value="Booking" ${state.outboundChannel === 'Booking' ? 'selected' : ''}>Booking.com</option>
                  <option value="Email" ${state.outboundChannel === 'Email' ? 'selected' : ''}>Email</option>
                  <option value="Nota interna" ${state.outboundChannel === 'Nota interna' ? 'selected' : ''}>Nota interna (Solo staff)</option>
                </select>
              </div>

              <!-- Language Pill (in basso a sinistra di Invia) -->
              <div class="bc-lang-pill" title="Lingua di traduzione automatica in uscita">
                <span class="bc-lang-code">${conv.langCode}</span>
                <span class="bc-lang-name">${conv.langName}</span>
                <span class="bc-lang-on">(ON)</span>
                <span class="bc-chevron-blue">${ICONS.chevronDown}</span>
                <select class="bc-select-overlay" onchange="setOutboundLanguage(this.value)" aria-label="Lingua di invio">
                  <option value="DE" ${conv.langCode === 'DE' ? 'selected' : ''}>DE Tedesco (ON)</option>
                  <option value="PL" ${conv.langCode === 'PL' ? 'selected' : ''}>PL Polacco (ON)</option>
                  <option value="EN" ${conv.langCode === 'EN' ? 'selected' : ''}>EN Inglese (ON)</option>
                  <option value="ES" ${conv.langCode === 'ES' ? 'selected' : ''}>ES Spagnolo (ON)</option>
                  <option value="FR" ${conv.langCode === 'FR' ? 'selected' : ''}>FR Francese (ON)</option>
                  <option value="IT" ${conv.langCode === 'IT' ? 'selected' : ''}>IT Italiano (ON)</option>
                </select>
              </div>

              <button type="button" class="bc-send-btn expanded ${hasText ? 'ready' : ''}" onclick="sendReplyNow()">
                ${ICONS.sendHoriz}
                <span>Invia</span>
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }

  if (deskComp) deskComp.innerHTML = html;
  if (mobComp) mobComp.innerHTML = html;
}

function autoResizeTextarea(el) {
  if (!el) return;
  el.style.height = 'auto';
  if (el.scrollHeight > 0) {
    el.style.height = Math.max(150, el.scrollHeight) + 'px';
  }
}

function autoResizeAllDraftTextareas() {
  document.querySelectorAll('.testo-bozza-it').forEach(autoResizeTextarea);
}

// =========================================================================
// INTERACTIVE HANDLERS
// =========================================================================

function toggleAccordion(key) {
  if (key === 'consegne') state.acc_consegne = !state.acc_consegne;
  if (key === 'mp') state.acc_mp = !state.acc_mp;
  if (key === 'tags') state.acc_tags = !state.acc_tags;
  if (key === 'modifica') {
    if (state.acc_modifica && (state.draftOpen || state.promptMode)) {
      closeDraftEditor();
      return;
    }
    state.acc_modifica = !state.acc_modifica;
  }
  renderSiderAI();
}

function toggleComposerExpand(expanded) {
  state.composerExpanded = typeof expanded === 'boolean' ? expanded : !state.composerExpanded;
  state.bcTemplateOpen = false;
  state.bcTagsOpen = false;
  state.bcToneOpen = false;
  state.bcMoreOpen = false;
  renderBottomComposer();
}

function toggleBcPopover(which) {
  state.bcTemplateOpen = which === 'template' ? !state.bcTemplateOpen : false;
  state.bcTagsOpen = which === 'tags' ? !state.bcTagsOpen : false;
  state.bcToneOpen = which === 'tone' ? !state.bcToneOpen : false;
  state.bcMoreOpen = which === 'more' ? !state.bcMoreOpen : false;
  if (which) state.schedulePopoverOpen = false;
  renderBottomComposer();
}

function handleComposerInput(val, el) {
  state.draftOpen = val.trim().length > 0;
  state.drafts[state.selectedConvId] = val;
  renderConversationLists();
  document.querySelectorAll('.bc-send-btn').forEach(btn => {
    btn.classList.toggle('ready', val.trim().length > 0);
  });
}

function triggerVoiceDictation() {
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  const firstName = conv.name.replace('↳ ', '').split(' ')[0];
  state.composerExpanded = true;
  state.draftOpen = true;
  state.drafts[conv.id] = `Ciao ${firstName}, ti confermo che il posto auto coperto #14 è riservato per te a 15€ a notte!`;
  renderConversationLists();
  renderSiderAI();
  showToast('Messaggio trascritto da dettatura vocale');
}

function openPromptMode() {
  state.composerExpanded = true;
  state.promptMode = true;
  state.promptGenerating = false;
  state.draftOpen = false;
  state.bcTemplateOpen = false;
  state.bcTagsOpen = false;
  state.bcToneOpen = false;
  state.bcMoreOpen = false;
  renderSiderAI();
  setTimeout(() => document.getElementById('initialPromptTextarea')?.focus(), 50);
}

function cancelPromptMode() {
  state.promptMode = false;
  state.promptGenerating = false;
  renderSiderAI();
}

function generateFromPromptMode() {
  if (state.promptGenerating) return;
  const textarea = document.getElementById('initialPromptTextarea');
  if (textarea) {
    state.promptText = textarea.value;
  }
  const instruction = (state.promptText || '').trim();
  state.promptGenerating = true;
  renderSiderAI();

  setTimeout(() => {
    const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
    const firstName = conv.name.replace('↳ ', '').split(' ')[0];
    if (instruction) {
      state.drafts[conv.id] = `Ciao ${firstName}! In merito alla tua richiesta (${instruction}): ti confermo che il posto auto coperto #14 per la ${conv.stay.room} è disponibile nel garage interno a 15€/notte e puoi accedere direttamente con il codice Nuki 000000. Resto a disposizione!`;
    } else if (!state.drafts[conv.id]) {
      state.drafts[conv.id] = state.variants[0].text;
    }
    state.promptGenerating = false;
    state.promptMode = false;
    state.draftOpen = true;
    state.composerExpanded = true;
    renderConversationLists();
    renderSiderAI();
    showToast('Risposta ospite generata dal prompt e pronta nel composer');
  }, 650);
}

function openDraftEditor(focusPrompt = false, focusTextarea = false) {
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  state.composerExpanded = true;
  state.promptMode = false;
  state.promptGenerating = false;
  state.draftOpen = true;
  if (!state.drafts[conv.id]) {
    state.drafts[conv.id] = state.variants[0].text;
  }
  state.replyTab = 'risposta';
  renderConversationLists();
  renderSiderAI();
  if (focusPrompt) {
    setTimeout(() => document.getElementById('freePromptInput')?.focus(), 60);
  } else if (focusTextarea) {
    setTimeout(() => document.getElementById('draftTextarea')?.focus(), 60);
  } else {
    showToast('Bozza AI generata in Italiano con traduzione pronta');
  }
}

function closeDraftEditor() {
  state.draftOpen = false;
  state.promptMode = false;
  state.promptGenerating = false;
  state.schedulePopoverOpen = false;
  state.bcTemplateOpen = false;
  state.bcTagsOpen = false;
  state.bcToneOpen = false;
  state.bcMoreOpen = false;
  renderConversationLists();
  renderSiderAI();
}

function setMobileTab(tab) {
  state.mobileTab = tab;
  document.getElementById('mobScreenInbox')?.classList.toggle('active', tab === 'inbox');
  document.getElementById('mobScreenChat')?.classList.toggle('active', tab === 'chat');
  document.getElementById('mobScreenAI')?.classList.toggle('active', tab === 'ai');

  const convBottomBar = document.getElementById('mobConvBottomBar');
  if (convBottomBar) {
    convBottomBar.style.display = tab === 'inbox' ? 'none' : 'flex';
  }

  document.getElementById('mobNavChat')?.classList.toggle('active', tab === 'chat');
  document.getElementById('mobNavAI')?.classList.toggle('active', tab === 'ai');
  if (tab === 'ai') {
    requestAnimationFrame(autoResizeAllDraftTextareas);
  }
}

function selectConversation(id) {
  state.selectedConvId = id;
  const conv = CONVERSATIONS.find(c => c.id === id);
  if (conv) {
    state.outboundChannel = conv.channel;
  }
  renderConversationLists();
  renderThread();
  renderSiderAI();
  setMobileTab('chat');
}

function cycleVariant() {
  state.activeVariantIdx = (state.activeVariantIdx + 1) % state.variants.length;
  const v = state.variants[state.activeVariantIdx];
  state.activeTone = v.tone;
  state.drafts[state.selectedConvId] = v.text;
  renderConversationLists();
  renderSiderAI();
  showToast(`Variante ${state.activeVariantIdx + 1} di 3 (${v.tone})`);
}

function selectTone(tone, idx) {
  state.activeTone = tone;
  state.activeVariantIdx = idx;
  state.drafts[state.selectedConvId] = state.variants[idx].text;
  renderConversationLists();
  renderSiderAI();
  showToast(`Tono impostato su: ${tone}`);
}

function improveDraftText() {
  state.drafts[state.selectedConvId] = `Ciao Adam! Ti confermo con piacere che il posto auto coperto n. 14 (riservato alla Suite 14) è disponibile nel nostro garage interno a 15€/notte. L'accesso è già abilitato con il tuo codice Nuki 000000. Fammi sapere se desideri confermarlo!`;
  renderConversationLists();
  renderSiderAI();
  showToast('Testo migliorato (chiarezza e cortesia) e salvato in automatico');
}

function updateDraftText(val, el) {
  state.drafts[state.selectedConvId] = val;
  renderConversationLists();
  if (el) {
    autoResizeTextarea(el);
  } else {
    autoResizeAllDraftTextareas();
  }
}

function applyFreePrompt() {
  const input = document.getElementById('freePromptInput');
  const instruction = input?.value.trim() || 'offri sconto 5€';
  state.drafts[state.selectedConvId] = `Ciao Adam! Il posto auto coperto n. 14 per la Suite 14 è disponibile nel garage interno: per il tuo soggiorno ti riserviamo una tariffa speciale di 10€/notte (anziché 15€). Puoi entrare direttamente con il codice Nuki 000000!`;
  renderConversationLists();
  renderSiderAI();
  showToast(`Bozza rigenerata con istruzione: "${instruction}"`);
}

function insertCannedReply(title) {
  const cur = state.draftOpen ? (state.drafts[state.selectedConvId] || '') : '';
  state.composerExpanded = true;
  state.draftOpen = true;
  state.replyTab = 'risposta';
  state.drafts[state.selectedConvId] = (cur ? `${cur}\n\n[Info rapida: ${title}]` : `[Info rapida: ${title}]`).trim();
  renderConversationLists();
  renderSiderAI();
  showToast(`Messaggio pronto aggiunto al composer`);
}

function insertTagPMS(val) {
  const cur = state.draftOpen ? (state.drafts[state.selectedConvId] || '') : '';
  state.composerExpanded = true;
  state.draftOpen = true;
  state.replyTab = 'risposta';
  state.drafts[state.selectedConvId] = (cur ? `${cur} ${val}` : `${val}`).trim();
  renderConversationLists();
  renderSiderAI();
  showToast(`Inserito nel composer: ${val}`);
}

function toggleHostTrad() {
  state.hostTradOpen = !state.hostTradOpen;
  renderThread();
}

function toggleGuestTrad() {
  state.guestTradOpen = !state.guestTradOpen;
  renderThread();
}

function toggleSchedTrad() {
  state.schedTradOpen = !state.schedTradOpen;
  renderThread();
}

function copyThreadMessage(type) {
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  const firstName = conv.name.replace('↳ ', '').split(' ')[0];
  let txt = '';
  if (type === 'host') {
    txt = `Ciao ${firstName}, benvenuto a Casa Aurora! Ecco le informazioni utili per il tuo appartamento (${conv.stay.room}): all'ingresso trovi il tastierino numerico, il tuo codice Nuki è 000000. Ti auguriamo un piacevole soggiorno!`;
  } else if (type === 'guest') {
    txt = conv.id === 'adam'
      ? "Ciao! Grazie per il benvenuto. Il codice funziona correttamente. Ho ancora una domanda sul parcheggio: c'è un posto riservato agli ospiti e qual è il prezzo a notte?"
      : conv.preview.replace('↗ ', '');
  } else {
    txt = `Ciao ${firstName}, come sta andando il tuo soggiorno? Sul tavolo trovi una breve guida alla raccolta differenziata e alcuni consigli sul quartiere.`;
  }
  navigator.clipboard?.writeText(txt);
  showToast('Testo del messaggio copiato negli appunti');
}

function deleteThreadMessage(type) {
  showToast('Messaggio eliminato dalla conversazione');
}

function toggleAudioPlay() {
  state.playingAudio = !state.playingAudio;
  renderThread();
  if (state.playingAudio) {
    showToast('Riproduzione messaggio vocale ospite (0:18)...');
  }
}

function toggleAutoSend() {
  state.autoSend = !state.autoSend;
  renderSiderAI();
  showToast(state.autoSend ? 'Auto-invio AI attivato' : 'Auto-invio AI disattivato');
}

function toggleAttachFile() {
  if (state.attachedFile) {
    state.attachedFile = null;
    renderSiderAI();
    showToast('Allegato rimosso dalla bozza');
  } else {
    state.attachedFile = 'Mappa_Garage_Suite14.pdf · 180 KB';
    renderSiderAI();
    showToast('File allegato alla bozza');
  }
}

function toggleAutoCancelRule() {
  state.autoCancelScheduled = !state.autoCancelScheduled;
  renderThread();
  renderSiderAI();
  showToast(state.autoCancelScheduled
    ? 'Regola attiva: annulla invio programmato se l\'ospite risponde prima'
    : 'Regola auto-annullamento disattivata');
}

const LANG_LABELS = {
  IT: 'Italiano',
  PL: 'Polacco',
  ES: 'Spagnolo',
  EN: 'Inglese',
  DE: 'Tedesco',
  FR: 'Francese'
};

function setOutboundLanguage(langCode) {
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  conv.langCode = langCode;
  conv.langName = LANG_LABELS[langCode] || 'Inglese';
  renderThread();
  renderSiderAI();
  showToast(`Lingua di invio impostata su: ${conv.langName}`);
}

function setOutboundChannel(channel) {
  if (channel === 'Nota interna') {
    setComposerMode('note');
    showToast('Modalità Nota manuale attivata');
    return;
  }
  state.outboundChannel = channel;
  state.composerMode = 'reply';
  renderSiderAI();
  showToast(`Canale di uscita impostato su: ${state.outboundChannel}`);
}

function cycleOutboundChannel() {
  const channels = ['Airbnb', 'WhatsApp', 'Booking', 'Email', 'Nota interna'];
  const nextIdx = (channels.indexOf(state.outboundChannel) + 1) % channels.length;
  state.outboundChannel = channels[nextIdx];
  renderSiderAI();
  showToast(`Canale di uscita impostato su: ${state.outboundChannel}`);
}

function toggleSchedulePopover() {
  state.schedulePopoverOpen = !state.schedulePopoverOpen;
  renderSiderAI();
}

function selectSchedDay(day) {
  state.schedDay = day;
  state.schedPreset = null;
  renderSiderAI();
}

function applySchedPreset(presetKey, day, hr, min) {
  state.schedPreset = presetKey;
  state.schedDay = day;
  state.schedHour = hr;
  state.schedMin = min;
  state.scheduledTime = `${hr}:${min}`;
  renderSiderAI();
}

function cycleSchedMonth(dir) {
  state.schedMonthLabel = state.schedMonthLabel === 'Novembre 2026'
    ? (dir > 0 ? 'Dicembre 2026' : 'Ottobre 2026')
    : 'Novembre 2026';
  renderSiderAI();
}

function updateSchedHour(hr) {
  state.schedHour = hr;
  state.schedPreset = null;
  state.scheduledTime = `${state.schedHour}:${state.schedMin}`;
  renderSiderAI();
}

function updateSchedMin(min) {
  state.schedMin = min;
  state.schedPreset = null;
  state.scheduledTime = `${state.schedHour}:${state.schedMin}`;
  renderSiderAI();
}

function updateScheduledTime(val) {
  state.scheduledTime = val || '10:00';
  renderSiderAI();
}

function confirmScheduledSend() {
  state.schedulePopoverOpen = false;
  closeDraftEditor();
  showToast(`Invio programmato per il ${state.schedDay} ${state.schedMonthLabel} alle ${state.schedHour}:${state.schedMin} su ${state.outboundChannel}`);
}

function publishGuestReview(convId) {
  const conv = CONVERSATIONS.find(c => c.id === convId);
  if (conv && conv.guestReview) {
    conv.guestReview.published = true;
    conv.dagestire = false;
    renderConversationLists();
    renderThread();
    showToast('Recensione ospite 5★ pubblicata con successo su Airbnb!');
  }
}

function triggerHubSync() {
  const dEl = document.getElementById('hubSyncLabelDesktop');
  const mEl = document.getElementById('hubSyncLabelMobile');
  if (dEl) dEl.textContent = 'Sincronizzazione Hub in corso...';
  if (mEl) mEl.textContent = 'Sync Hub in corso...';
  showToast('Sincronizzazione bidirezionale con Zucchetti Hub avviata...');
  setTimeout(() => {
    if (dEl) dEl.textContent = 'Hub Zucchetti · Sync adesso';
    if (mEl) mEl.textContent = 'Hub Zucchetti · Sync adesso';
    showToast('Zucchetti Hub sincronizzato: 0 errori, messaggi e prenotazioni aggiornati');
  }, 700);
}

// Modals: Scheda Soggiorno & Aggancio PMS + Nuova Conversazione da Ricerca
function openStayDetailsModal() {
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  const modal = document.getElementById('modalBackdrop');
  const content = document.getElementById('modalContent');
  if (!modal || !content) return;

  const cleanName = conv.name.replace('↳ ', '').replace(/\s*\(.*?\)\s*/g, '').trim();
  const nameParts = cleanName.split(' ');
  const firstName = nameParts.slice(0, -1).join(' ') || nameParts[0] || 'Ospite';
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';
  const initials = ((firstName[0] || '') + (lastName[0] || firstName[1] || '')).toUpperCase();

  const isMaria = conv.id === 'maria';
  const arrShort = isMaria ? '29 ott' : '6 ott';
  const partShort = isMaria ? '2 nov' : '11 ott';
  const nightsNum = isMaria ? '4' : '5';
  const guestsNum = (conv.stay.guests.match(/\d+/) || ['2'])[0];
  const checkinFull = isMaria ? '29/10/2026' : '06/10/2026';
  const checkoutFull = isMaria ? '02/11/2026' : '11/10/2026';
  const nukiCode = conv.stay.nukiCode || (isMaria ? '753293' : '000000');
  const checkinPin = conv.stay.checkinPin || '238068';

  const syncIconSm = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`;

  content.className = 'modal-card stay-modal-card';
  content.innerHTML = `
    <!-- Top Close Button -->
    <button type="button" class="stay-modal-close" onclick="closeModal()" title="Chiudi" aria-label="Chiudi">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>

    <!-- Scrollable Body -->
    <div class="stay-modal-scroll">
      <!-- 1. Header Ospite + Azioni -->
      <div class="stay-modal-header">
        <div class="stay-guest-left">
          <div class="stay-avatar">${initials}</div>
          <div class="stay-guest-titles">
            <div class="stay-guest-name">${cleanName}</div>
            <div class="stay-guest-sub">Prenotazione ${conv.channel} · ${conv.stay.room}</div>
          </div>
        </div>
        <div class="stay-header-actions">
          <button class="stay-btn-sync" onclick="triggerHubSync();showToast('Dati prenotazione sincronizzati dal PMS')">
            ${syncIconSm}
            <span>Aggiorna dati</span>
          </button>
          <span class="stay-pill-incasa">In casa adesso</span>
        </div>
      </div>

      <!-- 2. KPI Riepilogo Soggiorno (4 box) -->
      <div class="stay-kpi-grid">
        <div class="stay-kpi-box">
          <span class="stay-kpi-lbl">Arrivo</span>
          <span class="stay-kpi-val">${arrShort}</span>
        </div>
        <div class="stay-kpi-box">
          <span class="stay-kpi-lbl">Partenza</span>
          <span class="stay-kpi-val">${partShort}</span>
        </div>
        <div class="stay-kpi-box">
          <span class="stay-kpi-lbl">Notti</span>
          <span class="stay-kpi-val">${nightsNum}</span>
        </div>
        <div class="stay-kpi-box">
          <span class="stay-kpi-lbl">Ospiti</span>
          <span class="stay-kpi-val">${guestsNum}</span>
        </div>
      </div>

      <!-- 3. Aggancio Prenotazione PMS -->
      <div class="stay-pms-link-box">
        <div class="stay-pms-link-head">
          <span class="stay-pms-link-title">Aggancio prenotazione PMS</span>
          <span class="stay-pms-verified-pill">${ICONS.check} Agganciata (${conv.stay.bookingCode})</span>
        </div>
        <select id="pmsBookingSelect" class="stay-select-input">
          <option value="${conv.stay.bookingCode}" selected>${conv.stay.bookingCode} — ${cleanName} (${conv.stay.room} · ${conv.stay.dates})</option>
          <option value="#DEMO-1052">#DEMO-1052 — Adam Nowak (Suite 18 · 11/10–14/10 Estensione)</option>
          <option value="#BKG-8821">#BKG-8821 — Maria Camila Villamizar (Junior Suite 08 · 29/10–02/11)</option>
        </select>
      </div>

      <!-- 4. Sezione Lingua dei messaggi -->
      <div class="stay-lang-band">
        <div class="stay-lang-title">
          <span style="color:#2E54E8;display:inline-flex;">${ICONS.languages}</span>
          <span>Lingua dei messaggi</span>
        </div>
        <select id="stayLangSelect" class="stay-select-input white">
          <option value="${conv.langCode}" selected>Come scrive l'ospite — ${conv.langName.toLowerCase()}</option>
          <option value="IT">Italiano</option>
          <option value="PL">Polacco</option>
          <option value="ES">Spagnolo</option>
          <option value="EN">Inglese</option>
          <option value="DE">Tedesco</option>
          <option value="FR">Francese</option>
        </select>
        <div class="stay-lang-help">
          L'AI riconosce la lingua dai messaggi dell'ospite. Prima di inviare puoi comunque cambiarla per quel singolo messaggio.
        </div>
      </div>

      <!-- 5. Dati della prenotazione -->
      <div class="stay-section">
        <div class="stay-sec-head">
          <span class="stay-sec-title">Dati della prenotazione</span>
          <span class="stay-sec-sync-note">${syncIconSm} <span>questi li riscrive Beddy a ogni aggiornamento</span></span>
        </div>

        <div class="stay-form-grid">
          <div class="stay-field">
            <label>Nome ${syncIconSm}</label>
            <input type="text" id="stayFirstNameInput" value="${firstName}" />
          </div>
          <div class="stay-field">
            <label>Cognome ${syncIconSm}</label>
            <input type="text" id="stayLastNameInput" value="${lastName}" />
          </div>

          <div class="stay-field">
            <label>Check-in ${syncIconSm}</label>
            <div class="stay-input-icon-wrap">
              <input type="text" value="${checkinFull}" />
              <span class="stay-input-icon">${ICONS.calendar}</span>
            </div>
          </div>
          <div class="stay-field">
            <label>Check-out ${syncIconSm}</label>
            <div class="stay-input-icon-wrap">
              <input type="text" value="${checkoutFull}" />
              <span class="stay-input-icon">${ICONS.calendar}</span>
            </div>
          </div>

          <div class="stay-field">
            <label>Numero ospiti ${syncIconSm}</label>
            <input type="text" value="${guestsNum}" />
          </div>
          <div class="stay-field">
            <label>Telefono</label>
            <input type="text" id="stayPhoneInput" value="${conv.stay.phone}" />
          </div>

          <div class="stay-field">
            <label>Canale</label>
            <input type="text" value="${conv.channel}" readonly />
          </div>
          <div class="stay-field">
            <label>Alloggio ${syncIconSm}</label>
            <input type="text" value="${conv.stay.room}" />
          </div>
        </div>
      </div>

      <!-- 6. Accessi e tag -->
      <div class="stay-section">
        <div class="stay-sec-head-col">
          <span class="stay-sec-title">Accessi e tag</span>
          <span class="stay-sec-sub">Scrivi il nome fra graffe in un messaggio e l'AI ci mette il valore di questo ospite.</span>
        </div>

        <div class="stay-tags-card">
          <div class="stay-tag-row">
            <div class="stay-tag-left" onclick="navigator.clipboard?.writeText('{CODICE_NUKI}');showToast('Tag {CODICE_NUKI} copiato')" title="Copia tag">
              <span class="stay-copy-icon">${ICONS.copy}</span>
              <div class="stay-tag-texts">
                <span class="stay-tag-code">{CODICE_NUKI}</span>
                <span class="stay-tag-desc">Codice Nuki</span>
              </div>
            </div>
            <input type="text" id="stayNukiInput" class="stay-tag-val-input" value="${nukiCode}" />
          </div>

          <div class="stay-tag-row">
            <div class="stay-tag-left" onclick="navigator.clipboard?.writeText('{CHECKIN_ONLINE_PIN}');showToast('Tag {CHECKIN_ONLINE_PIN} copiato')" title="Copia tag">
              <span class="stay-copy-icon">${ICONS.copy}</span>
              <div class="stay-tag-texts">
                <span class="stay-tag-code">{CHECKIN_ONLINE_PIN}</span>
                <span class="stay-tag-desc">PIN check-in online</span>
              </div>
            </div>
            <input type="text" id="stayPinInput" class="stay-tag-val-input" value="${checkinPin}" />
          </div>
        </div>
      </div>
    </div>

    <!-- 7. Sticky Footer -->
    <div class="stay-modal-footer">
      <button class="stay-btn-cancel" onclick="closeModal()">Annulla</button>
      <button class="stay-btn-save" onclick="confirmBookingLinkChange()">Salva</button>
    </div>
  `;
  modal.classList.add('open');
}

function confirmBookingLinkChange() {
  const sel = document.getElementById('pmsBookingSelect');
  const langEl = document.getElementById('stayLangSelect');
  const phoneEl = document.getElementById('stayPhoneInput');
  const nukiEl = document.getElementById('stayNukiInput');
  const pinEl = document.getElementById('stayPinInput');
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  if (sel && sel.value) {
    conv.stay.bookingCode = sel.value;
    conv.stay.pmsVerified = true;
  }
  if (langEl && langEl.value) {
    conv.langCode = langEl.value;
    conv.langName = LANG_LABELS[langEl.value] || conv.langName;
  }
  if (phoneEl && phoneEl.value.trim()) conv.stay.phone = phoneEl.value.trim();
  if (nukiEl && nukiEl.value.trim()) conv.stay.nukiCode = nukiEl.value.trim();
  if (pinEl && pinEl.value.trim()) conv.stay.checkinPin = pinEl.value.trim();

  closeModal();
  renderThread();
  renderSiderAI();
  showToast(`Scheda soggiorno e aggancio PMS (${conv.stay.bookingCode}) salvati`);
}

function openNewConvModal() {
  const modal = document.getElementById('modalBackdrop');
  const content = document.getElementById('modalContent');
  if (!modal || !content) return;
  content.className = 'modal-card';

  content.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #E2E8F0;padding-bottom:10px;">
      <div>
        <div style="font-size:15px;font-weight:700;color:#0F172A;">Nuovo Messaggio da Ricerca Zucchetti Hub</div>
        <div style="font-size:12px;color:#64748B;">Cerca un ospite o una prenotazione per avviare o riaprire il thread</div>
      </div>
      <button type="button" class="faq-close-btn" onclick="closeModal()" aria-label="Chiudi">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>

    <div style="display:flex;flex-direction:column;gap:8px;">
      <input type="text" placeholder="Cerca per nome ospite, #codice prenotazione, telefono o camera..." style="height:38px;border:1px solid #CBD5E1;border-radius:8px;padding:0 12px;font-size:12.5px;" />
      <div style="font-size:11px;font-weight:600;color:#64748B;">PRENOTAZIONI ATTIVE / IN ARRIVO DA ZUCCHETTI HUB:</div>
      ${CONVERSATIONS.map(c => `
        <div onclick="selectConversation('${c.id}');closeModal();openDraftEditor();" style="padding:10px 12px;border:1px solid #E2E8F0;border-radius:8px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;background:#F8FAFC;">
          <div>
            <div style="font-size:13px;font-weight:600;color:#0F172A;">${c.name.replace('↳ ', '')} · <span style="color:#2457E6;">${c.stay.bookingCode}</span></div>
            <div style="font-size:11px;color:#64748B;">${c.stay.room} · ${c.stay.dates} · Canale ${c.channel}</div>
          </div>
          <span class="pill ${c.channelClass}">Apri / Scrivi →</span>
        </div>
      `).join('')}
    </div>
  `;
  modal.classList.add('open');
}

function closeModal() {
  document.getElementById('modalBackdrop')?.classList.remove('open');
}

function removeManualTag(idx) {
  state.manualTags.splice(idx, 1);
  renderThread();
  showToast('Tag manuale rimosso');
}

function addManualTagPrompt() {
  const newTag = prompt('Inserisci il nome del nuovo tag manuale:', 'Garage #14');
  if (newTag && newTag.trim()) {
    state.manualTags.push(newTag.trim());
    renderThread();
    showToast(`Tag manuale "${newTag.trim()}" aggiunto`);
  }
}

function setFolderFilter(folder) {
  showToast(folder === 'incorso' ? 'Filtro: Soggiorno in corso (3)' : 'Filtro: Archiviate (42)');
}

function cycleSortOrder() {
  const el = document.getElementById('sortLabelDesktop');
  if (!el) return;
  el.textContent = el.textContent === 'Ultimo messaggio' ? 'Data check-in' : 'Ultimo messaggio';
  showToast(`Ordinamento: ${el.textContent}`);
}

function sendReplyNow() {
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  if (state.outboundChannel === 'Nota interna') {
    const noteText = (state.drafts[conv.id] || '').trim();
    if (noteText) {
      conv.internalNotes = conv.internalNotes || [];
      conv.internalNotes.push({
        author: 'Operatore Staff',
        channelType: 'Nota interna',
        time: 'Adesso',
        text: noteText
      });
    }
    renderThread();
    showToast('Nota manuale salvata nella timeline della conversazione (visibile solo allo staff)');
    closeDraftEditor();
    return;
  }
  conv.dagestire = false;
  conv.systemEvent2 = `Risposta inviata su ${state.outboundChannel} e tradotta in ${conv.langName} · adesso`;
  renderThread();
  showToast(`Risposta inviata in ${conv.langName} su ${state.outboundChannel}!`);
  closeDraftEditor();
}

function setComposerMode(mode) {
  state.composerMode = mode;
  state.acc_modifica = true;
  if (mode === 'note') {
    state.acc_consegne = false;
  }
  renderSiderAI();
  if (mode === 'note') {
    setTimeout(() => document.getElementById('noteTextarea')?.focus(), 50);
  }
}

function selectNoteType(type) {
  state.noteType = type;
  const guestFirst = (CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0]).name.replace('↳ ', '').split(' ')[0];
  if (type === 'Telefonata') {
    state.noteDraftText = `Concordato al telefono con ${guestFirst} il check-in anticipato alle 13:30 senza supplemento.`;
  } else if (type === 'Di persona') {
    state.noteDraftText = `Accordo preso di persona in reception con ${guestFirst}: consegnato secondo mazzo di chiavi e mappa parcheggio.`;
  } else {
    state.noteDraftText = `Promemoria per il turno serale: verificare se ${guestFirst} utilizza il posto auto #14 entro le 20:00.`;
  }
  renderSiderAI();
}

function updateNoteDraftText(val, el) {
  state.noteDraftText = val;
  if (el) autoResizeTextarea(el);
}

function setNoteAuthor(val) {
  state.noteAuthor = val;
  renderSiderAI();
}

function saveManualNoteFromComposer() {
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  const text = (state.noteDraftText || '').trim();
  if (!text) {
    showToast('Inserisci il testo della nota manuale');
    return;
  }
  conv.internalNotes = conv.internalNotes || [];
  conv.internalNotes.push({
    author: state.noteAuthor,
    channelType: state.noteType,
    time: 'Adesso',
    text
  });
  state.composerMode = 'reply';
  renderThread();
  renderSiderAI();
  showToast(`Nota manuale (${state.noteType}) registrata nella conversazione`);
}

function openManualNoteModal() {
  setComposerMode('note');
}

function rateAiSuggestion(vote) {
  state.aiRating = state.aiRating === vote ? null : vote;
  renderSiderAI();
  if (state.aiRating === 'up') {
    showToast('Giudizio positivo registrato sull\'AI');
  } else if (state.aiRating === 'down') {
    showToast('Segnalazione registrata: il suggerimento AI verrà affinato');
  }
}

function toggleSaveToKb() {
  state.saveToKb = !state.saveToKb;
  renderSiderAI();
  showToast(state.saveToKb
    ? 'Salva in Knowledge Base attivo: questa risposta aggiornerà la KB all\'invio'
    : 'Salva in Knowledge Base disattivato');
}

function triggerOcrExtract() {
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  state.acc_modifica = true;
  state.draftOpen = true;
  const ocrText = conv.ocrAttachment
    ? `${state.drafts[conv.id]}\n\n[Da OCR ${conv.ocrAttachment.fileName}: "${conv.ocrAttachment.extractedText}"]`
    : `${state.drafts[conv.id]}\n\n[Testo estratto da immagine OCR: Targhetta Posto Auto #14 - Livello -1]`;
  state.drafts[conv.id] = ocrText;
  renderSiderAI();
  showToast('Testo estratto da immagine (OCR) e inserito nella bozza');
}

function triggerReviewDraft() {
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  const guestFirstName = conv.name.replace('↳ ', '').split(' ')[0];
  state.acc_modifica = true;
  state.draftOpen = true;
  state.drafts[conv.id] = conv.guestReview
    ? conv.guestReview.aiReplyIt
    : `Ospite ${guestFirstName} davvero esemplare! Comunicazione rapida, appartamento ${conv.stay.room} lasciato in condizioni impeccabili. Consigliatissimo a tutta la community (5★)!`;
  renderSiderAI();
  showToast('Bozza recensione 5★ per l\'ospite generata nell\'editor');
}

function openCreateKbModal() {
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  const modal = document.getElementById('modalBackdrop');
  const content = document.getElementById('modalContent');
  if (!modal || !content) return;

  if (!state.faqDraft) {
    state.faqDraft = {
      question: 'È disponibile un posto auto riservato agli ospiti e qual è la tariffa a notte?',
      answer: 'Disponiamo di posti auto coperti riservati al costo di 15€/notte. L\'accesso al garage avviene direttamente tramite il codice Nuki del proprio appartamento.',
      category: 'Parcheggio & Accessi',
      lang: `IT / ${conv.langCode || 'PL'}`,
      source: 'Chat ospite'
    };
  }
  state.faqDraft.lang = `IT / ${conv.langCode || 'PL'}`;
  const isEditing = !!state.faqEditMode;

  content.className = 'modal-card faq-preview-modal';

  const bookDarkIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`;
  const sparklesWhiteIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`;

  content.innerHTML = `
    <div class="faq-modal-top">
      <div class="faq-modal-title-wrap">
        <div class="icon-badge sm indigo">${ICONS.bookmarkPlus}</div>
        <span class="faq-modal-title">Anteprima FAQ</span>
      </div>
      <div class="faq-modal-top-actions">
        <button type="button" class="faq-edit-link" onclick="toggleFaqEditMode()">
          ${ICONS.pencil}
          <span>${isEditing ? 'Fine modifica' : 'Modifica'}</span>
        </button>
        <button type="button" class="faq-close-btn" onclick="closeModal()" aria-label="Chiudi">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
    </div>

    <div class="faq-modal-body">
      <div class="faq-section-block">
        <div class="faq-section-label">DOMANDA</div>
        ${isEditing ? `
          <input id="kbQuestionInput" type="text" class="faq-box-input" value="${state.faqDraft.question}" oninput="state.faqDraft.question = this.value" />
        ` : `
          <div class="faq-box-question" onclick="toggleFaqEditMode()" title="Clicca per modificare">${state.faqDraft.question}</div>
        `}
      </div>

      <div class="faq-section-block">
        <div class="faq-section-label">RISPOSTA</div>
        ${isEditing ? `
          <textarea id="kbBodyInput" class="faq-box-textarea" rows="3" oninput="state.faqDraft.answer = this.value">${state.faqDraft.answer}</textarea>
        ` : `
          <div class="faq-box-answer" onclick="toggleFaqEditMode()" title="Clicca per modificare">${state.faqDraft.answer}</div>
        `}
      </div>

      <div class="faq-ai-disclaimer">
        <span class="faq-disclaimer-icon">${ICONS.sparkles}</span>
        <span>Contenuto generato dall'AI, può contenere errori: verifica le informazioni importanti.</span>
      </div>

      <div class="faq-meta-grid">
        <div class="faq-meta-card">
          <span class="faq-meta-lbl">Categoria</span>
          ${isEditing ? `
            <select id="kbCategorySelect" class="faq-meta-select" onchange="state.faqDraft.category = this.value">
              <option value="Parcheggio & Accessi" ${state.faqDraft.category === 'Parcheggio & Accessi' ? 'selected' : ''}>Parcheggio & Accessi</option>
              <option value="Servizi camera" ${state.faqDraft.category === 'Servizi camera' ? 'selected' : ''}>Servizi camera</option>
              <option value="Check-in & Orari" ${state.faqDraft.category === 'Check-in & Orari' ? 'selected' : ''}>Check-in & Orari</option>
              <option value="Regolamento" ${state.faqDraft.category === 'Regolamento' ? 'selected' : ''}>Regolamento</option>
            </select>
          ` : `
            <span class="faq-meta-val">${state.faqDraft.category}</span>
          `}
        </div>

        <div class="faq-meta-card">
          <span class="faq-meta-lbl">Lingua</span>
          <span class="faq-meta-val">${state.faqDraft.lang}</span>
        </div>

        <div class="faq-meta-card">
          <span class="faq-meta-lbl">Fonte</span>
          <span class="faq-meta-val">${state.faqDraft.source}</span>
        </div>
      </div>
    </div>

    <div class="faq-bottom-actions">
      <button type="button" class="faq-btn-kb" onclick="saveNewKbEntry('internal')">
        ${bookDarkIcon}
        <span>Salva in KB</span>
      </button>
      <button type="button" class="faq-btn-publish" onclick="saveNewKbEntry('publish')">
        ${sparklesWhiteIcon}
        <span>Pubblica FAQ</span>
      </button>
    </div>
  `;
  modal.classList.add('open');
}

function toggleFaqEditMode() {
  state.faqEditMode = !state.faqEditMode;
  openCreateKbModal();
}

function saveNewKbEntry(publishType) {
  state.saveToKb = true;
  state.faqEditMode = false;
  closeModal();
  renderSiderAI();
  if (publishType === 'publish') {
    showToast('FAQ pubblicata con successo e attiva per le risposte AI!');
  } else {
    showToast('FAQ salvata nella Knowledge Base interna!');
  }
}

function openArrivalsCalendarModal() {
  const modal = document.getElementById('modalBackdrop');
  const content = document.getElementById('modalContent');
  if (!modal || !content) return;
  content.className = 'modal-card';

  content.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #E2E8F0;padding-bottom:10px;">
      <div>
        <div style="font-size:15px;font-weight:700;color:#0F172A;display:flex;align-items:center;gap:6px;"><span style="color:#2E54E8;display:inline-flex;">${ICONS.calendar}</span> <span>Calendario Prenotazioni in Arrivo (Multi-Struttura)</span></div>
        <div style="font-size:12px;color:#64748B;">Vista operativa pre-check-in · Casa Aurora & Villa Bellini (14 arrivi oggi)</div>
      </div>
      <button type="button" class="faq-close-btn" onclick="closeModal()" aria-label="Chiudi">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>

    <div style="display:flex;flex-direction:column;gap:8px;max-height:320px;overflow-y:auto;">
      ${CONVERSATIONS.map(c => `
        <div onclick="selectConversation('${c.id}');closeModal();" style="padding:10px 12px;border:1px solid #E2E8F0;border-radius:8px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;background:#F8FAFC;">
          <div style="display:flex;flex-direction:column;gap:2px;">
            <div style="font-size:13px;font-weight:700;color:#0F172A;">${c.name.replace('↳ ', '')} <span style="font-size:11px;font-weight:600;color:#2E54E8;">(${c.stay.bookingCode})</span></div>
            <div style="font-size:11.5px;color:#475467;display:inline-flex;align-items:center;gap:4px;">${ICONS.mapPin} <span>${c.propertyLabel || 'Casa Aurora'} · <strong>${c.stay.room}</strong> ·</span> ${ICONS.calendar} <span>${c.stay.dates}</span></div>
            <div style="font-size:11px;color:#64748B;">Ospiti: ${c.stay.guests} · Canale: ${c.channel}</div>
          </div>
          <span class="pill-fase ${c.phaseClass}">${c.phaseLabel}</span>
        </div>
      `).join('')}
    </div>

    <div style="display:flex;justify-content:flex-end;margin-top:4px;">
      <button class="btn-correggi-aggancio" style="height:34px;padding:0 14px;" onclick="closeModal()">Chiudi calendario</button>
    </div>
  `;
  modal.classList.add('open');
}

let toastTimer = null;
function showToast(msg) {
  const box = document.getElementById('toastBox');
  if (!box) return;
  box.textContent = msg;
  box.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => box.classList.remove('show'), 2600);
}

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
  renderConversationLists();
  renderThread();
  renderSiderAI();
  window.addEventListener('resize', autoResizeAllDraftTextareas);
});
