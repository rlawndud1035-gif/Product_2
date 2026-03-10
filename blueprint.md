# Project Overview: Pixel Bank - Financial Ecosystem

A sophisticated, framework-less financial dashboard showcasing market themes and ETF performance through modern web technologies. This project is configured for automatic deployment: all updates are automatically committed and pushed to GitHub.

## Features & Design
- **Financial Aesthetics:** High-contrast dark theme optimized for market data visualization.
- **ETF Theme Browser:** A dedicated section for exploring ETFs by theme (AI, Dividends, Green Energy).
- **Interactive Charts:** Real-time data visualization using ApexCharts (Candlestick), featuring responsive charts that update dynamically.
- **Real-time Price Engine:** Prices for all ETFs are updated every 10 seconds using a simulation engine that reflects market volatility, ensuring the "live" feel of a trading terminal.
- **Web Components:** 
  - `app-sidebar`: Organized by investment themes (Labels) with specific tickers (Items).
  - `navigation-menu`: Direct access to Markets and Trading sections.
- **Brand:** Pixel Bank Financial.

## ETF Browser Structure
The `components.html` page has been transformed into a Market Terminal:
1. **Themes (Labels)**: Grouping related investment strategies.
2. **Tickers (Items)**: Individual ETFs (e.g., QQQ, SOXX, SCHD).
3. **Data Display**: Shows current price, daily change percentage, and a live candlestick chart.

## Technical Implementation
- **Data Engine**: `ETF_DATA` registry in `main.js` stores ticker information and historical price points.
- **Real-time Sync**: `updateStockPrices` function runs every 10s, dispatching a `prices-updated` event to sync the UI and React charts.
- **Visualization**: React-ApexCharts integration for professional-grade financial visualization.
- **Event Flow**: Uses `etf-selected` and `prices-updated` events to maintain state across Web Components and React.

### Quality Assurance:
- Resolved 18 core problems related to syntax, type safety, and browser compatibility.
- Implemented a robust `jsconfig.json` for better IDE support and type checking.

### Automatic Workflow:
- All financial data updates, UI refinements, and feature additions are automatically committed and pushed to the GitHub repository to trigger the deployment pipeline, ensuring the live terminal is always synced with the latest market data and features.
