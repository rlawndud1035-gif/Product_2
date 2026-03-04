class WavePath extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }
        svg {
          width: 100%;
          height: auto;
          overflow: visible;
        }
        path {
          fill: none;
          stroke: oklch(0.98 0.01 250 / 0.2);
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 3s ease-out forwards;
        }
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      </style>
      <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path d="M0,50 C150,0 350,100 500,50 C650,0 850,100 1000,50" />
      </svg>
    `;
  }
}

customElements.define('wave-path', WavePath);
