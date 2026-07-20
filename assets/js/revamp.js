(() => {
  // Brittany Chrome Touches: section spy
  const nav = document.querySelector(".section-nav[data-spy]");
  if (nav) {
    const links = [...nav.querySelectorAll('a[href^="#"]')];
    const sections = links
      .map((a) => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);
    if (sections.length) {
      const setActive = (id) => {
        links.forEach((link) => {
          const on = link.getAttribute("href") === `#${id}`;
          link.classList.toggle("is-active", on);
          if (on) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      };
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(entry.target.id);
          });
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
      );
      sections.forEach((section) => observer.observe(section));
    }
  }

  // Skills marquee: hover slows in place via playbackRate
  const carousel = document.querySelector(".skills-carousel");
  const track = carousel?.querySelector(".skills-carousel__track");
  if (!track || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const anim = () => track.getAnimations()[0];
  const slow = () => {
    const a = anim();
    if (a) a.playbackRate = 0.35;
  };
  const normal = () => {
    const a = anim();
    if (a) a.playbackRate = 1;
  };

  carousel.addEventListener("mouseenter", slow);
  carousel.addEventListener("mouseleave", normal);
  carousel.addEventListener("focusin", slow);
  carousel.addEventListener("focusout", (e) => {
    if (!carousel.contains(e.relatedTarget)) normal();
  });
})();
