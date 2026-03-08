// Pixel Bank - Main Logic v1.4.0

/**
 * App Sidebar Component
 */
class AppSidebar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          width: var(--sidebar-width, 260px);
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.5rem;
          height: calc(100vh - 120px);
          position: sticky;
          top: 104px;
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          box-sizing: border-box;
          transition: all 0.3s ease;
        }
        .nav-group {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .nav-item {
          padding: 0.75rem 1rem;
          border-radius: 12px;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
        }
        .nav-item:hover, .nav-item.active {
          background: rgba(255, 255, 255, 0.05);
          color: white;
        }
        .section-label {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: rgba(255,255,255,0.2);
          padding: 1.25rem 1rem 0.5rem;
          font-weight: 700;
        }
        @media (max-width: 1024px) {
          :host {
            position: fixed;
            z-index: 1000;
            left: 1rem;
            top: 80px;
            height: auto;
            transform: translateX(-120%);
            margin-left: 0;
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          }
          :host([open]) {
            transform: translateX(0);
          }
        }
      </style>
      <div class="nav-group">
        <div class="section-label">Components</div>
        <a href="#" class="nav-item active">Buttons</a>
        <a href="#" class="nav-item">Cards</a>
        <a href="#" class="nav-item">Modals</a>
        <a href="#" class="nav-item">Navigation</a>
        <a href="#" class="nav-item">Inputs</a>
        <div class="section-label">Assets</div>
        <a href="#" class="nav-item">Icons</a>
        <a href="#" class="nav-item">Images</a>
      </div>
    `;
  }
}
customElements.define('app-sidebar', AppSidebar);

/**
 * Sidebar Toggle Trigger
 */
class SidebarTrigger extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        button {
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.6);
          padding: 8px;
          cursor: pointer;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        button:hover { background: rgba(255, 255, 255, 0.05); color: white; }
        svg { width: 20px; height: 20px; }
      </style>
      <button>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
      </button>
    `;
    this.shadowRoot.querySelector('button').addEventListener('click', () => {
      const sidebar = document.querySelector('app-sidebar');
      if (sidebar) sidebar.toggleAttribute('open');
    });
  }
}
customElements.define('sidebar-trigger', SidebarTrigger);

/**
 * Auth Modal Component (Shadcn/UI style)
 */
class AuthModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  open() {
    this.shadowRoot.querySelector('.overlay').classList.add('visible');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.shadowRoot.querySelector('.overlay').classList.remove('visible');
    document.body.style.overflow = '';
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(4px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .overlay.visible {
          opacity: 1;
          visibility: visible;
        }
        .card {
          background: #0a0a0a;
          border: 1px solid rgba(255, 255, 255, 0.1);
          width: 100%;
          max-width: 400px;
          border-radius: 1rem;
          padding: 2.5rem;
          color: white;
          transform: translateY(20px) scale(0.95);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          font-family: var(--font-sans, system-ui, sans-serif);
          text-align: center;
        }
        .overlay.visible .card {
          transform: translateY(0) scale(1);
        }
        .logo {
          width: 48px;
          height: 48px;
          background: white;
          border-radius: 8px;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo svg { width: 32px; height: 32px; color: black; }
        h2 { font-size: 1.5rem; font-weight: 600; margin: 0 0 0.5rem; }
        p { color: rgba(255, 255, 255, 0.5); font-size: 0.9rem; margin-bottom: 2rem; }
        
        .btn {
          width: 100%;
          padding: 0.8rem;
          border-radius: 8px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .btn-primary { background: white; color: black; }
        .btn-primary:hover { background: #e5e5e5; transform: scale(1.02); }
        .btn-secondary { background: rgba(255, 255, 255, 0.05); color: white; border: 1px solid rgba(255, 255, 255, 0.1); }
        .btn-secondary:hover { background: rgba(255, 255, 255, 0.1); transform: scale(1.02); }
        
        .separator {
          display: flex;
          align-items: center;
          margin: 1.5rem 0;
          color: rgba(255, 255, 255, 0.2);
          font-size: 0.75rem;
          text-transform: uppercase;
        }
        .separator::before, .separator::after {
          content: "";
          flex: 1;
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
        }
        .separator span { padding: 0 1rem; }
        
        .close-area { position: absolute; inset: 0; cursor: pointer; }
      </style>
      <div class="overlay">
        <div class="close-area"></div>
        <div class="card">
          <div class="logo">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <h2>Welcome to Pixel Bank</h2>
          <p>Sign in to your account to continue</p>
          
          <button class="btn btn-primary" id="login-google">
            Continue with Google
          </button>
          
          <div class="separator"><span>or</span></div>
          
          <button class="btn btn-secondary">Email Address</button>
          <button class="btn btn-secondary">Github</button>
        </div>
      </div>
    `;

    this.shadowRoot.querySelector('.close-area').addEventListener('click', () => this.close());
    this.shadowRoot.getElementById('login-google').addEventListener('click', () => {
      localStorage.setItem('isLoggedIn', 'true');
      window.location.reload();
    });
  }

  connectedCallback() {
    this.render();
  }
}
customElements.define('auth-modal', AuthModal);

/**
 * Auth Status Button Component
 */
class AuthStatus extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  connectedCallback() {
    this.render();
  }

  toggleAuth() {
    if (this.isLoggedIn) {
      localStorage.setItem('isLoggedIn', 'false');
      window.location.reload();
    } else {
      document.querySelector('auth-modal').open();
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: fixed;
          top: 2rem;
          right: 2rem;
          z-index: 1000;
          font-family: var(--font-sans, system-ui, sans-serif);
          transition: opacity 0.3s ease;
        }
        .container {
          height: 46px; /* Unified height */
          display: flex;
          align-items: center;
        }
        button {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0 1.5rem;
          height: 100%;
          border-radius: 100px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          outline: none;
          display: flex;
          align-items: center;
        }
        button:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }
        .logout-btn { color: oklch(0.7 0.15 20); }
      </style>
      <div class="container">
        <button class="${this.isLoggedIn ? 'logout-btn' : ''}">
          ${this.isLoggedIn ? 'Log out' : 'Sign in'}
        </button>
      </div>
    `;
    this.shadowRoot.querySelector('button').addEventListener('click', () => this.toggleAuth());
  }
}
customElements.define('auth-status', AuthStatus);

/**
 * Navigation Menu Component
 */
class NavigationMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: fixed;
          top: 2rem;
          left: 2rem;
          z-index: 1000;
          font-family: var(--font-sans, system-ui, sans-serif);
          transition: opacity 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        nav {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          padding: 4px;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          height: 44px;
          box-sizing: border-box;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 1rem 0 0.5rem;
          text-decoration: none;
          color: white;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: -0.02em;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          height: 24px;
        }
        .logo svg {
          width: 18px;
          height: 18px;
        }
        .menu-items {
          display: flex;
          gap: 0.25rem;
          height: 100%;
        }
        .menu-item {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0 1rem;
          border-radius: 100px;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          height: 100%;
          white-space: nowrap;
        }
        .menu-item:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }
      </style>
      <nav>
        <a href="index.html" class="logo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          Pixel Bank
        </a>
        <div class="menu-items">
          <a href="components.html" class="menu-item">Components</a>
          <a href="#reference" class="menu-item">Reference</a>
        </div>
      </nav>
    `;
  }
}
customElements.define('navigation-menu', NavigationMenu);

/**
 * Scroll Visibility Controller (Instant reappearance on scroll-up)
 */
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const nav = document.querySelector('navigation-menu');
  const auth = document.querySelector('auth-status');
  
  if (scrollY < lastScrollY) {
    // Scrolling UP: Reappear immediately
    if (nav) nav.style.opacity = '1';
    if (auth) auth.style.opacity = '1';
  } else if (scrollY > 50) {
    // Scrolling DOWN: Fade out beyond 50px
    const opacity = Math.max(0.2, 1 - (scrollY / 300));
    if (nav) nav.style.opacity = opacity;
    if (auth) auth.style.opacity = opacity;
  }
  
  lastScrollY = scrollY;
});

// Existing Background and Text Components
class BackgroundPaths extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() { this.render(); }
  render() {
    const generatePaths = (pos) => Array.from({ length: 36 }, (_, i) => ({ d: `M-${380 - i * 5 * pos} -${189 + i * 6}C-${380 - i * 5 * pos} -${189 + i * 6} -${312 - i * 5 * pos} ${216 - i * 6} ${152 - i * 5 * pos} ${343 - i * 6}C${616 - i * 5 * pos} ${470 - i * 6} ${684 - i * 5 * pos} ${875 - i * 6} ${684 - i * 5 * pos} ${875 - i * 6}`, w: 0.5 + i * 0.03, o: 0.1 + i * 0.03, dur: 20 + Math.random() * 10 }));
    const p1 = generatePaths(1); const p2 = generatePaths(-1);
    this.shadowRoot.innerHTML = `<style>:host { position: absolute; inset: 0; pointer-events: none; z-index: 0; overflow: hidden; } svg { width: 100%; height: 100%; color: oklch(0.98 0.01 250 / 0.15); } .path-anim { fill: none; stroke-dasharray: 0.4 0.6; stroke-dashoffset: 1; animation: path-flow linear infinite; } @keyframes path-flow { 0% { stroke-dashoffset: 1; } 100% { stroke-dashoffset: -1; } }</style><svg viewBox="0 0 696 316" preserveAspectRatio="xMidYMid slice">${[...p1, ...p2].map(p => `<path d="${p.d}" stroke="currentColor" stroke-width="${p.w}" stroke-opacity="${p.o}" pathLength="1" class="path-anim" style="animation-duration: ${p.dur}s;"/>`).join('')}</svg>`;
  }
}
class AnimatedText extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() { this.render(this.getAttribute('text') || ''); }
  render(text) {
    const content = text.split(' ').map((word, wi) => `<span style="display:inline-block;white-space:nowrap;margin-right:0.5rem;">${word.split('').map((l, li) => `<span style="display:inline-block;opacity:0;transform:translateY(100px);animation:slideUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;animation-delay:${wi * 0.1 + li * 0.03}s;background:linear-gradient(to right, oklch(0.98 0.01 250), oklch(0.98 0.01 250 / 0.8));-webkit-background-clip:text;background-clip:text;color:transparent;">${l}</span>`).join('')}</span>`).join('&nbsp;');
    this.shadowRoot.innerHTML = `<style>@keyframes slideUp { to { opacity: 1; transform: translateY(0); } }</style>${content}`;
  }
}
customElements.define('background-paths', BackgroundPaths);
customElements.define('animated-text', AnimatedText);
