// Adresse e-mail assemblée au chargement, pour limiter le spam
(function () {
  var link = document.getElementById('mail-link');
  if (link) {
    var user = 'wilfriedyamga', domain = 'gmail.com';
    link.href = 'mailto:' + user + '@' + domain;
  }

  // Tracé de la trajectoire quand elle entre à l'écran
  var t = document.querySelector('.trajectory');
  if (!t) return;
  if (!('IntersectionObserver' in window)) { t.classList.add('is-visible'); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { t.classList.add('is-visible'); io.disconnect(); }
    });
  }, { threshold: 0.4 });
  io.observe(t);
})();
