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
 * @property {string} detailedAnalysis
 * @property {string} pros
 * @property {string} cons
 * @property {string} riskMetrics
 * @property {string} outlook2026
 * @property {string} dividendYield
 * @property {string} expenseRatio
 * @property {number[]} chartData
 */

/** @type {Object.<string, ETFInfo>} */
const ETF_DATA = {
  // --- Core Index ---
  'SPY': {
    name: 'SPDR S&P 500 ETF Trust',
    ticker: 'SPY',
    theme: 'Core Index',
    price: '585.20',
    change: '+0.35%',
    description: 'The world\'s most popular ETF, tracking the S&P 500 index of large-cap US companies.',
    strategy: 'Diversified exposure to 500 leading US companies across 11 sectors. It is the gold standard for broad market representation.',
    tips: 'Perfect for long-term core holdings. Use as a benchmark for your portfolio performance. High liquidity makes it ideal for options trading.',
    holdings: 'Apple (7.1%), Microsoft (6.8%), NVIDIA (6.2%), Amazon (3.9%), Meta (2.4%)',
    detailedAnalysis: 'As of 2026, SPY is benefiting from a "Soft Landing" economic scenario. Corporate earnings across the S&P 500 are expected to grow by 12% this year, driven by tech efficiencies and a stabilizing consumer sector.',
    pros: 'Unmatched liquidity; ultimate diversification; low expense ratio (0.09%); historical 10% average annual return.',
    cons: 'High exposure to mega-cap tech (30%+); lower yield than dividend-focused funds; vulnerable to broad market drawdowns.',
    riskMetrics: 'Beta: 1.00 | Std Dev: 15.2% | P/E Ratio: 22.5x',
    outlook2026: 'Bullish. Price targets for year-end 2026 range from $620 to $650 as corporate buybacks hit record levels.',
    dividendYield: '1.25%',
    expenseRatio: '0.09%',
    chartData: [520, 535, 530, 550, 565, 560, 575, 580, 582, 585]
  },
  'VOO': {
    name: 'Vanguard S&P 500 ETF',
    ticker: 'VOO',
    theme: 'Core Index',
    price: '512.30',
    change: '+0.45%',
    description: 'Vanguard\'s ultra-low-cost version of the S&P 500 index fund.',
    strategy: 'Identical to SPY but optimized for long-term buy-and-hold investors with a significantly lower expense ratio.',
    tips: 'The absolute "set-and-forget" investment. For every $10,000 invested, you pay only $3 per year in fees.',
    holdings: 'Microsoft (7.1%), Apple (6.2%), NVIDIA (5.0%), Amazon (3.8%), Meta (2.5%)',
    detailedAnalysis: 'VOO remains the "Anchor" for 2026 portfolios. Its slightly lower tracking error and minimal fee drag make it marginally superior to SPY for long-term wealth accumulation without the need for active trading.',
    pros: 'Ultra-low 0.03% fee; Vanguard\'s trusted management; broad market exposure.',
    cons: 'Lacks the extreme liquidity of SPY for day trading; heavy concentration in top 10 names.',
    riskMetrics: 'Beta: 1.00 | Std Dev: 15.1% | Sharpe Ratio: 0.85',
    outlook2026: 'Bullish. Core position recommendation for all balanced portfolios.',
    dividendYield: '1.30%',
    expenseRatio: '0.03%',
    chartData: [450, 460, 455, 470, 485, 480, 500, 505, 510, 512]
  },
  'DIA': {
    name: 'SPDR Dow Jones Ind. Avg',
    ticker: 'DIA',
    theme: 'Core Index',
    price: '425.80',
    change: '+0.22%',
    description: 'Tracks the 30 "blue-chip" companies of the Dow Jones Industrial Average.',
    strategy: 'Price-weighted index focusing on established industrial, financial, and consumer giants. Represents the "Old Guard" of American industry.',
    tips: 'Ideal for investors seeking stability and exposure to established dividend-paying leaders rather than high-growth volatility.',
    holdings: 'UnitedHealth (9.2%), Goldman Sachs (7.5%), Microsoft (6.4%), Home Depot (5.8%), Salesforce (5.1%)',
    detailedAnalysis: 'In 2026, DIA is the "Stability Play." While it lags in aggressive tech rallies, it provides a massive safety net during volatility due to its focus on cash-flow heavy industrial leaders.',
    pros: 'Lower volatility than Nasdaq; exposure to value sectors; monthly dividends.',
    cons: 'Price-weighted (flawed methodology); only 30 stocks (lack of breadth); underperforms in tech-led bull markets.',
    riskMetrics: 'Beta: 0.91 | Std Dev: 12.5% | P/E Ratio: 18.2x',
    outlook2026: 'Neutral/Steady. Expected to provide consistent 7-9% total returns with low drawdown risk.',
    dividendYield: '1.85%',
    expenseRatio: '0.16%',
    chartData: [390, 400, 395, 410, 415, 412, 420, 423, 424, 425]
  },

  // --- AI & Innovation ---
  'QQQ': {
    name: 'Invesco QQQ Trust',
    ticker: 'QQQ',
    theme: 'AI & Innovation',
    price: '442.15',
    change: '+1.24%',
    description: 'The flagship Nasdaq-100 ETF, focusing on the future of technology.',
    strategy: 'Focuses on the 100 largest non-financial companies listed on Nasdaq. Heavily weighted in AI software, cloud computing, and biotech.',
    tips: 'The primary vehicle for AI exposure. Be mindful of tech-sector concentration and interest rate sensitivity.',
    holdings: 'NVIDIA (9.1%), Apple (7.8%), Microsoft (5.7%), Amazon (4.3%), Tesla (4.0%)',
    detailedAnalysis: '2026 is the year of "AI Monetization." QQQ components are now showing actual bottom-line growth from AI subscriptions and services, justifying high P/E multiples.',
    pros: 'High historical growth; essential for tech-bull markets; exposure to future innovators.',
    cons: 'High volatility; expensive valuations (P/E 30x+); sensitive to Fed policy.',
    riskMetrics: 'Beta: 1.15 | Std Dev: 21.2% | P/E Ratio: 32.4x',
    outlook2026: 'Bullish. AI inference expansion is driving a new 5-year growth cycle.',
    dividendYield: '0.50%',
    expenseRatio: '0.20%',
    chartData: [320, 340, 335, 360, 380, 375, 410, 425, 420, 442]
  },
  'SMH': {
    name: 'VanEck Semiconductor ETF',
    ticker: 'SMH',
    theme: 'AI & Innovation',
    price: '235.12',
    change: '+2.45%',
    description: 'Concentrated bet on the 25 largest semiconductor companies.',
    strategy: 'Direct exposure to the "picks and shovels" of the digital age. Tracks companies that design and manufacture the world\'s most advanced chips.',
    tips: 'Extremely volatile. Best used as a tactical growth satellite rather than a core position.',
    holdings: 'NVIDIA (20.5%), TSM (13.2%), Broadcom (7.8%), ASML (5.1%), AMD (4.9%)',
    detailedAnalysis: 'With 2nm chip production scaling in 2026, SMH is the engine of the global economy. Every device from AI servers to EV cars requires more silicon, creating a permanent demand floor.',
    pros: 'Maximum profit from the AI boom; exposure to high-margin monopolies (ASML/TSM).',
    cons: 'Extreme concentration (20% NVDA); high drawdown risk; cyclical demand swings.',
    riskMetrics: 'Beta: 1.45 | Std Dev: 32.5% | Alpha: 4.2',
    outlook2026: 'Aggressive Growth. Strong buy on dips as AI infrastructure spending shows no signs of slowing.',
    dividendYield: '0.60%',
    expenseRatio: '0.35%',
    chartData: [140, 155, 165, 180, 200, 215, 225, 230, 232, 235]
  },
  'ARKK': {
    name: 'ARK Innovation ETF',
    ticker: 'ARKK',
    theme: 'AI & Innovation',
    price: '54.30',
    change: '-1.15%',
    description: 'Cathie Wood\'s flagship fund for disruptive innovation.',
    strategy: 'Actively managed fund targeting genomics, robotics, autonomous vehicles, and blockchain.',
    tips: 'High risk, speculative position. Ideal for investors with a 5-10 year time horizon who can withstand 50% drawdowns.',
    holdings: 'Tesla (12.5%), Roku (8.2%), Coinbase (7.5%), Palantir (6.8%), CRISPR (5.2%)',
    detailedAnalysis: 'In 2026, ARKK is recovering as rates stabilize. Its heavy focus on "Genomics" and "Autonomous Tech" is finally seeing commercial breakthroughs in robotaxis and CRISPR therapies.',
    pros: 'Potential for multi-bagger returns; unique exposure to private-market style growth.',
    cons: 'Extremely high volatility; sensitive to high interest rates; inconsistent historical performance.',
    riskMetrics: 'Beta: 1.62 | Std Dev: 45.0% | Active Management: Yes',
    outlook2026: 'Speculative Buy. A "Moonshot" bet on the next decade of disruption.',
    dividendYield: '0.00%',
    expenseRatio: '0.75%',
    chartData: [45, 48, 42, 55, 60, 58, 52, 56, 55, 54.3]
  },

  // --- Dividend & Income ---
  'SCHD': {
    name: 'Schwab US Dividend Equity',
    ticker: 'SCHD',
    theme: 'Dividend & Income',
    price: '78.42',
    change: '-0.15%',
    description: 'The preferred fund for quality-focused dividend growth.',
    strategy: 'Filters for companies with sustainable dividends, strong cash flows, and high Return on Equity (ROE).',
    tips: 'Best for long-term compounders. Reinvest the 3.8% yield to maximize wealth building.',
    holdings: 'Broadcom (4.5%), Home Depot (4.2%), AbbVie (4.1%), Chevron (4.0%), PepsiCo (3.9%)',
    detailedAnalysis: 'SCHD is the "Quality Fortress." In a late-cycle 2026 economy, its holdings have the strongest balance sheets to survive a slowdown while continuing to hike dividends.',
    pros: 'High yield; strong dividend growth (10% CAGR); extremely resilient in downturns.',
    cons: 'Lags significantly in tech-led bull markets; zero exposure to high-growth non-dividend names.',
    riskMetrics: 'Beta: 0.85 | Std Dev: 12.2% | P/E Ratio: 15.5x',
    outlook2026: 'Bullish (Defensive). A top choice for 2026 as investors rotate from "Growth at any price" to "Quality Value".',
    dividendYield: '3.82%',
    expenseRatio: '0.06%',
    chartData: [72, 74, 73, 75, 77, 76, 78, 79, 78, 78.4]
  },
  'VIG': {
    name: 'Vanguard Div. Appreciation',
    ticker: 'VIG',
    theme: 'Dividend & Income',
    price: '192.45',
    change: '+0.12%',
    description: 'Focuses on companies with a history of increasing dividends for 10+ years.',
    strategy: 'Targeting "Dividend Achievers." This fund isn\'t about the highest yield, but the most consistent growth.',
    tips: 'Ideal for younger investors who want a blend of growth and dividends. It captures the "Quality" factor.',
    holdings: 'Microsoft (6.5%), Apple (5.8%), UnitedHealth (4.2%), JPMorgan (3.8%), Visa (3.5%)',
    detailedAnalysis: 'VIG is the "Growth with a Yield" play. By holding tech giants like MSFT and AAPL that also grow dividends, it provides a smoother ride than pure tech funds with better upside than deep-value funds.',
    pros: 'High-quality holdings; lower volatility than SPY; excellent risk-adjusted returns.',
    cons: 'Low current yield (~1.8%); underperforms in extreme high-inflation environments.',
    riskMetrics: 'Beta: 0.88 | Std Dev: 13.5% | Sharpe Ratio: 0.92',
    outlook2026: 'Steady Growth. Core long-term holding for low-stress wealth building.',
    dividendYield: '1.85%',
    expenseRatio: '0.06%',
    chartData: [175, 180, 178, 185, 190, 188, 192, 193, 192, 192.45]
  },
  'VNQ': {
    name: 'Vanguard Real Estate ETF',
    ticker: 'VNQ',
    theme: 'Dividend & Income',
    price: '84.60',
    change: '+0.75%',
    description: 'Exposure to US real estate through REITs (Data Centers, Office, Residential).',
    strategy: 'Invests in REITs that own and manage income-producing real estate. Benefits from rental income and property appreciation.',
    tips: 'Watch interest rates. VNQ typically rallies when the Fed stops hiking or begins cutting rates. Data center REITs are the secret growth engine here.',
    holdings: 'Prologis (7.8%), American Tower (6.5%), Equinix (5.2%), Welltower (4.8%), Simon Property (3.5%)',
    detailedAnalysis: 'In 2026, VNQ is bifurcated. Office properties are struggling, but "Digital Infrastructure" (Data Centers) and "Industrial Logsitics" are booming due to AI and E-commerce demand.',
    pros: 'High yield (~4%); inflation hedge; diversification away from stocks/bonds.',
    cons: 'Highly sensitive to interest rates; tax-inefficient (dividends taxed as income).',
    riskMetrics: 'Beta: 0.95 | Std Dev: 18.2% | Yield: 4.1%',
    outlook2026: 'Bullish (Recovery). Expected to outperform as interest rates stabilize at 2026 target levels.',
    dividendYield: '3.95%',
    expenseRatio: '0.12%',
    chartData: [78, 80, 79, 81, 83, 82, 84, 85, 84, 84.6]
  },

  // --- Specialized Sectors ---
  'IWM': {
    name: 'iShares Russell 2000 ETF',
    ticker: 'IWM',
    theme: 'Specialized Sectors',
    price: '215.10',
    change: '+1.05%',
    description: 'Exposure to 2,000 small-cap US companies.',
    strategy: 'Focuses on the "underdogs" of the market. Small-cap stocks offer higher growth potential but much higher business risk.',
    tips: 'The "Catch-up" trade. If the economy stays strong and mega-cap tech stays flat, small-caps often rally aggressively.',
    holdings: 'Super Micro (1.5%), MicroStrategy (1.2%), Light & Wonder (0.8%), Simpson (0.7%), Onto (0.6%)',
    detailedAnalysis: '2026 is seeing a "Broadening" of the bull market. After years of mega-cap dominance, small-caps are finally seeing valuation expansion as domestic manufacturing returns to the US.',
    pros: 'Highest upside potential in a roaring economy; diversification from "Big Tech".',
    cons: 'High volatility; many small companies are unprofitable; sensitive to credit conditions.',
    riskMetrics: 'Beta: 1.25 | Std Dev: 24.5% | Small-Cap Premium: Yes',
    outlook2026: 'Strong Growth. Projected to outperform large-caps in 2026 as interest rates ease for smaller borrowers.',
    dividendYield: '1.15%',
    expenseRatio: '0.19%',
    chartData: [190, 205, 200, 210, 220, 215, 218, 220, 216, 215.1]
  },
  'XLV': {
    name: 'Health Care Select Sector',
    ticker: 'XLV',
    theme: 'Specialized Sectors',
    price: '145.20',
    change: '+0.32%',
    description: 'Pharmaceuticals, Biotech, and Managed Care giants.',
    strategy: 'Tracks the S&P 500 Healthcare sector. A blend of stable drug companies and high-growth biotech.',
    tips: 'The "Recession-Proof" sector. People need medicine regardless of the economy. GLP-1 (weight-loss) drugs are the massive growth tailwind for 2026.',
    holdings: 'Eli Lilly (10.5%), UnitedHealth (8.4%), J&J (7.2%), AbbVie (5.8%), Merck (4.5%)',
    detailedAnalysis: 'Healthcare is in a "Golden Age" of drug discovery. AI is cutting drug development times by 50%, leading to a massive pipeline of profitable new treatments reaching market in 2026.',
    pros: 'Defensive stability; exposure to revolutionary medical tech; lower volatility than the S&P 500.',
    cons: 'Political/Regulatory pricing risk; slow to move in fast tech rallies.',
    riskMetrics: 'Beta: 0.65 | Std Dev: 13.2% | Sector Rank: 1',
    outlook2026: 'Bullish (Value). One of the best risk-adjusted sectors for the current market cycle.',
    dividendYield: '1.72%',
    expenseRatio: '0.08%',
    chartData: [130, 135, 138, 140, 142, 140, 143, 144, 145, 145.2]
  }
};

// Make ETF_DATA globally accessible
/** @type {any} */(window).ETF_DATA = ETF_DATA;

/**
 * App Sidebar Component - ETF Edition
 */
class AppSidebar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.collapsedSections = new Set();
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
        
        <div class="nav-group ${isCollapsed('core') ? 'collapsed' : ''}">
          <div class="section-header" onclick="this.getRootNode().host.toggleSection('core')">
            <span class="section-label">Core Index</span>
            <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          <div class="items-container">
            <div class="nav-item ${isActive('SPY') ? 'active' : ''}" onclick="this.getRootNode().host.selectItem('SPY', this)">S&P 500 (SPY) <span class="ticker-badge">SPY</span></div>
            <div class="nav-item ${isActive('VOO') ? 'active' : ''}" onclick="this.getRootNode().host.selectItem('VOO', this)">S&P 500 (VOO) <span class="ticker-badge">VOO</span></div>
            <div class="nav-item ${isActive('DIA') ? 'active' : ''}" onclick="this.getRootNode().host.selectItem('DIA', this)">Dow Jones <span class="ticker-badge">DIA</span></div>
          </div>
        </div>

        <div class="nav-group ${isCollapsed('growth') ? 'collapsed' : ''}">
          <div class="section-header" onclick="this.getRootNode().host.toggleSection('growth')">
            <span class="section-label">AI & Innovation</span>
            <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          <div class="items-container">
            <div class="nav-item ${isActive('QQQ') ? 'active' : ''}" onclick="this.getRootNode().host.selectItem('QQQ', this)">Nasdaq 100 <span class="ticker-badge">QQQ</span></div>
            <div class="nav-item ${isActive('SMH') ? 'active' : ''}" onclick="this.getRootNode().host.selectItem('SMH', this)">Semiconductors <span class="ticker-badge">SMH</span></div>
            <div class="nav-item ${isActive('ARKK') ? 'active' : ''}" onclick="this.getRootNode().host.selectItem('ARKK', this)">ARK Innovation <span class="ticker-badge">ARKK</span></div>
          </div>
        </div>

        <div class="nav-group ${isCollapsed('dividends') ? 'collapsed' : ''}">
          <div class="section-header" onclick="this.getRootNode().host.toggleSection('dividends')">
            <span class="section-label">Dividend & Income</span>
            <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          <div class="items-container">
            <div class="nav-item ${isActive('SCHD') ? 'active' : ''}" onclick="this.getRootNode().host.selectItem('SCHD', this)">US Dividend <span class="ticker-badge">SCHD</span></div>
            <div class="nav-item ${isActive('VIG') ? 'active' : ''}" onclick="this.getRootNode().host.selectItem('VIG', this)">Div Appreciation <span class="ticker-badge">VIG</span></div>
            <div class="nav-item ${isActive('VNQ') ? 'active' : ''}" onclick="this.getRootNode().host.selectItem('VNQ', this)">Real Estate <span class="ticker-badge">VNQ</span></div>
          </div>
        </div>

        <div class="nav-group ${isCollapsed('specialized') ? 'collapsed' : ''}">
          <div class="section-header" onclick="this.getRootNode().host.toggleSection('specialized')">
            <span class="section-label">Specialized Sectors</span>
            <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          <div class="items-container">
            <div class="nav-item ${isActive('IWM') ? 'active' : ''}" onclick="this.getRootNode().host.selectItem('IWM', this)">Small-Cap <span class="ticker-badge">IWM</span></div>
            <div class="nav-item ${isActive('XLV') ? 'active' : ''}" onclick="this.getRootNode().host.selectItem('XLV', this)">Health Care <span class="ticker-badge">XLV</span></div>
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
