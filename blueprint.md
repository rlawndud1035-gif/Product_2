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

## Monetization & AdSense Integration Plan
1. **Script Integration**: Add the AdSense auto-ads script to the global `<head>`.
2. **Account Verification**: Include the `<meta name="google-adsense-account" content="ca-pub-6454047865688551">` tag in all HTML pages for ownership verification.
3. **Compliance Pages**: Implement `about.html`, `privacy.html`, and `contact.html` to meet AdSense publisher requirements.
4. **Professional Footer**: Add a site-wide footer with navigation to legal and informational pages.
5. **Content Quality**: Maintain high-density financial analysis to provide value to users and advertisers.
