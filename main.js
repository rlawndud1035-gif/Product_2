// Pixel Bank - Financial Ecosystem v2.0.0

// ETF Data Registry with Themes and Tickers
const ETF_DATA = {
  'QQQ': {
    name: 'Invesco QQQ Trust',
    ticker: 'QQQ',
    theme: 'Big Tech & AI',
    price: '442.15',
    change: '+1.24%',
    description: 'Tracks the Nasdaq-100 Index, including the largest non-financial companies like Apple, Microsoft, and Nvidia.',
    chartData: [320, 340, 335, 360, 380, 375, 410, 425, 420, 442]
  },
  'SOXX': {
    name: 'iShares Semiconductor ETF',
    ticker: 'SOXX',
    theme: 'Big Tech & AI',
    price: '224.80',
    change: '+2.15%',
    description: 'Focuses on US-listed companies in the semiconductor industry, the backbone of AI and modern computing.',
    chartData: [150, 165, 160, 185, 210, 205, 230, 245, 220, 224]
  },
  'SCHD': {
    name: 'Schwab US Dividend Equity',
    ticker: 'SCHD',
    theme: 'Dividends & Value',
    price: '78.42',
    change: '-0.15%',
    description: 'Tracks an index focused on the quality and sustainability of dividends from high-yield US stocks.',
    chartData: [72, 74, 73, 75, 77, 76, 78, 79, 78, 78.4]
  },
  'VYM': {
    name: 'Vanguard High Div Yield',
    ticker: 'VYM',
    theme: 'Dividends & Value',
    price: '118.90',
    change: '+0.45%',
    description: 'Provides exposure to US stocks that are dedicated to paying higher-than-average dividends.',
    chartData: [105, 108, 107, 110, 115, 114, 117, 119, 118, 118.9]
  },
  'ICLN': {
    name: 'iShares Clean Energy ETF',
    ticker: 'ICLN',
    theme: 'Green Energy',
    price: '14.25',
    change: '-1.10%',
    description: 'Exposure to companies that produce energy from solar, wind, and other renewable sources.',
    chartData: [18, 17, 16, 15, 14, 14.5, 13.5, 14, 14.2, 14.25]
  },
  'LIT': {
    name: 'Global X Lithium & Battery',
    ticker: 'LIT',
    theme: 'Green Energy',
    price: '42.60',
    change: '+0.85%',
    description: 'Invests in the full lithium cycle, from mining and refining the metal to battery production.',
    chartData: [55, 52, 48, 45, 40, 41, 39, 41, 42, 42.6]
  }
};

/**
 * App Sidebar Component - ETF Edition
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

  selectItem(ticker, element) {
    const items = this.shadowRoot.querySelectorAll('.nav-item');
    items.forEach(item => item.classList.remove('active'));
    element.classList.add('active');

    window.dispatchEvent(new CustomEvent('etf-selected', {
      detail: { ticker: ticker }
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
        :host::-webkit-scrollbar { display: none; }
        .nav-group { display: flex; flex-direction: column; margin-bottom: 1.25rem; }
        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 0.75rem;
          cursor: pointer;
          user-select: none;
          border-radius: 8px;
        }
        .section-header:hover { background: rgba(255, 255, 255, 0.02); }
        .section-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.3);
          font-weight: 800;
        }
        .toggle-icon { width: 12px; height: 12px; color: rgba(255,255,255,0.15); transition: transform 0.3s; }
        .collapsed .toggle-icon { transform: rotate(-90deg); }
        .items-container {
          display: flex;
          flex-direction: column;
          gap: 2px;
          overflow: hidden;
          transition: max-height 0.4s;
          max-height: 500px;
          margin-top: 0.5rem;
        }
        .collapsed .items-container { max-height: 0; opacity: 0; }
        .nav-item {
          padding: 0.75rem 0.875rem;
          border-radius: 8px;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.2s;
          display: flex;
          justify-content: space-between;
          cursor: pointer;
        }
        .nav-item:hover { background: rgba(255, 255, 255, 0.04); color: white; transform: translateX(4px); }
        .nav-item.active { background: rgba(255, 255, 255, 0.08); color: white; }
        .ticker-badge { font-size: 10px; opacity: 0.5; }
      </style>
      
      <div class="nav-group ${isCollapsed('tech') ? 'collapsed' : ''}">
        <div class="section-header" onclick="this.getRootNode().host.toggleSection('tech')">
          <span class="section-label">AI & Big Tech</span>
          <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div class="items-container">
          <div class="nav-item active" onclick="this.getRootNode().host.selectItem('QQQ', this)">Nasdaq 100 <span class="ticker-badge">QQQ</span></div>
          <div class="nav-item" onclick="this.getRootNode().host.selectItem('SOXX', this)">Semiconductor <span class="ticker-badge">SOXX</span></div>
        </div>
      </div>

      <div class="nav-group ${isCollapsed('dividends') ? 'collapsed' : ''}">
        <div class="section-header" onclick="this.getRootNode().host.toggleSection('dividends')">
          <span class="section-label">Dividends & Value</span>
          <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div class="items-container">
          <div class="nav-item" onclick="this.getRootNode().host.selectItem('SCHD', this)">US Dividend <span class="ticker-badge">SCHD</span></div>
          <div class="nav-item" onclick="this.getRootNode().host.selectItem('VYM', this)">High Yield <span class="ticker-badge">VYM</span></div>
        </div>
      </div>

      <div class="nav-group ${isCollapsed('green') ? 'collapsed' : ''}">
        <div class="section-header" onclick="this.getRootNode().host.toggleSection('green')">
          <span class="section-label">Green Energy</span>
          <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div class="items-container">
          <div class="nav-item" onclick="this.getRootNode().host.selectItem('ICLN', this)">Clean Energy <span class="ticker-badge">ICLN</span></div>
          <div class="nav-item" onclick="this.getRootNode().host.selectItem('LIT', this)">Lithium <span class="ticker-badge">LIT</span></div>
        </div>
      </div>
    `;
  }
}
customElements.define('app-sidebar', AppSidebar);

// Rest of existing UI components (SidebarTrigger, AuthModal, AuthStatus, NavigationMenu) remain identical but are updated to v2.0 logic
// ... (I will keep them for the file write to ensure complete functionality)

class SidebarTrigger extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() { this.render(); }
  render() {
    this.shadowRoot.innerHTML = `<style>button { background: transparent; border: none; color: rgba(255, 255, 255, 0.6); padding: 8px; cursor: pointer; border-radius: 6px; display: flex; align-items: center; justify-content: center; } button:hover { background: rgba(255, 255, 255, 0.05); color: white; } svg { width: 20px; height: 20px; }</style><button><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg></button>`;
    this.shadowRoot.querySelector('button').addEventListener('click', () => { const s = document.querySelector('app-sidebar'); if (s) s.toggleAttribute('open'); });
  }
}
customElements.define('sidebar-trigger', SidebarTrigger);

class AuthModal extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  open() { this.shadowRoot.querySelector('.overlay').classList.add('visible'); }
  close() { this.shadowRoot.querySelector('.overlay').classList.remove('visible'); }
  render() {
    this.shadowRoot.innerHTML = `<style>.overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.8); backdrop-filter: blur(4px); z-index: 10000; display: flex; align-items: center; justify-content: center; opacity: 0; visibility: hidden; transition: all 0.4s; } .overlay.visible { opacity: 1; visibility: visible; } .card { background: #0a0a0a; border: 1px solid rgba(255,255,255,0.1); width: 100%; max-width: 400px; border-radius: 1rem; padding: 2.5rem; color: white; text-align: center; } h2 { margin: 0 0 0.5rem; } p { color: rgba(255,255,255,0.5); margin-bottom: 2rem; } .btn { width: 100%; padding: 0.8rem; border-radius: 8px; border: none; font-weight: 600; cursor: pointer; transition: 0.2s; margin-bottom: 0.75rem; } .btn-primary { background: white; color: black; } .close-area { position: absolute; inset: 0; cursor: pointer; }</style><div class="overlay"><div class="close-area"></div><div class="card"><h2>Pixel Bank Terminal</h2><p>Access your portfolio</p><button class="btn btn-primary" onclick="localStorage.setItem('isLoggedIn', 'true'); window.location.reload();">Login with Google</button></div></div>`;
    this.shadowRoot.querySelector('.close-area').addEventListener('click', () => this.close());
  }
  connectedCallback() { this.render(); }
}
customElements.define('auth-modal', AuthModal);

class AuthStatus extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; }
  connectedCallback() { this.render(); }
  render() {
    this.shadowRoot.innerHTML = `<style>:host { position: fixed; top: 2rem; right: 2rem; z-index: 1000; } button { background: rgba(255,255,255,0.05); backdrop-filter: blur(12px); color: white; border: 1px solid rgba(255,255,255,0.1); padding: 0 1.5rem; height: 44px; border-radius: 100px; font-weight: 600; cursor: pointer; transition: 0.3s; } button:hover { background: rgba(255,255,255,0.15); }</style><button>${this.isLoggedIn ? 'Portfolio' : 'Sign in'}</button>`;
    this.shadowRoot.querySelector('button').addEventListener('click', () => { if (!this.isLoggedIn) document.querySelector('auth-modal').open(); });
  }
}
customElements.define('auth-status', AuthStatus);

class NavigationMenu extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() { this.render(); }
  render() {
    this.shadowRoot.innerHTML = `<style>:host { position: fixed; top: 2rem; left: 2rem; z-index: 1000; } nav { display: flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.05); backdrop-filter: blur(12px); padding: 4px; border-radius: 100px; border: 1px solid rgba(255,255,255,0.1); height: 44px; } .logo { display: flex; align-items: center; gap: 8px; padding: 0 1rem; text-decoration: none; color: white; font-weight: 800; border-right: 1px solid rgba(255,255,255,0.1); } .menu-item { color: rgba(255,255,255,0.6); text-decoration: none; font-size: 13px; font-weight: 600; padding: 0 1rem; cursor: pointer; }</style><nav><a href="index.html" class="logo">Pixel Bank</a><div style="display:flex"><a href="components.html" class="menu-item">Markets</a><a href="#" class="menu-item">Trade</a></div></nav>`;
  }
}
customElements.define('navigation-menu', NavigationMenu);

// Background and Text Components
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
    const content = text.split(' ').map((word, wi) => `<span style="display:inline-block;white-space:nowrap;margin-right:0.5rem;">${word.split('').map((l, li) => `<span style="display:inline-block;opacity:0;transform:translateY(100px);animation:slideUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;animation-delay:${wi * 0.1 + li * 0.03}s;background:linear-gradient(to right, white, #666);-webkit-background-clip:text;background-clip:text;color:transparent;">${l}</span>`).join('')}</span>`).join('&nbsp;');
    this.shadowRoot.innerHTML = `<style>@keyframes slideUp { to { opacity: 1; transform: translateY(0); } }</style>${content}`;
  }
}
customElements.define('background-paths', BackgroundPaths);
customElements.define('animated-text', AnimatedText);
