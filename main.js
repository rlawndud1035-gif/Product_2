// Pixel Bank - Main Logic v1.2.2

class AuthStatus extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    // Dummy login state using localStorage
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  connectedCallback() {
    this.render();
  }

  toggleAuth() {
    this.isLoggedIn = !this.isLoggedIn;
    localStorage.setItem('isLoggedIn', this.isLoggedIn);
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: fixed;
          top: 2rem;
          right: 2rem;
          z-index: 1000;
          font-family: var(--font-sans, system-ui, sans-serif);
        }
        button {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.6rem 1.5rem;
          border-radius: 100px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          outline: none;
        }
        button:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        button:active {
          transform: translateY(0);
        }
        .logout-btn {
          color: oklch(0.7 0.15 20); /* Soft red for logout */
        }
      </style>
      <button class="${this.isLoggedIn ? 'logout-btn' : ''}">
        ${this.isLoggedIn ? 'Log out' : 'Sign in'}
      </button>
    `;

    this.shadowRoot.querySelector('button').addEventListener('click', () => this.toggleAuth());
  }
}

customElements.define('auth-status', AuthStatus);

class NavigationMenu extends HTMLElement {
...
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
          position: fixed;
          top: 2rem;
          left: 2rem;
          z-index: 1000;
          font-family: var(--font-sans, system-ui, sans-serif);
        }
...

          display: flex;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          padding: 0.5rem;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .menu-item {
          position: relative;
          color: white;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          padding: 0.6rem 1.2rem;
          border-radius: 100px;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .menu-item:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        .dropdown {
          position: absolute;
          top: calc(100% + 1rem);
          left: 0;
          background: #0a0a0a;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 1rem;
          width: max-content;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
        .menu-item:hover .dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .grid-content {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.5rem;
          width: 500px;
        }
        .list-item {
          padding: 0.75rem;
          border-radius: 0.5rem;
          text-decoration: none;
          color: white;
          transition: background 0.2s;
        }
        .list-item:hover {
          background: rgba(255, 255, 255, 0.05);
        }
        .list-item .title {
          font-weight: 600;
          margin-bottom: 0.25rem;
          display: block;
        }
        .list-item .desc {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.4;
        }
        .arrow {
          width: 12px;
          height: 12px;
          transition: transform 0.3s;
        }
        .menu-item:hover .arrow {
          transform: rotate(180deg);
        }
        @media (max-width: 768px) {
          .grid-content { width: 300px; grid-template-columns: 1fr; }
          .hidden-mobile { display: none; }
        }
      </style>
      <nav>
        <div class="menu-item">
          Getting started
          <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
          <div class="dropdown">
            <div style="width: 300px; display: flex; flex-direction: column; gap: 0.5rem;">
              <a href="#docs" class="list-item">
                <span class="title">Introduction</span>
                <span class="desc">Re-usable components built with modern web standards.</span>
              </a>
              <a href="#install" class="list-item">
                <span class="title">Installation</span>
                <span class="desc">How to integrate and structure your art collection.</span>
              </a>
              <a href="#typography" class="list-item">
                <span class="title">Typography</span>
                <span class="desc">Styles for headings, paragraphs, lists...etc</span>
              </a>
            </div>
          </div>
        </div>
        <div class="menu-item hidden-mobile">
          Components
          <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
          <div class="dropdown">
            <div class="grid-content">
              <a href="#" class="list-item"><span class="title">Alert Dialog</span><span class="desc">A modal dialog that interrupts the user with important content.</span></a>
              <a href="#" class="list-item"><span class="title">Hover Card</span><span class="desc">For sighted users to preview content available behind a link.</span></a>
              <a href="#" class="list-item"><span class="title">Progress</span><span class="desc">Displays an indicator showing completion progress.</span></a>
              <a href="#" class="list-item"><span class="title">Scroll-area</span><span class="desc">Visually or semantically separates content.</span></a>
              <a href="#" class="list-item"><span class="title">Tabs</span><span class="desc">A set of layered sections of content.</span></a>
              <a href="#" class="list-item"><span class="title">Tooltip</span><span class="desc">A popup that displays information on hover.</span></a>
            </div>
          </div>
        </div>
        <a href="#docs" class="menu-item">Docs</a>
      </nav>
    `;
  }
}

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

customElements.define('navigation-menu', NavigationMenu);
customElements.define('background-paths', BackgroundPaths);
customElements.define('animated-text', AnimatedText);
