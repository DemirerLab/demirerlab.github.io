/*
  manages light/dark mode.
*/

{
  // immediately load saved (or default) mode before page renders
  document.documentElement.dataset.dark =
    window.localStorage.getItem("dark-mode") ?? "false";

  // every light/dark switch on the page (header, phone menu, footer) shows
  // the current mode
  const sync = () => {
    const dark = document.documentElement.dataset.dark === "true";
    for (const toggle of document.querySelectorAll(".dark-toggle, .theme-button"))
      toggle.checked = dark;
  };

  // as soon as the page is parsed, and again when it is shown from the
  // back/forward cache (where the switches keep their old state)
  document.addEventListener("DOMContentLoaded", sync);
  window.addEventListener("pageshow", sync);

  // when user toggles a mode switch
  window.onDarkToggleChange = (event) => {
    const value = event.target.checked;
    document.documentElement.dataset.dark = value;
    window.localStorage.setItem("dark-mode", value);
    sync();
  };
}
