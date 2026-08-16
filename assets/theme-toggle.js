(function () {
  var STORAGE_KEY = 'mentoria-theme';
  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  if (saved === 'dark' || saved === 'light') {
    document.documentElement.setAttribute('data-theme', saved);
  }

  function currentIsDark() {
    var attr = document.documentElement.getAttribute('data-theme');
    if (attr === 'dark') return true;
    if (attr === 'light') return false;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function updateIcon(btn) {
    btn.textContent = currentIsDark() ? '☀️' : '🌙';
    btn.setAttribute('aria-label', currentIsDark() ? 'Mudar para tema claro' : 'Mudar para tema escuro');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.createElement('button');
    btn.className = 'theme-toggle-btn';
    btn.type = 'button';
    updateIcon(btn);
    btn.addEventListener('click', function () {
      var next = currentIsDark() ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
      updateIcon(btn);
    });
    document.body.appendChild(btn);
  });
})();
