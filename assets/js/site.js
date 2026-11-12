// Adresse e-mail assemblée au chargement, pour limiter le spam
(function () {
  var address = 'wilfriedyamga' + '@' + 'gmail.com';
  document.querySelectorAll('.mail-link').forEach(function (a) { a.href = 'mailto:' + address; });

  // Repère de la section en cours dans la barre latérale
  var links = document.querySelectorAll('.side nav a');
  if (!links.length || !('IntersectionObserver' in window)) return;
  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      links.forEach(function (a) { a.classList.remove('current'); a.removeAttribute('aria-current'); });
      var a = byId[e.target.id];
      if (a) { a.classList.add('current'); a.setAttribute('aria-current', 'true'); }
    });
  }, { rootMargin: '-35% 0px -60% 0px' });
  Object.keys(byId).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
})();
