/* ========================================
   HuidouApps - Main JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Fade-in on scroll ----
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  fadeEls.forEach(el => observer.observe(el));

  // ---- Active nav link highlight ----
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ---- Mobile nav toggle ----
  const nav = document.querySelector('.nav-links');
  if (nav) {
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '&#9776;';
    hamburger.setAttribute('aria-label', 'Toggle menu');

    const headerInner = document.querySelector('.header-inner');
    if (headerInner) {
      headerInner.appendChild(hamburger);

      hamburger.addEventListener('click', () => {
        nav.classList.toggle('open');
      });

      const mq = window.matchMedia('(max-width: 900px)');
      const handleResize = (e) => {
        hamburger.style.display = e.matches ? 'block' : 'none';
        if (!e.matches) nav.classList.remove('open');
      };
      mq.addEventListener('change', handleResize);
      handleResize(mq);
    }
  }

});
