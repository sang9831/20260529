---
name: Vibrant Inter
colors:
  surface: "#f5f6ff"
  surface-dim: "#c2d4ff"
  surface-bright: "#f5f6ff"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#edf0ff"
  surface-container: "#e0e8ff"
  surface-container-high: "#d7e2ff"
  surface-container-highest: "#cfddff"
  on-surface: "#002d64"
  on-surface-variant: "#275aa9"
  inverse-surface: "#000d27"
  inverse-on-surface: "#709cf0"
  outline: "#4776c6"
  outline-variant: "#82adff"
  surface-tint: "#356173"
  primary: "#356173"
  on-primary: "#e4f5ff"
  primary-container: "#b9e6fb"
  on-primary-container: "#285567"
  inverse-primary: "#b9e6fb"
  secondary: "#46624e"
  on-secondary: "#dbfbe1"
  secondary-container: "#cbead1"
  on-secondary-container: "#3c5845"
  tertiary: "#515694"
  on-tertiary: "#f3f1ff"
  tertiary-container: "#b4b9fe"
  on-tertiary-container: "#2f3570"
  error: "#b31b25"
  on-error: "#ffefee"
  error-container: "#fb5151"
  on-error-container: "#570008"
  primary-fixed: "#b9e6fb"
  primary-fixed-dim: "#acd8ed"
  on-primary-fixed: "#114353"
  on-primary-fixed-variant: "#335f71"
  secondary-fixed: "#cbead1"
  secondary-fixed-dim: "#bddcc3"
  on-secondary-fixed: "#2a4533"
  on-secondary-fixed-variant: "#46624e"
  tertiary-fixed: "#b4b9fe"
  tertiary-fixed-dim: "#a6abef"
  on-tertiary-fixed: "#191e5a"
  on-tertiary-fixed-variant: "#383e7a"
  primary-dim: "#285566"
  secondary-dim: "#3a5643"
  tertiary-dim: "#454a87"
  error-dim: "#9f0519"
  background: "#f5f6ff"
  on-background: "#002d64"
  surface-variant: "#cfddff"
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: "700"
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: "600"
    lineHeight: 32px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "500"
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin: 24px
---

# Design System: Vibrant Inter

## Brand & Style

The brand identity has shifted from a professional, earth-toned "Fidelity" aesthetic to a "Vibrant," modern, and tech-forward personality. It evokes a sense of clarity, freshness, and energy. The style leans into Modern Minimalism with a hint of Glassmorphism, prioritizing high-legibility typography and a bright, airy interface. It is designed to feel approachable yet cutting-edge.

## Colors

The palette is defined by cool, energetic tones, moving away from the previous warm oranges and browns.

- **Primary:** #BBE8FD (Sky Blue) - Used for primary actions and brand presence.
- **Secondary:** #D9F9DF (Mint Green) - Used for accents, success states, and secondary callouts.
- **Tertiary:** #B5BAFF (Lavender) - Used for supplemental visual interest and category distinction.
- **Neutral:** #2C5EAD (Deep Blue-Gray) - Used for typography, borders, and structural anchors.

The color mode is set to **Light**, focusing on high-key surfaces and vibrant accents.

## Typography

The system now utilizes **Inter** across all typography roles, replacing Public Sans to achieve a more modern, technical aesthetic.

- **Headlines:** Set in Inter with bold weights and tighter letter spacing for a contemporary look.
- **Body:** Set in Inter for maximum legibility and a clean feel.
- **Labels:** Set in Inter medium for functional UI elements.

## Layout & Spacing

The system utilizes a base-8 spacing rhythm.

- **Grid:** 12-column fluid grid for desktop; 4-column for mobile.
- **Gutter:** 16px (md).
- **Margins:** 24px (lg) on desktop, 16px on mobile.

## Elevation & Depth

Depth is conveyed through tonal layering and soft, diffused shadows. We use a combination of:

- **Tonal Layers:** Using the vibrant palette at different opacities.
- **Low-contrast Outlines:** Utilizing the Neutral #2C5EAD at low opacity for component definition.
- **Glassmorphism:** Subtle background blurs on overlays to maintain the vibrant color feel.

## Shapes

The design features a **Rounded** shape language (roundedness: 2).

- **Standard (Base):** 0.5rem (8px) for buttons and inputs.
- **Large (lg):** 1rem (16px) for cards and containers.
- **Extra Large (xl):** 1.5rem (24px) for prominent sections.

## Components

- **Buttons:** 8px rounded corners. Primary buttons utilize the #BBE8FD fill.
- **Cards:** 16px corner radius with soft neutral outlines instead of heavy shadows.
- **Inputs:** 8px rounded corners with Inter-based labels and high-contrast neutral text.
- **Chips:** Pill-shaped (fully rounded) using secondary or tertiary colors for categorization.
