/*
  click (or press Enter on) a research figure to see it larger, on a white mat
  over a dimmed page. works for any image placed on a page in its own
  paragraph, and for unlinked figure includes (logos excepted: alt text with
  the word "logo" or "logos", as in _styles/image.scss). without JavaScript,
  or in browsers without <dialog>, figures simply stay as they are.
*/

{
  const selector = [
    "main p > img:only-child",
    "main .figure-image:not([href]) > img",
  ].join(", ");

  const onReady = () => {
    const images = [...document.querySelectorAll(selector)].filter(
      (image) =>
        !image.closest("a[href]") && !/(^|\s)logos?(\s|$)/i.test(image.alt)
    );
    if (!images.length) return;

    const dialog = document.createElement("dialog");
    if (typeof dialog.showModal !== "function") return;
    dialog.className = "lightbox";
    dialog.setAttribute("aria-label", "Enlarged figure");

    const close = document.createElement("button");
    close.type = "button";
    close.className = "lightbox-close";
    close.setAttribute("aria-label", "Close enlarged figure");

    const large = document.createElement("img");
    large.className = "lightbox-image";
    large.alt = "";

    dialog.append(close, large);
    document.body.append(dialog);

    let closing = false;
    let opener = null;
    const hide = () => {
      if (!dialog.open || closing) return;
      closing = true;
      dialog.classList.add("is-closing");
      window.setTimeout(() => {
        dialog.classList.remove("is-closing");
        dialog.close();
        closing = false;
        // focus goes back to the figure that opened the view
        if (opener) opener.focus({ preventScroll: true });
      }, 220);
    };

    const show = (image) => {
      opener = image;
      large.src = image.currentSrc || image.src;
      large.alt = image.alt || "";
      // a wide figure can keep a readable height on phones (see lightbox.scss)
      dialog.classList.toggle(
        "is-wide",
        image.naturalWidth > 1.6 * image.naturalHeight
      );
      dialog.showModal();
      dialog.scrollLeft = 0;
      close.focus();
    };

    close.addEventListener("click", hide);
    // a click anywhere on the dimmed page or on the figure closes it
    dialog.addEventListener("click", hide);
    dialog.addEventListener("cancel", (event) => {
      event.preventDefault();
      hide();
    });

    for (const image of images) {
      image.classList.add("is-zoomable");
      image.tabIndex = 0;
      image.setAttribute("role", "button");
      image.setAttribute(
        "aria-label",
        "Enlarge figure" + (image.alt ? ": " + image.alt : "")
      );
      image.addEventListener("click", () => show(image));
      image.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          show(image);
        }
      });
    }
  };

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", onReady);
  else onReady();
}
