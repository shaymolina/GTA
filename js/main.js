function startCountdown() {
  const el = document.querySelector('[data-countdown]');
  if (!el) return;
  const target = new Date('2026-11-19T00:00:00+02:00').getTime();

  const daysEl = el.querySelector('[data-days]');
  const hoursEl = el.querySelector('[data-hours]');
  const minsEl = el.querySelector('[data-mins]');
  const secsEl = el.querySelector('[data-secs]');

  function tick() {
    const diff = Math.max(0, target - Date.now());
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);

    if (daysEl) daysEl.textContent = days;
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(mins).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(secs).padStart(2, '0');
  }

  tick();
  setInterval(tick, 1000);
}

function setupNavToggle() {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-main-nav]');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

function markActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-main-nav] a').forEach((link) => {
    if (link.getAttribute('href') === path) link.setAttribute('aria-current', 'page');
  });
}

function setupFaq() {
  document.querySelectorAll('.faq-entry').forEach((item) => {
    const btn = item.querySelector('.faq-q');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-entry.open').forEach((other) => {
        if (other !== item) other.classList.remove('open');
      });
      item.classList.toggle('open', !wasOpen);
      btn.setAttribute('aria-expanded', String(!wasOpen));
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  startCountdown();
  setupNavToggle();
  markActiveNav();
  setupFaq();
});
