import React from 'react';
import { createRoot } from 'react-dom/client';
import ChartApp from './ChartApp';

const container = document.getElementById('react-chart-root');
if (container) {
  const root = createRoot(container);
  root.render(<ChartApp />);
}