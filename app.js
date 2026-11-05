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
  collapseDiag: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/></svg>`,
  moreHoriz: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`,
  smile16: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
  paperclip16: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,
  docTemplate14: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  mic16: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>`,
  close12: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  close14: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  chevronRight14: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  chevronLeft14: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  arrowDownLeft: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="7" x2="7" y2="17"/><polyline points="17 17 7 17 7 7"/></svg>`,
  arrowUpRight: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`,
  cornerDownRight: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 10 20 15 15 20"/><path d="M4 4v7a4 4 0 0 0 4 4h12"/></svg>`,
  plus12: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  utensils14: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>`,
  stickyNote14: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><polyline points="15 3 15 9 21 9"/></svg>`,
  link14: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  key13: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>`,
  save14: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>`,
  bookingIcon: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/></svg>`,
  checkCircle15: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="9 12 11 14 15 10"/></svg>`,
  check13: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  check12: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  sparkles12: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
  refresh: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>`
};

// State
const state = {
  msgRead: {},
  composerExpanded: false, // true = modalità espansa, false = modalità ridotta a pillola
  siderCopilotOpen: false, // toggle pannello AI Copilot nel sider destro
  siderCollapsed: true,    // eventuale chiusura/riapertura sider destro
  bcTemplateOpen: false,
  bcTagsOpen: false,
  bcToneOpen: false,
  bcMoreOpen: false,
  bcTransOpen: false,
  atMentionOpen: false,
  atMentionQuery: '',
  atMentionIndex: 0,
  atMentionRange: null,
  customTranslations: {},
  mpSearchQuery: '',
  mpActiveCategory: 'Tutti',
  draftOpen: false,      // false = vuoto iniziale, true = bozza attiva
  promptMode: false,     // true = vista "Scrivi prompt / Istruzione" attiva
  promptGenerating: false,
  promptText: '',
  composerMode: 'reply',
  guestNoteDrafts: {},
  editingGuestNote: false,
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
        time: '11:15',
        text: 'Concordato con l\'ospite il posto auto coperto #14 a 15€/notte, attende conferma scritta in chat.'
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
        time: '10:05',
        text: 'Confermato arrivo previsto intorno alle 16:30.'
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
        author: 'Marco T. (Reception)',
        time: '09:35',
        text: 'Riconsegna chiavi al check-out: appartamento Deluxe 04 in perfetto ordine, nessun addebito extra.'
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
      return `<span class="prev-arrow in" style="display:inline-flex;align-items:center;vertical-align:middle;">${ICONS.arrowDownLeft}</span> ${text.replace(/^↙\s*/, '')}`;
    }
    if (text.startsWith('↗')) {
      return `<span class="prev-arrow out" style="display:inline-flex;align-items:center;vertical-align:middle;">${ICONS.arrowUpRight}</span> ${text.replace(/^↗\s*/, '')}`;
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
              <span class="conv-nome" style="display:inline-flex;align-items:center;gap:4px;">${ICONS.cornerDownRight} <span>${c.name.replace(/^↳\s*/, '')}</span></span>
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
            <div class="conv-nome-wrap">
              <span class="conv-nome">${c.name}</span>
              ${(c.positivo || c.headerSentiment) ? `<span class="conv-sent-face" title="Sentiment: ${c.headerSentiment || 'Positivo'}">${ICONS.smile16}</span>` : ''}
            </div>
            <span class="conv-data">${c.date}</span>
          </div>
          <div class="conv-badges">
            ${c.dateBadge ? `<span class="pill date">${ICONS.calendar} ${c.dateBadge}</span>` : ''}
            ${c.checkin ? `<span class="pill checkin">${ICONS.calendar} In corso</span>` : ''}
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

  const headerLeftHtml = `
    <span class="titolo-messaggi">${conv.name.replace('↳ ', '')}</span>
    <span class="contatore-msg">${ICONS.msgSquare} ${conv.msgCount}</span>
    <span class="hdr-sentiment-face" onclick="focusGuestSentiment()" title="Sentiment conversazione: ${conv.headerSentiment} (clicca per i dettagli)" style="cursor:pointer;">${ICONS.smile16}</span>
  `;
  const headerLeft = document.getElementById('desktopThreadHeaderLeft');
  if (headerLeft) headerLeft.innerHTML = headerLeftHtml;
  const mobHeaderLeft = document.getElementById('mobileThreadHeaderLeft');
  if (mobHeaderLeft) mobHeaderLeft.innerHTML = headerLeftHtml;

  const langCodeEl = document.getElementById('desktopLangCode');
  const langNameEl = document.getElementById('desktopLangName');
  if (langCodeEl) langCodeEl.innerHTML = getLangFlagSvg(conv.langCode);
  if (langNameEl) langNameEl.textContent = conv.langName;

  const mobLang = document.getElementById('mobLangBadgeLabel');
  const mobAISub = document.getElementById('mobAISubtitle');
  if (mobLang) mobLang.innerHTML = `${getLangFlagSvg(conv.langCode)}<span>${conv.langName}</span>`;
  if (mobAISub) mobAISub.textContent = `${conv.name.replace('↳ ', '')} · ${conv.stay.room}`;

  // Waveform bars (16 bars: 8 #2E54E8, 8 #CBD5E1, exact heights from Figma 312:6984)
  const barHeights = [8, 14, 18, 10, 16, 20, 12, 15, 9, 17, 13, 7, 14, 11, 8, 12];
  const barsHtml = barHeights.map((h, i) => {
    const color = (state.playingAudio || i < 8) ? '#2E54E8' : '#CBD5E1';
    return `<div class="w-bar" style="height:${h}px;background:${color};"></div>`;
  }).join('');

  const manualTagsHtml = state.manualTags.map((t, idx) =>
    `<span class="pill-msg tag-man" onclick="removeManualTag(${idx})" title="Rimuovi tag manuale">${ICONS.user10} <span>${t}</span> ${ICONS.close12}</span>`
  ).join('');

  const needsTranslation = conv.langCode !== 'IT';
  const guestOrigText = conv.id === 'adam'
    ? 'Cześć! Dziękuję za powitanie. Kod działa poprawnie. Mam jeszcze pytanie o parking: czy jest miejsce zarezerwowane dla gości i jaka jest cena za dobę?'
    : conv.preview.replace(/^[↗↙]\s*/, '');
  const guestItText = conv.id === 'adam'
    ? "Ciao! Grazie per il benvenuto. Il codice funziona correttamente. Ho ancora una domanda sul parcheggio: c'è un posto riservato agli ospiti e qual è il prezzo a notte?"
    : "Ciao! Grazie mille per le informazioni, il soggiorno procede benissimo!";

  const messagesHtml = `
    <!-- Blocco Msg 1 Host (312:7429) -->
    <div class="blocco-msg host">
      <div class="meta-row">
        <span class="meta-tu">TU</span>
        <span class="meta-ora">· 11:05 ·</span>
        <span class="meta-ch" title="${conv.channel}">${getChannelBadgeHtml(conv.channel)}</span>
      </div>

      <div class="bolla-blu-host">
        ${needsTranslation ? `
          <div class="bubble-trad-bar host">
            <div class="bubble-trad-bar-left">
              <span class="bubble-trad-sparkle">${ICONS.sparkles}</span>
              <span>Tradotto in ${conv.langName} con AI</span>
            </div>
            <div class="bubble-trad-bar-right">
              <button type="button" class="bubble-trad-lang-btn host" title="Lingue" aria-label="Lingue" onclick="showToast('Traduzione automatica AI: Italiano → ${conv.langName}')">
                ${ICONS.globe}
              </button>
              <button type="button" class="bubble-trad-toggle-btn host" onclick="toggleHostTrad()">
                <span>${state.hostTradOpen ? 'Nascondi traduzione' : 'Mostra traduzione'}</span>
                ${state.hostTradOpen ? ICONS.chevronUp : ICONS.chevronDown}
              </button>
            </div>
          </div>
        ` : ''}
        <div class="bubble-main-text">
          Ciao ${conv.name.replace('↳ ', '').split(' ')[0]}, benvenuto a Casa Aurora! Ecco le informazioni utili per il tuo appartamento (${conv.stay.room}): all'ingresso trovi il tastierino numerico, il tuo codice Nuki è 000000. Ti auguriamo un piacevole soggiorno!
        </div>
        ${needsTranslation && state.hostTradOpen ? `
          <div class="bubble-trad-box host">
            <div class="bubble-trad-box-lbl">TRADUZIONE INVIATA (${conv.langName.toUpperCase()})</div>
            <div class="bubble-trad-box-txt">
              Cześć Adam, witaj w Casa Aurora! Oto przydatne informacje o apartamencie (Suite 14): przy wejściu znajduje się klawiatura numeryczna, kod Nuki to 000000. Życzymy miłego pobytu!
            </div>
          </div>
        ` : ''}
      </div>

      <!-- Card Allegato Host (315:7879) -->
      <div class="card-allegato-host" onclick="showToast('Apertura allegato PDF check-in')" style="cursor:pointer;">
        <div class="icona-file-box">${ICONS.paperclip}</div>
        <div class="info-allegato">
          <span class="nome-file">Guida_Checkin_${conv.stay.room.replace(/\s+/g, '')}.pdf</span>
          <span class="meta-file">PDF · 420 KB</span>
        </div>
      </div>

      <div class="msg-bottom-actions">
        <button class="btn-msg-action copy" onclick="copyThreadMessage('host')" title="Copia messaggio" aria-label="Copia messaggio">
          ${ICONS.copy}
        </button>
        <button class="btn-msg-action delete" onclick="deleteThreadMessage('host')" title="Elimina messaggio" aria-label="Elimina messaggio">
          ${ICONS.trash}
        </button>
      </div>
    </div>

    <!-- Blocco Msg 2 Ospite (312:7447) -->
    <div class="blocco-msg guest">
      <div class="meta-row">
        <span class="meta-ospite">OSPITE · 11:20</span>
      </div>

      <!-- Bolla Bianca Ospite (312:7451) -->
      <div class="bolla-bianca-ospite">
        ${needsTranslation ? `
          <div class="bubble-trad-bar guest">
            <div class="bubble-trad-bar-left">
              <span class="bubble-trad-sparkle guest">${ICONS.sparkles}</span>
              <span>Tradotto dal ${conv.langName} con AI</span>
            </div>
            <div class="bubble-trad-bar-right">
              <button type="button" class="bubble-trad-lang-btn guest" title="Lingue" aria-label="Lingue" onclick="showToast('Traduzione automatica AI: ${conv.langName} → Italiano')">
                ${ICONS.globe}
              </button>
              <button type="button" class="bubble-trad-toggle-btn guest" onclick="toggleGuestTrad()">
                <span>${state.guestTradOpen ? 'Nascondi originale' : 'Mostra originale'}</span>
                ${state.guestTradOpen ? ICONS.chevronUp : ICONS.chevronDown}
              </button>
            </div>
          </div>
        ` : ''}
        <div class="testo-ospite-orig">
          ${needsTranslation ? guestItText : guestOrigText}
        </div>
        ${needsTranslation && state.guestTradOpen ? `
          <div class="bubble-trad-box guest">
            <div class="bubble-trad-box-lbl">TESTO ORIGINALE (${conv.langName.toUpperCase()})</div>
            <div class="bubble-trad-box-txt">${guestOrigText}</div>
          </div>
        ` : ''}
      </div>

      <div class="msg-bottom-actions">
        <button class="btn-msg-action copy" onclick="copyThreadMessage('guest')" title="Copia messaggio" aria-label="Copia messaggio">
          ${ICONS.copy}
        </button>
        ${renderMsgReadAction(conv, 'guest')}
      </div>
    </div>

    ${(conv.importedOcrMessages || []).map((ocrMsg, idx) => `
      <div class="blocco-msg guest ocr-imported-msg">
        <div class="meta-row">
          <span class="meta-ospite">OSPITE · ${ocrMsg.time}</span>
          <span class="ocr-msg-source-pill">
            ${ICONS.scanText}
            <span>Estratto da foto OCR (${ocrMsg.sourceChannel})</span>
          </span>
        </div>

        <div class="bolla-bianca-ospite">
          ${needsTranslation ? `
            <div class="bubble-trad-bar guest">
              <div class="bubble-trad-bar-left">
                <span class="bubble-trad-sparkle guest">${ICONS.sparkles}</span>
                <span>Estratto da screenshot e tradotto dal ${conv.langName} con AI</span>
              </div>
              <div class="bubble-trad-bar-right">
                <button type="button" class="bubble-trad-toggle-btn guest" onclick="toggleOcrMsgOrig(${idx})">
                  <span>${ocrMsg.showOrig ? 'Nascondi originale' : 'Mostra originale'}</span>
                  ${ocrMsg.showOrig ? ICONS.chevronUp : ICONS.chevronDown}
                </button>
              </div>
            </div>
          ` : ''}
          <div class="testo-ospite-orig">
            ${ocrMsg.itText}
          </div>
          ${needsTranslation && ocrMsg.showOrig ? `
            <div class="bubble-trad-box guest">
              <div class="bubble-trad-box-lbl">TESTO ESTRATTO DA FOTO (${conv.langName.toUpperCase()})</div>
              <div class="bubble-trad-box-txt">${ocrMsg.origText}</div>
            </div>
          ` : ''}
        </div>

        <div class="msg-bottom-actions">
          <button class="btn-msg-action copy" onclick="navigator.clipboard?.writeText('${ocrMsg.itText.replace(/'/g, "\\'")}');showToast('Testo copiato negli appunti')" title="Copia messaggio">
            ${ICONS.copy}
          </button>
          <span class="btn-msg-action read-pill" style="cursor:default;">
            ${ICONS.check13}
            <span>Importato</span>
          </span>
        </div>
      </div>
    `).join('')}

    <!-- Blocco Msg 3 Programmato (312:7464) -->
    <div class="blocco-msg host">
      <div class="meta-row">
        <span style="color:#D97706;display:inline-flex;">${ICONS.clock}</span>
        <span style="font-size:11px;font-weight:600;color:#D97706;">PROGRAMMATO OGGI 11:30 ·</span>
        <span class="meta-ch" title="${conv.channel}">${getChannelBadgeHtml(conv.channel)}</span>
        <button type="button" class="meta-sched-btn edit" onclick="openDraftEditor();showToast('Apertura modifica messaggio programmato')" title="Modifica messaggio programmato" aria-label="Modifica messaggio programmato">${ICONS.pencil}</button>
      </div>

      <div class="bolla-programmata">
        ${needsTranslation ? `
          <div class="bubble-trad-bar sched">
            <div class="bubble-trad-bar-left">
              <span class="bubble-trad-sparkle guest">${ICONS.sparkles}</span>
              <span>Tradotto in ${conv.langName} con AI</span>
            </div>
            <div class="bubble-trad-bar-right">
              <button type="button" class="bubble-trad-lang-btn guest" title="Lingue" aria-label="Lingue" onclick="showToast('Traduzione programmata AI: Italiano → ${conv.langName}')">
                ${ICONS.globe}
              </button>
              <button type="button" class="bubble-trad-toggle-btn guest" onclick="toggleSchedTrad()">
                <span>${state.schedTradOpen ? 'Nascondi traduzione' : 'Mostra traduzione'}</span>
                ${state.schedTradOpen ? ICONS.chevronUp : ICONS.chevronDown}
              </button>
            </div>
          </div>
        ` : ''}
        <div class="bubble-main-text">
          Ciao ${conv.name.replace('↳ ', '').split(' ')[0]}, come sta andando il tuo soggiorno? Sul tavolo trovi una breve guida alla raccolta differenziata e alcuni consigli sul quartiere.
        </div>
        ${needsTranslation && state.schedTradOpen ? `
          <div class="bubble-trad-box guest">
            <div class="bubble-trad-box-lbl">TRADUZIONE PROGRAMMATA (${conv.langName.toUpperCase()})</div>
            <div class="bubble-trad-box-txt">
              Cześć Adam, jak mija pobyt? Na stole znajdziesz krótki przewodnik dotyczący segregacji odpadów oraz kilka wskazówek o okolicy.
            </div>
          </div>
        ` : ''}
      </div>

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

function getConvPmsMeta(conv) {
  const metaByConv = {
    adam: {
      checkin: '6 ott 2026',
      checkout: '11 ott 2026',
      arrShort: '6 ott',
      depShort: '11 ott',
      nights: '5',
      checkinFull: conv.stay.checkinFull || '06/10/2026',
      checkoutFull: conv.stay.checkoutFull || '11/10/2026',
      roomShort: conv.stay.room || 'Suite 14',
      guestsShort: '2 adulti',
      guestsNum: conv.stay.guestsNum || '2',
      statusBadge: 'In soggiorno',
      statusClass: 'in-stay',
      preferences: 'Viaggia spesso per lavoro. Apprezza camere tranquille, posto auto coperto riservato e colazione con opzioni senza glutine.',
      treatment: 'Colazione Inclusa',
      price: '€1120',
      handoverNote: 'Adam Nowak chiede disponibilità e tariffa del posto auto coperto #14 per la Suite 14 e modalità di accesso con codice Nuki.',
      nukiCode: conv.stay.nukiCode || '000000',
      checkinPin: conv.stay.checkinPin || '238068',
      touristTax: conv.stay.touristTax || '15',
      checkinLink: conv.stay.checkinLink || 'https://checkin.casaaurora.it/s14',
      sentimentLabel: 'Positivo',
      sentimentScore: '94%',
      sentimentTone: 'Cordiale e collaborativo',
      sentimentSummary: 'Ospite soddisfatto dell\'accoglienza e del funzionamento del codice Nuki. Sta solo richiedendo informazioni pratiche sul parcheggio coperto.',
      sentimentSignals: ['Check-in regolare', 'Tono cortese', 'Richiesta info parcheggio']
    },
    olga: {
      checkin: '6 ott 2026',
      checkout: '11 ott 2026',
      arrShort: '6 ott',
      depShort: '11 ott',
      nights: '5',
      checkinFull: conv.stay.checkinFull || '06/10/2026',
      checkoutFull: conv.stay.checkoutFull || '11/10/2026',
      roomShort: conv.stay.room || 'Suite 14',
      guestsShort: '2 adulti',
      guestsNum: conv.stay.guestsNum || '2',
      statusBadge: 'In soggiorno',
      statusClass: 'in-stay',
      preferences: 'Co-ospite collegata alla prenotazione principale (#DEMO-1048). Preferisce comunicazioni rapide su WhatsApp.',
      treatment: 'Colazione Inclusa',
      price: '€1120',
      handoverNote: 'Olga Nowak ha confermato la ricezione del codice Nuki e ha ritirato la mappa del centro storico in reception.',
      nukiCode: conv.stay.nukiCode || '000000',
      checkinPin: conv.stay.checkinPin || '238068',
      touristTax: conv.stay.touristTax || '15',
      checkinLink: conv.stay.checkinLink || 'https://checkin.casaaurora.it/s14',
      sentimentLabel: 'Positivo',
      sentimentScore: '96%',
      sentimentTone: 'Entusiasta e reattiva',
      sentimentSummary: 'Comunicazione rapida e molto cordiale su WhatsApp. Nessuna criticità segnalata durante l\'accesso alla Suite 14.',
      sentimentSignals: ['Accesso confermato', 'Risposte rapide', 'Nessun reclamo']
    },
    maria: {
      checkin: '29 ott 2026',
      checkout: '2 nov 2026',
      arrShort: '29 ott',
      depShort: '2 nov',
      nights: '4',
      checkinFull: conv.stay.checkinFull || '29/10/2026',
      checkoutFull: conv.stay.checkoutFull || '02/11/2026',
      roomShort: conv.stay.room || 'Junior 08',
      guestsShort: '2 adulti',
      guestsNum: conv.stay.guestsNum || '2',
      statusBadge: 'In soggiorno',
      statusClass: 'in-stay',
      preferences: 'Arrivo previsto nel pomeriggio (16:30). Richiede connessione Wi-Fi ad alte prestazioni e cuscini extra.',
      treatment: 'Colazione Inclusa',
      price: '€890',
      handoverNote: 'Maria Camila Villamizar chiede la password del Wi-Fi veloce per la Junior Suite 08 e gli orari della colazione.',
      nukiCode: conv.stay.nukiCode || '753293',
      checkinPin: conv.stay.checkinPin || '419022',
      touristTax: conv.stay.touristTax || '12',
      checkinLink: conv.stay.checkinLink || 'https://checkin.casaaurora.it/j08',
      sentimentLabel: 'Positivo',
      sentimentScore: '92%',
      sentimentTone: 'Tranquillo e propositivo',
      sentimentSummary: 'L\'ospite apprezza il soggiorno nella Junior Suite 08 e ha fatto domande operative su Wi-Fi e orari della colazione con tono molto gentile.',
      sentimentSignals: ['Soggiorno sereno', 'Richiesta Wi-Fi', 'Tono amichevole']
    },
    cliff: {
      checkin: '25 ott 2026',
      checkout: '28 ott 2026',
      arrShort: '25 ott',
      depShort: '28 ott',
      nights: '3',
      checkinFull: conv.stay.checkinFull || '25/10/2026',
      checkoutFull: conv.stay.checkoutFull || '28/10/2026',
      roomShort: conv.stay.room || 'Deluxe 04',
      guestsShort: '1 adulto',
      guestsNum: conv.stay.guestsNum || '1',
      statusBadge: 'Soggiorno concluso',
      statusClass: 'checkout',
      preferences: 'Soggiorno business individuale. Molto puntuale al check-out, apprezza procedura express senza attese.',
      treatment: 'Solo Pernottamento',
      price: '€640',
      handoverNote: 'Check-out completato per Deluxe 04 in perfetto ordine. Bozza recensione ospite 5★ pronta per la pubblicazione.',
      nukiCode: conv.stay.nukiCode || '551920',
      checkinPin: conv.stay.checkinPin || '883104',
      touristTax: conv.stay.touristTax || '9',
      checkinLink: conv.stay.checkinLink || 'https://checkin.casaaurora.it/d04',
      sentimentLabel: 'Molto positivo',
      sentimentScore: '98%',
      sentimentTone: 'Molto soddisfatto',
      sentimentSummary: 'Soggiorno business concluso senza intoppi. L\'ospite ha ringraziato per la rapidità del check-out express.',
      sentimentSignals: ['Check-out express ok', 'Esperienza 5★', 'Feedback ottimo']
    },
    florian: {
      checkin: '22 ott 2026',
      checkout: '25 ott 2026',
      arrShort: '22 ott',
      depShort: '25 ott',
      nights: '3',
      checkinFull: conv.stay.checkinFull || '22/10/2026',
      checkoutFull: conv.stay.checkoutFull || '25/10/2026',
      roomShort: conv.stay.room || 'Suite 12',
      guestsShort: '2 adulti',
      guestsNum: conv.stay.guestsNum || '2',
      statusBadge: 'Soggiorno concluso',
      statusClass: 'archived',
      preferences: 'Ospite abituale. Apprezza consigli enogastronomici locali e check-in autonomo con SmartLock.',
      treatment: 'Colazione Inclusa',
      price: '€780',
      handoverNote: 'Soggiorno concluso e archiviato. Saluto finale e recensione Airbnb già inviati.',
      nukiCode: conv.stay.nukiCode || '330194',
      checkinPin: conv.stay.checkinPin || '192837',
      touristTax: conv.stay.touristTax || '12',
      checkinLink: conv.stay.checkinLink || 'https://checkin.casaaurora.it/s12',
      sentimentLabel: 'Molto positivo',
      sentimentScore: '99%',
      sentimentTone: 'Fidelizzato e cordiale',
      sentimentSummary: 'Ospite ricorrente pienamente soddisfatto dei consigli locali e dell\'autonomia garantita dallo SmartLock.',
      sentimentSignals: ['Ospite abituale', 'Recensione 5★', 'Tono caloroso']
    }
  };
  return metaByConv[conv.id] || metaByConv.adam;
}

// Toggle collapsible sections in Dettagli ospite
function toggleGsAccordion(sec) {
  state.gsAccOpen = state.gsAccOpen || { contatti: true, prenotazione: true, note: true };
  state.gsAccOpen[sec] = !state.gsAccOpen[sec];
  renderSiderAI();
}

// Render Right Sider: Dettagli ospite (compatta per 1080px, info d'azione in alto, sezioni accordion, sentiment su 1 riga con tooltip)
function renderSiderAI() {
  const deskSider = document.getElementById('desktopSiderAI');
  const mobSider = document.getElementById('mobileSiderAI');
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];

  if (deskSider) {
    deskSider.style.display = state.siderCollapsed ? 'none' : 'flex';
  }
  const deskToggleBtn = document.getElementById('btnToggleGuestSiderDesk');
  if (deskToggleBtn) {
    deskToggleBtn.classList.toggle('active', !state.siderCollapsed);
  }

  state.gsAccOpen = state.gsAccOpen || { contatti: true, prenotazione: true, note: true };

  const cleanName = conv.name.replace('↳ ', '').replace(/\s*\(.*?\)\s*/g, '').trim();
  const nameParts = cleanName.split(' ');
  const firstName = nameParts.slice(0, -1).join(' ') || nameParts[0] || 'Ospite';
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';
  const initials = ((firstName[0] || '') + (lastName[0] || firstName[1] || '')).toUpperCase();

  const m = getConvPmsMeta(conv);

  const currentNoteObj = (conv.internalNotes && conv.internalNotes[0]) || {
    author: 'Sara M. (Reception)',
    time: '11:15',
    text: m.handoverNote || ''
  };
  const currentNoteDraft = typeof state.guestNoteDrafts[conv.id] === 'string'
    ? state.guestNoteDrafts[conv.id]
    : currentNoteObj.text;

  const isContattiOpen = state.gsAccOpen.contatti !== false;
  const isPrenotazioneOpen = state.gsAccOpen.prenotazione !== false;
  const isNoteOpen = state.gsAccOpen.note !== false;

  const sentimentTooltipTitle = `Analisi su ${conv.msgCount} messaggi · ${m.sentimentTone || 'Cordiale'}`;
  const sentimentTooltipText = m.sentimentSummary || 'Conversazione fluida e cordiale, nessuna criticità rilevata.';

  const html = `
    <!-- Top Header: Dettagli ospite con icona senza sfondo (visibile solo su Desktop; su Mobile è nell'intestazione-thread in alto) -->
    <div class="gs-topbar">
      <div class="gs-topbar-left">
        <span class="gs-header-plain-icon">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </span>
        <span class="gs-topbar-title">Dettagli ospite</span>
      </div>
    </div>

    <!-- Scrollable Content -->
    <div class="gs-scroll-body">

      <!-- 1. HERO ACTION BAR: Identità, Stato e Date Soggiorno sempre in primo piano -->
      <div class="gs-section gs-hero-section">
        <div class="gs-guest-top">
          <div class="gs-guest-identity">
            <div class="gs-avatar">${initials}</div>
            <div class="gs-name-wrap">
              <div class="gs-name">${cleanName}</div>
              <div class="gs-booking-sub">${conv.stay.bookingCode} · ${conv.channel}</div>
            </div>
          </div>
          <span class="gs-status-pill ${m.statusClass}">${m.statusBadge}</span>
        </div>

        <div class="gs-kpi-mini-grid gs-hero-kpi-grid">
          <div class="gs-kpi-mini-box">
            <span class="gs-kpi-mini-label">Arrivo</span>
            <span class="gs-kpi-mini-val">${m.arrShort}</span>
          </div>
          <div class="gs-kpi-mini-box">
            <span class="gs-kpi-mini-label">Partenza</span>
            <span class="gs-kpi-mini-val">${m.depShort}</span>
          </div>
          <div class="gs-kpi-mini-box">
            <span class="gs-kpi-mini-label">Notti</span>
            <span class="gs-kpi-mini-val">${m.nights}</span>
          </div>
          <div class="gs-kpi-mini-box">
            <span class="gs-kpi-mini-label">Ospiti</span>
            <span class="gs-kpi-mini-val">${m.guestsNum}</span>
          </div>
        </div>
      </div>

      <!-- 2. ACCORDION: Contatti & Lingua (aperta di default) -->
      <div class="gs-section gs-acc-section ${isContattiOpen ? 'is-open' : 'is-collapsed'}">
        <div class="gs-acc-head" onclick="toggleGsAccordion('contatti')" role="button" tabindex="0" aria-expanded="${isContattiOpen}">
          <span class="gs-section-title">Contatti & Lingua</span>
          <div class="gs-acc-head-right">
            <span class="gs-acc-chevron">${ICONS.chevronDown}</span>
          </div>
        </div>

        ${isContattiOpen ? `
          <div class="gs-acc-body">
            <div class="gs-contact-list">
              <div class="gs-contact-row" onclick="navigator.clipboard?.writeText('${conv.stay.phone}');showToast('Numero copiato negli appunti')" title="Clicca per copiare il telefono" style="cursor:pointer;">
                <span class="gs-plain-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <span class="gs-contact-label">Telefono</span>
                <span class="gs-contact-val">${conv.stay.phone}</span>
              </div>

              <div class="gs-contact-row" onclick="navigator.clipboard?.writeText('${conv.stay.email}');showToast('Email copiata negli appunti')" title="Clicca per copiare l'email" style="cursor:pointer;">
                <span class="gs-plain-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </span>
                <span class="gs-contact-label">Email</span>
                <span class="gs-contact-val">${conv.stay.email}</span>
              </div>

              <div class="gs-contact-row gs-lang-row">
                <span class="gs-plain-icon">
                  ${ICONS.globe}
                </span>
                <span class="gs-contact-label">Lingua</span>
                <div class="gs-lang-pill-wrap">
                  <span class="gs-lang-flag-icon">${getLangFlagSvg(conv.langCode)}</span>
                  <select class="gs-lang-quick-select" onchange="setOutboundLanguage(this.value)" title="Cambia lingua dell'ospite">
                    <option value="PL" ${conv.langCode === 'PL' ? 'selected' : ''}>Polacco</option>
                    <option value="IT" ${conv.langCode === 'IT' ? 'selected' : ''}>Italiano</option>
                    <option value="EN" ${conv.langCode === 'EN' ? 'selected' : ''}>Inglese</option>
                    <option value="ES" ${conv.langCode === 'ES' ? 'selected' : ''}>Spagnolo</option>
                    <option value="DE" ${conv.langCode === 'DE' ? 'selected' : ''}>Tedesco</option>
                    <option value="FR" ${conv.langCode === 'FR' ? 'selected' : ''}>Francese</option>
                  </select>
                  <span class="gs-lang-chevron">${ICONS.chevronDown}</span>
                </div>
              </div>
            </div>
          </div>
        ` : ''}
      </div>

      <!-- 3. ACCORDION: Prenotazione & Alloggio (aperta di default) -->
      <div class="gs-section gs-acc-section ${isPrenotazioneOpen ? 'is-open' : 'is-collapsed'}">
        <div class="gs-acc-head" onclick="toggleGsAccordion('prenotazione')" role="button" tabindex="0" aria-expanded="${isPrenotazioneOpen}">
          <span class="gs-section-title">Prenotazione & Alloggio</span>
          <span class="gs-acc-chevron">${ICONS.chevronDown}</span>
        </div>

        ${isPrenotazioneOpen ? `
          <div class="gs-acc-body">
            <div class="gs-info-rows">
              <div class="gs-info-row">
                <span class="gs-info-label">Alloggio</span>
                <span class="gs-info-val">${conv.stay.room} · ${conv.propertyLabel || 'Casa Aurora'}</span>
              </div>
              <div class="gs-info-row">
                <span class="gs-info-label">Trattamento</span>
                <span class="gs-info-val">${m.treatment}</span>
              </div>
              <div class="gs-info-row gs-info-row-total">
                <span class="gs-info-label">Totale soggiorno</span>
                <span class="gs-info-val gs-info-total-val">${m.price}</span>
              </div>
            </div>
          </div>
        ` : ''}
      </div>

      <!-- 4. ACCORDION: Note Ospite (più in basso, collassabile) -->
      <div class="gs-section gs-acc-section gs-note-section ${isNoteOpen ? 'is-open' : 'is-collapsed'}" id="gsGuestNoteSection">
        <div class="gs-acc-head" onclick="toggleGsAccordion('note')" role="button" tabindex="0" aria-expanded="${isNoteOpen}">
          <div class="gs-note-title-row">
            <span class="gs-plain-icon">${ICONS.stickyNote14}</span>
            <span class="gs-section-title">Note ospite</span>
          </div>
          <div class="gs-acc-head-right">
            <span class="gs-note-time">${currentNoteObj.author} · ${currentNoteObj.time}</span>
            <button
              type="button"
              class="gs-note-edit-btn ${state.editingGuestNote ? 'active' : ''}"
              onclick="event.stopPropagation();toggleGuestNoteEdit()"
              title="${state.editingGuestNote ? 'Annulla modifica' : 'Modifica nota ospite'}"
              aria-label="${state.editingGuestNote ? 'Annulla modifica' : 'Modifica nota ospite'}"
            >
              ${ICONS.pencil}
            </button>
            <span class="gs-acc-chevron">${ICONS.chevronDown}</span>
          </div>
        </div>

        ${isNoteOpen ? `
          <div class="gs-acc-body">
            ${state.editingGuestNote ? `
              <form class="gs-note-form" onsubmit="event.preventDefault();saveGuestDetailNote();">
                <textarea
                  id="guestDetailNoteInput"
                  class="gs-note-textarea"
                  rows="2"
                  placeholder="Scrivi o modifica la nota per questo ospite..."
                  oninput="updateGuestDetailNoteDraft(this.value)"
                >${currentNoteDraft}</textarea>
                <div class="gs-note-form-actions">
                  <button type="submit" class="gs-note-save-btn">
                    ${ICONS.save14}
                    <span>Salva nota</span>
                  </button>
                </div>
              </form>
            ` : `
              <div class="gs-note-display ${!currentNoteObj.text ? 'empty' : ''}">
                ${currentNoteObj.text || 'Nessuna nota presente per questo ospite.'}
              </div>
            `}
          </div>
        ` : ''}
      </div>

      <!-- 5. SENTIMENT COMPATTO SU 1 RIGA CON BADGE + TOOLTIP -->
      <div class="gs-section gs-sentiment-section gs-sentiment-compact-row" id="gsSentimentSection">
        <div class="gs-sentiment-compact-left">
          <span class="gs-sentiment-face-badge">${ICONS.smile16}</span>
          <span class="gs-sentiment-title">Sentiment</span>
        </div>
        <div class="gs-sentiment-compact-right">
          <span class="gs-sentiment-pill">${m.sentimentLabel || 'Positivo'}</span>
          <div class="gs-sentiment-tooltip-wrap" tabindex="0" aria-label="${sentimentTooltipTitle}: ${sentimentTooltipText}">
            <button type="button" class="gs-sentiment-info-btn" aria-label="Dettagli sentiment">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4"/>
                <path d="M12 8h.01"/>
              </svg>
            </button>
            <div class="gs-sentiment-tooltip" role="tooltip">
              <div class="gs-sentiment-tooltip-hdr">${sentimentTooltipTitle}</div>
              <div class="gs-sentiment-tooltip-body">${sentimentTooltipText}</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  `;

  if (deskSider) deskSider.innerHTML = html;
  if (mobSider) mobSider.innerHTML = html;
  renderBottomComposer();
}

function focusGuestSentiment() {
  if (state.viewport === 'mobile') {
    setMobileScreen('ai');
  } else if (state.siderCollapsed) {
    state.siderCollapsed = false;
    renderSiderAI();
  }
  setTimeout(() => {
    const cards = document.querySelectorAll('.gs-sentiment-section');
    cards.forEach(card => {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      card.classList.remove('gs-sentiment-highlight', 'gs-tooltip-force-show');
      void card.offsetWidth;
      card.classList.add('gs-sentiment-highlight', 'gs-tooltip-force-show');
      setTimeout(() => {
        card.classList.remove('gs-tooltip-force-show');
      }, 3200);
    });
  }, 60);
}

function getChannelBadgeHtml(channel) {
  const ch = (channel || 'WhatsApp').toLowerCase();
  if (ch.includes('whatsapp')) {
    return `<span class="bc-ch-circle whatsapp"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>`;
  }
  if (ch.includes('airbnb')) {
    return `<span class="bc-ch-circle airbnb"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C9.5 6 4 13.5 4 17.5A4.5 4.5 0 0 0 8.5 22c1.8 0 3.4-1.1 3.5-1.2.1.1 1.7 1.2 3.5 1.2a4.5 4.5 0 0 0 4.5-4.5C20 13.5 14.5 6 12 2Z"/><path d="M12 19.5c-1.7-1.6-2.8-3.3-2.8-4.8a2.8 2.8 0 0 1 5.6 0c0 1.5-1.1 3.2-2.8 4.8Z"/></svg></span>`;
  }
  if (ch.includes('booking')) {
    return `<span class="bc-ch-circle booking">${ICONS.bookingIcon}</span>`;
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

function getLangFlagSvg(code) {
  const c = (code || 'IT').toUpperCase();
  if (c === 'PL') {
    return `<svg class="lang-flag-svg" width="16" height="12" viewBox="0 0 16 12" aria-hidden="true"><rect width="16" height="6" fill="#FFFFFF"/><rect y="6" width="16" height="6" fill="#DC143C"/><rect x="0.5" y="0.5" width="15" height="11" rx="2" fill="none" stroke="rgba(15,23,42,0.12)"/></svg>`;
  }
  if (c === 'DE') {
    return `<svg class="lang-flag-svg" width="16" height="12" viewBox="0 0 16 12" aria-hidden="true"><rect width="16" height="4" fill="#111827"/><rect y="4" width="16" height="4" fill="#DD0000"/><rect y="8" width="16" height="4" fill="#FFCE00"/><rect x="0.5" y="0.5" width="15" height="11" rx="2" fill="none" stroke="rgba(15,23,42,0.12)"/></svg>`;
  }
  if (c === 'EN') {
    return `<svg class="lang-flag-svg" width="16" height="12" viewBox="0 0 16 12" aria-hidden="true"><rect width="16" height="12" fill="#012169"/><path d="M0 0L16 12M16 0L0 12" stroke="#FFFFFF" stroke-width="2.4"/><path d="M0 0L16 12M16 0L0 12" stroke="#C8102E" stroke-width="1.2"/><path d="M8 0V12M0 6H16" stroke="#FFFFFF" stroke-width="3.6"/><path d="M8 0V12M0 6H16" stroke="#C8102E" stroke-width="2"/><rect x="0.5" y="0.5" width="15" height="11" rx="2" fill="none" stroke="rgba(15,23,42,0.12)"/></svg>`;
  }
  if (c === 'ES') {
    return `<svg class="lang-flag-svg" width="16" height="12" viewBox="0 0 16 12" aria-hidden="true"><rect width="16" height="3" fill="#AA151B"/><rect y="3" width="16" height="6" fill="#F1BF00"/><rect y="9" width="16" height="3" fill="#AA151B"/><rect x="0.5" y="0.5" width="15" height="11" rx="2" fill="none" stroke="rgba(15,23,42,0.12)"/></svg>`;
  }
  if (c === 'FR') {
    return `<svg class="lang-flag-svg" width="16" height="12" viewBox="0 0 16 12" aria-hidden="true"><rect width="5.33" height="12" fill="#002395"/><rect x="5.33" width="5.34" height="12" fill="#FFFFFF"/><rect x="10.67" width="5.33" height="12" fill="#ED2939"/><rect x="0.5" y="0.5" width="15" height="11" rx="2" fill="none" stroke="rgba(15,23,42,0.12)"/></svg>`;
  }
  return `<svg class="lang-flag-svg" width="16" height="12" viewBox="0 0 16 12" aria-hidden="true"><rect width="5.33" height="12" fill="#009246"/><rect x="5.33" width="5.34" height="12" fill="#FFFFFF"/><rect x="10.67" width="5.33" height="12" fill="#CE2B37"/><rect x="0.5" y="0.5" width="15" height="11" rx="2" fill="none" stroke="rgba(15,23,42,0.12)"/></svg>`;
}

const AT_SIGN_SVG = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg>`;

function getAvailablePmsTags(conv) {
  const c = conv || CONVERSATIONS.find(x => x.id === state.selectedConvId) || CONVERSATIONS[0];
  const firstName = (c?.name || 'Adam').replace('↳ ', '').split(' ')[0];
  const room = c?.stay?.room || 'Suite 14';
  const nuki = c?.stay?.nukiCode || '000000';
  return [
    { key: 'Ospite', token: '@Ospite', value: firstName, desc: 'Nome ospite' },
    { key: 'Camera', token: '@Camera', value: room, desc: 'Alloggio assegnato' },
    { key: 'Nuki', token: '@Nuki', value: nuki, desc: 'Codice tastierino' },
    { key: 'Check-in', token: '@Check-in', value: '15:00', desc: 'Orario check-in' },
    { key: 'Check-out', token: '@Check-out', value: '11:00', desc: 'Orario check-out' },
    { key: 'Wi-Fi', token: '@Wi-Fi', value: 'AuroraGuest2026', desc: 'Password rete Wi-Fi' }
  ];
}

function resolvePmsTagsInText(text, conv) {
  if (!text) return '';
  const tags = getAvailablePmsTags(conv);
  let out = text;
  tags.forEach(t => {
    const escapedKey = t.key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const reAt = new RegExp(`@${escapedKey}(?![A-Za-zÀ-ÿ0-9_-])`, 'gi');
    const reBrace = new RegExp(`\\{${escapedKey}\\}`, 'gi');
    out = out.replace(reAt, t.value).replace(reBrace, t.value);
  });
  return out;
}

function escapeHtmlForBackdrop(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderHighlightedDraftHtml(text) {
  if (!text) return '';
  const escaped = escapeHtmlForBackdrop(text);
  // Evidenzia in azzurrino grassetto qualsiasi @Tag (es. @Ospite, @Camera, @Check-in, @Wi-Fi o @parola) e {Tag}
  const highlighted = escaped.replace(
    /(@[A-Za-zÀ-ÿ0-9_-]+|\{[A-Za-zÀ-ÿ0-9_-]+\})/g,
    '<mark class="bc-tag-highlight">$1</mark>'
  );
  return highlighted.endsWith('\n') ? highlighted + ' ' : highlighted;
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
  const transPopoverHtml = state.bcTransOpen ? renderTranslationPopoverHtml(conv, draftVal, hasText) : '';
  const isCustomTrans = Boolean(hasText && state.customTranslations && state.customTranslations[conv.id]);
  const langPillHtml = `
    <div class="bc-lang-anchor">
      ${transPopoverHtml}
      <button
        type="button"
        class="bc-lang-pill ${hasText ? 'has-text' : ''} ${state.bcTransOpen ? 'active' : ''} ${isCustomTrans ? 'is-edited' : ''}"
        onclick="toggleTranslationPopover(event)"
        title="${hasText ? `Clicca per vedere e modificare la traduzione in ${conv.langName}` : `Anteprima traduzione in ${conv.langName}`}"
        aria-label="Traduzione in ${conv.langName}"
      >
        <span class="bc-lang-flag">${getLangFlagSvg(conv.langCode)}</span>
        <span class="bc-lang-name">${conv.langName}</span>
        ${hasText ? `<span class="bc-lang-status-dot ${isCustomTrans ? 'edited' : ''}" title="${isCustomTrans ? 'Traduzione modificata manualmente' : 'Traduzione pronta'}"></span>` : ''}
        <span class="bc-chevron-blue ${state.bcTransOpen ? 'open' : ''}">${ICONS.chevronDown}</span>
      </button>
    </div>
  `;

  if (!state.composerExpanded) {
    // COLLAPSED MODE (selettore canale e lingua a sinistra di Invia; 2 righe mobile-first su schermi mobile)
    html = `
      <div class="bc-collapsed">
        <div class="bc-collapsed-input-row">
          <button type="button" class="bc-icon-btn" onclick="toggleAttachFile()" title="Allega file">
            ${ICONS.paperclip16}
          </button>

          <input
            type="text"
            class="bc-collapsed-input"
            placeholder="Scrivi un messaggio..."
            value="${draftVal.replace(/"/g, '&quot;').replace(/\n/g, ' ')}"
            oninput="handleComposerInput(this.value)"
            onkeydown="if(event.key==='Enter')sendReplyNow()"
          />

          <button type="button" class="bc-icon-btn" onclick="triggerVoiceDictation()" title="Dettatura vocale">
            ${ICONS.mic16}
          </button>
        </div>

        <div class="bc-collapsed-controls-row">
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
            </select>
          </div>

          <!-- Language Pill (left of Invia) -->
          ${langPillHtml}

          <button type="button" class="bc-send-btn collapsed ${hasText ? 'ready' : ''}" onclick="sendReplyNow()" title="Invia" aria-label="Invia">
            ${ICONS.sendHoriz}
          </button>
        </div>
      </div>
    `;
  } else {
    // EXPANDED MODE (1:1 with screenshot 1 + Template & Tag disponibili in the upper part)
    html = `
      <div class="bc-expanded">
        <!-- Popovers anchored above the composer -->
        ${state.bcMoreOpen ? `
          <div class="bc-floating-popover more-pop">
            <div class="bc-pop-header">
              <span>Azioni aggiuntive</span>
              <button type="button" class="bc-pop-close" onclick="toggleBcPopover(null)">${ICONS.close12}</button>
            </div>
            <div class="bc-pop-list">
              <button type="button" class="bc-pop-item" onclick="toggleBcPopover(null);toggleSchedulePopover();">
                ${ICONS.clock}
                <span>Programma invio (${state.schedHour}:${state.schedMin})</span>
              </button>
              <button type="button" class="bc-pop-item" onclick="toggleBcPopover(null);openCreateKbModal();">
                ${ICONS.bookmarkPlus}
                <span>Crea / Aggiorna FAQ in Knowledge Base</span>
              </button>
            </div>
          </div>
        ` : ''}

        <!-- Mobile bottom-sheet grab handle -->
        <div class="bc-mobile-sheet-handle" onclick="toggleComposerExpand(false)" title="Tocca per ridurre">
          <span class="bc-mobile-sheet-bar"></span>
        </div>

        <!-- 1. Top Header Bar (with Template, Tag disponibili & OCR in the upper part) -->
        <div class="bc-header">
          <div class="bc-header-top-row">
            <span class="bc-title-wrap">
              <span class="bc-WaitSparkle">${ICONS.sparkles16}</span>
              <span class="bc-title-text">Componi risposta</span>
            </span>
          </div>

          <div class="bc-header-pills">
            <!-- Messaggi Pronti Pill (Upper Composer -> apre Modale) -->
            <button type="button" class="bc-top-pill template" onclick="openCannedRepliesModal()" title="Apri Messaggi Pronti">
              ${ICONS.docTemplate14}
              <span>Messaggi pronti</span>
            </button>

            <!-- Tag Disponibili Pill (Upper Composer) -->
            <button type="button" class="bc-top-pill tags ${state.bcTagsOpen ? 'active' : ''}" onclick="toggleBcPopover('tags')" title="Variabili dinamiche soggiorno (@Tag)">
              ${AT_SIGN_SVG}
              <span>Tag disponibili</span>
              <span class="bc-chevron-muted ${state.bcTagsOpen ? 'open' : ''}">${ICONS.chevronDown}</span>
            </button>
          </div>
        </div>

        <!-- Upper Drawer for Tag Disponibili -->
        ${state.bcTagsOpen ? `
          <div class="bc-upper-drawer">
            <div class="bc-upper-drawer-head">
              <div class="bc-upper-drawer-title-group">
                <span class="bc-upper-drawer-title">Variabili dinamiche soggiorno</span>
                <span class="bc-upper-drawer-sub">Clicca per inserire o digita <strong>@</strong> nel testo</span>
              </div>
              <button type="button" class="bc-pop-close" onclick="toggleBcPopover(null)" title="Chiudi">${ICONS.close12}</button>
            </div>
            <div class="bc-tags-grid">
              ${getAvailablePmsTags(conv).map(t => `
                <button type="button" class="bc-tag-chip" onclick="insertTagPMS('${t.token}')" title="Inserisci ${t.token} (${t.value})">
                  <span class="bc-tag-chip-key">${t.token}</span>
                  <span class="bc-tag-chip-val">${t.value}</span>
                </button>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- 2. Middle Body Area -->
        <div class="bc-body">
          ${isNoteMode ? `
            <textarea
              class="bc-textarea"
              id="noteTextarea"
              placeholder="Registra qui cosa è stato detto al telefono o concordato di persona..."
              oninput="updateNoteDraftText(this.value, this)"
            >${state.noteDraftText}</textarea>
          ` : `
            <div class="bc-textarea-wrap">
              <div class="bc-textarea-editor">
                <div class="bc-textarea-backdrop" aria-hidden="true">${renderHighlightedDraftHtml(draftVal)}</div>
                <textarea
                  class="bc-textarea has-backdrop"
                  id="draftTextarea"
                  placeholder="Scrivi un messaggio in italiano (digita @ per inserire un tag)..."
                  oninput="handleComposerInput(this.value, this)"
                  onscroll="syncComposerBackdropScroll(this)"
                  onkeydown="handleComposerKeydown(event, this)"
                  onclick="checkComposerAtMention(this)"
                >${draftVal}</textarea>
              </div>
              <div class="bc-at-mention-host"></div>
              <button
                type="button"
                class="bc-generate-ai-btn"
                onclick="openDraftEditor(false, true)"
                title="Genera con AI"
                data-tooltip="Genera con AI"
                aria-label="Genera con AI"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                </svg>
              </button>
            </div>
          `}

          ${state.attachedFile ? `
            <div class="bc-attached-chip">
              <div style="display:flex;align-items:center;gap:6px;">
                <span style="color:#2563EB;display:inline-flex;">${ICONS.paperclip}</span>
                <span>${state.attachedFile}</span>
              </div>
              <button type="button" class="bc-attached-remove" onclick="toggleAttachFile()">${ICONS.close12}</button>
            </div>
          ` : ''}

          ${state.draftOpen && !isNoteMode ? `
            <div class="bc-ai-feedback-row">
              <div class="bc-ai-rate-left">
                <span>${state.aiRating === 'up' ? 'Risposta AI valutata utile' : state.aiRating === 'down' ? 'Risposta AI segnalata da migliorare' : 'Valuta risposta AI'}</span>
                <button type="button" class="btn-rate-ai rate-up ${state.aiRating === 'up' ? 'active' : ''}" onclick="rateAiSuggestion('up')" title="Risposta AI utile">${ICONS.thumbsUp}</button>
                <button type="button" class="btn-rate-ai rate-down ${state.aiRating === 'down' ? 'active' : ''}" onclick="rateAiSuggestion('down')" title="Segnala risposta AI da migliorare">${ICONS.thumbsDown}</button>
              </div>
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
            <button type="button" class="bc-pill-btn ai-tone" onclick="improveDraftText()" title="Migliora il testo con l'AI">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              <span>Migliora con AI</span>
            </button>
            <button type="button" class="bc-icon-btn" onclick="triggerVoiceDictation()" title="Dettatura vocale">
              ${ICONS.mic16}
            </button>
            <button type="button" class="bc-icon-btn ${state.bcMoreOpen ? 'active' : ''}" onclick="toggleBcPopover('more')" title="Altre opzioni (Programma invio, OCR, FAQ)">
              ${ICONS.moreHoriz}
            </button>
          </div>

          <div class="bc-tools-right">
            <button type="button" class="bc-expand-btn bc-collapse-bottom-btn" onclick="toggleComposerExpand(false)" title="Riduci composer">
              ${ICONS.collapseDiag}
              <span>Riduci</span>
            </button>
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
                </select>
              </div>

              <!-- Language Pill (in basso a sinistra di Invia) -->
              ${langPillHtml}

              <button type="button" class="bc-send-btn expanded ${hasText ? 'ready' : ''}" onclick="sendReplyNow()" title="Invia" aria-label="Invia">
                ${ICONS.sendHoriz}
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }

  if (deskComp) {
    deskComp.classList.toggle('is-expanded', !!state.composerExpanded);
    deskComp.innerHTML = html;
  }
  if (mobComp) {
    mobComp.classList.toggle('is-expanded', !!state.composerExpanded);
    mobComp.innerHTML = html;
  }
  if (state.bcTransOpen) {
    requestAnimationFrame(autoResizeTransTextarea);
  }
}

function autoResizeTransTextarea() {
  document.querySelectorAll('.bc-trans-textarea').forEach(el => {
    el.style.height = 'auto';
    if (el.scrollHeight > 0) {
      el.style.height = Math.min(200, Math.max(84, el.scrollHeight + 2)) + 'px';
    }
  });
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

function translateDraftToLang(italianText, langCode, conv) {
  const raw = resolvePmsTagsInText((italianText || '').trim(), conv);
  if (!raw) return '';
  const firstName = (conv?.name || 'Adam').replace('↳ ', '').split(' ')[0];
  const room = conv?.stay?.room || 'Suite 14';
  const nuki = conv?.stay?.nukiCode || '000000';

  if (langCode === 'IT') return raw;

  const norm = raw.toLowerCase();

  // Risposte note (AI / parcheggio / check-in / wifi)
  if (norm.includes('posto auto') || norm.includes('parcheggio') || norm.includes('garage')) {
    const isDiscount = norm.includes('10€');
    const price = isDiscount ? '10€' : '15€';
    if (langCode === 'PL') {
      return `Cześć ${firstName}! Potwierdzam, że kryte miejsce parkingowe nr 14 (zarezerwowane dla ${room}) jest dostępne w naszym wewnętrznym garażu w cenie ${price}/doba. Wjazd otworzysz bezpośrednio swoim kodem Nuki ${nuki}. Daj znać, jeśli chcesz je zarezerwować!`;
    }
    if (langCode === 'EN') {
      return `Hi ${firstName}! I can confirm that covered parking spot #14 (reserved for ${room}) is available in our indoor garage for ${price}/night. You can open the gate directly with your Nuki code ${nuki}. Let me know if you'd like to book it!`;
    }
    if (langCode === 'ES') {
      return `¡Hola ${firstName}! Te confirmo que la plaza de parking cubierta n.º 14 (reservada para la ${room}) está disponible en nuestro garaje interior por ${price}/noche. Puedes abrir el acceso directamente con tu código Nuki ${nuki}. ¡Avísame si deseas confirmarla!`;
    }
    if (langCode === 'DE') {
      return `Hallo ${firstName}! Ich bestätige dir gerne, dass der überdachte Parkplatz Nr. 14 (reserviert für ${room}) in unserer Tiefgarage für ${price}/Nacht verfügbar ist. Du kannst die Einfahrt direkt mit deinem Nuki-Code ${nuki} öffnen.`;
    }
    if (langCode === 'FR') {
      return `Bonjour ${firstName} ! Je vous confirme que la place de parking couverte n° 14 (réservée pour la ${room}) est disponible dans notre garage intérieur à ${price}/nuit. Vous pouvez ouvrir l'accès avec votre code Nuki ${nuki}.`;
    }
  }

  if (norm.includes('wi-fi') || norm.includes('wifi') || norm.includes('colazione')) {
    if (langCode === 'PL') {
      return `Cześć ${firstName}! Oto dane Wi-Fi dla Twojego apartamentu (${room}): sieć "CasaAurora_Guest", hasło "AuroraGuest2026". Przypominamy również, że śniadanie serwowane jest w godzinach 07:00–10:30 na parterze.`;
    }
    if (langCode === 'EN') {
      return `Hi ${firstName}! Here are the Wi-Fi credentials for your ${room}: network "CasaAurora_Guest", password "AuroraGuest2026". Breakfast is served from 07:00 to 10:30 in the ground floor lounge.`;
    }
    if (langCode === 'ES') {
      return `¡Hola ${firstName}! Aquí tienes las credenciales Wi-Fi para tu ${room}: red "CasaAurora_Guest", contraseña "AuroraGuest2026". El desayuno se sirve de 07:00 a 10:30 en la planta baja.`;
    }
  }

  if (norm.includes('check-out') || norm.includes('checkout') || norm.includes('11:00')) {
    if (langCode === 'PL') {
      return `Cześć ${firstName}, przypominamy, że wymeldowanie dla ${room} odbywa się do godziny 11:00. Możesz zostawić kartę na stole w pokoju, a przechowalnia bagażu na parterze jest bezpłatna przez cały dzień!`;
    }
    if (langCode === 'EN') {
      return `Hi ${firstName}, just a friendly reminder that check-out for ${room} is by 11:00 AM. You can leave the key card on the table inside the room; luggage storage on the ground floor is free all day!`;
    }
    if (langCode === 'ES') {
      return `Hola ${firstName}, te recordamos que el check-out para la ${room} es hasta las 11:00. Puedes dejar la llave sobre la mesa; ¡la consigna de equipaje en planta baja es gratuita todo el día!`;
    }
  }

  // Traduzione dinamica frasi libere digitate dall'utente nel composer
  if (langCode === 'PL') {
    let pl = raw
      .replace(/\bciao\b/gi, 'Cześć')
      .replace(/\bbuongiorno\b/gi, 'Dzień dobry')
      .replace(/\bbuonasera\b/gi, 'Dobry wieczór')
      .replace(/\bgrazie mille\b/gi, 'bardzo dziękuję')
      .replace(/\bgrazie\b/gi, 'dziękuję')
      .replace(/\bprego\b/gi, 'proszę bardzo')
      .replace(/\bsì\b|\bsi\b/gi, 'tak')
      .replace(/\bno\b/gi, 'nie')
      .replace(/\bconfermo\b/gi, 'potwierdzam')
      .replace(/\bdisponibile\b/gi, 'dostępne')
      .replace(/\ba notte\b/gi, 'za dobę')
      .replace(/\bcamera\b/gi, 'pokój')
      .replace(/\bappartamento\b/gi, 'apartament')
      .replace(/\bcodice\b/gi, 'kod')
      .replace(/\ba presto\b/gi, 'do zobaczenia wkrótce')
      .replace(/\bbuon soggiorno\b/gi, 'miłego pobytu');
    if (pl === raw) {
      return `Cześć ${firstName}! ${raw} (tłumaczenie PL)`;
    }
    return pl;
  }

  if (langCode === 'EN') {
    let en = raw
      .replace(/\bciao\b/gi, 'Hi')
      .replace(/\bbuongiorno\b/gi, 'Good morning')
      .replace(/\bbuonasera\b/gi, 'Good evening')
      .replace(/\bgrazie mille\b/gi, 'thank you very much')
      .replace(/\bgrazie\b/gi, 'thank you')
      .replace(/\bconfermo\b/gi, 'I confirm')
      .replace(/\bdisponibile\b/gi, 'available')
      .replace(/\ba notte\b/gi, 'per night');
    return en === raw ? `Hi ${firstName}! ${raw}` : en;
  }

  if (langCode === 'ES') {
    let es = raw
      .replace(/\bciao\b/gi, 'Hola')
      .replace(/\bbuongiorno\b/gi, 'Buenos días')
      .replace(/\bbuonasera\b/gi, 'Buenas tardes')
      .replace(/\bgrazie\b/gi, 'gracias')
      .replace(/\bconfermo\b/gi, 'confirmo')
      .replace(/\bdisponibile\b/gi, 'disponible');
    return es === raw ? `¡Hola ${firstName}! ${raw}` : es;
  }

  if (langCode === 'DE') {
    return `Hallo ${firstName}! ${raw}`;
  }

  if (langCode === 'FR') {
    return `Bonjour ${firstName} ! ${raw}`;
  }

  return raw;
}

function getEffectiveTranslatedDraft(conv, draftVal) {
  const custom = state.customTranslations && state.customTranslations[conv.id];
  if (typeof custom === 'string' && custom.trim().length > 0) {
    return custom;
  }
  return translateDraftToLang(draftVal, conv.langCode, conv);
}

function renderTranslationPopoverHtml(conv, draftVal, hasText) {
  const isCustom = Boolean(hasText && state.customTranslations && state.customTranslations[conv.id]);
  const translatedText = hasText ? getEffectiveTranslatedDraft(conv, draftVal) : '';

  return `
    <div class="bc-trans-popover" onclick="event.stopPropagation()">
      <div class="bc-trans-header">
        <div class="bc-trans-title-wrap">
          <span class="bc-trans-flag">${getLangFlagSvg(conv.langCode)}</span>
          <span class="bc-trans-title">Traduzione in ${conv.langName}</span>
          ${hasText ? `
            <span class="bc-trans-badge ${isCustom ? 'edited' : 'auto'}" style="${isCustom ? '' : 'display:none;'}">
              Modificata
            </span>
          ` : ''}
        </div>
        <div class="bc-trans-header-actions">
          ${hasText ? `
            <button type="button" class="bc-trans-reset-btn" onclick="resetCustomTranslation(event)" title="Ripristina traduzione automatica" style="${isCustom ? '' : 'display:none;'}">
              ${ICONS.refresh}
              <span>Ripristina</span>
            </button>
          ` : ''}
          <button type="button" class="bc-pop-close" onclick="toggleTranslationPopover(event, false)" title="Chiudi" aria-label="Chiudi">
            ${ICONS.close12}
          </button>
        </div>
      </div>

      ${hasText ? `
        <div class="bc-trans-body">
          <textarea
            class="bc-trans-textarea"
            rows="3"
            placeholder="Scrivi o modifica la traduzione in ${conv.langName}..."
            oninput="updateCustomTranslation(this.value)"
          >${translatedText}</textarea>
        </div>
        <div class="bc-trans-footer">
          <span class="bc-trans-hint">Testo inviato all'ospite · clicca per modificare</span>
          <button type="button" class="bc-trans-confirm-btn" onclick="toggleTranslationPopover(event, false)">
            <span>Applica</span>
          </button>
        </div>
      ` : `
        <div class="bc-trans-empty">
          <p class="bc-trans-empty-text">Scrivi un messaggio nel campo qui sotto per vedere e modificare in tempo reale la traduzione in <strong>${conv.langName}</strong>.</p>
          <button type="button" class="bc-trans-demo-btn" onclick="fillSampleDraftForTranslation(event)">
            ${ICONS.sparkles12}
            <span>Prova con un testo di esempio</span>
          </button>
        </div>
      `}
    </div>
  `;
}

function toggleTranslationPopover(event, forceState) {
  if (event) event.stopPropagation();
  const next = typeof forceState === 'boolean' ? forceState : !state.bcTransOpen;
  state.bcTransOpen = next;
  if (next) {
    state.bcTemplateOpen = false;
    state.bcTagsOpen = false;
    state.bcToneOpen = false;
    state.bcMoreOpen = false;
    state.schedulePopoverOpen = false;
  }
  renderBottomComposer();
  if (next) {
    setTimeout(() => {
      autoResizeTransTextarea();
      const visibleTa = Array.from(document.querySelectorAll('.bc-trans-textarea')).find(el => el.offsetParent !== null);
      if (visibleTa) {
        visibleTa.focus();
        visibleTa.setSelectionRange(visibleTa.value.length, visibleTa.value.length);
      }
    }, 30);
  }
}

function updateCustomTranslation(val) {
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  state.customTranslations = state.customTranslations || {};
  state.customTranslations[conv.id] = val;

  autoResizeTransTextarea();

  // Aggiorna badge e pill senza perdere il focus della textarea
  document.querySelectorAll('.bc-trans-badge').forEach(badge => {
    badge.className = 'bc-trans-badge edited';
    badge.textContent = 'Modificata';
    badge.style.display = 'inline-flex';
  });
  document.querySelectorAll('.bc-trans-reset-btn').forEach(resetBtn => {
    resetBtn.style.display = 'inline-flex';
  });
  document.querySelectorAll('.bc-lang-pill').forEach(pill => {
    pill.classList.add('is-edited');
    const dot = pill.querySelector('.bc-lang-status-dot');
    if (dot) dot.classList.add('edited');
  });
}

function resetCustomTranslation(event) {
  if (event) event.stopPropagation();
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  if (state.customTranslations) {
    delete state.customTranslations[conv.id];
  }
  renderBottomComposer();
  showToast(`Traduzione in ${conv.langName} ripristinata`);
}

function fillSampleDraftForTranslation(event) {
  if (event) event.stopPropagation();
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  const firstName = conv.name.replace('↳ ', '').split(' ')[0];
  const sampleIt = `Ciao ${firstName}! Ti confermo che il posto auto coperto #14 è riservato per la tua ${conv.stay?.room || 'Suite 14'} a 15€ a notte. Puoi accedere con il codice Nuki ${conv.stay?.nukiCode || '000000'}.`;
  state.draftOpen = true;
  state.drafts[conv.id] = sampleIt;
  if (state.customTranslations) delete state.customTranslations[conv.id];
  state.bcTransOpen = true;
  renderConversationLists();
  renderBottomComposer();
  setTimeout(() => {
    autoResizeTransTextarea();
    const visibleTa = Array.from(document.querySelectorAll('.bc-trans-textarea')).find(el => el.offsetParent !== null);
    if (visibleTa) visibleTa.focus();
  }, 30);
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
  if (which) {
    state.schedulePopoverOpen = false;
    state.bcTransOpen = false;
  }
  renderBottomComposer();
}

function syncLiveTranslationUI(val) {
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  const hasText = val.trim().length > 0;

  // Se l'utente modifica il testo italiano originale, riallinea la traduzione AI
  if (state.customTranslations && state.customTranslations[conv.id]) {
    delete state.customTranslations[conv.id];
  }

  document.querySelectorAll('.bc-send-btn').forEach(btn => {
    btn.classList.toggle('ready', hasText);
  });

  document.querySelectorAll('.bc-lang-pill').forEach(pill => {
    pill.classList.toggle('has-text', hasText);
    pill.classList.remove('is-edited');
    let dot = pill.querySelector('.bc-lang-status-dot');
    if (hasText && !dot) {
      dot = document.createElement('span');
      dot.className = 'bc-lang-status-dot';
      dot.title = 'Traduzione pronta';
      const chev = pill.querySelector('.bc-chevron-blue');
      if (chev) pill.insertBefore(dot, chev);
      else pill.appendChild(dot);
    } else if (!hasText && dot) {
      dot.remove();
    } else if (dot) {
      dot.classList.remove('edited');
    }
  });

  if (state.bcTransOpen) {
    const transTas = document.querySelectorAll('.bc-trans-textarea');
    if (hasText && transTas.length > 0) {
      const nextTrans = translateDraftToLang(val, conv.langCode, conv);
      transTas.forEach(ta => {
        ta.value = nextTrans;
      });
      autoResizeTransTextarea();
      document.querySelectorAll('.bc-trans-badge').forEach(badge => {
        badge.className = 'bc-trans-badge auto';
        badge.style.display = 'none';
      });
      document.querySelectorAll('.bc-trans-reset-btn').forEach(resetBtn => {
        resetBtn.style.display = 'none';
      });
    } else {
      // Passaggio tra stato vuoto e stato con testo mentre il tooltip è aperto
      document.querySelectorAll('.bc-trans-popover').forEach(pop => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = renderTranslationPopoverHtml(conv, val, hasText).trim();
        if (wrapper.firstElementChild) {
          pop.replaceWith(wrapper.firstElementChild);
        }
      });
      requestAnimationFrame(autoResizeTransTextarea);
    }
  }
}

function syncComposerBackdropScroll(el) {
  if (!el) return;
  const wrap = el.closest('.bc-textarea-editor');
  const backdrop = wrap ? wrap.querySelector('.bc-textarea-backdrop') : null;
  if (backdrop) {
    backdrop.scrollTop = el.scrollTop;
    backdrop.scrollLeft = el.scrollLeft;
  }
}

function syncAllComposerBackdrops(val) {
  const html = renderHighlightedDraftHtml(val);
  document.querySelectorAll('.bc-textarea-backdrop').forEach(bd => {
    bd.innerHTML = html;
  });
}

function getFilteredAtTags(query, conv) {
  const tags = getAvailablePmsTags(conv);
  const q = String(query || '').toLowerCase().trim();
  if (!q) return tags;
  return tags.filter(t =>
    t.key.toLowerCase().startsWith(q) ||
    t.key.toLowerCase().replace('-', '').startsWith(q.replace('-', '')) ||
    t.desc.toLowerCase().includes(q)
  );
}

function renderAtMentionMenu() {
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  const hosts = document.querySelectorAll('.bc-at-mention-host');
  if (!state.atMentionOpen) {
    hosts.forEach(h => { h.innerHTML = ''; });
    return;
  }
  const matches = getFilteredAtTags(state.atMentionQuery, conv);
  if (matches.length === 0) {
    hosts.forEach(h => { h.innerHTML = ''; });
    return;
  }
  const activeIdx = Math.min(state.atMentionIndex || 0, matches.length - 1);
  const menuHtml = `
    <div class="bc-at-mention-menu" onmousedown="event.preventDefault()">
      <div class="bc-at-mention-head">
        <span>Tag disponibili</span>
        <span class="bc-at-mention-kbd">↵ inserisci</span>
      </div>
      <div class="bc-at-mention-list">
        ${matches.map((t, idx) => `
          <button
            type="button"
            class="bc-at-mention-item ${idx === activeIdx ? 'active' : ''}"
            onclick="selectAtMentionTag('${t.token}')"
          >
            <span class="bc-at-mention-token">${t.token}</span>
            <span class="bc-at-mention-meta">
              <span class="bc-at-mention-desc">${t.desc}</span>
              <span class="bc-at-mention-val">${t.value}</span>
            </span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
  hosts.forEach(h => { h.innerHTML = menuHtml; });
}

function checkComposerAtMention(el) {
  if (!el || typeof el.selectionStart !== 'number') {
    state.atMentionOpen = false;
    renderAtMentionMenu();
    return;
  }
  const val = el.value || '';
  const caret = el.selectionStart;
  const beforeCaret = val.slice(0, caret);
  const match = beforeCaret.match(/(?:^|[\s(])@([A-Za-zÀ-ÿ0-9_-]*)$/);
  if (match) {
    const query = match[1] || '';
    const atStart = caret - query.length - 1;
    const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
    const matches = getFilteredAtTags(query, conv);
    // Se il tag è già stato completato esattamente e non ci sono altri match più lunghi, oppure c'è almeno un match
    const exactDone = matches.length === 1 && matches[0].key.toLowerCase() === query.toLowerCase();
    if (matches.length > 0 && !exactDone) {
      state.atMentionOpen = true;
      state.atMentionQuery = query;
      state.atMentionIndex = 0;
      state.atMentionRange = { start: atStart, end: caret };
      renderAtMentionMenu();
      return;
    }
  }
  if (state.atMentionOpen) {
    state.atMentionOpen = false;
    state.atMentionRange = null;
    renderAtMentionMenu();
  }
}

function handleComposerKeydown(event, el) {
  if (!state.atMentionOpen) return;
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  const matches = getFilteredAtTags(state.atMentionQuery, conv);
  if (!matches.length) return;

  if (event.key === 'ArrowDown') {
    event.preventDefault();
    state.atMentionIndex = (state.atMentionIndex + 1) % matches.length;
    renderAtMentionMenu();
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    state.atMentionIndex = (state.atMentionIndex - 1 + matches.length) % matches.length;
    renderAtMentionMenu();
  } else if (event.key === 'Enter' || event.key === 'Tab') {
    event.preventDefault();
    const chosen = matches[Math.min(state.atMentionIndex, matches.length - 1)];
    if (chosen) selectAtMentionTag(chosen.token);
  } else if (event.key === 'Escape') {
    event.preventDefault();
    state.atMentionOpen = false;
    renderAtMentionMenu();
  }
}

function selectAtMentionTag(token) {
  const visibleTa = Array.from(document.querySelectorAll('#draftTextarea')).find(el => el.offsetParent !== null)
    || document.getElementById('draftTextarea');
  const curVal = state.draftOpen ? (state.drafts[state.selectedConvId] || '') : (visibleTa ? visibleTa.value : '');
  const range = state.atMentionRange || { start: curVal.length, end: curVal.length };
  const before = curVal.slice(0, range.start);
  const after = curVal.slice(range.end);
  const needTrailingSpace = after.length === 0 || !/^\s/.test(after);
  const inserted = token + (needTrailingSpace ? ' ' : '');
  const nextVal = before + inserted + after;
  const nextCaret = before.length + inserted.length;

  state.atMentionOpen = false;
  state.atMentionRange = null;
  state.draftOpen = nextVal.trim().length > 0;
  state.drafts[state.selectedConvId] = nextVal;

  document.querySelectorAll('#draftTextarea').forEach(ta => {
    ta.value = nextVal;
  });
  syncAllComposerBackdrops(nextVal);
  renderAtMentionMenu();
  renderConversationLists();
  syncLiveTranslationUI(nextVal);

  if (visibleTa) {
    visibleTa.focus();
    visibleTa.setSelectionRange(nextCaret, nextCaret);
    syncComposerBackdropScroll(visibleTa);
  }
}

function handleComposerInput(val, el) {
  state.draftOpen = val.trim().length > 0;
  state.drafts[state.selectedConvId] = val;
  syncAllComposerBackdrops(val);
  if (el) {
    syncComposerBackdropScroll(el);
    checkComposerAtMention(el);
  }
  renderConversationLists();
  syncLiveTranslationUI(val);
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
  } else if (focusTextarea) {
    state.variantIdx = ((state.variantIdx || 0) + 1) % state.variants.length;
    state.drafts[conv.id] = state.variants[state.variantIdx].text;
  }
  state.replyTab = 'risposta';
  renderConversationLists();
  renderSiderAI();
  if (focusTextarea) {
    setTimeout(() => document.getElementById('draftTextarea')?.focus(), 60);
  }
  showToast('Risposta generata con AI');
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
  state.bcTransOpen = false;
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
  state.bcTransOpen = false;
  state.editingGuestNote = false;
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
  if (state.customTranslations) delete state.customTranslations[state.selectedConvId];
  renderConversationLists();
  renderSiderAI();
  showToast(`Variante ${state.activeVariantIdx + 1} di 3 (${v.tone})`);
}

function selectTone(tone, idx) {
  state.activeTone = tone;
  state.activeVariantIdx = idx;
  state.drafts[state.selectedConvId] = state.variants[idx].text;
  if (state.customTranslations) delete state.customTranslations[state.selectedConvId];
  renderConversationLists();
  renderSiderAI();
  showToast(`Tono impostato su: ${tone}`);
}

function improveDraftText() {
  state.composerExpanded = true;
  state.draftOpen = true;
  state.promptMode = false;
  state.drafts[state.selectedConvId] = `Ciao Adam! Ti confermo con piacere che il posto auto coperto n. 14 (riservato alla Suite 14) è disponibile nel nostro garage interno a 15€/notte. L'accesso è già abilitato con il tuo codice Nuki 000000. Fammi sapere se desideri confermarlo!`;
  if (state.customTranslations) delete state.customTranslations[state.selectedConvId];
  renderConversationLists();
  renderSiderAI();
  showToast('Testo migliorato con AI e pronto per l\'invio');
}

function updateDraftText(val, el) {
  state.draftOpen = val.trim().length > 0;
  state.drafts[state.selectedConvId] = val;
  renderConversationLists();
  syncLiveTranslationUI(val);
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

const CANNED_CATEGORIES = [
  'Tutti',
  'Wi-Fi & Info',
  'Check-in',
  'Check-out',
  'Ristorazione',
  'Parcheggio',
  'Tassa & Regole'
];

const CANNED_REPLIES = [
  {
    id: 'wifi_colazione',
    title: 'Codice Wi-Fi & Orari Colazione',
    category: 'Wi-Fi & Info',
    badgeLabel: 'Wi-Fi & Info',
    summary: 'Codice AURORA2026 e colazione 7:00-10:30 al piano terra.',
    body: 'Ciao {Ospite}! Ecco le credenziali Wi-Fi per la tua {Camera}: rete "CasaAurora_Guest", password "AuroraGuest2026". Ti ricordiamo inoltre che la colazione è servita dalle 07:00 alle 10:30 nella sala al piano terra.'
  },
  {
    id: 'fibra_smartworking',
    title: 'Fibra Ultraveloce & Smart Working',
    category: 'Wi-Fi & Info',
    badgeLabel: 'Wi-Fi & Info',
    summary: 'Rete Business 1Gbps senza password per smart working.',
    body: 'Ciao {Ospite}! Per lavorare in smart working dalla {Camera} puoi collegarti alla rete dedicata "Aurora_Business_1Gbps" (fibra FTTH 1Gbps simmetrica). In camera trovi anche una scrivania ergonomica con presa dedicata.'
  },
  {
    id: 'late_checkin_pin',
    title: 'Istruzioni Late Check-in & PIN SmartLock',
    category: 'Check-in',
    badgeLabel: 'Check-in & Arrivo',
    summary: 'Codice PIN tastierino e istruzioni arrivo autonomo.',
    body: 'Ciao {Ospite}, benvenuto a Casa Aurora! Per il tuo arrivo autonomo nella {Camera} (dalle ore 15:00), digita sul tastierino SmartLock Nuki all\'ingresso il codice PIN {Nuki} seguito dal tasto conferma.'
  },
  {
    id: 'early_checkin_free',
    title: 'Conferma Early Check-in (Gratuito)',
    category: 'Check-in',
    badgeLabel: 'Check-in & Arrivo',
    featured: true,
    summary: 'Camera pronta in anticipo alle 14:00 senza costi.',
    body: 'Ciao {Ospite}! Siamo felici di confermarti l\'Early Check-in gratuito: la tua {Camera} sarà pronta in anticipo già dalle ore 14:00 senza alcun supplemento. Il tuo codice Nuki {Nuki} sarà attivo da quell\'ora!'
  },
  {
    id: 'express_checkout',
    title: 'Procedura Express Check-out',
    category: 'Check-out',
    badgeLabel: 'Check-out & Partenza',
    summary: 'Check-out entro le 11:00 e deposito bagagli gratuito.',
    body: 'Ciao {Ospite}, ti ricordiamo che il check-out per la {Camera} è previsto entro le ore 11:00. Con la procedura Express puoi lasciare il badge sul tavolo in camera; il deposito bagagli al piano terra è gratuito per tutta la giornata!'
  },
  {
    id: 'voucher_cancellazione',
    title: 'Proposta Voucher Cancellazione Soggiorno',
    category: 'Check-out',
    badgeLabel: 'Check-out & Partenza',
    summary: 'Voucher 12 mesi per emergenza o cancellazione.',
    body: 'Ciao {Ospite}, comprendiamo l\'imprevisto. Possiamo emettere un Voucher del 100% dell\'importo valido per 12 mesi presso Casa Aurora per riprogrammare il tuo soggiorno in qualsiasi data disponibile.'
  },
  {
    id: 'garage_ztl',
    title: 'Accesso Garage Privato & ZTL',
    category: 'Parcheggio',
    badgeLabel: 'Parcheggio & Transfer',
    summary: 'Posto auto coperto riservato (15€/notte) e apertura con codice Nuki.',
    body: 'Ciao {Ospite}! Il posto auto coperto riservato alla {Camera} è disponibile nel nostro garage privato interno a 15€/notte (fuori dalla ZTL). Puoi aprire la rampa direttamente con il tuo codice Nuki {Nuki}.'
  },
  {
    id: 'ristorazione_convenzioni',
    title: 'Convenzione Ristoranti & Colazione in Camera',
    category: 'Ristorazione',
    badgeLabel: 'Ristorazione',
    summary: 'Trattorie convenzionate (-10%) e servizio colazione in Suite.',
    body: 'Ciao {Ospite}! A soli 5 minuti a piedi da Casa Aurora ti consigliamo l\'Osteria Etnea e la Trattoria del Duomo: mostrando la chiave digitale della {Camera} avrai il 10% di sconto riservato ai nostri ospiti.'
  },
  {
    id: 'tassa_soggiorno_regole',
    title: 'Benvenuto a Catania & Tassa di Soggiorno',
    category: 'Tassa & Regole',
    badgeLabel: 'Tassa & Regole',
    summary: 'Riepilogo tassa comunale e regole di cortesia della struttura.',
    body: 'Ciao {Ospite}! Ti diamo il benvenuto a Catania nella {Camera}. Ti ricordiamo che la tassa di soggiorno comunale (2,00€ a persona/notte) può essere saldata comodamente dal link del check-in online o alla partenza.'
  }
];

function openCannedRepliesModal() {
  const modal = document.getElementById('modalBackdrop');
  const content = document.getElementById('modalContent');
  if (!modal || !content) return;

  state.mpSearchQuery = '';
  state.mpActiveCategory = 'Tutti';
  content.className = 'modal-card mp-modal';

  content.innerHTML = `
    <!-- Top Header -->
    <div class="mp-modal-header">
      <div class="mp-header-left">
        <div class="mp-icon-badge">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <line x1="10" y1="9" x2="8" y2="9"/>
          </svg>
        </div>
        <div class="mp-header-titles">
          <div class="mp-title">Messaggi Pronti</div>
          <div class="mp-subtitle">Seleziona una risposta standard da personalizzare con i dati del soggiorno</div>
        </div>
      </div>
      <button type="button" class="mp-close-btn" onclick="closeModal()" aria-label="Chiudi">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>

    <!-- Search & Category Pills -->
    <div class="mp-controls-section">
      <div class="mp-search-box">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          type="text"
          id="mpSearchInput"
          placeholder="Cerca per titolo, contenuto o servizio..."
          oninput="filterCannedModal(this.value)"
        />
      </div>

      <div class="mp-cat-row" id="mpCatRow">
        ${CANNED_CATEGORIES.map(cat => `
          <button
            type="button"
            class="mp-cat-pill ${state.mpActiveCategory === cat ? 'active' : ''}"
            onclick="setCannedCategory('${cat}')"
          >${cat}</button>
        `).join('')}
      </div>
    </div>

    <!-- Scrollable Cards List -->
    <div class="mp-cards-list" id="mpCardsListContainer"></div>

    <!-- Bottom Sticky Footer -->
    <div class="mp-modal-footer">
      <span class="mp-footer-note">I parametri segnaposto (es. nome ospite, numero camera, PIN) vengono compilati in automatico.</span>
      <button type="button" class="mp-btn-cancel" onclick="closeModal()">Annulla</button>
    </div>
  `;

  renderCannedRepliesList();
  modal.classList.add('open');
  setTimeout(() => document.getElementById('mpSearchInput')?.focus(), 50);
}

function setCannedCategory(cat) {
  state.mpActiveCategory = cat;
  const catRow = document.getElementById('mpCatRow');
  if (catRow) {
    catRow.innerHTML = CANNED_CATEGORIES.map(c => `
      <button
        type="button"
        class="mp-cat-pill ${state.mpActiveCategory === c ? 'active' : ''}"
        onclick="setCannedCategory('${c}')"
      >${c}</button>
    `).join('');
  }
  renderCannedRepliesList();
}

function filterCannedModal(q) {
  state.mpSearchQuery = (q || '').trim().toLowerCase();
  renderCannedRepliesList();
}

function renderCannedRepliesList() {
  const container = document.getElementById('mpCardsListContainer');
  if (!container) return;

  const q = state.mpSearchQuery;
  const cat = state.mpActiveCategory;

  const filtered = CANNED_REPLIES.filter(item => {
    const matchCat = cat === 'Tutti' || item.category === cat;
    const matchQ = !q ||
      item.title.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.badgeLabel.toLowerCase().includes(q) ||
      item.body.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="mp-empty-state">
        Nessun messaggio pronto trovato per i filtri selezionati.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="mp-item-card ${item.featured ? 'featured' : ''}" onclick="selectCannedReplyFromModal('${item.id}')">
      <div class="mp-item-top">
        <span class="mp-item-title">${item.title}</span>
        <span class="mp-item-badge">${item.badgeLabel}</span>
      </div>
      <div class="mp-item-summary">${item.summary}</div>
    </div>
  `).join('');
}

function selectCannedReplyFromModal(id) {
  const item = CANNED_REPLIES.find(r => r.id === id);
  if (!item) return;

  const compiledText = item.body
    .replace(/\{Ospite\}/g, '@Ospite')
    .replace(/\{Camera\}/g, '@Camera')
    .replace(/\{Nuki\}/g, '@Nuki');

  state.composerExpanded = true;
  state.draftOpen = true;
  state.promptMode = false;
  state.replyTab = 'risposta';
  state.drafts[state.selectedConvId] = compiledText;

  closeModal();
  renderConversationLists();
  renderSiderAI();
  showToast(`Messaggio pronto "${item.title}" inserito con tag dinamici`);
}

function insertCannedReply(title) {
  openCannedRepliesModal();
}

function insertTagPMS(val) {
  const token = String(val || '').startsWith('@') ? val : `@${val}`;
  const visibleTa = Array.from(document.querySelectorAll('#draftTextarea')).find(el => el.offsetParent !== null);
  const cur = state.draftOpen ? (state.drafts[state.selectedConvId] || '') : '';

  state.composerExpanded = true;
  state.draftOpen = true;
  state.replyTab = 'risposta';

  let nextVal = '';
  let nextCaret = 0;

  if (visibleTa && typeof visibleTa.selectionStart === 'number') {
    const start = visibleTa.selectionStart;
    const end = visibleTa.selectionEnd;
    const before = cur.slice(0, start);
    const after = cur.slice(end);
    const prefixSpace = before.length > 0 && !/\s$/.test(before) ? ' ' : '';
    const suffixSpace = after.length === 0 || !/^\s/.test(after) ? ' ' : '';
    const chunk = `${prefixSpace}${token}${suffixSpace}`;
    nextVal = before + chunk + after;
    nextCaret = before.length + chunk.length;
  } else {
    nextVal = cur ? `${cur.trimEnd()} ${token} ` : `${token} `;
    nextCaret = nextVal.length;
  }

  state.drafts[state.selectedConvId] = nextVal;
  renderConversationLists();
  renderBottomComposer();
  syncLiveTranslationUI(nextVal);

  setTimeout(() => {
    const ta = Array.from(document.querySelectorAll('#draftTextarea')).find(el => el.offsetParent !== null);
    if (ta) {
      ta.focus();
      ta.setSelectionRange(nextCaret, nextCaret);
      syncComposerBackdropScroll(ta);
    }
  }, 20);
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

function isMsgRead(conv, type) {
  const key = `${conv.id}_${type}`;
  if (typeof state.msgRead[key] === 'boolean') return state.msgRead[key];
  if (type === 'host') return true;
  if (type === 'guest') return !conv.dagestire;
  return false;
}

function renderMsgReadAction(conv, type) {
  const read = isMsgRead(conv, type);
  if (read) {
    return `
      <button type="button" class="btn-msg-action read-pill" onclick="toggleMsgRead('${type}')" title="Segna come non letto" aria-label="Letto">
        ${ICONS.check13}
        <span>Letto</span>
      </button>
    `;
  }
  return `
    <button type="button" class="btn-msg-action read-toggle" onclick="toggleMsgRead('${type}')" title="Segna come letto" aria-label="Segna come letto">
      ${ICONS.checkCircle15}
    </button>
  `;
}

function toggleMsgRead(type) {
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  const key = `${conv.id}_${type}`;
  const nextVal = !isMsgRead(conv, type);
  state.msgRead[key] = nextVal;
  if (type === 'guest') {
    conv.dagestire = !nextVal;
    renderConversationLists();
  }
  renderThread();
  showToast(nextVal ? 'Messaggio segnato come letto' : 'Messaggio segnato come da leggere');
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
  if (document.getElementById('modalContent')?.classList.contains('qi-modal')) {
    renderScheduleModalContent();
  }
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
  if (state.customTranslations) delete state.customTranslations[conv.id];
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

function openScheduleModal() {
  const modal = document.getElementById('modalBackdrop');
  const content = document.getElementById('modalContent');
  if (!modal || !content) return;
  state.schedulePopoverOpen = false;
  state.bcMoreOpen = false;
  renderSiderAI();
  renderScheduleModalContent();
  modal.classList.add('open');
}

function renderScheduleModalContent() {
  const content = document.getElementById('modalContent');
  if (!content) return;

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

  content.className = 'modal-card qi-modal';
  content.innerHTML = `
    <div class="qi-header">
      <div class="qi-header-left">
        <span class="qi-header-icon">${ICONS.clock}</span>
        <span class="qi-title">Quando inviarlo</span>
      </div>
      <button type="button" class="qi-close" onclick="closeModal()" title="Chiudi" aria-label="Chiudi">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>

    <div class="qi-presets">
      <button type="button" class="qi-pill ${state.schedPreset === '1h' ? 'active' : ''}" onclick="applySchedPreset('1h', 2, '12', '00')">Tra un'ora</button>
      <button type="button" class="qi-pill ${state.schedPreset === '18' ? 'active' : ''}" onclick="applySchedPreset('18', 2, '18', '00')">Oggi 18:00</button>
      <button type="button" class="qi-pill ${state.schedPreset === 'dom9' ? 'active' : ''}" onclick="applySchedPreset('dom9', 3, '09', '00')">Domani 9:00</button>
    </div>

    <div class="qi-calendar-box">
      <div class="qi-month-nav">
        <button type="button" class="qi-nav-arrow" onclick="cycleSchedMonth(-1)" aria-label="Mese precedente">${ICONS.chevronLeft14}</button>
        <span class="qi-month-label">${state.schedMonthLabel}</span>
        <button type="button" class="qi-nav-arrow" onclick="cycleSchedMonth(1)" aria-label="Mese successivo">${ICONS.chevronRight14}</button>
      </div>
      <div class="qi-weekdays">
        <span>L</span><span>M</span><span>M</span><span>G</span><span>V</span><span>S</span><span>D</span>
      </div>
      <div class="qi-days-grid">
        ${calCells.map(c => !c.d
          ? `<span class="qi-day empty"></span>`
          : `<button type="button" class="qi-day ${c.muted ? 'muted' : ''} ${c.highlight && state.schedDay !== c.d ? 'soft-bg' : ''} ${state.schedDay === c.d && !c.muted ? 'selected' : ''}" onclick="selectSchedDay(${c.d})">${c.d}</button>`
        ).join('')}
      </div>
    </div>

    <div class="qi-time-row">
      <div class="qi-time-label-wrap">
        <span class="qi-clock-icon">${ICONS.clock}</span>
        <span class="qi-time-label">Orario di invio</span>
      </div>
      <div class="qi-time-selects">
        <select class="qi-time-select" onchange="updateSchedHour(this.value)">${hourOptions}</select>
        <span class="qi-time-colon">:</span>
        <select class="qi-time-select" onchange="updateSchedMin(this.value)">${minOptions}</select>
      </div>
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
      <button type="button" class="qi-btn-cancel" onclick="closeModal()">Annulla</button>
      <button type="button" class="qi-btn-confirm" onclick="confirmScheduledSend()">
        ${ICONS.sendWhite}
        <span>Programma</span>
      </button>
    </div>
  `;
}

function toggleSchedulePopover() {
  const modal = document.getElementById('modalBackdrop');
  const content = document.getElementById('modalContent');
  if (modal?.classList.contains('open') && content?.classList.contains('qi-modal')) {
    closeModal();
    return;
  }
  openScheduleModal();
}

function selectSchedDay(day) {
  state.schedDay = day;
  state.schedPreset = null;
  renderSiderAI();
  if (document.getElementById('modalContent')?.classList.contains('qi-modal')) {
    renderScheduleModalContent();
  }
}

function applySchedPreset(presetKey, day, hr, min) {
  state.schedPreset = presetKey;
  state.schedDay = day;
  state.schedHour = hr;
  state.schedMin = min;
  state.scheduledTime = `${hr}:${min}`;
  renderSiderAI();
  if (document.getElementById('modalContent')?.classList.contains('qi-modal')) {
    renderScheduleModalContent();
  }
}

function cycleSchedMonth(dir) {
  state.schedMonthLabel = state.schedMonthLabel === 'Novembre 2026'
    ? (dir > 0 ? 'Dicembre 2026' : 'Ottobre 2026')
    : 'Novembre 2026';
  renderSiderAI();
  if (document.getElementById('modalContent')?.classList.contains('qi-modal')) {
    renderScheduleModalContent();
  }
}

function updateSchedHour(hr) {
  state.schedHour = hr;
  state.schedPreset = null;
  state.scheduledTime = `${state.schedHour}:${state.schedMin}`;
  renderSiderAI();
  if (document.getElementById('modalContent')?.classList.contains('qi-modal')) {
    renderScheduleModalContent();
  }
}

function updateSchedMin(min) {
  state.schedMin = min;
  state.schedPreset = null;
  state.scheduledTime = `${state.schedHour}:${state.schedMin}`;
  renderSiderAI();
  if (document.getElementById('modalContent')?.classList.contains('qi-modal')) {
    renderScheduleModalContent();
  }
}

function updateScheduledTime(val) {
  state.scheduledTime = val || '10:00';
  renderSiderAI();
}

function confirmScheduledSend() {
  state.schedulePopoverOpen = false;
  closeModal();
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

function toggleSiderCopilot() {
  state.siderCopilotOpen = !state.siderCopilotOpen;
  renderSiderAI();
}

function toggleDesktopSider(collapse) {
  state.siderCollapsed = typeof collapse === 'boolean' ? collapse : !state.siderCollapsed;
  renderSiderAI();
  if (state.siderCollapsed) {
    showToast('Pannello Dettagli ospite chiuso');
  }
}

function toggleHeaderMoreMenu(event, which) {
  if (event) event.stopPropagation();
  const deskMenu = document.getElementById('hdrMoreDropdownDesk');
  const mobMenu = document.getElementById('hdrMoreDropdownMob');
  const deskBtn = document.getElementById('btnMoreMenuDesk');
  const mobBtn = document.getElementById('btnMoreMenuMob');

  if (which === 'desk' && deskMenu) {
    const isOpen = deskMenu.classList.contains('open');
    closeHeaderMoreMenu();
    if (!isOpen) {
      deskMenu.classList.add('open');
      deskBtn?.classList.add('active');
    }
  } else if (which === 'mob' && mobMenu) {
    const isOpen = mobMenu.classList.contains('open');
    closeHeaderMoreMenu();
    if (!isOpen) {
      mobMenu.classList.add('open');
      mobBtn?.classList.add('active');
    }
  }
}

function closeHeaderMoreMenu() {
  document.getElementById('hdrMoreDropdownDesk')?.classList.remove('open');
  document.getElementById('hdrMoreDropdownMob')?.classList.remove('open');
  document.getElementById('btnMoreMenuDesk')?.classList.remove('active');
  document.getElementById('btnMoreMenuMob')?.classList.remove('active');
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.hdr-more-wrap')) {
    closeHeaderMoreMenu();
  }
  if (state.bcTransOpen && !e.target.closest('.bc-trans-popover') && !e.target.closest('.bc-lang-pill')) {
    state.bcTransOpen = false;
    renderBottomComposer();
  }
});

function editGuestPreferences() {
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  const current = conv.customPreferences || 'Viaggia spesso per lavoro. Apprezza camere tranquille e colazione con opzioni senza glutine.';
  const updated = prompt('Modifica preferenze ospite:', current);
  if (updated !== null && updated.trim()) {
    conv.customPreferences = updated.trim();
    renderSiderAI();
    showToast('Preferenze ospite aggiornate');
  }
}

function openStayDetailsModal() {
  openEditGuestPmsModal();
}

function openEditGuestPmsModal() {
  const modal = document.getElementById('modalBackdrop');
  const content = document.getElementById('modalContent');
  if (!modal || !content) return;

  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  const cleanName = conv.name.replace('↳ ', '').replace(/\s*\(.*?\)\s*/g, '').trim();
  const nameParts = cleanName.split(' ');
  const firstName = nameParts.slice(0, -1).join(' ') || nameParts[0] || 'Ospite';
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';
  const initials = ((firstName[0] || '') + (lastName[0] || firstName[1] || '')).toUpperCase();
  const m = getConvPmsMeta(conv);

  const syncIconSm = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`;
  const syncIconBtn = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`;
  const calendarIconSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`;

  content.className = 'modal-card pms-edit-modal';
  content.innerHTML = `
    <!-- Top Header & KPI Summary -->
    <div class="pms-ref-top-section">
      <button type="button" class="pms-ref-close-x" onclick="closeModal()" aria-label="Chiudi">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>

      <div class="pms-ref-header-row">
        <div class="pms-ref-identity">
          <div class="pms-ref-avatar">${initials}</div>
          <div class="pms-ref-title-block">
            <div class="pms-ref-guest-name">${cleanName}</div>
            <div class="pms-ref-sub">Prenotazione · ${conv.stay.bookingCode}</div>
          </div>
        </div>

        <div class="pms-ref-header-actions">
          <button type="button" class="pms-ref-sync-pill" onclick="triggerHubSync();showToast('Dati prenotazione sincronizzati da Beddy PMS')">
            ${syncIconBtn}
            <span>Aggiorna dati</span>
          </button>
          <span class="pms-ref-status-pill">${m.statusBadge}</span>
        </div>
      </div>

      <div class="pms-ref-kpi-grid">
        <div class="pms-ref-kpi-card">
          <span class="pms-ref-kpi-label">Arrivo</span>
          <span class="pms-ref-kpi-val">${m.arrShort}</span>
        </div>
        <div class="pms-ref-kpi-card">
          <span class="pms-ref-kpi-label">Partenza</span>
          <span class="pms-ref-kpi-val">${m.depShort}</span>
        </div>
        <div class="pms-ref-kpi-card">
          <span class="pms-ref-kpi-label">Notti</span>
          <span class="pms-ref-kpi-val">${m.nights}</span>
        </div>
        <div class="pms-ref-kpi-card">
          <span class="pms-ref-kpi-label">Ospiti</span>
          <span class="pms-ref-kpi-val">${m.guestsNum}</span>
        </div>
      </div>
    </div>

    <!-- Scrollable Body -->
    <div class="pms-ref-scroll-body">
      <!-- Lingua dei messaggi (full-width lavender band) -->
      <div class="pms-ref-lang-band">
        <div class="pms-ref-lang-head">
          <span class="pms-ref-lang-icon">${ICONS.languages}</span>
          <span class="pms-ref-lang-title">Lingua dei messaggi</span>
        </div>
        <select id="stayLangSelect" class="pms-ref-lang-select" onchange="setOutboundLanguage(this.value)">
          <option value="${conv.langCode}" selected>Come scrive l'ospite — ${conv.langName}</option>
          <option value="IT">Italiano (IT)</option>
          <option value="PL">Polacco (PL)</option>
          <option value="EN">Inglese (EN)</option>
          <option value="ES">Spagnolo (ES)</option>
          <option value="DE">Tedesco (DE)</option>
          <option value="FR">Francese (FR)</option>
        </select>
        <p class="pms-ref-lang-hint">
          Larry riconosce la lingua dai messaggi dell'ospite. Prima di inviare puoi comunque cambiarla per quel singolo messaggio.
        </p>
      </div>

      <!-- Dati della prenotazione -->
      <div class="pms-ref-section">
        <div class="pms-ref-sec-head">
          <span class="pms-ref-sec-title">Dati della prenotazione</span>
          <span class="pms-ref-sec-sync-note">${syncIconSm} <span>questi li riscrive Beddy a ogni aggiornamento</span></span>
        </div>

        <div class="pms-ref-form-grid">
          <div class="pms-ref-field">
            <label>Nome ${syncIconSm}</label>
            <input type="text" id="stayFirstNameInput" value="${firstName}" />
          </div>
          <div class="pms-ref-field">
            <label>Cognome ${syncIconSm}</label>
            <input type="text" id="stayLastNameInput" value="${lastName}" />
          </div>

          <div class="pms-ref-field">
            <label>Check-in ${syncIconSm}</label>
            <div class="pms-ref-input-icon-wrap">
              <input type="text" id="stayCheckinInput" value="${m.checkinFull}" />
              <span class="pms-ref-input-right-icon">${calendarIconSvg}</span>
            </div>
          </div>
          <div class="pms-ref-field">
            <label>Check-out ${syncIconSm}</label>
            <div class="pms-ref-input-icon-wrap">
              <input type="text" id="stayCheckoutInput" value="${m.checkoutFull}" />
              <span class="pms-ref-input-right-icon">${calendarIconSvg}</span>
            </div>
          </div>

          <div class="pms-ref-field">
            <label>Numero ospiti ${syncIconSm}</label>
            <input type="text" id="stayGuestsInput" value="${m.guestsNum}" />
          </div>
          <div class="pms-ref-field">
            <label>Telefono</label>
            <input type="text" id="stayPhoneInput" value="${conv.stay.phone}" />
          </div>

          <div class="pms-ref-field">
            <label>Canale</label>
            <input type="text" value="${conv.channel}" readonly />
          </div>
          <div class="pms-ref-field">
            <label>Alloggio ${syncIconSm}</label>
            <input type="text" id="stayRoomInput" value="${conv.stay.room}" />
          </div>
        </div>
      </div>

      <!-- Accessi e tag -->
      <div class="pms-ref-section">
        <div class="pms-ref-sec-head-col">
          <span class="pms-ref-sec-title">Accessi e tag</span>
          <span class="pms-ref-sec-subdesc">Scrivi il nome con @ o fra graffe in un messaggio e Larry ci mette il valore di questo ospite.</span>
        </div>

        <div class="pms-ref-tags-box">
          <div class="pms-ref-tag-row">
            <div class="pms-ref-tag-left" onclick="insertTagPMS('@Nuki');closeModal();" title="Clicca per inserire nel messaggio">
              <span class="pms-ref-copy-icon">${ICONS.copy}</span>
              <div class="pms-ref-tag-texts">
                <span class="pms-ref-tag-code">{CODICE_NUKI}</span>
                <span class="pms-ref-tag-label">Codice Nuki</span>
              </div>
            </div>
            <input type="text" id="stayNukiInput" class="pms-ref-tag-input" value="${m.nukiCode}" placeholder="Es. 642949" />
          </div>

          <div class="pms-ref-tag-row">
            <div class="pms-ref-tag-left" onclick="insertTagPMS('${m.checkinPin}');closeModal();" title="Clicca per inserire nel messaggio">
              <span class="pms-ref-copy-icon">${ICONS.copy}</span>
              <div class="pms-ref-tag-texts">
                <span class="pms-ref-tag-code">{CHECKIN_ONLINE_PIN}</span>
                <span class="pms-ref-tag-label">PIN check-in online</span>
              </div>
            </div>
            <input type="text" id="stayPinInput" class="pms-ref-tag-input" value="${m.checkinPin}" placeholder="Es. 81daad" />
          </div>

          <div class="pms-ref-tag-row">
            <div class="pms-ref-tag-left" onclick="insertTagPMS('€' + (document.getElementById('stayTaxInput')?.value || '${m.touristTax}'));closeModal();" title="Clicca per inserire nel messaggio">
              <span class="pms-ref-copy-icon">${ICONS.copy}</span>
              <div class="pms-ref-tag-texts">
                <span class="pms-ref-tag-code">{TASSA_SOGGIORNO}</span>
                <span class="pms-ref-tag-label">Tassa di soggiorno</span>
              </div>
            </div>
            <input type="text" id="stayTaxInput" class="pms-ref-tag-input" value="${m.touristTax}" placeholder="Es. 12" />
          </div>

          <div class="pms-ref-tag-row">
            <div class="pms-ref-tag-left" onclick="insertTagPMS(document.getElementById('stayLinkInput')?.value || '${m.checkinLink}');closeModal();" title="Clicca per inserire nel messaggio">
              <span class="pms-ref-copy-icon">${ICONS.copy}</span>
              <div class="pms-ref-tag-texts">
                <span class="pms-ref-tag-code">{CHECKIN_ONLINE_LINK}</span>
                <span class="pms-ref-tag-label">Link check-in online</span>
              </div>
            </div>
            <input type="text" id="stayLinkInput" class="pms-ref-tag-input" value="${m.checkinLink}" placeholder="https://..." />
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Sticky Footer -->
    <div class="pms-ref-footer">
      <button type="button" class="pms-ref-btn-cancel" onclick="closeModal()">Annulla</button>
      <button type="button" class="pms-ref-btn-save" onclick="confirmBookingLinkChange(true)">Salva</button>
    </div>
  `;
  modal.classList.add('open');
}

function confirmBookingLinkChange(shouldClose = true) {
  const sel = document.getElementById('pmsBookingSelect');
  const langEl = document.getElementById('stayLangSelect');
  const phoneEl = document.getElementById('stayPhoneInput');
  const guestsEl = document.getElementById('stayGuestsInput');
  const nukiEl = document.getElementById('stayNukiInput');
  const pinEl = document.getElementById('stayPinInput');
  const taxEl = document.getElementById('stayTaxInput');
  const linkEl = document.getElementById('stayLinkInput');
  const firstEl = document.getElementById('stayFirstNameInput');
  const lastEl = document.getElementById('stayLastNameInput');
  const checkinEl = document.getElementById('stayCheckinInput');
  const checkoutEl = document.getElementById('stayCheckoutInput');
  const roomEl = document.getElementById('stayRoomInput');

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
  if (guestsEl && guestsEl.value.trim()) conv.stay.guestsNum = guestsEl.value.trim();
  if (nukiEl && nukiEl.value.trim()) conv.stay.nukiCode = nukiEl.value.trim();
  if (pinEl && pinEl.value.trim()) conv.stay.checkinPin = pinEl.value.trim();
  if (taxEl && taxEl.value.trim()) conv.stay.touristTax = taxEl.value.trim();
  if (linkEl && linkEl.value.trim()) conv.stay.checkinLink = linkEl.value.trim();
  if (firstEl || lastEl) {
    const newFull = [firstEl?.value.trim(), lastEl?.value.trim()].filter(Boolean).join(' ');
    if (newFull) {
      const prefix = conv.name.startsWith('↳ ') ? '↳ ' : '';
      conv.name = prefix + newFull;
    }
  }
  if (checkinEl && checkinEl.value.trim()) conv.stay.checkinFull = checkinEl.value.trim();
  if (checkoutEl && checkoutEl.value.trim()) conv.stay.checkoutFull = checkoutEl.value.trim();
  if (roomEl && roomEl.value.trim()) conv.stay.room = roomEl.value.trim();

  if (shouldClose) closeModal();
  renderConversationLists();
  renderThread();
  renderSiderAI();
  showToast(`Dati prenotazione e tag PMS salvati`);
}

function openGenerateReviewModal() {
  state.reviewModalSentiment = 'positiva';
  state.reviewModalGeneratedText = '';
  renderGenerateReviewModal();
  document.getElementById('modalBackdrop')?.classList.add('open');
}

function selectReviewSentiment(sentiment) {
  state.reviewModalSentiment = sentiment;
  if (state.reviewModalGeneratedText) {
    state.reviewModalGeneratedText = buildReviewTextBySentiment(sentiment);
  }
  renderGenerateReviewModal();
}

function buildReviewTextBySentiment(sentiment) {
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  const cleanName = conv.name.replace('↳ ', '').replace(/\s*\(.*?\)\s*/g, '').trim();
  const firstName = cleanName.split(' ')[0] || 'Ospite';
  const room = conv.stay?.room || 'Suite 14';

  if (sentiment === 'neutrale') {
    return `${firstName} ha soggiornato presso ${room} rispettando gli orari di check-in e check-out. Comunicazione essenziale durante il soggiorno e appartamento riconsegnato in ordine.`;
  }
  if (sentiment === 'negativa') {
    return `Il soggiorno di ${firstName} presso ${room} ha presentato alcune criticità nella comunicazione e nel rispetto delle regole condominiali. L'alloggio ha richiesto un intervento di pulizia supplementare al check-out.`;
  }
  return `${firstName} è stato un ospite esemplare durante il suo soggiorno nella ${room}! Comunicazione sempre cordiale e puntuale nei messaggi, grande cura dell'appartamento e pieno rispetto delle regole della casa. Consigliatissimo a tutta la community di ${conv.channel || 'Airbnb'}!`;
}

function generateGuestReviewText() {
  const sentiment = state.reviewModalSentiment || 'positiva';
  state.reviewModalGeneratedText = buildReviewTextBySentiment(sentiment);
  renderGenerateReviewModal();
  showToast('Recensione in terza persona generata con AI');
}

function copyGeneratedGuestReview() {
  const ta = document.getElementById('aiGuestReviewText');
  const txt = ta ? ta.value : (state.reviewModalGeneratedText || '');
  navigator.clipboard?.writeText(txt);
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  showToast(`Recensione copiata negli appunti per ${conv.channel || 'Airbnb'}!`);
}

function renderGenerateReviewModal() {
  const content = document.getElementById('modalContent');
  if (!content) return;
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  const cleanName = conv.name.replace('↳ ', '').replace(/\s*\(.*?\)\s*/g, '').trim();
  const firstName = cleanName.split(' ')[0] || 'Smets';
  const channelName = conv.channel || 'Airbnb';
  const curSent = state.reviewModalSentiment || 'positiva';
  const genText = state.reviewModalGeneratedText || '';

  const starOutlineBlue = `<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#2E54E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  const sparklesBtnIcon = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/></svg>`;

  content.className = 'modal-card review-guest-modal';
  content.innerHTML = `
    <button type="button" class="rev-modal-close" onclick="closeModal()" aria-label="Chiudi">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>

    <div class="rev-modal-header">
      <span class="rev-modal-star">${starOutlineBlue}</span>
      <h3 class="rev-modal-title">Recensione per ${firstName}</h3>
    </div>

    <p class="rev-modal-desc">
      Scritta sui messaggi di questo soggiorno, in terza persona, da copiare su ${channelName}.
    </p>

    <div class="rev-modal-section">
      <span class="rev-modal-label">Com'e' andata</span>
      <div class="rev-sentiment-grid">
        <button type="button" class="rev-sent-btn ${curSent === 'positiva' ? 'active' : ''}" onclick="selectReviewSentiment('positiva')">Positiva</button>
        <button type="button" class="rev-sent-btn ${curSent === 'neutrale' ? 'active' : ''}" onclick="selectReviewSentiment('neutrale')">Neutrale</button>
        <button type="button" class="rev-sent-btn ${curSent === 'negativa' ? 'active' : ''}" onclick="selectReviewSentiment('negativa')">Negativa</button>
      </div>
    </div>

    <button type="button" class="rev-generate-btn" onclick="generateGuestReviewText()">
      ${sparklesBtnIcon}
      <span>${genText ? 'Rigenera recensione' : 'Genera recensione'}</span>
    </button>

    ${genText ? `
      <div class="rev-generated-box">
        <textarea id="aiGuestReviewText" class="rev-generated-textarea" rows="4">${genText}</textarea>
        <div class="rev-generated-actions">
          <button type="button" class="rev-copy-btn" onclick="copyGeneratedGuestReview()">
            ${ICONS.copy}
            <span>Copia per ${channelName}</span>
          </button>
        </div>
      </div>
    ` : ''}
  `;
}

function archiveCurrentConversation() {
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  conv.folder = 'archiviate';
  conv.phaseLabel = 'Archiviata';
  conv.phaseClass = 'archiviata';
  renderConversationLists();
  renderThread();
  renderSiderAI();
  showToast(`Conversazione con ${conv.name.replace('↳ ', '')} archiviata`);
}

function deleteCurrentConversation() {
  const idx = CONVERSATIONS.findIndex(c => c.id === state.selectedConvId);
  if (idx === -1) return;
  const conv = CONVERSATIONS[idx];
  const cleanName = conv.name.replace('↳ ', '');
  if (CONVERSATIONS.length <= 1) {
    showToast('Impossibile eliminare l\'unica conversazione attiva nella demo');
    return;
  }
  CONVERSATIONS.splice(idx, 1);
  state.selectedConvId = CONVERSATIONS[0].id;
  renderConversationLists();
  renderThread();
  renderSiderAI();
  showToast(`Conversazione con ${cleanName} eliminata`);
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
        <div style="font-size:12px;color:#64748B;">Cerca un ospite o importa direttamente uno screenshot ricevuto dall'ospite</div>
      </div>
      <button type="button" class="faq-close-btn" onclick="closeModal()" aria-label="Chiudi">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>

    <div class="new-conv-ocr-banner" onclick="openGuestOcrModal(true)">
      <div class="new-conv-ocr-icon">${ICONS.scanText}</div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:13px;font-weight:700;color:#1E3A8A;">Avvia conversazione da foto / screenshot ospite (OCR)</div>
        <div style="font-size:11.5px;color:#475569;">Incolla o carica uno screenshot WhatsApp / Booking / Airbnb per estrarre il messaggio dell'ospite e generare subito la risposta</div>
      </div>
      <span class="new-conv-ocr-cta">Estrai da foto →</span>
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
          <div style="display:flex;align-items:center;gap:6px;">
            <button type="button" class="btn-mini-ocr" onclick="event.stopPropagation();selectConversation('${c.id}');openGuestOcrModal(true);" title="Importa messaggio ospite da foto (OCR)">${ICONS.scanText} <span>OCR</span></button>
            <span class="pill ${c.channelClass}" style="display:inline-flex;align-items:center;gap:4px;"><span>Apri / Scrivi</span> ${ICONS.arrowRight}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  modal.classList.add('open');
}

function closeModal() {
  document.getElementById('modalBackdrop')?.classList.remove('open');
  if (state.schedulePopoverOpen) {
    state.schedulePopoverOpen = false;
    renderSiderAI();
  }
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
  conv.dagestire = false;
  renderThread();
  showToast(`Risposta inviata in ${conv.langName} su ${state.outboundChannel}!`);
  closeDraftEditor();
}

function toggleGuestNoteEdit(forceState) {
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  const m = getConvPmsMeta(conv);
  const currentNoteObj = (conv.internalNotes && conv.internalNotes[0]) || {
    author: 'Sara M. (Reception)',
    time: '11:15',
    text: m.handoverNote || ''
  };
  const next = typeof forceState === 'boolean' ? forceState : !state.editingGuestNote;
  state.editingGuestNote = next;
  if (next) {
    state.gsAccOpen = state.gsAccOpen || { contatti: true, prenotazione: true, note: true };
    state.gsAccOpen.note = true;
  }
  state.guestNoteDrafts = state.guestNoteDrafts || {};
  state.guestNoteDrafts[conv.id] = currentNoteObj.text || '';
  renderSiderAI();
  if (next) {
    setTimeout(() => {
      const ta = document.getElementById('guestDetailNoteInput');
      if (ta) {
        ta.focus();
        ta.setSelectionRange(ta.value.length, ta.value.length);
      }
    }, 40);
  }
}

function updateGuestDetailNoteDraft(val) {
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  state.guestNoteDrafts = state.guestNoteDrafts || {};
  state.guestNoteDrafts[conv.id] = val;
}

function saveGuestDetailNote() {
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  const m = getConvPmsMeta(conv);
  state.guestNoteDrafts = state.guestNoteDrafts || {};
  const fallbackNote = (conv.internalNotes && conv.internalNotes.length > 0)
    ? conv.internalNotes[conv.internalNotes.length - 1].text
    : (m.handoverNote || '');
  const text = (state.guestNoteDrafts[conv.id] !== undefined ? state.guestNoteDrafts[conv.id] : fallbackNote).trim();
  state.editingGuestNote = false;
  if (!text) {
    conv.internalNotes = [{
      author: 'Sara M. (Reception)',
      time: '11:15',
      text: ''
    }];
    state.guestNoteDrafts[conv.id] = '';
    renderSiderAI();
    showToast('Nota ospite rimossa');
    return;
  }
  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  conv.internalNotes = [{
    author: 'Sara M. (Reception)',
    time: timeStr,
    text
  }];
  state.guestNoteDrafts[conv.id] = text;
  renderSiderAI();
  showToast('Nota ospite salvata');
}

function focusGuestNoteForm() {
  if (state.viewport === 'mobile') {
    setMobileTab('ai');
  }
  if (state.siderCollapsed) {
    state.siderCollapsed = false;
  }
  toggleGuestNoteEdit(true);
  setTimeout(() => {
    const section = document.getElementById('gsGuestNoteSection');
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const ta = document.getElementById('guestDetailNoteInput');
    if (ta) {
      ta.focus();
      ta.setSelectionRange(ta.value.length, ta.value.length);
    }
  }, 60);
}

function openManualNoteModal() {
  focusGuestNoteForm();
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

const OCR_GUEST_SCENARIOS = [
  {
    id: 'checkin_shuttle',
    label: 'Screenshot WhatsApp — Orario arrivo e codice accesso',
    channel: 'WhatsApp',
    fileName: 'IMG_whatsapp_guest_2026.png',
    origByLang: {
      PL: 'Dzień dobry! Nasz lot właśnie wylądował, będziemy na miejscu około 14:30. Czy możemy już wejść do apartamentu i jaki jest kod do drzwi?',
      DE: 'Hallo! Unser Flug ist gerade gelandet, wir sind gegen 14:30 Uhr da. Können wir schon in die Wohnung und wie lautet der Tür-Code?',
      FR: 'Bonjour ! Notre vol vient d’atterrir, nous arriverons vers 14h30. Pouvons-nous déjà entrer dans l’appartement et quel est le code de la porte ?'
    },
    translatedIt: 'Buongiorno! Il nostro volo è appena atterrato, saremo lì verso le 14:30. Possiamo già entrare nell\'appartamento e qual è il codice della porta?',
    aiReplyDraft: (conv, first) => `Gentile ${first}, benvenuto! L'appartamento ${conv.stay.room} è già pronto per il vostro arrivo alle 14:30. Potete accedere autonomamente inserendo sul tastierino Nuki il codice ${getConvPmsMeta(conv).nukiCode || '642949'}. A presto!`
  },
  {
    id: 'luggage_checkout',
    label: 'Screenshot OTA (Booking/Airbnb) — Deposito bagagli',
    channel: 'Airbnb',
    fileName: 'screenshot_airbnb_msg.jpg',
    origByLang: {
      PL: 'Cześć, w dniu wymeldowania mamy pociąg dopiero o 18:00. Czy możemy zostawić dwie walizki w przechowalni po 10:30?',
      DE: 'Hallo, am Abreisetag fährt unser Zug erst um 18:00 Uhr. Können wir nach 10:30 Uhr zwei Koffer im Gepäckraum lassen?',
      FR: 'Bonjour, le jour du départ notre train est seulement à 18h00. Pouvons-nous laisser deux valises à la bagagerie après 10h30 ?'
    },
    translatedIt: 'Ciao, il giorno del check-out abbiamo il treno solo alle 18:00. Possiamo lasciare due valigie nel deposito bagagli dopo le 10:30?',
    aiReplyDraft: (conv, first) => `Gentile ${first}, certamente! Dopo il check-out delle 10:30 potete lasciare gratuitamente le valigie nella nostra Luggage Room al piano terra fino alle 18:00 usando lo stesso codice Nuki ${getConvPmsMeta(conv).nukiCode || '642949'}.`
  },
  {
    id: 'garage_plate',
    label: 'Foto / Screenshot Ospite — Targa auto per Garage',
    channel: 'Booking.com',
    fileName: 'foto_targa_ospite.png',
    origByLang: {
      PL: 'Przesyłam zdjęcie tablicy rejestracyjnej do garażu: KR 8492A. Przyjedziemy czarnym SUV-em około 17:00.',
      DE: 'Ich schicke das Foto des Kennzeichens für die Garage: M-AB 4821. Wir kommen gegen 17:00 Uhr mit einem schwarzen SUV.',
      FR: 'Je vous envoie la photo de la plaque d’immatriculation pour le garage : GG-492-TX. Nous arriverons vers 17h00 en SUV noir.'
    },
    translatedIt: 'Invio la foto della targa per l\'accesso al garage: arriviamo verso le 17:00 con un SUV nero. Qual è il numero del nostro posto auto?',
    aiReplyDraft: (conv, first) => `Gentile ${first}, grazie! Abbiamo registrato la targa per il vostro arrivo delle 17:00. Il posto auto coperto assegnato a ${conv.stay.room} è il n. 14 al piano -1 (apertura sbarra con codice ${getConvPmsMeta(conv).nukiCode || '642949'}).`
  }
];

function openGuestOcrModal(fromNewConv) {
  const modal = document.getElementById('modalBackdrop');
  const content = document.getElementById('modalContent');
  if (!modal || !content) return;

  state.ocrScenarioIdx = state.ocrScenarioIdx || 0;
  state.ocrFromNewConv = Boolean(fromNewConv);
  state.ocrInputMode = false;
  state.ocrRawText = '';
  renderGuestOcrModalContent();
  modal.classList.add('open');
}

function renderGuestOcrModalContent() {
  const content = document.getElementById('modalContent');
  if (!content) return;

  const isEditing = Boolean(state.ocrInputMode || (state.ocrRawText && state.ocrRawText.length > 0));
  const hasText = Boolean(state.ocrRawText && state.ocrRawText.trim().length > 0);

  const imagePlusIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><line x1="16" y1="5" x2="22" y2="5"/><line x1="19" y1="2" x2="19" y2="8"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`;
  const imagePlusSmIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><line x1="16" y1="5" x2="22" y2="5"/><line x1="19" y1="2" x2="19" y2="8"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`;
  const wandSparklesIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"/><path d="m14 7 3 3"/><path d="M5 6v4"/><path d="M19 14v4"/><path d="M10 2v2"/><path d="M7 8H3"/><path d="M21 16h-4"/><path d="M11 3H9"/></svg>`;

  content.className = 'modal-card ocr-paste-modal';
  content.innerHTML = `
    <input type="file" id="ocrHiddenFileInput" accept="image/*" style="display:none" onchange="handleOcrFileSelected(event)" />

    <div class="ocr-paste-body" onpaste="handleOcrPaste(event)">
      ${!isEditing ? `
        <div class="ocr-paste-dropzone" onclick="activateOcrInputMode()" tabindex="0" role="button" aria-label="Incolla qui il messaggio">
          <div class="ocr-paste-plus-circle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </div>
          <div class="ocr-paste-title">Incolla qui il<br>messaggio</div>
          <div class="ocr-paste-subtitle">
            Puoi incollare testo oppure<br>anche uno screenshot con il<br>messaggio dell'ospite
          </div>
          <button type="button" class="ocr-upload-pill-btn" onclick="event.stopPropagation();triggerOcrPhotoUpload()">
            ${imagePlusIcon}
            <span>Carica una foto</span>
          </button>
        </div>
      ` : `
        <div class="ocr-active-editor-wrap">
          <textarea
            id="ocrMainTextarea"
            class="ocr-active-textarea"
            placeholder="Scrivi o incolla qui il messaggio dell'ospite..."
            oninput="onOcrTextareaInput(this.value)"
          >${state.ocrRawText || ''}</textarea>

          <div class="ocr-active-helper-row">
            <span class="ocr-active-helper-icon">${imagePlusSmIcon}</span>
            <span class="ocr-active-helper-text">Incolla anche un'immagine: Larry prova a leggere il testo automaticamente</span>
          </div>

          <div class="ocr-active-upload-row">
            <button type="button" class="ocr-upload-pill-btn" onclick="triggerOcrPhotoUpload()">
              ${imagePlusIcon}
              <span>Carica foto</span>
            </button>
          </div>
        </div>
      `}
    </div>

    <div class="ocr-paste-footer">
      <button
        type="button"
        id="ocrSubmitMainBtn"
        class="ocr-submit-main-btn ${hasText ? 'ready' : 'disabled'}"
        onclick="submitOcrAddAndTranslate()"
      >
        ${wandSparklesIcon}
        <span>Aggiungi e Traduci</span>
      </button>
    </div>
  `;
}

function activateOcrInputMode() {
  state.ocrInputMode = true;
  renderGuestOcrModalContent();
  setTimeout(() => {
    const ta = document.getElementById('ocrMainTextarea');
    if (ta) {
      ta.focus();
      ta.setSelectionRange(ta.value.length, ta.value.length);
    }
  }, 20);
}

function onOcrTextareaInput(val) {
  state.ocrRawText = val;
  const btn = document.getElementById('ocrSubmitMainBtn');
  if (btn) {
    const hasText = Boolean(val && val.trim().length > 0);
    btn.classList.toggle('ready', hasText);
    btn.classList.toggle('disabled', !hasText);
  }
}

function triggerOcrPhotoUpload() {
  const fileInput = document.getElementById('ocrHiddenFileInput');
  if (!fileInput) {
    simulateOcrPhotoExtraction();
    return;
  }
  let handled = false;
  const onFocusBack = () => {
    window.removeEventListener('focus', onFocusBack);
    setTimeout(() => {
      if (!handled && (!fileInput.files || fileInput.files.length === 0)) {
        simulateOcrPhotoExtraction();
      }
    }, 250);
  };
  window.addEventListener('focus', onFocusBack);
  fileInput.value = '';
  fileInput.click();
}

function handleOcrFileSelected(event) {
  const file = event?.target?.files?.[0];
  simulateOcrPhotoExtraction(file ? file.name : null);
}

function handleOcrPaste(event) {
  const items = event?.clipboardData?.items;
  if (items) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].type && items[i].type.indexOf('image') !== -1) {
        event.preventDefault();
        simulateOcrPhotoExtraction('screenshot_incollato.png');
        return;
      }
    }
  }
  if (!state.ocrInputMode) {
    const pastedText = event?.clipboardData?.getData('text/plain') || '';
    state.ocrInputMode = true;
    if (pastedText) {
      event.preventDefault();
      state.ocrRawText = pastedText;
    }
    renderGuestOcrModalContent();
    setTimeout(() => {
      const ta = document.getElementById('ocrMainTextarea');
      if (ta) {
        ta.focus();
        ta.setSelectionRange(ta.value.length, ta.value.length);
      }
    }, 20);
  }
}

function simulateOcrPhotoExtraction(fileName) {
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  const idx = state.ocrScenarioIdx || 0;
  const scen = OCR_GUEST_SCENARIOS[idx] || OCR_GUEST_SCENARIOS[0];
  const langKey = conv.langCode || conv.lang || 'PL';
  const extractedText = (scen.origByLang && scen.origByLang[langKey]) || scen.origByLang.PL;

  state.ocrInputMode = true;
  state.ocrRawText = extractedText;
  state.ocrScenarioIdx = (idx + 1) % OCR_GUEST_SCENARIOS.length;
  renderGuestOcrModalContent();

  setTimeout(() => {
    const ta = document.getElementById('ocrMainTextarea');
    if (ta) {
      ta.focus();
      ta.setSelectionRange(ta.value.length, ta.value.length);
    }
  }, 30);

  showToast(fileName
    ? `Testo estratto automaticamente da "${fileName}"`
    : 'Testo letto automaticamente dalla foto con Larry AI');
}

function submitOcrAddAndTranslate() {
  const ta = document.getElementById('ocrMainTextarea');
  const rawText = (ta ? ta.value : (state.ocrRawText || '')).trim();
  if (!rawText) {
    if (!state.ocrInputMode) {
      activateOcrInputMode();
    } else if (ta) {
      ta.focus();
    }
    showToast('Incolla un messaggio o carica una foto prima di procedere');
    return;
  }

  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  const matchedScen = OCR_GUEST_SCENARIOS.find(s =>
    Object.values(s.origByLang || {}).some(v => v.trim() === rawText)
  );
  const fallbackScen = OCR_GUEST_SCENARIOS[0];
  const scen = matchedScen || fallbackScen;

  const itText = matchedScen
    ? matchedScen.translatedIt
    : (conv.langCode === 'IT'
        ? rawText
        : `${rawText}\n\n[Traduzione IT]: Ciao! Avremmo bisogno di informazioni per il nostro soggiorno in ${conv.stay.room}, grazie!`);

  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  conv.importedOcrMessages = conv.importedOcrMessages || [];
  conv.importedOcrMessages.push({
    channel: conv.channel || 'WhatsApp',
    sourceChannel: conv.channel || 'Screenshot',
    time: timeStr,
    origText: rawText,
    itText: itText,
    translatedText: itText,
    showOrig: false
  });
  conv.preview = itText;
  conv.dagestire = true;
  conv.msgCount = (Number(conv.msgCount) || 12) + 1;

  const firstName = conv.name.replace('↳ ', '').split(' ')[0];
  state.drafts[conv.id] = scen.aiReplyDraft(conv, firstName);
  state.acc_modifica = true;
  state.draftOpen = true;

  closeModal();
  renderConversationLists();
  renderThread();
  renderSiderAI();

  setTimeout(() => {
    const deskArea = document.getElementById('desktopMessagesArea');
    const mobArea = document.getElementById('mobileMessagesArea');
    if (deskArea) deskArea.scrollTop = deskArea.scrollHeight;
    if (mobArea) mobArea.scrollTop = mobArea.scrollHeight;
  }, 50);

  showToast('Messaggio ospite aggiunto e tradotto con AI!');
}

function toggleOcrMsgOrig(idx) {
  const conv = CONVERSATIONS.find(c => c.id === state.selectedConvId) || CONVERSATIONS[0];
  if (!conv.importedOcrMessages || !conv.importedOcrMessages[idx]) return;
  conv.importedOcrMessages[idx].showOrig = !conv.importedOcrMessages[idx].showOrig;
  renderThread();
}

function triggerOcrExtract() {
  openGuestOcrModal(false);
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
