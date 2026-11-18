/*
  visual effects: fade-up reveals on scroll, compact header state, a thin
  reading-progress line on article pages (research areas, news posts), and a
  pause for the home hero animation while it is off-screen.

  progressive enhancement: nothing is hidden unless this script runs, the
  browser has IntersectionObserver, and the visitor allows motion. the
  "reveal-on" class on <html> is what lets the stylesheet hide targets, and
  only targets below the first screen are ever hidden.
*/

{
  const root = document.documentElement;
  const reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canReveal = "IntersectionObserver" in window && !reduce;

  // set before the page renders, so revealed items never flash
  if (canReveal) root.classList.add("reveal-on");

  // printing shows everything, scrolled into view or not
  window.addEventListener("beforeprint", () =>
    root.classList.remove("reveal-on")
  );

  // things that fade up as they scroll into view
  const selector = [
    "main > section:not([data-banner]) > h2",
    "main > section:not([data-banner]) > h3",
    "main > section:not([data-banner]) > p",
    "main > section:not([data-banner]) > ul",
    "main > section:not([data-banner]) > ol",
    "main > section:not([data-banner]) > .button-wrapper > .button",
    "main > section:not([data-banner]) > .search-box",
    "main > section:not([data-banner]) > .tags",
    "main > section > .feature",
    "main > section > .cols > div",
    "main > section > .grid > *",
    ".citation-container",
    ".post-excerpt-container",
    "main > section > .portrait-wrapper > .portrait",
    ".post-nav > span",
    ".member-card",
    ".member-body > *",
  ].join(", ");

  let progress = null;

  const onScroll = () => {
    root.classList.toggle("is-scrolled", window.scrollY > 24);
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      progress.style.transform = `scaleX(${value})`;
    }
  };

  const onReady = () => {
    // a still of the assembled particle stands in for the eCIS animation while
    // it is not playing (reduced motion, or iOS Low Power Mode blocking autoplay)
    for (const video of document.querySelectorAll(
      'video[src$="files/ecis-animation.mp4"]:not([poster])'
    ))
      video.poster = video
        .getAttribute("src")
        .replace(/files\/ecis-animation\.mp4$/, "images/design/ecis-poster.jpg");

    // a looping animation (the eCIS video) waits for a click under reduced motion
    if (reduce) {
      for (const video of document.querySelectorAll("video[autoplay]")) {
        video.removeAttribute("autoplay");
        video.pause();
      }
    }

    // reading progress on pages that open with a banner image (not the home page)
    const header = document.querySelector("header");
    const article = document.querySelector(
      "body:not([data-home]) main > section[data-banner]:first-child"
    );
    if (header && article && !reduce) {
      progress = document.createElement("div");
      progress.className = "read-progress";
      progress.setAttribute("aria-hidden", "true");
      header.append(progress);
    }

    // compact header once the page scrolls
    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
      },
      { passive: true }
    );
    onScroll();

    // a quiet scroll cue at the foot of the home hero (decorative)
    const hero = document.querySelector(
      "body[data-home] main > section[data-banner]:first-child"
    );
    if (hero) {
      const cue = document.createElement("span");
      cue.className = "hero-cue";
      cue.setAttribute("aria-hidden", "true");
      hero.append(cue);
    }

    // header dropdown (Research): it opens on hover or keyboard focus (see
    // _styles/header.scss). Escape closes it until the next hover or focus.
    // on touch screens without hover (tablets in landscape), a tap on
    // Research opens it if it isn't showing yet and the next tap follows the
    // link; a tap elsewhere closes it. coming back with the back button, it
    // is closed again, even if the link followed from it kept focus or a
    // touch screen kept its hover
    const wide = window.matchMedia("(min-width: 961px)");
    const touch = window.matchMedia("(hover: none)");
    for (const group of document.querySelectorAll(".nav-group")) {
      const link = group.firstElementChild;
      const panel = group.querySelector(".nav-sub");
      const reopen = () => group.classList.remove("is-closed");
      group.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        group.classList.add("is-closed");
        link.focus();
      });
      group.addEventListener("mouseenter", () => !touch.matches && reopen());
      group.addEventListener("mouseleave", reopen);
      group.addEventListener("focusin", (event) => {
        if (!group.contains(event.relatedTarget)) reopen();
      });
      group.addEventListener("focusout", (event) => {
        if (!group.contains(event.relatedTarget)) reopen();
      });

      let shown = true;
      link.addEventListener("pointerdown", () => {
        shown = window.getComputedStyle(panel).visibility === "visible";
      });
      link.addEventListener("click", (event) => {
        const wasShown = shown;
        shown = true; // (a click without a tap, e.g. Enter, follows the link)
        if (!wide.matches || !touch.matches || wasShown) return;
        event.preventDefault();
        reopen();
        group.classList.add("is-open");
      });
    }
    document.addEventListener("pointerdown", (event) => {
      for (const group of document.querySelectorAll(".nav-group.is-open"))
        if (!group.contains(event.target)) group.classList.remove("is-open");
    });
    window.addEventListener("pageshow", (event) => {
      for (const group of document.querySelectorAll(".nav-group")) {
        group.classList.remove("is-open");
        if (!event.persisted) continue;
        if (group.contains(document.activeElement)) document.activeElement.blur();
        group.classList.add("is-closed");
      }
    });

    // Escape also closes the phone menu, and so does following one of its
    // links, so it is closed when the visitor comes back with the back button
    const toggle = document.querySelector(".nav-toggle");
    if (toggle) {
      document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape" || !toggle.checked) return;
        toggle.checked = false;
        toggle.focus();
      });
      toggle.nextElementSibling.addEventListener("click", (event) => {
        if (event.target.closest("a[href]")) toggle.checked = false;
      });
      // (a page restored from the back/forward cache keeps its old state)
      window.addEventListener("pageshow", () => (toggle.checked = false));
    }

    if (!canReveal) return;

    // pause the slow hero gradient drift while the hero is out of view
    if (hero) {
      new IntersectionObserver(([entry]) =>
        hero.classList.toggle("is-offscreen", !entry.isIntersecting)
      ).observe(hero);
    }

    try {
      // a logo image (alt text with the word "logo" or "logos") that directly
      // follows another one shares its panel (see _styles/image.scss), so it
      // reveals together with the first one
      const isLogo = (element) =>
        element &&
        element.tagName === "P" &&
        element.children.length === 1 &&
        element.firstElementChild.tagName === "IMG" &&
        /(^|\s)logos?(\s|$)/i.test(element.firstElementChild.alt);
      const followers = new Map();

      const reveal = (element, delay) => {
        element.style.setProperty("--reveal-delay", delay + "ms");
        element.classList.add("is-revealed");
        // hand the element back to its own hover transitions afterwards
        window.setTimeout(() => {
          element.classList.remove("reveal", "is-revealed");
          element.style.removeProperty("--reveal-delay");
        }, 1500);
        for (const follower of followers.get(element) || []) reveal(follower, delay);
      };

      // reveal on scroll, with a short stagger for items arriving together
      const observer = new IntersectionObserver(
        (entries) => {
          let index = 0;
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const element = entry.target;
            observer.unobserve(element);
            reveal(element, Math.min(index++, 6) * 70);
          }
        },
        { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
      );

      // only what starts below the first screen is hidden: anything the
      // visitor may already see (the browser can paint before this runs)
      // stays put
      const fold = window.innerHeight;
      let leader = null;
      let leaderShown = false;
      for (const element of document.querySelectorAll(selector)) {
        if (leader && isLogo(element) && isLogo(element.previousElementSibling)) {
          if (!leaderShown) {
            element.classList.add("reveal");
            followers.get(leader).push(element);
          }
          continue;
        }
        leader = isLogo(element) ? element : null;
        leaderShown = element.getBoundingClientRect().top < fold;
        if (leaderShown) continue;
        element.classList.add("reveal");
        if (leader) followers.set(leader, []);
        observer.observe(element);
      }
    } catch (error) {
      // never leave content hidden
      root.classList.remove("reveal-on");
    }
  };

  // start as soon as the page is parsed, without waiting for the deferred
  // third-party scripts (DOMContentLoaded waits for those)
  if (document.readyState === "loading")
    document.addEventListener("readystatechange", onReady, { once: true });
  else onReady();
}
