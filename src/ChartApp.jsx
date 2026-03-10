import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './tailwind.css';

const generateDummyData = (basePrice) => {
  const data = [];
  let currentPrice = parseFloat(basePrice) || 100;
  let time = new Date().getTime() - (100 * 5 * 60 * 1000);

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
  const [ticker, setTicker] = useState('QQQ');

  useEffect(() => {
    const handleEtfSelected = (e) => {
      const newTicker = e.detail?.ticker;
      if (newTicker && window.ETF_DATA && window.ETF_DATA[newTicker]) {
        setTicker(newTicker);
        const data = window.ETF_DATA[newTicker];
        setSeries([{ data: generateDummyData(data.price) }]);
      }
    };

    window.addEventListener('etf-selected', handleEtfSelected);

    const initChart = () => {
      let activeTicker = 'QQQ';
      const sidebar = document.querySelector('app-sidebar');
      if (sidebar && sidebar.shadowRoot) {
        const activeItem = sidebar.shadowRoot.querySelector('.nav-item.active .ticker-badge');
        if (activeItem) activeTicker = activeItem.textContent;
      }

      if (window.ETF_DATA && window.ETF_DATA[activeTicker]) {
        setTicker(activeTicker);
        setSeries([{ data: generateDummyData(window.ETF_DATA[activeTicker].price) }]);
      }
    };

    const timer1 = setTimeout(initChart, 500);
    const timer2 = setTimeout(initChart, 1500);

    return () => {
      window.removeEventListener('etf-selected', handleEtfSelected);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const options = {
    chart: {
      type: 'candlestick',
      height: '100%',
      background: 'transparent',
      toolbar: { show: false },
      animations: { enabled: true, easing: 'easeinout', speed: 800 }
    },
    title: {
      text: `${ticker} Real-time Chart`,
      align: 'left',
      style: { color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontWeight: 600 }
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
      labels: { style: { colors: 'rgba(255,255,255,0.4)', fontSize: '10px' } },
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    yaxis: {
      tooltip: { enabled: true },
      labels: { 
        style: { colors: 'rgba(255,255,255,0.4)', fontSize: '10px' },
        formatter: (val) => `$${val.toFixed(2)}`
      }
    },
    tooltip: {
      theme: 'dark',
      x: { format: 'dd MMM HH:mm' }
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
          Initializing market data...
        </div>
      )}
    </div>
  );
}