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

class ScrollExpandMedia extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.progress = 0;
    this.fullyExpanded = false;
    this.touchStartY = 0;
    this.isMobile = window.innerWidth < 768;
  }

  connectedCallback() {
    this.render();
    this.initEvents();
  }

  updateProgress(delta) {
    this.progress = Math.min(Math.max(this.progress + delta, 0), 1);
    this.fullyExpanded = this.progress >= 1;
    this.renderStyles();
    
    // Toggle children visibility
    const content = this.shadowRoot.querySelector('.content-section');
    if (this.progress > 0.75) {
      content.style.opacity = '1';
    } else {
      content.style.opacity = '0';
    }
  }

  initEvents() {
    const handleWheel = (e) => {
      if (this.fullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        this.fullyExpanded = false;
        e.preventDefault();
      }

      if (!this.fullyExpanded) {
        e.preventDefault();
        const delta = e.deltaY * 0.001;
        this.updateProgress(delta);
      }
    };

    const handleTouchStart = (e) => {
      this.touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const deltaY = this.touchStartY - e.touches[0].clientY;
      if (this.fullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        this.fullyExpanded = false;
        e.preventDefault();
      }

      if (!this.fullyExpanded) {
        e.preventDefault();
        const factor = deltaY < 0 ? 0.008 : 0.005;
        this.updateProgress(deltaY * factor);
        this.touchStartY = e.touches[0].clientY;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768;
      this.renderStyles();
    });
  }

  renderStyles() {
    const mediaWidth = 300 + this.progress * (this.isMobile ? 650 : 1250);
    const mediaHeight = 400 + this.progress * (this.isMobile ? 200 : 400);
    const textTranslateX = this.progress * (this.isMobile ? 180 : 50);
    const bgOpacity = 1 - this.progress;

    const mediaContainer = this.shadowRoot.querySelector('.media-container');
    const firstWord = this.shadowRoot.querySelector('.first-word');
    const restTitle = this.shadowRoot.querySelector('.rest-title');
    const bg = this.shadowRoot.querySelector('.bg-image');

    if (mediaContainer) {
      mediaContainer.style.width = `${mediaWidth}px`;
      mediaContainer.style.height = `${mediaHeight}px`;
    }
    if (firstWord) firstWord.style.transform = `translateX(-${textTranslateX}vw)`;
    if (restTitle) restTitle.style.transform = `translateX(${textTranslateX}vw)`;
    if (bg) bg.style.opacity = bgOpacity;
  }

  render() {
    const bgImage = this.getAttribute('bg-image') || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1920';
    const mediaSrc = this.getAttribute('media-src') || 'https://assets.mixkit.co/videos/preview/mixkit-abstract-geometric-shapes-moving-in-3d-space-2678-large.mp4';
    const title = this.getAttribute('title') || 'Pixel Bank';
    const date = this.getAttribute('date') || 'March 2026';
    
    const words = title.split(' ');
    const firstWord = words[0];
    const restTitle = words.slice(1).join(' ');

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
          background: #000;
        }
        .container {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .bg-image {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          transition: opacity 0.1s linear;
        }
        .viewport {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
        .media-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-width: 95vw;
          max-height: 85vh;
          box-shadow: 0 0 50px rgba(0,0,0,0.5);
          border-radius: 1.5rem;
          overflow: hidden;
          background: #111;
          transition: none;
        }
        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.3);
          pointer-events: none;
        }
        .title-container {
          position: relative;
          z-index: 20;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          mix-blend-difference: difference;
          pointer-events: none;
        }
        h2 {
          font-size: clamp(2.5rem, 8vw, 6rem);
          font-weight: 800;
          color: white;
          margin: 0;
          transition: none;
        }
        .content-section {
          width: 100%;
          padding: 4rem 2rem;
          opacity: 0;
          transition: opacity 0.7s ease-in-out;
          color: white;
          z-index: 10;
          background: #000;
          min-height: 100vh;
        }
      </style>
      <div class="container">
        <img src="${bgImage}" class="bg-image" />
        <div class="viewport">
          <div class="media-container">
            <video src="${mediaSrc}" autoplay muted loop playsinline></video>
            <div class="overlay"></div>
          </div>
          <div class="title-container">
            <h2 class="first-word">${firstWord}</h2>
            <h2 class="rest-title">${restTitle}</h2>
          </div>
        </div>
        <div class="content-section">
          <slot></slot>
        </div>
      </div>
    `;
    this.renderStyles();
  }
}

customElements.define('background-paths', BackgroundPaths);
customElements.define('animated-text', AnimatedText);
customElements.define('flow-button', FlowButton);
customElements.define('scroll-expand-media', ScrollExpandMedia);

// Transition Logic
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-container');
  const mediaView = document.getElementById('media-view');
  const startBtn = document.querySelector('flow-button');

  if (startBtn && hero && mediaView) {
    startBtn.addEventListener('click', () => {
      // Smooth Fade Out Hero
      hero.style.transition = 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out';
      hero.style.opacity = '0';
      hero.style.transform = 'scale(1.1)';

      setTimeout(() => {
        hero.style.display = 'none';
        mediaView.style.display = 'block';
        // Fade In Media View
        mediaView.style.opacity = '0';
        requestAnimationFrame(() => {
          mediaView.style.transition = 'opacity 1s ease-in-out';
          mediaView.style.opacity = '1';
        });
      }, 800);
    });
  }
});
