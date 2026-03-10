// Pixel Bank - Financial Ecosystem v2.0.0

/** @typedef {Object} ETFInfo
 * @property {string} name
 * @property {string} ticker
 * @property {string} theme
 * @property {string} price
 * @property {string} change
 * @property {string} description
 * @property {string} strategy
 * @property {string} tips
 * @property {string} holdings
 * @property {number[]} chartData
 */

/** @type {Object.<string, ETFInfo>} */
const ETF_DATA = {
  'QQQ': {
    name: 'Invesco QQQ Trust',
    ticker: 'QQQ',
    theme: 'AI & Growth',
    price: '442.15',
    change: '+1.24%',
    description: 'The benchmark for large-cap growth, tracking the Nasdaq-100 Index.',
    strategy: 'Focuses on the 100 largest non-financial companies listed on Nasdaq. It is a pure growth play heavily weighted in technology.',
    tips: 'Ideal for long-term growth. Be mindful of tech-sector concentration and interest rate sensitivity.',
    holdings: 'NVIDIA (9.1%), Apple (7.8%), Microsoft (5.7%), Amazon (4.3%), Tesla (4.0%)',
    chartData: [320, 340, 335, 360, 380, 375, 410, 425, 420, 442]
  },
  'SOXX': {
    name: 'iShares Semiconductor ETF',
    ticker: 'SOXX',
    theme: 'AI & Growth',
    price: '224.80',
    change: '+2.15%',
    description: 'Focuses on US-listed companies in the semiconductor industry.',
    strategy: 'Provides exposure to the backbone of AI and modern computing. Tracks companies that design, manufacture, and distribute semiconductors.',
    tips: 'High volatility but high potential. Semiconductors are cyclical; watch for global supply chain trends.',
    holdings: 'NVIDIA (10.2%), Broadcom (8.5%), AMD (6.4%), TSM (5.8%), Qualcomm (4.2%)',
    chartData: [150, 165, 160, 185, 210, 205, 230, 245, 220, 224]
  },
  'XLK': {
    name: 'Technology Select Sector',
    ticker: 'XLK',
    theme: 'AI & Growth',
    price: '210.45',
    change: '+1.85%',
    description: 'Pure-play technology sector fund from the S&P 500.',
    strategy: 'Includes companies from technology hardware, storage, and peripherals; software; and communications equipment.',
    tips: 'Unlike QQQ, XLK excludes Amazon and Meta. Use this for pure tech exposure without consumer discretionary overlap.',
    holdings: 'Microsoft (22.5%), Apple (21.8%), NVIDIA (5.2%), Broadcom (4.8%), Adobe (2.4%)',
    chartData: [160, 170, 175, 180, 190, 185, 200, 205, 208, 210]
  },
  'SMH': {
    name: 'VanEck Semiconductor ETF',
    ticker: 'SMH',
    theme: 'AI & Growth',
    price: '235.12',
    change: '+2.45%',
    description: 'Highly concentrated semiconductor ETF focusing on top winners.',
    strategy: 'Tracks the 25 largest US-listed semiconductor companies. More concentrated than SOXX.',
    tips: 'Best for investors who want to bet heavily on the leaders like NVIDIA and TSM.',
    holdings: 'NVIDIA (20.5%), TSM (13.2%), Broadcom (7.8%), ASML (5.1%), AMD (4.9%)',
    chartData: [140, 155, 165, 180, 200, 215, 225, 230, 232, 235]
  },
  'VOO': {
    name: 'Vanguard S&P 500 ETF',
    ticker: 'VOO',
    theme: 'Core & S&P 500',
    price: '512.30',
    change: '+0.45%',
    description: 'The gold standard for US market exposure with ultra-low fees.',
    strategy: 'Tracks the S&P 500 Index. Offers a balance between growth and value across all major US industries.',
    tips: 'The ultimate "set-and-forget" investment. Ultra-low 0.03% expense ratio maximizes long-term compounding.',
    holdings: 'Microsoft (7.1%), Apple (6.2%), NVIDIA (5.0%), Amazon (3.8%), Meta (2.5%)',
    chartData: [450, 460, 455, 470, 485, 480, 500, 505, 510, 512]
  },
  'SCHD': {
    name: 'Schwab US Dividend Equity',
    ticker: 'SCHD',
    theme: 'Dividends & Income',
    price: '78.42',
    change: '-0.15%',
    description: 'Focuses on the quality and sustainability of dividends.',
    strategy: 'Tracks an index of high-dividend yielding stocks with strong fundamental metrics and a history of dividend growth.',
    tips: 'Strong "mean reversion" play. Excellent for investors seeking growing passive income and lower volatility.',
    holdings: 'Broadcom (4.5%), Home Depot (4.2%), AbbVie (4.1%), Chevron (4.0%), PepsiCo (3.9%)',
    chartData: [72, 74, 73, 75, 77, 76, 78, 79, 78, 78.4]
  },
  'VYM': {
    name: 'Vanguard High Div Yield',
    ticker: 'VYM',
    theme: 'Dividends & Income',
    price: '118.90',
    change: '+0.45%',
    description: 'Exposure to US stocks paying higher-than-average dividends.',
    strategy: 'Focuses on current yield across various sectors, excluding REITs. More diversified and defensive than SCHD.',
    tips: 'Defensive choice for immediate cash flow. Performance often lags growth stocks during tech rallies.',
    holdings: 'JPMorgan (3.5%), ExxonMobil (3.2%), J&J (2.8%), P&G (2.5%), Walmart (2.1%)',
    chartData: [105, 108, 107, 110, 115, 114, 117, 119, 118, 118.9]
  },
  'VNQ': {
    name: 'Vanguard Real Estate ETF',
    ticker: 'VNQ',
    theme: 'Dividends & Income',
    price: '84.60',
    change: '+0.75%',
    description: 'Broad exposure to the US real estate market through REITs.',
    strategy: 'Invests in real estate investment trusts (REITs) that purchase office buildings, hotels, and data centers.',
    tips: 'Highly sensitive to interest rates. REITs typically perform well when rates are stable or falling.',
    holdings: 'Prologis (7.8%), American Tower (6.5%), Equinix (5.2%), Welltower (4.8%), Simon Property (3.5%)',
    chartData: [78, 80, 79, 81, 83, 82, 84, 85, 84, 84.6]
  },
  'XLV': {
    name: 'Health Care Select Sector',
    ticker: 'XLV',
    theme: 'Defensive Sectors',
    price: '145.20',
    change: '+0.32%',
    description: 'Stability through top-tier pharmaceutical and healthcare companies.',
    strategy: 'Tracks the healthcare sector of the S&P 500, including pharma, biotech, and managed care.',
    tips: 'Often viewed as "recession-proof". Growth is currently driven by innovation in weight-loss drugs and biotech.',
    holdings: 'Eli Lilly (10.5%), UnitedHealth (8.4%), J&J (7.2%), AbbVie (5.8%), Merck (4.5%)',
    chartData: [130, 135, 138, 140, 142, 140, 143, 144, 145, 145.2]
  },
  'ICLN': {
    name: 'iShares Clean Energy ETF',
    ticker: 'ICLN',
    theme: 'Defensive Sectors',
    price: '14.25',
    change: '-1.10%',
    description: 'Companies producing energy from renewable sources.',
    strategy: 'Global exposure to solar, wind, and other renewable technologies. High concentration in energy equipment.',
    tips: 'Policy-driven sector. Watch for government subsidies and infrastructure spending for the "Smart Grid".',
    holdings: 'First Solar (8.2%), Enphase (7.5%), Iberdrola (6.4%), Vestas (5.2%), Orsted (4.1%)',
    chartData: [18, 17, 16, 15, 14, 14.5, 13.5, 14, 14.2, 14.25]
  },
  'LIT': {
    name: 'Global X Lithium & Battery',
    ticker: 'LIT',
    theme: 'Defensive Sectors',
    price: '42.60',
    change: '+0.85%',
    description: 'Invests in the full lithium cycle and battery production.',
    strategy: 'Tracks the performance of the global lithium mining and battery production industry, including EV manufacturers.',
    tips: 'A direct bet on the long-term electrification of transport. Commodity prices for lithium heavily impact returns.',
    holdings: 'Albemarle (9.5%), Panasonic (8.4%), BYD (7.2%), Samsung SDI (6.8%), Ganfeng Lithium (5.5%)',
    chartData: [55, 52, 48, 45, 40, 41, 39, 41, 42, 42.6]
  }
};

// Make ETF_DATA globally accessible with type casting to avoid TS errors
/** @type {any} */(window).ETF_DATA = ETF_DATA;

/**
 * App Sidebar Component - ETF Edition
 */
class AppSidebar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    /** @type {Set<string>} */
    this.collapsedSections = new Set();
    /** @type {string|null} */
    this.activeTicker = 'QQQ';
  }

  connectedCallback() {
    this.render();
    window.addEventListener('etf-selected', (e) => {
      // @ts-ignore
      this.activeTicker = e.detail.ticker;
      this.render();
    });
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
    window.dispatchEvent(new CustomEvent('etf-selected', {
      detail: { ticker: ticker },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    const isCollapsed = (s) => this.collapsedSections.has(s);
    const isActive = (t) => this.activeTicker === t;
    
    if (this.shadowRoot) {
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
            font-size: 13px;
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
        
        <div class="nav-group ${isCollapsed('growth') ? 'collapsed' : ''}">
          <div class="section-header" onclick="this.getRootNode().host.toggleSection('growth')">
            <span class="section-label">AI & Growth</span>
            <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          <div class="items-container">
            <div class="nav-item ${isActive('QQQ') ? 'active' : ''}" onclick="this.getRootNode().host.selectItem('QQQ', this)">Nasdaq 100 <span class="ticker-badge">QQQ</span></div>
            <div class="nav-item ${isActive('SOXX') ? 'active' : ''}" onclick="this.getRootNode().host.selectItem('SOXX', this)">Semi (iShares) <span class="ticker-badge">SOXX</span></div>
            <div class="nav-item ${isActive('XLK') ? 'active' : ''}" onclick="this.getRootNode().host.selectItem('XLK', this)">Tech Select <span class="ticker-badge">XLK</span></div>
            <div class="nav-item ${isActive('SMH') ? 'active' : ''}" onclick="this.getRootNode().host.selectItem('SMH', this)">Semi (VanEck) <span class="ticker-badge">SMH</span></div>
          </div>
        </div>

        <div class="nav-group ${isCollapsed('core') ? 'collapsed' : ''}">
          <div class="section-header" onclick="this.getRootNode().host.toggleSection('core')">
            <span class="section-label">Core & Index</span>
            <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          <div class="items-container">
            <div class="nav-item ${isActive('VOO') ? 'active' : ''}" onclick="this.getRootNode().host.selectItem('VOO', this)">S&P 500 <span class="ticker-badge">VOO</span></div>
          </div>
        </div>

        <div class="nav-group ${isCollapsed('dividends') ? 'collapsed' : ''}">
          <div class="section-header" onclick="this.getRootNode().host.toggleSection('dividends')">
            <span class="section-label">Dividends & Income</span>
            <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          <div class="items-container">
            <div class="nav-item ${isActive('SCHD') ? 'active' : ''}" onclick="this.getRootNode().host.selectItem('SCHD', this)">US Dividend <span class="ticker-badge">SCHD</span></div>
            <div class="nav-item ${isActive('VYM') ? 'active' : ''}" onclick="this.getRootNode().host.selectItem('VYM', this)">High Yield <span class="ticker-badge">VYM</span></div>
            <div class="nav-item ${isActive('VNQ') ? 'active' : ''}" onclick="this.getRootNode().host.selectItem('VNQ', this)">Real Estate <span class="ticker-badge">VNQ</span></div>
          </div>
        </div>

        <div class="nav-group ${isCollapsed('defensive') ? 'collapsed' : ''}">
          <div class="section-header" onclick="this.getRootNode().host.toggleSection('defensive')">
            <span class="section-label">Sectors & Trends</span>
            <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          <div class="items-container">
            <div class="nav-item ${isActive('XLV') ? 'active' : ''}" onclick="this.getRootNode().host.selectItem('XLV', this)">Health Care <span class="ticker-badge">XLV</span></div>
            <div class="nav-item ${isActive('ICLN') ? 'active' : ''}" onclick="this.getRootNode().host.selectItem('ICLN', this)">Clean Energy <span class="ticker-badge">ICLN</span></div>
            <div class="nav-item ${isActive('LIT') ? 'active' : ''}" onclick="this.getRootNode().host.selectItem('LIT', this)">Lithium <span class="ticker-badge">LIT</span></div>
          </div>
        </div>
      `;
    }
  }
}
customElements.define('app-sidebar', AppSidebar);

class SidebarTrigger extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() { this.render(); }
  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `<style>button { background: transparent; border: none; color: rgba(255, 255, 255, 0.6); padding: 8px; cursor: pointer; border-radius: 6px; display: flex; align-items: center; justify-content: center; } button:hover { background: rgba(255, 255, 255, 0.05); color: white; } svg { width: 20px; height: 20px; }</style><button><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg></button>`;
      const btn = this.shadowRoot.querySelector('button');
      if (btn) {
        btn.addEventListener('click', () => { 
          const s = document.querySelector('app-sidebar'); 
          if (s) s.toggleAttribute('open'); 
        });
      }
    }
  }
}
customElements.define('sidebar-trigger', SidebarTrigger);

class AuthModal extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  open() { if (this.shadowRoot) { const overlay = this.shadowRoot.querySelector('.overlay'); if (overlay) overlay.classList.add('visible'); } }
  close() { if (this.shadowRoot) { const overlay = this.shadowRoot.querySelector('.overlay'); if (overlay) overlay.classList.remove('visible'); } }
  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `<style>.overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.8); backdrop-filter: blur(4px); z-index: 10000; display: flex; align-items: center; justify-content: center; opacity: 0; visibility: hidden; transition: all 0.4s; } .overlay.visible { opacity: 1; visibility: visible; } .card { background: #0a0a0a; border: 1px solid rgba(255,255,255,0.1); width: 100%; max-width: 400px; border-radius: 1rem; padding: 2.5rem; color: white; text-align: center; } h2 { margin: 0 0 0.5rem; } p { color: rgba(255,255,255,0.5); margin-bottom: 2rem; } .btn { width: 100%; padding: 0.8rem; border-radius: 8px; border: none; font-weight: 600; cursor: pointer; transition: 0.2s; margin-bottom: 0.75rem; } .btn-primary { background: white; color: black; } .close-area { position: absolute; inset: 0; cursor: pointer; }</style><div class="overlay"><div class="close-area"></div><div class="card"><h2>Pixel Bank Terminal</h2><p>Access your portfolio</p><button class="btn btn-primary" onclick="localStorage.setItem('isLoggedIn', 'true'); window.location.reload();">Login with Google</button></div></div>`;
      const closeArea = this.shadowRoot.querySelector('.close-area');
      if (closeArea) closeArea.addEventListener('click', () => this.close());
    }
  }
  connectedCallback() { this.render(); }
}
customElements.define('auth-modal', AuthModal);

class AuthStatus extends HTMLElement {
  constructor() { 
    super(); 
    this.attachShadow({ mode: 'open' }); 
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; 
  }
  connectedCallback() { this.render(); }
  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `<style>:host { position: fixed; top: 2rem; right: 2rem; z-index: 1000; } button { background: rgba(255,255,255,0.05); backdrop-filter: blur(12px); color: white; border: 1px solid rgba(255,255,255,0.1); padding: 0 1.5rem; height: 44px; border-radius: 100px; font-weight: 600; cursor: pointer; transition: 0.3s; } button:hover { background: rgba(255,255,255,0.15); }</style><button>${this.isLoggedIn ? 'Portfolio' : 'Sign in'}</button>`;
      const btn = this.shadowRoot.querySelector('button');
      if (btn) {
        btn.addEventListener('click', () => { 
          if (!this.isLoggedIn) {
            const modal = document.querySelector('auth-modal');
            if (modal) /** @type {any} */(modal).open();
          }
        });
      }
    }
  }
}
customElements.define('auth-status', AuthStatus);

class NavigationMenu extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() { this.render(); }
  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `<style>:host { position: fixed; top: 2rem; left: 2rem; z-index: 1000; } nav { display: flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.05); backdrop-filter: blur(12px); padding: 4px; border-radius: 100px; border: 1px solid rgba(255,255,255,0.1); height: 44px; } .logo { display: flex; align-items: center; gap: 8px; padding: 0 1rem; text-decoration: none; color: white; font-weight: 800; border-right: 1px solid rgba(255,255,255,0.1); } .menu-item { color: rgba(255,255,255,0.6); text-decoration: none; font-size: 13px; font-weight: 600; padding: 0 1rem; cursor: pointer; }</style><nav><a href="index.html" class="logo">Pixel Bank</a><div style="display:flex"><a href="components.html" class="menu-item">Markets</a><a href="#" class="menu-item">Trade</a></div></nav>`;
    }
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
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `<style>:host { position: absolute; inset: 0; pointer-events: none; z-index: 0; overflow: hidden; } svg { width: 100%; height: 100%; color: oklch(0.98 0.01 250 / 0.15); } .path-anim { fill: none; stroke-dasharray: 0.4 0.6; stroke-dashoffset: 1; animation: path-flow linear infinite; } @keyframes path-flow { 0% { stroke-dashoffset: 1; } 100% { stroke-dashoffset: -1; } }</style><svg viewBox="0 0 696 316" preserveAspectRatio="xMidYMid slice">${[...p1, ...p2].map(p => `<path d="${p.d}" stroke="currentColor" stroke-width="${p.w}" stroke-opacity="${p.o}" pathLength="1" class="path-anim" style="animation-duration: ${p.dur}s;"/>`).join('')}</svg>`;
    }
  }
}
class AnimatedText extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() { this.render(this.getAttribute('text') || ''); }
  render(text) {
    const content = text.split(' ').map((word, wi) => `<span style="display:inline-block;white-space:nowrap;margin-right:0.5rem;">${word.split('').map((l, li) => `<span style="display:inline-block;opacity:0;transform:translateY(100px);animation:slideUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;animation-delay:${wi * 0.1 + li * 0.03}s;background:linear-gradient(to right, white, #666);-webkit-background-clip:text;background-clip:text;color:transparent;">${l}</span>`).join('')}</span>`).join('&nbsp;');
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `<style>@keyframes slideUp { to { opacity: 1; transform: translateY(0); } }</style>${content}`;
    }
  }
}
customElements.define('background-paths', BackgroundPaths);
customElements.define('animated-text', AnimatedText);

// --- Real-time Stock Update Logic ---

/**
 * Simulates real-time price movement
 */
function updateStockPrices() {
  Object.keys(ETF_DATA).forEach(ticker => {
    const data = ETF_DATA[ticker];
    const currentPrice = parseFloat(data.price);
    // Random movement between -0.1% and +0.1%
    const changePercent = (Math.random() - 0.48) * 0.002; 
    const newPrice = currentPrice * (1 + changePercent);
    const priceDiff = newPrice - currentPrice;
    
    data.price = newPrice.toFixed(2);
    
    // Calculate a cumulative change for the session or just keep a realistic %
    const baseChange = parseFloat(data.change) || 0;
    const newChange = baseChange + (changePercent * 100);
    data.change = (newChange >= 0 ? '+' : '') + newChange.toFixed(2) + '%';
    
    // Update chart data (shift and add new point)
    data.chartData.shift();
    data.chartData.push(newPrice);
  });

  // Notify listeners that prices have updated
  window.dispatchEvent(new CustomEvent('prices-updated', { detail: { data: ETF_DATA } }));
  
  // Also trigger etf-selected for the currently active ticker to refresh UI if needed
  // We can track the active ticker globally or just let the components listen to 'prices-updated'
}

// Start the real-time update cycle every 10 seconds
setInterval(updateStockPrices, 10000);
