/* ═══════════════════════════════════════════════
   WildCat Trio — The WildCat Experience
   script.js — Interactions, Animations, Motion
═══════════════════════════════════════════════ */

'use strict';

/* ─── Loading Screen ─── */
(function initLoader() {
  document.body.classList.add('loading');

  const loader = document.getElementById('loader');
  if (!loader) return;

  // Simulate loading then dismiss
  setTimeout(() => {
    loader.classList.add('fade-out');
    document.body.classList.remove('loading');

    setTimeout(() => {
      loader.style.display = 'none';
      // Trigger initial animations
      document.querySelectorAll('.reveal-up, .reveal-slide').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add('revealed');
        }
      });
    }, 600);
  }, 1400);
})();

/* ─── Navbar Scroll Behavior ─── */
(function initNav() {
  const nav = document.getElementById('nav');
  const links = document.querySelectorAll('.nav-link');

  function onScroll() {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Active link highlighting
    const sections = ['hero', 'apps', 'story', 'founder', 'cats'];
    let currentSection = '';

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top <= 100) {
        currentSection = id;
      }
    });

    links.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === `#${currentSection}`);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ─── Mobile Navigation ─── */
(function initMobileNav() {
  const hamburger = document.getElementById('navHamburger');
  const mobileMenu = document.getElementById('navMobile');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);

    const spans = hamburger.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  // Close on link click
  mobileMenu.querySelectorAll('.nav-mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      const spans = hamburger.querySelectorAll('span');
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });
})();

/* ─── Smooth Scroll ─── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navHeight = 72;
    const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top: targetPos, behavior: 'smooth' });
  });
});

/* ─── Scroll Reveal (Intersection Observer) ─── */
(function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Don't unobserve — keep the class
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -48px 0px'
  });

  document.querySelectorAll('.reveal-up, .reveal-slide').forEach(el => {
    observer.observe(el);
  });
})();

/* ─── Particle Canvas ─── */
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animFrame;
  let W, H;

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: -Math.random() * 0.5 - 0.1,
      alpha: Math.random() * 0.4 + 0.1,
      color: Math.random() > 0.5 ? '#FF6B35' : Math.random() > 0.5 ? '#E94560' : '#7C3AED'
    };
  }

  function init() {
    resize();
    particles = [];
    const count = Math.min(80, Math.floor(W / 15));
    for (let i = 0; i < count; i++) {
      const p = createParticle();
      p.y = Math.random() * H; // spread out initially
      particles.push(p);
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach((p, i) => {
      // Move
      p.x += p.dx;
      p.y += p.dy;

      // Wrap
      if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; }
      if (p.x < -5) { p.x = W + 5; }
      if (p.x > W + 5) { p.x = -5; }

      // Draw
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
    });

    ctx.globalAlpha = 1;
    animFrame = requestAnimationFrame(draw);
  }

  // Only run if not prefer-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    init();
    draw();
    window.addEventListener('resize', () => { resize(); init(); }, { passive: true });
  }
})();

/* ─── Counter Animation ─── */
(function initCounters() {
  const counters = document.querySelectorAll('.stat-num[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const duration = 1200;
      const start = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
})();

/* ─── Parallax on Hero Orbs ─── */
(function initParallax() {
  const orbs = document.querySelectorAll('.hero-orb');
  if (!orbs.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      orbs.forEach((orb, i) => {
        const speed = [0.15, 0.08, 0.05][i] || 0.1;
        const direction = i % 2 === 0 ? 1 : -1;
        orb.style.transform = `translateY(${scrollY * speed * direction}px)`;
      });
      ticking = false;
    });
  }, { passive: true });
})();

/* ─── Mouse-follower glow on App Cards ─── */
(function initCardGlow() {
  const cards = document.querySelectorAll('.principle-card, .cat-card, .cta-app-btn');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * 4;
      const rotY = ((cx - x) / cx) * 4;

      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();

/* ─── App Mockup Hover Float ─── */
(function initMockupFloat() {
  const mockups = document.querySelectorAll('.app-mockup');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  mockups.forEach((mockup, i) => {
    mockup.style.animation = `mockupFloat ${3 + i * 0.5}s ease-in-out infinite`;
    mockup.style.animationDelay = `${i * 0.3}s`;
  });

  const style = document.createElement('style');
  style.textContent = `
    @keyframes mockupFloat {
      0%, 100% { transform: translateY(0px) rotate(-1deg); }
      50% { transform: translateY(-12px) rotate(1deg); }
    }
  `;
  document.head.appendChild(style);
})();

/* ─── Easter Egg: Konami Code ─── */
(function initKonami() {
  const sequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let index = 0;

  document.addEventListener('keydown', e => {
    if (e.key === sequence[index]) {
      index++;
      if (index === sequence.length) {
        index = 0;
        triggerCatParty();
      }
    } else {
      index = 0;
    }
  });

  function triggerCatParty() {
    const cats = ['😸', '🐱', '😺', '😻', '🐈', '🐾'];
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed; inset: 0; z-index: 99998; pointer-events: none;
      overflow: hidden;
    `;
    document.body.appendChild(overlay);

    // Rain cats
    for (let i = 0; i < 40; i++) {
      setTimeout(() => {
        const cat = document.createElement('span');
        const size = Math.random() * 30 + 20;
        cat.textContent = cats[Math.floor(Math.random() * cats.length)];
        cat.style.cssText = `
          position: absolute;
          font-size: ${size}px;
          left: ${Math.random() * 100}vw;
          top: -60px;
          animation: catRain ${Math.random() * 2 + 1.5}s ease-in forwards;
          transform: rotate(${Math.random() * 360}deg);
        `;
        overlay.appendChild(cat);
      }, i * 60);
    }

    // Add cat rain keyframes
    if (!document.getElementById('cat-rain-style')) {
      const s = document.createElement('style');
      s.id = 'cat-rain-style';
      s.textContent = `
        @keyframes catRain {
          to { top: 110vh; transform: rotate(720deg); }
        }
      `;
      document.head.appendChild(s);
    }

    // Show message
    const msg = document.createElement('div');
    msg.style.cssText = `
      position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
      background: rgba(10,10,15,0.95); border: 1px solid rgba(255,107,53,0.4);
      border-radius: 24px; padding: 40px 60px; text-align: center;
      z-index: 99999; font-family: 'Space Grotesk', sans-serif;
      animation: konamiPop 0.4s cubic-bezier(0.34,1.56,0.64,1);
    `;
    msg.innerHTML = `
      <div style="font-size: 4rem; margin-bottom: 16px">😸😸😸</div>
      <div style="font-size: 1.5rem; font-weight: 700; color: #F5F5F7; margin-bottom: 8px">Cat Mode Activated!</div>
      <div style="font-size: 0.9rem; color: #A1A1AA">You found the secret! Santiago, Satoshi & Salem approve.</div>
    `;
    document.body.appendChild(msg);

    if (!document.getElementById('konami-style')) {
      const s = document.createElement('style');
      s.id = 'konami-style';
      s.textContent = `@keyframes konamiPop { from { transform: translate(-50%,-50%) scale(0); } to { transform: translate(-50%,-50%) scale(1); } }`;
      document.head.appendChild(s);
    }

    setTimeout(() => {
      overlay.remove();
      msg.remove();
    }, 4000);
  }
})();

/* ─── Intersection Observer for Mockup Ring Animations ─── */
(function initRingAnimations() {
  const rings = document.querySelectorAll('.ring-fill');
  if (!rings.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'stroke-dashoffset 1.5s ease';
        // Force reflow
        entry.target.getBoundingClientRect();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  rings.forEach(r => observer.observe(r));
})();

/* ─── Quote Cycling in Elevate Mockup ─── */
(function initQuoteCycle() {
  const quoteEl = document.querySelector('.quote-text');
  const authorEl = document.querySelector('.quote-author');
  if (!quoteEl || !authorEl) return;

  const quotes = [
    { text: 'The only way to do great work is to love what you do.', author: '— Steve Jobs' },
    { text: 'In the middle of every difficulty lies opportunity.', author: '— Albert Einstein' },
    { text: 'It does not matter how slowly you go as long as you do not stop.', author: '— Confucius' },
    { text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.', author: '— Winston Churchill' },
    { text: 'The best time to plant a tree was 20 years ago. The second best time is now.', author: '— Chinese Proverb' },
  ];

  let i = 0;

  setInterval(() => {
    i = (i + 1) % quotes.length;

    quoteEl.style.opacity = '0';
    authorEl.style.opacity = '0';
    quoteEl.style.transform = 'translateY(8px)';
    authorEl.style.transform = 'translateY(8px)';
    quoteEl.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    authorEl.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

    setTimeout(() => {
      quoteEl.textContent = quotes[i].text;
      authorEl.textContent = quotes[i].author;

      quoteEl.style.opacity = '1';
      authorEl.style.opacity = '1';
      quoteEl.style.transform = '';
      authorEl.style.transform = '';
    }, 400);
  }, 5000);
})();

/* ─── Journal cursor animation ─── */
(function initJournalTyping() {
  const el = document.querySelector('.journal-cursor');
  if (!el) return;

  const lines = [
    'Today was actually a pretty good day. I shipped a new feature and—',
    'Feeling grateful. Sometimes the small wins matter most—',
    'Had a long walk with Stacey. Cleared my head completely—',
    'The cats were particularly chaotic today. Classic—',
  ];

  let idx = 0;

  setInterval(() => {
    idx = (idx + 1) % lines.length;
    el.innerHTML = `${lines[idx]}<span class="cursor-blink">|</span>`;
  }, 4000);
})();

/* ─── Log initialization ─── */
console.log('%c🐱 WildCat Trio', 'font-size: 2em; font-weight: bold; background: linear-gradient(135deg, #FF6B35, #E94560, #7C3AED); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
console.log('%cPrivacy-first apps, crafted in Ireland.', 'color: #A1A1AA; font-size: 0.9em;');
console.log('%c↑↑↓↓←→←→BA for a surprise 😸', 'color: #FF6B35; font-size: 0.8em;');
