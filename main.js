// Pixel Bank - Main Logic v1.5.0

// Component Data Registry
const COMPONENT_DATA = {
  'Buttons': {
    title: 'Buttons',
    description: 'Buttons help people take action, such as sending an email, sharing a document, or liking a comment.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    overview: `
      <div class="m3-guidelines">
        <h3>Material Design 3 Button Guidelines</h3>
        <p>Common buttons allow users to take actions, and make choices, with a single tap. There are five types of common buttons:</p>
        
        <div class="m3-grid">
          <div class="m3-item">
            <div class="m3-badge elevated">Elevated</div>
            <p><strong>Use for:</strong> High-emphasis actions. Their shadow provides separation from the background.</p>
          </div>
          <div class="m3-item">
            <div class="m3-badge filled">Filled</div>
            <p><strong>Use for:</strong> Finalizing a flow. They have the most visual impact.</p>
          </div>
          <div class="m3-item">
            <div class="m3-badge tonal">Filled Tonal</div>
            <p><strong>Use for:</strong> Medium-emphasis actions. An alternative to filled buttons.</p>
          </div>
          <div class="m3-item">
            <div class="m3-badge outlined">Outlined</div>
            <p><strong>Use for:</strong> Medium-emphasis actions. They contain actions that are important but not primary.</p>
          </div>
          <div class="m3-item">
            <div class="m3-badge text">Text</div>
            <p><strong>Use for:</strong> Low-emphasis actions. Often used in cards and dialogs.</p>
          </div>
        </div>

        <div class="m3-usage">
          <h4>Usage & Hierarchy</h4>
          <ul>
            <li><strong>Priority:</strong> Use high-emphasis buttons for the most important actions.</li>
            <li><strong>Placement:</strong> Place buttons where users expect them, typically at the bottom or end of a flow.</li>
            <li><strong>Consistency:</strong> Maintain consistent button styles throughout the application for a predictable UX.</li>
          </ul>
        </div>
      </div>
    `,
    code: `<button class="btn btn-elevated">Elevated</button>
<button class="btn btn-filled">Filled</button>
<button class="btn btn-tonal">Filled Tonal</button>
<button class="btn btn-outlined">Outlined</button>
<button class="btn btn-text">Text</button>`
  },
  'Cards': {
    title: 'Cards',
    description: 'Flexible content containers for displaying information in a grid.',
    image: 'https://images.unsplash.com/photo-1614850523296-e8c041de239b?auto=format&fit=crop&q=80&w=800',
    code: `<div class="card">
  <div class="card-header">Title</div>
  <div class="card-body">Content goes here...</div>
</div>`
  },
  'Modals': {
    title: 'Modals',
    description: 'Overlay dialogs for focused user interaction.',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800',
    code: `<dialog class="modal">
  <h2>Alert</h2>
  <p>This is a modal dialog.</p>
</dialog>`
  }
  // ... more components can be added here
};

/**
 * App Sidebar Component
 */
class AppSidebar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.collapsedSections = new Set();
  }

  connectedCallback() {
    this.render();
  }

  toggleSection(section) {
    if (this.collapsedSections.has(section)) {
      this.collapsedSections.delete(section);
    } else {
      this.collapsedSections.add(section);
    }
    this.render();
  }

  selectItem(itemText, element) {
    // Update active state in UI
    const items = this.shadowRoot.querySelectorAll('.nav-item');
    items.forEach(item => item.classList.remove('active'));
    element.classList.add('active');

    // Dispatch selection event
    window.dispatchEvent(new CustomEvent('component-selected', {
      detail: { name: itemText }
    }));
  }

  render() {
    const isCollapsed = (s) => this.collapsedSections.has(s);
    
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          width: var(--sidebar-width, 260px);
          background: rgba(255, 255, 255, 0.015);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 1.25rem;
          height: calc(100vh - 128px);
          position: fixed;
          top: 104px;
          left: 2rem;
          display: flex;
          flex-direction: column;
          padding: 1.25rem 0.75rem;
          box-sizing: border-box;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          overflow-y: auto;
          scrollbar-width: none;
          z-index: 50;
        }
        :host::-webkit-scrollbar {
          display: none;
        }
        .nav-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 1.25rem;
        }
        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 0.75rem;
          cursor: pointer;
          user-select: none;
          transition: all 0.2s;
          border-radius: 8px;
        }
        .section-header:hover { background: rgba(255, 255, 255, 0.02); }
        
        .section-label {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.25);
          font-weight: 700;
        }
        .toggle-icon {
          width: 12px;
          height: 12px;
          color: rgba(255,255,255,0.15);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .collapsed .toggle-icon { transform: rotate(-90deg); }
        
        .items-container {
          display: flex;
          flex-direction: column;
          gap: 2px;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s;
          max-height: 1000px;
          opacity: 1;
          margin-top: 0.5rem;
        }
        .collapsed .items-container {
          max-height: 0;
          opacity: 0;
          pointer-events: none;
        }

        .nav-item {
          padding: 0.625rem 0.875rem;
          border-radius: 8px;
          color: rgba(255, 255, 255, 0.4);
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }
        .nav-item:hover {
          background: rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.8);
          transform: translateX(4px);
        }
        .nav-item.active {
          background: rgba(255, 255, 255, 0.06);
          color: white;
          font-weight: 600;
        }
        
        @media (max-width: 1024px) {
          :host {
            left: 0;
            top: 0;
            height: 100vh;
            border-radius: 0;
            background: oklch(0.05 0.02 250);
            transform: translateX(-100%);
            border-right: 1px solid rgba(255,255,255,0.1);
          }
          :host([open]) {
            transform: translateX(0);
          }
        }
      </style>
      
      <div class="nav-group ${isCollapsed('components') ? 'collapsed' : ''}" data-section="components">
        <div class="section-header" onclick="this.getRootNode().host.toggleSection('components')">
          <span class="section-label">Components</span>
          <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div class="items-container">
          <div class="nav-item active" onclick="this.getRootNode().host.selectItem('Buttons', this)">Buttons</div>
          <div class="nav-item" onclick="this.getRootNode().host.selectItem('Cards', this)">Cards</div>
          <div class="nav-item" onclick="this.getRootNode().host.selectItem('Modals', this)">Modals</div>
          <div class="nav-item" onclick="this.getRootNode().host.selectItem('Navigation', this)">Navigation</div>
          <div class="nav-item" onclick="this.getRootNode().host.selectItem('Inputs', this)">Inputs</div>
        </div>
      </div>

      <div class="nav-group ${isCollapsed('assets') ? 'collapsed' : ''}" data-section="assets">
        <div class="section-header" onclick="this.getRootNode().host.toggleSection('assets')">
          <span class="section-label">Assets</span>
          <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div class="items-container">
          <div class="nav-item" onclick="this.getRootNode().host.selectItem('Icons', this)">Icons</div>
          <div class="nav-item" onclick="this.getRootNode().host.selectItem('Images', this)">Images</div>
        </div>
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
