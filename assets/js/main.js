(function () {
  const ready = () => {
    document.documentElement.classList.add("js-ready");

    if (window.lucide) {
      window.lucide.createIcons();
    }

    const toggle = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector("[data-nav]");
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
        const icon = toggle.querySelector("svg");
        if (icon) {
          toggle.innerHTML = open ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
          if (window.lucide) window.lucide.createIcons();
        }
      });
    }

    splitRevealWords();
    setupRevealObserver();
    setupMagneticGlass();
    setupAdaptiveImageFrames();
    setupGalleries();
  };

  function splitRevealWords() {
    document.querySelectorAll(".reveal-words").forEach((element) => {
      if (element.dataset.split === "true") return;
      const words = element.textContent.trim().split(/\s+/);
      element.textContent = "";
      words.forEach((word, index) => {
        const span = document.createElement("span");
        span.className = "word";
        span.style.setProperty("--word-index", index);
        span.textContent = word;
        element.append(span, document.createTextNode(" "));
      });
      element.dataset.split = "true";
    });
  }

  function setupRevealObserver() {
    const targets = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((target) => observer.observe(target));
  }

  function setupMagneticGlass() {
    const selector = [
      ".magnetic",
      ".project-detail",
      ".project-meta div",
      ".story-media",
      ".timeline-item",
      ".language-list span",
      ".hero-tags span",
      ".social-link"
    ].join(",");

    document.querySelectorAll(selector).forEach((element) => {
      element.addEventListener("pointermove", (event) => {
        const rect = element.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        element.style.setProperty("--mx", `${x}%`);
        element.style.setProperty("--my", `${y}%`);
      });
    });
  }

  function setupAdaptiveImageFrames() {
    document.querySelectorAll(".portrait-glass, .story-media").forEach((frame) => {
      const image = frame.querySelector("img");
      if (!image) return;

      const resizeFrame = () => {
        if (!image.naturalWidth || !image.naturalHeight) return;
        const framePadding = frame.classList.contains("portrait-glass") ? 32 : 0;
        const width = (image.naturalWidth / image.naturalHeight) * 620 + framePadding;
        frame.style.setProperty("--adaptive-frame-width", `${Math.round(width)}px`);
      };

      if (image.complete) resizeFrame();
      else image.addEventListener("load", resizeFrame, { once: true });
    });
  }

  function setupGalleries() {
    document.querySelectorAll("[data-gallery]").forEach((gallery) => {
      const track = gallery.querySelector(".gallery-track");
      const slides = Array.from(track ? track.children : []);
      const prev = gallery.querySelector("[data-gallery-prev]");
      const next = gallery.querySelector("[data-gallery-next]");
      const dotsWrap = gallery.querySelector("[data-gallery-dots]");
      if (!track || slides.length <= 1) return;

      let index = 0;
      let startX = 0;

      const resizeGallery = (slide) => {
        const image = slide instanceof HTMLImageElement ? slide : slide.querySelector("img");
        if (!image) return;

        const applySize = () => {
          if (!image.naturalWidth || !image.naturalHeight) return;
          const maxHeight = window.innerWidth <= 760 ? 440 : window.innerWidth <= 980 ? 500 : 520;
          const ratio = image.naturalWidth / image.naturalHeight;
          const width = Math.min(620, maxHeight * ratio);
          gallery.style.setProperty("--gallery-width", `${Math.round(width)}px`);
          gallery.style.setProperty("--gallery-aspect", `${image.naturalWidth} / ${image.naturalHeight}`);
        };

        if (image.complete) applySize();
        else image.addEventListener("load", applySize, { once: true });
      };

      const dots = slides.map((_, dotIndex) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("aria-label", `Aller a l'image ${dotIndex + 1}`);
        dot.addEventListener("click", () => show(dotIndex));
        dotsWrap.appendChild(dot);
        return dot;
      });

      const show = (nextIndex) => {
        index = (nextIndex + slides.length) % slides.length;
        resizeGallery(slides[index]);
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === index));
      };

      prev.addEventListener("click", () => show(index - 1));
      next.addEventListener("click", () => show(index + 1));
      gallery.addEventListener("pointerdown", (event) => {
        startX = event.clientX;
      });
      gallery.addEventListener("pointerup", (event) => {
        const delta = event.clientX - startX;
        if (Math.abs(delta) > 42) show(index + (delta < 0 ? 1 : -1));
      });
      window.addEventListener("resize", () => resizeGallery(slides[index]));

      show(0);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }
})();
