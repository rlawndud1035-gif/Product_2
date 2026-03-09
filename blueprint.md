# Project Overview: Pixel Bank - World of Art

A visually stunning, framework-less web application showcasing artistic emotions through modern web technologies. This project is configured for automatic deployment: all updates are automatically committed and pushed to GitHub.

## Features & Design
- **Modern Aesthetics:** Utilizing OKLCH color space for vibrant, perceptually uniform colors.
- **Responsive Layout:** Adapts seamlessly to various screen sizes.
- **Interactive Elements:** Smooth animations and glassmorphism effects.
- **Web Components:** Encapsulated UI logic using native Custom Elements.
  - `background-paths`: Dynamic, animated SVG paths.
  - `animated-text`: Staggered letter animation for hero titles.
  - `navigation-menu`: A simplified navigation bar with direct links.
  - `auth-modal` & `auth-status`: Integrated authentication flow.
  - `app-sidebar`: A vertical sidebar with collapsible sections and navigation items.
- **Brand:** Pixel Bank.

## Navigation Structure
The navigation menu has been simplified for better usability:
1. **Components**: Direct link to component library/section.
2. **Reference**: Direct link to Reference/section.
- Dropdowns and arrow icons have been removed for a cleaner, more direct navigation experience.

## Page Structure
The application uses separate pages to support browser history and a smooth user experience.

### Pages:
1. **`index.html` (Hero Page):**
   - Displays the main hero section with animated background and text.
   - Contains a "Get Started" button that initiates a smooth fade-out transition before navigating.
2. **`components.html` (Components Library):**
   - Displays a comprehensive component library with a vertical sidebar.
   - Utilizes the `app-sidebar` custom element for navigation between categories.
   - Uses a card-based grid layout for component previews.

## Current State: UI Refinements
- **Sidebar Font Sizes:** Increased for better readability.
  - Section Labels: 12px (Uppercase, 700 weight).
  - Navigation Items: 15px (500-600 weight).
- **Navigation Feedback:** Sidebar items include hover effects (background change, slight translation) and active states.
- **Independent Scrolling (Components Page):** 
  - The `body` scroll is disabled to prevent double scrollbars.
  - Left Sidebar (`app-sidebar`) and Right Content Area (`sidebar-inset`) scroll independently.
  - Custom, subtle scrollbar styling applied to the content area for a premium feel.

### Transition Logic:
- When "Get Started" is clicked, the hero container fades out and scales up slightly over 600ms.
- After the animation, `window.location.href` is used to navigate to `components.html`.
- This creates a seamless feel while maintaining separate browser history entries.

### Automatic Workflow:
- All code modifications and fixes are automatically committed and pushed to the GitHub repository to trigger the deployment pipeline, ensuring the live website is always up-to-date with the latest changes.

## Material Design 3 Button Guidelines
The "Buttons" section in the component library is being enhanced to follow Material Design 3 (M3) standards, providing a comprehensive guide on button usage and design:
- **Button Types:** Detailed explanations for Elevated, Filled, Filled Tonal, Outlined, and Text buttons.
- **Usage Principles:** Guidance on when to use each button type based on emphasis and priority.
- **Visual Design:** M3-compliant styling including elevation, color roles, and interactive states.
- **Interactive Overview:** A dedicated section explaining the UX/UI rationale behind button placement and selection.
