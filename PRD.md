# PRODUCT REQUIREMENTS DOCUMENT (PRD)

## Project: Ahmed Nour - Premium Video Post-Production Landing Page
**Author:** AI Coding Assistant  
**Status:** Ready to Export / Production-Ready  
**Framework:** Next.js 15+ (App Router) & Tailwind CSS  
**Concept:** Apple-style Ultra-Minimal Light Theme Acquisition Funnel  

---

## 1. Executive Summary
The Ahmed Nour Video Post-Production Portfolio is a premium, high-converting lead acquisition system built specifically for brand founders, coaches, creators, and agency owners in the GCC (Riyadh, Dubai) and MENA regions. 

Moving away from generic dark-mode, neon-dominated "editor portfolios," this product is designed with **Apple-style engineering principles**—employing high-contrast light environments, generous breathing space, precise Swiss typography, a fluid layout, and scientific visual validation tools (such as an interactive retention planner and flat/graded imagery comparer) to establish high-fidelity authority.

---

## 2. Competitive Positioning & Brand Core
*   **The Problem:** Traditional video editors showcase unstructured work with no emphasis on conversion psychology, audience metrics, or business results.
*   **The Position:** Ahmed Nour is a strategic post-production partner who blends DaVinci Resolve color sciences and advanced ASMR pacing with high-retention performance math. 
*   **The Palette & Aesthetic:** Pure White (`#ffffff`), Warm Light Grey (`#f5f5f7`), Dark Charcoal Text (`#1d1d1f`), Apple Accent Blue (`#0071e3`), and soft custom ambient overlays.

---

## 3. Core Feature Specifications

### 3.1. Apple Signature Frosted Glass Navigation
*   **Functional Goal:** Persistent orientation and direct call-to-actions.
*   **Visual Spec:** `sticky top-0 bg-white/70 backdrop-blur-md` with subtle border divider `#e5e5ea`.
*   **Elements:** 
    *   Responsive monogram-style logo (`AN`).
    *   Desktop hover-enhanced navbar linkage: `Showreel`, `Before/After`, `Retention Curve`, `Featured Cases`, `Retainers`, and `FAQ`.
    *   Stateful mobile toggle rail shifting between standard inline controls and a clean full-width vertical list utilizing Framer Motion’s presence exits.

### 3.2. Cinematic Lightbox Teaser & Video Player
*   **Functional Goal:** Validate post-production speed and audio clarity within seconds of arrival.
*   **Visual Spec:** Aspect-ratio locked video container (`aspect-video`) layered with custom dynamic badges and high-contrast control strips.
*   **Experience Flow:**
    *   Teaser with premium high-resolution cover artwork.
    *   Hover-triggered overlays indicating HD encoding status.
    *   Fully integrated lightbox overlay handling playback triggers, custom playback time overlays, and strict volume management (with clear indicators prompting users to unmute for the full audio experience).

### 3.3. Interactive Split-Frame Before/After Comparer
*   **Functional Goal:** Physical validation of "Production Value Add."
*   **Visual Spec:** Responsive custom container housing overlapping raw flat LOG imagery underneath graded, caption-ready footage.
*   **Interactive Mechanics:**
    *   A continuous `ResizeObserver` monitors the wrapper, translating physical widths statefully (`containerWidth`) to prevent broken rendering offsets.
    *   Draggable handle tracking user coordinate drags horizontally from `0%` to `100%`.
    *   Synchronized badging overlays demonstrating high-stakes color correction changes dynamically relative to the handle’s positioning.

### 3.4. Interactive Retention-First Optimization Chart
*   **Functional Goal:** Position post-production as a structured metric science.
*   **Visual Spec:** SVG line diagram juxtaposing a standard creator drop-off curve against a stabilized premium retention campaign.
*   **Interactive Mechanics:**
    *   Interactive plots representing key production cycles (0s, 15s, 40s, 60s).
    *   Clicking any point centers deep explanatory cards statefully detailing specific tactics used (e.g., jump cuts, ASMR drone masterings, custom CTA prompts).
    *   Seamless visual state synchronization between diagram nodes and informational lists.

### 3.5. Segmented Portfolio & Case Studies Matrix
*   **Functional Goal:** Showcase regional GCC campaigns with proof.
*   **Visual Spec:** Multi-grid cards filtering dynamically according to content category tabs (`Reels/TikToks`, `Ads`, `Brand Films`).
*   **Detailing Specs:** 
    *   High-contrast case cards with clean visual tag listings.
    *   Bold, prominent performance growth metrics highlighting specific ROI results (e.g., `+340% View retention`, `4.8x ROAS`).
    *   Clear goals, structural challenges, and post-production methods clearly highlighted for prospective clients.

### 3.6. Step-by-Step Workflow Connected Timeline
*   **Functional Goal:** Build operational trust and set expectations.
*   **Visual Spec:** Single vertical connector line tracking step milestones with beautiful hover-sensitive icon grids.
*   **Sequence:** Discover Strategy $\rightarrow$ Dialog Structured Hooks $\rightarrow$ Camera setup directions $\rightarrow$ DaVinci Resolve post polishing $\rightarrow$ Interactive Frame review iterations.

### 3.7. Flat-Rate Retainer Packages
*   **Functional Goal:** High-friction pricing friction elimination.
*   **Visual Spec:** Three-column layout centered by a visually striking "Most Popular" highlighted growth plan.
*   **Elements:** Core single-test package, 12x short-form monthly retainer engine, and custom widescreen enterprise options.

### 3.8. Stateful Lead Intake onboarding system
*   **Functional Goal:** High-quality client qualification.
*   **Visual Spec:** Multi-row entry form utilizing stateful controls to secure applicant data (Name, corporate email, target budgets, monthly delivery goals, launch waves, and creative background briefs).
*   **Persistence Feature:** Automatic data backup utilizing `localStorage` to ensure zero information drop-off upon transient connection loss.

### 3.9. Structual Specs FAQ Accordion
*   **Functional Goal:** Overcome common onboarding doubts.
*   **Visual Spec:** Single-expandable list ensuring maximum visual cleanliness, defaulting to the first critical query opened (File sharing mechanism).

---

## 4. Technical Stack & Integrity Measures

```
                     ┌────────────────────────┐
                     │     Next.js Page       │ (globals.css Tailwind variables)
                     └───────────┬────────────┘
                                 │
         ┌───────────────────────┼───────────────────────┐
         ▼                       ▼                       ▼
 ┌──────────────┐        ┌──────────────┐        ┌──────────────┐
 │Framer Motion │        │Lucide Icons  │        │Local Storage │
 └──────────────┘        └──────────────┘        └──────────────┘
 (Micro-gestures)          (Vector assets)       (Application State)
```

1.  **Strict Lint Compliance:** React entity escapes are properly converted (`&quot;`, `&apos;`, `&amp;`) to ensure compilation runs clean of ESLint breakages.
2.  **Safe Ref Boundaries:** No React ref elements are accessed directly inside render pipelines. Element sizing is tracked recursively within safe standard client components using an active `ResizeObserver`.
3.  **Media Assets:** Modern images rely on Next.js `<Image>` containers running strict `referrerPolicy="no-referrer"` protocols to secure delivery across distributed content delivery hosts.

---

## 5. Download & Export Instructions
To download this repository as a fully functioning local project:
1. Open the **Settings Menu** in the AI Studio sidebar.
2. Click **Export** and choose **Download ZIP**.
3. Move into your local workspace, run `npm install`, and start the development environment with `npm run dev`. Your applet compiles perfectly out-of-the-box.
