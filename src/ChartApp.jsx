import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './tailwind.css';

const generateDummyData = (basePrice) => {
  const data = [];
  let currentPrice = parseFloat(basePrice);
  let time = new Date().getTime() - (100 * 5 * 60 * 1000); // 100 periods back, 5 mins each

  for (let i = 0; i < 100; i++) {
    const change = (Math.random() - 0.5) * currentPrice * 0.02;
    const open = currentPrice;
    const close = currentPrice + change;
    const high = Math.max(open, close) + Math.random() * currentPrice * 0.01;
    const low = Math.min(open, close) - Math.random() * currentPrice * 0.01;
    
    data.push({
      x: time,
      y: [
        parseFloat(open.toFixed(2)),
        parseFloat(high.toFixed(2)),
        parseFloat(low.toFixed(2)),
        parseFloat(close.toFixed(2))
      ]
    });
    
    currentPrice = close;
    time += 5 * 60 * 1000;
  }
  return data;
};

export default function ChartApp() {
  const [series, setSeries] = useState([{ data: [] }]);

  useEffect(() => {
    const handleEtfSelected = (e) => {
      const ticker = e.detail?.ticker;
      if (window.ETF_DATA && window.ETF_DATA[ticker]) {
        const data = window.ETF_DATA[ticker];
        const dummyData = generateDummyData(data.price);
        setSeries([{ data: dummyData }]);
      }
    };

    window.addEventListener('etf-selected', handleEtfSelected);

    // Initial load setup if already dispatched
    setTimeout(() => {
      const activeTickerElem = document.querySelector('.nav-item.active .ticker-badge');
      const firstTicker = activeTickerElem ? activeTickerElem.textContent : 'QQQ';
      if (window.ETF_DATA && window.ETF_DATA[firstTicker] && series[0].data.length === 0) {
        setSeries([{ data: generateDummyData(window.ETF_DATA[firstTicker].price) }]);
      }
    }, 800);

    return () => {
      window.removeEventListener('etf-selected', handleEtfSelected);
    };
  }, []);

  const options = {
    chart: {
      type: 'candlestick',
      height: '100%',
      background: 'transparent',
      toolbar: { show: false },
      animations: { enabled: false }
    },
    theme: { mode: 'dark' },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#22c55e', 
          downward: '#ef4444' 
        },
        wick: {
          useFillColor: true
        }
      }
    },
    grid: {
      borderColor: 'rgba(255,255,255,0.05)',
      strokeDashArray: 4,
    },
    xaxis: {
      type: 'datetime',
      labels: { style: { colors: 'rgba(255,255,255,0.4)' } },
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    yaxis: {
      tooltip: { enabled: true },
      labels: { style: { colors: 'rgba(255,255,255,0.4)' } }
    }
  };

  return (
    <div className="w-full h-full">
      {series[0].data.length > 0 ? (
        <ReactApexChart 
          options={options} 
          series={series} 
          type="candlestick" 
          height="100%" 
        />
      ) : (
        <div className="flex items-center justify-center h-full text-white/50">
          Loading chart data...
        </div>
      )}
    </div>
  );
}