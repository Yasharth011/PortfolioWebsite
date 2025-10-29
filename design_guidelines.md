# Design Guidelines: Renewable Energy Portfolio Website

## Design Approach

**Selected Approach**: Design System - Modern Technical Documentation
**Justification**: Academic portfolio showcasing technical engineering content requires clarity, professionalism, and visual hierarchy that facilitates learning. Drawing from platforms like Notion, Linear, and technical documentation sites for their clean, structured approach to presenting complex information.

**Core Principles**:
- Technical clarity with visual sophistication
- Professional academic presentation
- Interactive learning elements
- Structured information hierarchy

---

## Typography System

**Font Families** (via Google Fonts CDN):
- **Headings**: 'Inter', sans-serif (weights: 600, 700)
- **Body**: 'Inter', sans-serif (weights: 400, 500)
- **Technical/Diagrams**: 'JetBrains Mono', monospace (weight: 400)

**Type Scale**:
- Page Title (Activity pages): text-4xl (36px) / font-bold
- Section Headings: text-2xl (24px) / font-semibold
- Diagram Labels: text-sm (14px) / font-medium / JetBrains Mono
- Body Text: text-base (16px) / leading-relaxed
- Component Labels: text-xs (12px) / uppercase / tracking-wide

---

## Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 6, 8, 12, 16, 20
- Micro spacing (component internals): 2, 4
- Standard spacing (between elements): 6, 8
- Section spacing: 12, 16, 20

**Grid Structure**:
- Sidebar navigation: Fixed 280px width (desktop)
- Main content: max-w-6xl centered with px-8 padding
- Diagram containers: Full width of content area
- Text blocks: max-w-3xl for optimal reading

**Responsive Breakpoints**:
- Mobile: Sidebar collapses to hamburger menu, full-width content
- Tablet (md:): Sidebar visible, content adjusts
- Desktop (lg:+): Full layout with fixed sidebar

---

## Component Library

### Navigation Sidebar
**Structure**: Fixed left sidebar with logo/title at top, vertical navigation list, optional footer credits
**Interactions**: Active state highlighting, smooth hover transitions
**Mobile**: Transforms to slide-out drawer with overlay

### Block Diagram Cards
**Container**: Large centered card with subtle elevation
**Diagram Area**: SVG-based interactive diagrams, minimum 600px height
**Interactivity**: 
- Hover states on diagram components reveal tooltips
- Component boxes pulse subtly on hover
- Connection lines highlight when hovering related elements
**Labels**: Small badges with JetBrains Mono font, positioned strategically

### Content Sections
**Pattern**: Title → Diagram → Explanation grid (4 columns on desktop)
**Explanation Grid Items**:
- Energy Source: Icon + heading + description
- Conversion Process: Icon + heading + description  
- Output/Utilization: Icon + heading + description
- Real-world Applications: Icon + heading + description

Each grid item uses:
- Card background with border
- Icon from Heroicons (24px) at top
- Bold label
- Paragraph text
- Padding: p-6

### Technical Specification Boxes
**Purpose**: Highlight key metrics, capacities, or specifications
**Design**: Bordered boxes with monospace numbers, labels in small caps
**Layout**: Grid of 2-4 items showing capacity, efficiency, output metrics

---

## Interactive Elements

### Diagram Components
**System Boxes**: Rounded rectangles (rx="8") with:
- Stroke-width: 2
- Dotted lines for optional/variable flows
- Solid lines for primary flows
- Arrowheads on connection paths

**Tooltips**: Appear on hover with:
- Component name
- Brief function description
- Fade-in animation (150ms)
- Positioned above/beside hovered element

**Flow Indicators**: Animated dashed lines showing energy/water/steam flow direction using CSS keyframe animations

### Buttons & Links
**Navigation Links**: 
- Clean text with icon prefix (Heroicons chevron-right, 16px)
- Hover: Slight indent with background fill
- Active: Bold text with accent left border (4px)

**Download/Export**: Minimal buttons with icons, positioned top-right of diagram cards

---

## Icons

**Library**: Heroicons (via CDN) - Outline style for navigation, Solid style for section icons

**Usage**:
- Navigation: chevron-right, home, document-text
- Energy Source: bolt, fire, water
- Conversion: cog, arrows-right-left
- Output: light-bulb, battery-charging
- Applications: building-office-2, map-pin

---

## Page Layouts

### Homepage
**Hero Section**: 
- Centered content (min-h-screen)
- Large title: "Renewable Energy Systems Portfolio"
- Subtitle: Student name and course details
- Brief introduction paragraph (max-w-2xl)
- Three prominent cards linking to activities, each with:
  - Large icon (energy-related)
  - Activity title
  - One-sentence description
  - Arrow icon indicating navigation

### Activity Pages (1, 2, 3)
**Structure**:
1. Page Header: Activity number + System name (sticky on scroll)
2. Overview Section: Brief introduction (2-3 sentences)
3. Block Diagram Section: 
   - Large centered card
   - Interactive SVG diagram
   - Legend explaining component types
4. System Explanation Section:
   - 4-column grid (responsive to 1-column mobile)
   - Each explaining: Source, Conversion, Output, Applications
5. Technical Specifications: Table or grid showing key metrics
6. References/Sources: Small footer section with research citations

**Scroll Behavior**: Smooth scrolling, subtle parallax on diagram backgrounds

---

## Animations

**Use Sparingly**:
- Page transitions: Fade-in content (300ms) on navigation
- Diagram loads: Stagger appearance of components (100ms delays)
- Flow animations: Continuous subtle movement on connection lines
- Hover states: Smooth transforms (150ms ease-in-out)

**Avoid**: Excessive scroll-triggered animations, distracting effects that compete with educational content

---

## Images

**Hero Image**: Not required for this portfolio - focus is on diagrams
**Diagram Backgrounds**: Subtle grid patterns or gradient overlays
**Component Icons**: Within diagrams, use simple geometric shapes and icons (custom SVG or Heroicons)
**No photography needed**: This is technical documentation, not marketing

---

## Accessibility

**Focus States**: Clear 2px outline on all interactive elements
**Color Independence**: Diagrams use patterns/labels, not just color
**Text Contrast**: Minimum WCAG AA compliance
**Keyboard Navigation**: Full tab-through support, escape to close modals
**Screen Readers**: Proper ARIA labels on diagram components, semantic HTML structure

---

## Special Considerations

**Print Optimization**: Diagrams should be print-friendly (high contrast, clear when grayscale)
**Academic Citation**: Include subtle footnote system for sourced information
**Export Functionality**: Optional button to download diagrams as PNG/SVG
**Progressive Enhancement**: Core content (diagrams as static images) works without JavaScript, interactivity enhances