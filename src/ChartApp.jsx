import React, { useEffect, useState, useRef, useCallback } from 'react';
import ReactApexChart from 'react-apexcharts';
import './tailwind.css';

/**
 * Generates 100 candlesticks ending at targetPrice
 * @param {number} targetPrice 
 */
const generateSyncedData = (targetPrice) => {
  const data = [];
  let currentPrice = targetPrice;
  let time = new Date().getTime();

  for (let i = 0; i < 100; i++) {
    const change = (Math.random() - 0.5) * currentPrice * 0.015;
    const close = currentPrice;
    const open = currentPrice - change;
    const high = Math.max(open, close) + Math.random() * currentPrice * 0.005;
    const low = Math.min(open, close) - Math.random() * currentPrice * 0.005;

    data.unshift({
      x: time,
      y: [
        parseFloat(open.toFixed(2)),
        parseFloat(high.toFixed(2)),
        parseFloat(low.toFixed(2)),
        parseFloat(close.toFixed(2))
      ]
    });

    currentPrice = open;
    time -= 5 * 60 * 1000;
  }
  return data;
};

export default function ChartApp() {
  const [series, setSeries] = useState([{ data: /** @type {any[]} */ ([]) }]);
  const [ticker, setTicker] = useState('QQQ');
  const seriesRef = useRef(series);
  const tickerRef = useRef(ticker);

  // Sync refs with state
  useEffect(() => {
    seriesRef.current = series;
    tickerRef.current = ticker;
  }, [series, ticker]);

  const handleEtfSelected = useCallback((e) => {
    const newTicker = e.detail?.ticker;
    const globalData = /** @type {any} */(window).ETF_DATA;
    if (newTicker && globalData && globalData[newTicker]) {
      setTicker(newTicker);
      const data = globalData[newTicker];
      setSeries([{ data: generateSyncedData(parseFloat(data.price)) }]);
    }
  }, []);

  const handlePricesUpdated = useCallback((e) => {
    const globalData = e.detail?.data || /** @type {any} */(window).ETF_DATA;
    const currentTicker = tickerRef.current;
    const currentSeries = seriesRef.current;

    if (globalData && globalData[currentTicker] && currentSeries[0].data.length > 0) {
      const newData = [...currentSeries[0].data];
      const lastPoint = { ...newData[newData.length - 1] };
      const newPrice = parseFloat(globalData[currentTicker].price);

      lastPoint.y = [...lastPoint.y];
      lastPoint.y[3] = newPrice; // update close
      if (newPrice > lastPoint.y[1]) lastPoint.y[1] = newPrice; // update high
      if (newPrice < lastPoint.y[2]) lastPoint.y[2] = newPrice; // update low

      newData[newData.length - 1] = lastPoint;
      setSeries([{ data: newData }]);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('etf-selected', handleEtfSelected);
    window.addEventListener('prices-updated', handlePricesUpdated);

    // Initial load
    const globalData = /** @type {any} */(window).ETF_DATA;
    if (globalData && globalData[tickerRef.current] && seriesRef.current[0].data.length === 0) {
      setSeries([{ data: generateSyncedData(parseFloat(globalData[tickerRef.current].price)) }]);
    }

    return () => {
      window.removeEventListener('etf-selected', handleEtfSelected);
      window.removeEventListener('prices-updated', handlePricesUpdated);
    };
  }, [handleEtfSelected, handlePricesUpdated]);

  /** @type {any} */
  const options = {
    chart: {
      type: 'candlestick',
      height: '100%',
      background: 'transparent',
      toolbar: { show: false },
      animations: { enabled: false } // Disable animations for real-time updates to prevent flickering
    },
    title: {
      text: `${ticker} Terminal Data (Real-time)`,
      align: 'left',
      style: { color: 'rgba(255,255,255,0.4)', fontSize: '12px', fontWeight: 600 }
    },
    theme: { mode: 'dark' },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#22c55e', 
          downward: '#ef4444' 
        },
        wick: { useFillColor: true }
      }
    },
    grid: {
      borderColor: 'rgba(255,255,255,0.05)',
      strokeDashArray: 4,
      padding: { left: 10, right: 10 }
    },
    xaxis: {
      type: 'datetime',
      labels: { style: { colors: 'rgba(255,255,255,0.3)', fontSize: '10px' } },
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    yaxis: {
      tooltip: { enabled: true },
      labels: { 
        style: { colors: 'rgba(255,255,255,0.3)', fontSize: '10px' },
        formatter: (val) => `$${val.toFixed(2)}`
      }
    },
    tooltip: {
      theme: 'dark',
      x: { format: 'HH:mm:ss' }
    }
  };

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '400px' }}>
      {series[0].data.length > 0 ? (
        <ReactApexChart 
          options={options} 
          series={series} 
          type="candlestick" 
          height="100%" 
        />
      ) : (
        <div className="flex items-center justify-center h-full text-white/50 animate-pulse">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-white/10 border-t-white/50 rounded-full animate-spin"></div>
            <span>Synchronizing Market Terminal...</span>
          </div>
        </div>
      )}
    </div>
  );
}