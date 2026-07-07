(function () {
  const icons = {
    menu: '<line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/>',
    x: '<line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>',
    send: '<path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4 20-7z"/>',
    image: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8" cy="10" r="2"/><path d="m21 15-5-5L5 19"/>',
    images: '<rect x="5" y="5" width="14" height="14" rx="2"/><path d="M3 15V5a2 2 0 0 1 2-2h10"/><circle cx="10" cy="11" r="2"/><path d="m19 16-4-4-6 7"/>',
    "message-square": '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>',
    "arrow-up-right": '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
    zap: '<path d="M13 2 3 14h8l-1 8 11-14h-8l0-6z"/>',
    "code-2": '<path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>',
    database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    "database-zap": '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v8c0 1.5 2.8 2.8 6.5 3"/><path d="M20 5v6"/><path d="M13 14h4l-2 7 5-9h-4l1-4-4 6z"/>',
    cpu: '<rect x="7" y="7" width="10" height="10" rx="2"/><rect x="10" y="10" width="4" height="4"/><path d="M4 9h3M4 15h3M17 9h3M17 15h3M9 4v3M15 4v3M9 17v3M15 17v3"/>',
    "badge-check": '<path d="M12 3 14.7 5.2 18 5.5l.6 3.2L21 11l-1.5 2.9.7 3.1-3.1 1-2.1 2.5-3-1.4-3 1.4L6.9 18l-3.1-1 .7-3.1L3 11l2.4-2.3L6 5.5l3.3-.3L12 3z"/><path d="m9 12 2 2 4-5"/>',
    braces: '<path d="M8 3c-2 0-3 1-3 3v2c0 1-1 2-2 2 1 0 2 1 2 2v2c0 2 1 3 3 3"/><path d="M16 3c2 0 3 1 3 3v2c0 1 1 2 2 2-1 0-2 1-2 2v2c0 2-1 3-3 3"/>',
    cable: '<path d="M6 8h8a4 4 0 0 1 0 8H8a4 4 0 0 1 0-8h2"/><path d="M6 12h8"/><path d="M17 8V5"/><path d="M20 8V5"/><path d="M17 19v-3"/><path d="M20 19v-3"/>',
    "server-cog": '<rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><circle cx="7" cy="7" r="1"/><circle cx="7" cy="17" r="1"/><path d="M15 17h3"/><path d="M15 7h3"/>',
    microchip: '<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M4 9h3M4 15h3M17 9h3M17 15h3M9 4v3M15 4v3M9 17v3M15 17v3"/>',
    "drafting-compass": '<circle cx="12" cy="5" r="2"/><path d="m12 7 6 14"/><path d="m12 7-6 14"/><path d="M8 14h8"/><path d="M6 21h12"/>',
    "chevron-left": '<path d="m15 18-6-6 6-6"/>',
    "chevron-right": '<path d="m9 18 6-6-6-6"/>',
    play: '<path d="m8 5 12 7-12 7V5z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    "map-pin": '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19 19 0 0 1-8.3-3 18.7 18.7 0 0 1-5.8-5.8 19 19 0 0 1-3-8.3A2 2 0 0 1 4.7 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.7 10a16 16 0 0 0 5.3 5.3l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"/>',
    "clock-3": '<circle cx="12" cy="12" r="9"/><path d="M12 7v5h5"/>',
    "shield-check": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-5"/>',
    workflow: '<rect x="3" y="4" width="6" height="6" rx="1"/><rect x="15" y="14" width="6" height="6" rx="1"/><path d="M9 7h3a4 4 0 0 1 4 4v3"/><path d="m13 11 3 3 3-3"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
    whatsapp: '<path d="M3 21l1.4-4.4A8.3 8.3 0 1 1 7.5 20L3 21z"/><path d="M9 8.8c.2-.5.4-.8.8-.8h.7c.2 0 .4.1.5.4l.8 1.8c.1.3 0 .6-.2.8l-.5.5a5.8 5.8 0 0 0 2.6 2.5l.5-.5c.2-.2.5-.3.8-.2l1.8.8c.3.1.4.3.4.6v.7c0 .4-.3.7-.7.8-1.7.3-4.1-.4-6-2.3-2-2-2.7-4.3-2.4-6z"/>',
    linkedin: '<path d="M6.5 10v8"/><path d="M6.5 6.5v.1"/><path d="M11 18v-8"/><path d="M11 13.5c0-2.1 1.4-3.7 3.5-3.7S18 11.2 18 13.8V18"/><rect x="3" y="3" width="18" height="18" rx="4"/>',
    twitter: '<path d="M4 4l16 16"/><path d="M20 4 4 20"/><path d="M8 4h3.2L20 20h-3.2L8 4z"/>',
    facebook: '<path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v5h4v-5h3l1-4h-4V9c0-.6.4-1 1-1z"/>',
    instagram: '<rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.4"/><path d="M17.5 6.5h.1"/>',
    sparkles: '<path d="M12 3l1.7 4.6L18 9.3l-4.3 1.7L12 16l-1.7-5L6 9.3l4.3-1.7L12 3z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z"/><path d="M5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14z"/>'
  };

  function createIcons() {
    document.querySelectorAll("[data-lucide]").forEach((node) => {
      const name = node.getAttribute("data-lucide");
      const body = icons[name];
      if (!body || node.tagName.toLowerCase() === "svg") return;
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("class", `lucide lucide-${name}`);
      svg.innerHTML = body;
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("fill", "none");
      svg.setAttribute("stroke", "currentColor");
      svg.setAttribute("stroke-width", "2");
      svg.setAttribute("stroke-linecap", "round");
      svg.setAttribute("stroke-linejoin", "round");
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("focusable", "false");
      node.replaceWith(svg);
    });
  }

  window.lucide = { createIcons };
})();
