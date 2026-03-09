# Project Overview: Pixel Bank - Financial Ecosystem

A sophisticated, framework-less financial dashboard showcasing market themes and ETF performance through modern web technologies. This project is configured for automatic deployment: all updates are automatically committed and pushed to GitHub.

## Features & Design
- **Financial Aesthetics:** High-contrast dark theme optimized for market data visualization.
- **ETF Theme Browser:** A dedicated section for exploring ETFs by theme (AI, Dividends, Green Energy).
- **Interactive Charts:** Real-time data visualization using Chart.js, featuring responsive line charts with dynamic color coding based on performance (Bullish/Bearish).
- **Web Components:** 
  - `app-sidebar`: Organized by investment themes (Labels) with specific tickers (Items).
  - `navigation-menu`: Direct access to Markets and Trading sections.
- **Brand:** Pixel Bank Financial.

## ETF Browser Structure
The `components.html` page has been transformed into a Market Terminal:
1. **Themes (Labels)**: Grouping related investment strategies.
2. **Tickers (Items)**: Individual ETFs (e.g., QQQ, SOXX, SCHD).
3. **Data Display**: Shows current price, daily change percentage, and a 1-year performance chart.

## Technical Implementation
- **Data Engine**: `ETF_DATA` registry in `main.js` stores ticker information and historical price points.
- **Visualization**: Chart.js integration for smooth, animated financial charts.
- **Event Flow**: Uses a custom `etf-selected` event to sync the sidebar selection with the main terminal display.

### Automatic Workflow:
- All financial data updates, UI refinements, and feature additions are automatically committed and pushed to the GitHub repository to trigger the deployment pipeline, ensuring the live terminal is always synced with the latest market data and features.

## Market Themes Included
- **AI & Big Tech**: Nasdaq 100 (QQQ), Semiconductor (SOXX).
- **Dividends & Value**: US Dividend Equity (SCHD), High Yield (VYM).
- **Green Energy**: Clean Energy (ICLN), Lithium & Battery (LIT).
