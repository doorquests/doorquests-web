/* The Axiom Continuum — browser-only Daily Door engine. No cookies, API, or account. */
(function () {
  'use strict';
  const doors = window.TAC_DAILY_DOORS;
  const grid = document.getElementById('daily-door-grid');
  const title = document.getElementById('daily-door-title');
  const genre = document.getElementById('daily-door-genre');
  const link = document.getElementById('daily-door-link');
  const number = document.getElementById('daily-door-number');
  const dateLabel = document.getElementById('daily-door-date');
  const status = document.getElementById('daily-door-status');
  if (!Array.isArray(doors) || doors.length !== 31 || !grid || !title || !genre || !link || !number || !dateLabel || !status) return;
  if (doors.some((d, i) => d.day !== i + 1 || !/^\/stories\/[a-z0-9-]+\/$/.test(d.url))) return;

  const nodes = new Map();
  const fragment = document.createDocumentFragment();
  doors.forEach(function (door) {
    const a = document.createElement('a');
    a.className = 'daily-door-tile';
    a.href = door.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.dataset.day = String(door.day);
    a.setAttribute('aria-label', 'Door ' + door.day + ': ' + door.title + ', ' + door.genre);
    const front = document.createElement('span'); front.className = 'daily-door-tile-front';
    const d = document.createElement('span'); d.className = 'daily-door-tile-number'; d.textContent = String(door.day).padStart(2, '0');
    const badge = document.createElement('span'); badge.className = 'daily-door-tile-badge'; badge.textContent = 'TODAY'; badge.hidden = true;
    front.append(d, badge);
    const name = document.createElement('strong'); name.textContent = door.title;
    const kind = document.createElement('span'); kind.className = 'daily-door-tile-genre'; kind.textContent = door.genre;
    a.append(front, name, kind);
    nodes.set(door.day, { a, badge });
    fragment.appendChild(a);
  });
  grid.replaceChildren(fragment);

  let activeDay = null;
  let midnightTimer;
  const dateFormat = new Intl.DateTimeFormat(undefined, { month: 'long', day: 'numeric', year: 'numeric' });
  function update() {
    const now = new Date();
    const today = now.getDate();
    if (today !== activeDay) {
      if (activeDay !== null) {
        const prev = nodes.get(activeDay);
        prev.a.classList.remove('is-today'); prev.a.removeAttribute('aria-current'); prev.badge.hidden = true;
      }
      const chosen = doors[today - 1];
      const current = nodes.get(today);
      current.a.classList.add('is-today');
      current.a.setAttribute('aria-current', 'date');
      current.badge.hidden = false;
      title.textContent = chosen.title;
      genre.textContent = chosen.genre;
      number.textContent = String(today).padStart(2, '0');
      link.href = chosen.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', 'Open today’s story: ' + chosen.title);
      activeDay = today;
    }
    dateLabel.textContent = dateFormat.format(now);
    status.textContent = 'All 31 doors are open to explore. Today’s featured door is ' + today + '.';
    window.clearTimeout(midnightTimer);
    const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    midnightTimer = window.setTimeout(update, Math.max(1000, nextMidnight.getTime() - now.getTime() + 100));
  }
  document.addEventListener('visibilitychange', function () { if (!document.hidden) update(); });
  window.addEventListener('focus', update);
  window.addEventListener('pageshow', update);
  update();
})();
