// Pixel Bank - Main Logic v1.1.0
class BackgroundPaths extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const generatePaths = (position) => {
      return Array.from({ length: 36 }, (_, i) => {
        const d = `M-${380 - i * 5 * position} -${189 + i * 6}C-${
          380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
          152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
          684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`;
        const width = 0.5 + i * 0.03;
        const opacity = 0.1 + i * 0.03;
        const duration = 20 + Math.random() * 10;
        return { d, width, opacity, duration };
      });
    };

    const paths1 = generatePaths(1);
    const paths2 = generatePaths(-1);

    const createPathElements = (paths) => {
      return paths.map((p, i) => `
        <path
          d="${p.d}"
          stroke="currentColor"
          stroke-width="${p.width}"
          stroke-opacity="${p.opacity}"
          pathLength="1"
          class="path-anim"
          style="animation-duration: ${p.duration}s;"
        />
      `).join('');
    };

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        svg {
          width: 100%;
          height: 100%;
          color: oklch(0.98 0.01 250 / 0.15);
        }
        .path-anim {
          fill: none;
          stroke-dasharray: 0.4 0.6;
          stroke-dashoffset: 1;
          animation: path-flow linear infinite;
        }
        @keyframes path-flow {
          0% {
            stroke-dashoffset: 1;
          }
          100% {
            stroke-dashoffset: -1;
          }
        }
      </style>
      <svg viewBox="0 0 696 316" preserveAspectRatio="xMidYMid slice">
        <title>Background Paths</title>
        ${createPathElements(paths1)}
        ${createPathElements(paths2)}
      </svg>
    `;
  }
}

class AnimatedText extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const text = this.getAttribute('text') || '';
    this.render(text);
  }

  render(text) {
    const words = text.split(' ');
    let content = '';
    words.forEach((word, wordIndex) => {
      content += `<span class="word">`;
      word.split('').forEach((letter, letterIndex) => {
        const delay = wordIndex * 0.1 + letterIndex * 0.03;
        content += `<span class="letter" style="animation-delay: ${delay}s">${letter}</span>`;
      });
      content += `</span>&nbsp;`;
    });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .word {
          display: inline-block;
          white-space: nowrap;
          margin-right: 0.5rem;
        }
        .letter {
          display: inline-block;
          opacity: 0;
          transform: translateY(100px);
          animation: slideUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          background: linear-gradient(to right, oklch(0.98 0.01 250), oklch(0.98 0.01 250 / 0.8));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      </style>
      ${content}
    `;
  }
}

class FlowButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const text = this.getAttribute('text') || 'Modern Button';
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }
        button {
          position: relative;
          display: flex;
          align-items: center;
          gap: 6px;
          overflow: hidden;
          border-radius: 100px;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
          background: transparent;
          padding: 14px 40px;
          font-size: 16px;
          font-weight: 600;
          color: white;
          cursor: pointer;
          transition: all 600ms cubic-bezier(0.23, 1, 0.32, 1);
          outline: none;
          user-select: none;
        }

        button:hover {
          border-color: transparent;
          color: white;
          border-radius: 12px;
        }

        button:active {
          transform: scale(0.95);
        }

        .icon {
          position: absolute;
          width: 18px;
          height: 18px;
          fill: none;
          stroke: white;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          z-index: 9;
          transition: all 800ms cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .icon-left {
          left: -25%;
        }

        button:hover .icon-left {
          left: 20px;
          stroke: white;
        }

        .icon-right {
          right: 20px;
        }

        button:hover .icon-right {
          right: -25%;
          stroke: white;
        }

        .text {
          position: relative;
          z-index: 1;
          transform: translateX(-14px);
          transition: all 800ms ease-out;
        }

        button:hover .text {
          transform: translateX(14px);
        }

        .bg-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 18px;
          height: 18px;
          background: white;
          border-radius: 50%;
          opacity: 0;
          transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
        }

        button:hover .bg-circle {
          width: 280px;
          height: 280px;
          opacity: 1;
          background: #111111;
        }
      </style>
      <button>
        <svg class="icon icon-left" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        <span class="text">${text}</span>
        <span class="bg-circle"></span>
        <svg class="icon icon-right" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    `;
  }
}

customElements.define('background-paths', BackgroundPaths);
customElements.define('animated-text', AnimatedText);
customElements.define('flow-button', FlowButton);
