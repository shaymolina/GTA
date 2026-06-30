document.addEventListener('DOMContentLoaded', function () {
  var el = document.querySelector('[data-countdown]');
  if (!el) return;
  var target = new Date('2026-11-19T00:00:00+02:00').getTime();
  var daysEl = el.querySelector('[data-days]');
  var hoursEl = el.querySelector('[data-hours]');
  var minsEl = el.querySelector('[data-mins]');
  var secsEl = el.querySelector('[data-secs]');

  function tick() {
    var diff = Math.max(0, target - Date.now());
    var days = Math.floor(diff / 86400000);
    var hours = Math.floor((diff % 86400000) / 3600000);
    var mins = Math.floor((diff % 3600000) / 60000);
    var secs = Math.floor((diff % 60000) / 1000);
    if (daysEl) daysEl.textContent = days;
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(mins).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(secs).padStart(2, '0');
  }
  tick();
  setInterval(tick, 1000);
});
