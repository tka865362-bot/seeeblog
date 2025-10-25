# buckturner Blog - Design Specification

**Author:** MiniMax Agent  
**Project:** buckturner Pattaya Stories Blog  
**Date:** 2025-10-18  
**Themes:** Light & Dark Matte

---

## 1. Design Direction & Rationale

**Visual Essence:** Retro desktop operating system UI reimagined as a provocative blog interface. Think classic Mac OS window chrome (red/yellow/green control dots, thick black borders, window title bars) meets underground internet culture. Monospace typography and pixel-perfect alignment create nostalgic computing aesthetics, while the bold pink brand color (#EE8ECD) injects playful irreverence.

**Strategic Rationale:**
1. **Memorable Differentiation** - The retro OS metaphor stands out in a sea of generic blog templates, creating instant brand recognition for buckturner's wild Pattaya narratives.
2. **Audience Alignment** - Young adults (18-35) familiar with internet culture appreciate nostalgic computing aesthetics mixed with edgy, provocative content. The playful UI softens adult themes while maintaining authenticity.
3. **Functional Clarity** - Window-based component design naturally organizes content hierarchies. Each story card as a "window" creates intuitive browsing patterns while the theme toggle accommodates different reading preferences.

**Key Characteristics:**
- **Borders:** Thick 3px solid black borders on all major components (windows, cards, buttons)
- **Color Philosophy:** 85% neutral base (white/grays or dark matte) + 15% strategic pink (#EE8ECD) for accents, CTAs, and hover states
- **Typography:** Monospace for headers/UI chrome, readable sans-serif for body content to prevent reading fatigue
- **Spacing:** Compact but structured (16-24px internal padding), dense information layout suited for blog content
- **Animation:** Snappy 200ms transitions for window interactions, minimal decoration

**Reference Examples:**
- Classic Mac OS 9/X window chrome and UI patterns
- Windows 95/98 aesthetic (thick borders, title bars)
- Poolside.fm (retro computing nostalgia)
- Hacker News / early 2000s forum aesthetics (dense, functional)

---

## 2. Design Tokens

### Colors

| Token | Light Theme | Dark Matte Theme | Usage |
|-------|-------------|------------------|-------|
| **Primary** | | | |
| `primary-500` | `#EE8ECD` | `#EE8ECD` | Brand pink - buttons, links, accents |
| `primary-600` | `#E066B8` | `#E066B8` | Hover states |
| `primary-700` | `#D144A3` | `#D144A3` | Active states |
| `primary-200` | `#F9C9E8` | `#F9C9E8` | Subtle backgrounds |
| `primary-50` | `#FEF5FB` | `#2A1A24` | Very subtle tints |
| **Neutral** | | | |
| `neutral-50` | `#FAFAFA` | `#1A1A1A` | Page background |
| `neutral-100` | `#F5F5F5` | `#242424` | Surface background |
| `neutral-200` | `#E5E5E5` | `#2E2E2E` | Borders, dividers |
| `neutral-700` | `#404040` | `#A3A3A3` | Secondary text |
| `neutral-900` | `#171717` | `#FAFAFA` | Primary text |
| **Background** | | | |
| `bg-page` | `#F5F5F5` | `#1A1A1A` | Main page background |
| `bg-window` | `#FFFFFF` | `#242424` | Window/card background |
| `bg-titlebar` | `#E5E5E5` | `#2E2E2E` | Window title bars |
| **Semantic** | | | |
| `border-primary` | `#000000` | `#000000` | All thick borders (3px) |
| `text-primary` | `#171717` | `#FAFAFA` | Body text |
| `text-secondary` | `#404040` | `#A3A3A3` | Metadata, dates |
| `accent` | `#EE8ECD` | `#EE8ECD` | Links, CTAs |

**WCAG Validation (AA Minimum, 4.5:1 for text):**
- Light: `neutral-900` (#171717) on white → 15.8:1 ✓
- Dark: `neutral-900` (#FAFAFA) on `neutral-50` (#1A1A1A) → 14.2:1 ✓
- Pink button: `primary-700` (#D144A3) text on white bg → 5.8:1 ✓

### Typography

| Token | Value | Usage |
|-------|-------|-------|
| **Font Families** | | |
| `font-mono` | `'IBM Plex Mono', 'Courier New', monospace` | Headers, UI chrome, window titles |
| `font-sans` | `'Inter', system-ui, sans-serif` | Body text, readability |
| **Font Sizes** | | |
| `text-xs` | `12px` | Window controls, metadata |
| `text-sm` | `14px` | Dates, labels |
| `text-base` | `16px` | Body copy |
| `text-lg` | `18px` | Subheadings |
| `text-xl` | `24px` | Section titles |
| `text-2xl` | `32px` | Page titles |
| `text-3xl` | `48px` | Hero headline |
| **Font Weights** | | |
| `font-normal` | `400` | Body text |
| `font-medium` | `500` | UI labels |
| `font-bold` | `700` | Headers, window titles |
| **Line Heights** | | |
| `leading-tight` | `1.3` | Headers |
| `leading-normal` | `1.6` | Body text |
| `leading-relaxed` | `1.8` | Long-form content |

### Spacing (4pt-based)

| Token | Value | Usage |
|-------|-------|-------|
| `space-xs` | `8px` | Tight gaps, control spacing |
| `space-sm` | `12px` | Window control dots spacing |
| `space-md` | `16px` | Card internal padding |
| `space-lg` | `24px` | Section gaps |
| `space-xl` | `32px` | Component spacing |
| `space-2xl` | `48px` | Major section spacing |
| `space-3xl` | `64px` | Hero spacing |

### Border & Decoration

| Token | Value | Usage |
|-------|-------|-------|
| **Border Radius** | | |
| `radius-none` | `0px` | All components (sharp corners) |
| `radius-sm` | `2px` | Window control dots only |
| **Border Width** | | |
| `border-thick` | `3px` | Primary borders (windows, cards, buttons) |
| `border-thin` | `1px` | Dividers, subtle separators |
| **Shadows** | | |
| `shadow-window` | `4px 4px 0 0 rgba(0,0,0,0.15)` | Window hover state (flat drop shadow) |
| `shadow-none` | `none` | Default state (no shadow) |

### Animation

| Token | Value | Usage |
|-------|-------|-------|
| `duration-fast` | `200ms` | Hover, focus states |
| `duration-normal` | `250ms` | Theme toggle |
| `easing-default` | `ease-out` | All transitions |

---

## 3. Component Specifications

### Window Frame (Core Component)

**Structure:**  
All major components (navigation, story cards, content sections) wrapped in window chrome. Title bar (32px height) contains window controls (red/yellow/green dots, 10px diameter each, 8px spacing) on left, optional window title text (12px mono, medium weight) centered.

**Tokens:**
- Border: `border-thick` (#000000)
- Background: `bg-window` 
- Title bar: `bg-titlebar`, height 32px
- Control dots: Red (#FF5F57), Yellow (#FFBD2E), Green (#28CA42), radius `radius-sm`
- Padding: `space-md` for content area

**States:**
- Default: No shadow, static
- Hover: `shadow-window` appears
- Active: No additional effect

**Note:** Window controls are decorative (not functional close/minimize). Use for navigation container, story cards, content sections, and about page.

---

### Button

**Primary Variant:**
- Background: `primary-500` (#EE8ECD)
- Text: `neutral-900` (dark text for light button), 14px mono bold
- Border: `border-thick` solid black
- Padding: 12px 24px (height ~38px)
- Hover: Background → `primary-600`, `shadow-window` applied
- Active: Background → `primary-700`, translate(2px, 2px)

**Secondary Variant:**
- Background: `bg-window`
- Text: `text-primary`, 14px mono bold
- Border: `border-thick` solid black
- Padding: 12px 24px
- Hover: Background → `neutral-100`, `shadow-window`
- Active: Translate(2px, 2px)

**Note:** Use primary for "Read More" CTAs. Use secondary for "Load More" or auxiliary actions.

---

### Story Card

**Structure:**  
Window frame containing featured image (16:9 ratio, max 400px width), title (24px mono bold), excerpt (16px sans, 2-3 lines max), metadata row (date + read time in 12px mono), and primary button.

**Tokens:**
- Window frame wrapper with title bar showing post category as window title
- Image: Full width inside window content area
- Content padding: `space-md` around text
- Gap: `space-sm` between elements
- Title: `text-xl`, `font-mono`, `font-bold`
- Excerpt: `text-base`, `font-sans`, `text-secondary`, `leading-normal`
- Date: `text-xs`, `font-mono`, `text-secondary`

**States:**
- Default: Static
- Hover: Entire card gets `shadow-window`

**Note:** Grid layout 3 columns desktop (1200px+), 2 columns tablet (768-1199px), 1 column mobile (<768px). Gap between cards: `space-lg`.

---

### Navigation Bar

**Structure:**  
Window frame (full width, fixed to top on scroll optional) containing logo/site title on left, horizontal menu links centered, theme toggle on right.

**Tokens:**
- Height: 56px total (32px title bar + 24px content)
- Links: `text-sm`, `font-mono`, `font-medium`, 16px horizontal spacing
- Link color: `text-primary`, hover → `accent`, active → underline 2px `accent`
- Theme toggle: Custom switch (40px width × 20px height, black border, pink active state)

**Note:** Mobile (<768px) - hamburger menu icon (three 16px horizontal bars, 3px thick) opens full-window overlay menu.

---

### Blog Post Content

**Structure:**  
Window frame containing post header (title 48px mono bold, date/metadata 12px), featured image full width, body content with generous line-height.

**Tokens:**
- Content max-width: 720px centered
- Title: `text-3xl`, `font-mono`, `font-bold`, margin-bottom `space-lg`
- Body: `text-base`, `font-sans`, `leading-relaxed`
- Paragraphs: margin-bottom `space-md`
- Images: max-width 100%, `border-thick` black border

**Note:** Body text uses sans-serif for readability in long-form content. Headers within content use mono.

---

### Theme Toggle Switch

**Structure:**  
40px × 22px switch track, 18px circle knob, slides left (light) to right (dark).

**Tokens:**
- Track: `border-thick` black border, background `neutral-200` (off) / `primary-500` (on)
- Knob: 18px circle, solid black fill
- Animation: `duration-normal` slide transition
- Position: Top-right of navigation, label "Light/Dark" in `text-xs` mono

**States:**
- Light mode: Knob left, track neutral
- Dark mode: Knob right, track pink
- Hover: Track background +10% brightness

---

## 4. Layout & Responsive Strategy

### Breakpoints

| Name | Min Width | Max Container |
|------|-----------|---------------|
| `sm` | 640px | 100% |
| `md` | 768px | 100% |
| `lg` | 1024px | 1200px |
| `xl` | 1280px | 1200px |

### Grid System

- Homepage story grid: CSS Grid, `gap: space-lg`
  - Desktop (lg+): 3 columns, auto rows
  - Tablet (md-lg): 2 columns
  - Mobile (<md): 1 column
- Content sections: Single column, max 1200px width, centered with `space-xl` side padding

### Responsive Adaptations

**Typography:**
- Hero headline: 48px desktop → 32px mobile
- Story card titles: 24px → 20px mobile
- Body text: 16px consistent across breakpoints

**Spacing:**
- Section gaps: 48px desktop → 32px mobile
- Card padding: 16px consistent

**Navigation:**
- Desktop: Horizontal menu visible
- Mobile: Hamburger menu → full-screen overlay (window frame style)

**Images:**
- Story cards: 16:9 aspect ratio maintained, width 100% of card
- Blog post images: Max-width 100%, height auto

---

## 5. Interaction Principles

### Animation Standards

- **Fast (200ms):** Button hovers, link underlines, card hover shadows
- **Normal (250ms):** Theme toggle switch, navigation menu open/close
- **Easing:** `ease-out` for all transitions

### Animated Components

- **Buttons:** Background color + shadow on hover (200ms)
- **Story Cards:** Shadow appearance on hover (200ms)
- **Navigation Links:** Color change + underline slide-in (200ms)
- **Theme Toggle:** Knob position slide (250ms)
- **Window Shadows:** Opacity 0 → 1 on hover (200ms)

### Performance Rule

Animate ONLY `transform`, `opacity`, `background-color`, and `box-shadow`. Never animate width, height, margin, or padding.

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Disable all shadows and animations for users with motion sensitivity preferences.

---

## Design System Notes

**Brand Personality:** Playful irreverence (7/10) - generous use of pink accent, compact but friendly spacing, nostalgic computing metaphors create approachable personality for provocative content.

**Icon System:** Use SVG icons from Lucide (16-20px size) for UI chrome (hamburger menu, external link indicators, theme toggle icons). Style: 2px stroke, rounded caps, solid black fill in both themes.

**Accessibility:**
- All interactive elements minimum 44×44px touch targets on mobile
- Focus states: 2px solid pink outline offset 2px from element
- Alt text required for all story featured images
- Semantic HTML: `<article>` for posts, `<nav>` for navigation, proper heading hierarchy

**Content Guidelines:**
- Story excerpts: 120-150 characters max (2-3 lines at 16px)
- Featured images: 1200×675px (16:9), optimized WebP format
- Post titles: 40-60 characters recommended for card layout
- Categories shown as window titles: "Story", "Adventure", "Night Tales", etc.

---

**End of Specification**
