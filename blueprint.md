# Project Overview: Pixel Bank - World of Art

A visually stunning, framework-less web application showcasing artistic emotions through modern web technologies.

## Features & Design
- **Modern Aesthetics:** Utilizing OKLCH color space for vibrant, perceptually uniform colors.
- **Responsive Layout:** Adapts seamlessly to various screen sizes.
- **Interactive Elements:** Smooth animations and glassmorphism effects.
- **Web Components:** Encapsulated UI logic using native Custom Elements.
  - `background-paths`: Dynamic, animated SVG paths.
  - `animated-text`: Staggered letter animation for hero titles.
  - `navigation-menu`: A simplified navigation bar with direct links.
  - `auth-modal` & `auth-status`: Integrated authentication flow.
- **Brand:** Pixel Bank.

## Navigation Structure
The navigation menu has been simplified for better usability:
1. **components**: Direct link to component library/section.
2. **Reference**: Direct link to Reference/section.
- Dropdowns and arrow icons have been removed for a cleaner, more direct navigation experience.

## Current State: Multi-Page Navigation
The application has been separated into two distinct pages to support browser history and the back button.

### Structure:
1. **`index.html` (Hero Page):**
   - Displays the main hero section with animated background and text.
   - Contains a "Get Started" button that initiates a smooth fade-out transition before navigating.
2. **`media.html` (Media Expansion Page):**
   - Displays the `scroll-expand-media` component.
   - Allows users to scroll and expand the media view.
   - Accessible via the "Get Started" button on the hero page.
   - Supports the browser's back button to return to the hero page.

### Transition Logic:
- When "Get Started" is clicked, the hero container fades out and scales up slightly over 600ms.
- After the animation, `window.location.href` is used to navigate to `media.html`.
- This creates a seamless feel while maintaining separate browser history entries.

### Next Steps:
- Add a "Back" button within the `media.html` UI for explicit navigation.
- Implement more interactive cards or sections in the expanded view.
