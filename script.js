const body = document.body;
const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

function setHeaderState() {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
}

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

menuButton?.addEventListener("click", () => {
  const nextState = !body.classList.contains("nav-open");
  body.classList.toggle("nav-open", nextState);
  menuButton.setAttribute("aria-expanded", String(nextState));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    body.classList.remove("nav-open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealTargets = document.querySelectorAll(
  ".event-card, .anniversary-card, .feature-card, .team-card, .member-card, .achievement-card, .update-card, .x-panel, .partner-card"
);

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  revealTargets.forEach((element) => {
    element.classList.add("reveal-ready");
    revealObserver.observe(element);
  });
} else {
  revealTargets.forEach((element) => element.classList.add("is-visible"));
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fall back to the selection method when browser permissions block Clipboard API.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

document.querySelector("[data-copy-email]")?.addEventListener("click", async (event) => {
  const button = event.currentTarget;
  const email = button.dataset.copyEmail;
  const status = document.querySelector("[data-copy-status]");

  if (!email) return;

  try {
    await copyText(email);
    if (status) status.textContent = "コピーしました";
  } catch {
    if (status) status.textContent = "コピーできませんでした";
  }

  window.setTimeout(() => {
    if (status) status.textContent = "";
  }, 2200);
});
