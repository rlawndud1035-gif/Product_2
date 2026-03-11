# Project Overview: Pixel Bank - Financial Ecosystem

A sophisticated, framework-less financial dashboard showcasing market themes and ETF performance through modern web technologies. This project is configured for automatic deployment: all updates are automatically committed and pushed to GitHub.

## Features & Design
- **Financial Aesthetics:** High-contrast dark theme optimized for market data visualization.
- **Enhanced ETF Terminal:** A deep-dive experience for ETFs with detailed insights.
- **Interactive Charts:** Real-time candlestick visualization using React-ApexCharts.
- **Real-time Price Engine:** Prices update every 10 seconds with simulated market volatility.
- **Monetization Readiness:** Optimized for Google AdSense with dedicated compliance pages (Privacy, About, Contact) and professional layout to ensure high-quality traffic valuation.
- **Rich Data Fields**: Each ETF now includes:
  - **Investment Strategy**: How the fund manages assets.
  - **Pro Investment Tips**: Expert advice for trading and long-term holding.
  - **Top Holdings**: Current exposure to major companies (e.g., NVIDIA, Apple).
  - **Market Sentiment**: Dynamic sentiment indicator based on real-time price action.

## ETF Themes & Coverage
1. **AI & Growth**: High-performance tech ETFs (QQQ, SOXX, XLK, SMH).
2. **Core & Index**: Fundamental market coverage (VOO).
3. **Dividends & Income**: Passive income strategies (SCHD, VYM, VNQ).
4. **Sectors & Trends**: Specialized trends (XLV, ICLN, LIT).

## Technical Implementation
- **Data Engine**: Centralized `ETF_DATA` registry in `main.js`.
- **Event-Driven Architecture**: Uses `etf-selected` for navigation and `prices-updated` for real-time synchronization.
- **Web Components**: Custom sidebar and navigation components for a modular UI.

### Quality Assurance:
- Rigorous type checking and linting to ensure a robust, error-free financial platform.
- Optimized layout for high information density without sacrificing aesthetics.

### Automatic Workflow:
- All financial data updates and feature additions are automatically committed and pushed to GitHub to trigger the deployment pipeline.

## Current Task: System Diagnosis & Optimization
**Status**: Investigating reported issues and implementing critical fixes.

### Identified Issues:
1. **Mobile Responsiveness Failure**: The terminal layout overlaps on small screens due to fixed margins for the sidebar.
2. **Chart Data Discrepancy**: Real-time charts generate random dummy data that doesn't align with the actual displayed price of the ETF.
3. **Data Volatility**: Market prices reset to hardcoded values on every page refresh or navigation, breaking the "real-time" immersion.
4. **Performance Inefficiency**: The React chart component re-attaches event listeners too frequently, potentially causing flickering or memory leaks.

### Implementation Plan:
1. **Responsive Terminal Layout**:
   - Implement a mobile-first approach for the sidebar.
   - Use media queries to hide/toggle the sidebar on small screens or transform it into a bottom navigation/drawer.
   - Adjust `.sidebar-inset` margin-left dynamically.
2. **Synchronized Chart Data**:
   - Modify `generateDummyData` in `ChartApp.jsx` to ensure the final candlestick close matches the current `ETF_DATA` price.
   - Integrate `data.chartData` if possible for more realistic baseline data.
3. **Persistent Price Engine**:
   - Update `main.js` to store and retrieve `ETF_DATA` from `localStorage`.
   - Ensure prices continue from where they left off after navigation.
4. **Listener Optimization**:
   - Refactor `ChartApp.jsx` to use stable event listener references or properly managed `useEffect` dependencies.

## Monetization & AdSense Integration Plan
1. **Script Integration**: Add the AdSense auto-ads script to the global `<head>`.
2. **Account Verification**: Include the `<meta name="google-adsense-account" content="ca-pub-6454047865688551">` tag in all HTML pages for ownership verification.
3. **Compliance Pages**: Implement `about.html`, `privacy.html`, and `contact.html` to meet AdSense publisher requirements.
4. **Professional Footer**: Add a site-wide footer with navigation to legal and informational pages.
5. **Content Quality**: Maintain high-density financial analysis to provide value to users and advertisers.
