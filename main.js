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

customElements.define('background-paths', BackgroundPaths);
customElements.define('animated-text', AnimatedText);
