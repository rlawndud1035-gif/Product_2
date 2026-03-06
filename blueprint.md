# Project Overview: Pixel Bank - World of Art

A visually stunning, framework-less web application showcasing artistic emotions through modern web technologies.

## Features & Design
- **Modern Aesthetics:** Utilizing OKLCH color space for vibrant, perceptually uniform colors.
- **Responsive Layout:** Adapts seamlessly to various screen sizes.
- **Interactive Elements:** Smooth animations and glassmorphism effects.
- **Web Components:** Encapsulated UI logic using native Custom Elements.
  - `background-paths`: Dynamic, animated SVG paths.
  - `animated-text`: Staggered letter animation for hero titles.
  - `flow-button`: A modern, interactive button with smooth hover effects.
  - `scroll-expand-media`: A high-fidelity scroll-driven media expansion component.
- **Brand:** Pixel Bank.

## Current Plan: Dynamic Page Transition & Scroll Expansion
Implementing a seamless transition to a new interactive section upon button click.

### Steps:
1. **Implement `scroll-expand-media` Web Component:**
   - Translate React/Framer-Motion logic to Vanilla JS/CSS.
   - Handle scroll/wheel/touch events to control media expansion progress (0 to 1).
   - Animate media dimensions, text translation, and background opacity based on progress.
2. **Setup Transition Logic:**
   - Add a click event listener to the `flow-button`.
   - Implement a "View Transition" effect: fade out the hero section and fade in the media section.
3. **Refine UI/UX:**
   - Use high-quality placeholders for background and media content.
   - Ensure the scroll expansion feels "natural and smooth" as requested.
4. **Deploy and Push:**
   - Commit all changes and push to GitHub for automatic deployment.
