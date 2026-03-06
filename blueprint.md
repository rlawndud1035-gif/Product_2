# Project Overview: Pixel Bank - World of Art

A visually stunning, framework-less web application showcasing artistic emotions through modern web technologies.

## Features & Design
- **Modern Aesthetics:** Utilizing OKLCH color space for vibrant, perceptually uniform colors.
- **Responsive Layout:** Adapts seamlessly to various screen sizes.
- **Interactive Elements:** Smooth animations and glassmorphism effects.
- **Web Components:** Encapsulated UI logic using native Custom Elements.
  - `background-paths`: Dynamic, animated SVG paths.
  - `animated-text`: Staggered letter animation for hero titles.
  - `flow-button`: A modern, interactive button with smooth hover effects, background expansion, and icon transitions.
- **Brand:** Pixel Bank.

## Current Plan: UI Component Upgrade
Enhancing the user interaction with a high-fidelity "Flow" button component.

### Steps:
1. **Implement `flow-button` Web Component:**
   - Create a Web Component that mirrors the design of the React `FlowButton`.
   - Use CSS transitions for the circular expansion effect and icon positioning.
   - Support custom text via the `text` attribute.
2. **Update index.html:**
   - Replace the static CTA button with the `<flow-button>` component.
   - Set the button text to "Get Started".
3. **Refine Styles:**
   - Clean up `style.css` to remove redundant button styles.
   - Adjust the layout container for the new button.
4. **Deploy and Push:**
   - Commit all changes and push to GitHub for automatic deployment.
