# Square Eyes

All developers must adhere to these design specifications when implementing the website. The design specifications are
made by the UX/UI team and approved by the Product Owner. This document outlines the visual design system including
typography, colour palette, spacing, and component specifications for the Square Eyes website.

***

## Colour Palette

### Brand

- **Primary:** #FF9900
- **Usage:** Buttons, links, hover states, active nav, ratings, badges

### Text

#### Primary

- **Colour:** #1B1B1A
- **Usage:** Headings, titles, prices, body text

#### Muted

- **Colour:** #1B1B1A at 70% opacity
- **Usage:** Subtext, descriptions, placeholders, original sale price

### Background

- **Page:** #FCFBF4
- **Usage:** Page background, card backgrounds

### Borders

- **Colour:** #1B1B1A at 15% opacity
- **Usage:** Card borders, input borders

### States

- **Success:** #31D962
- **Usage:** "Added to Cart" button state
- **Error:** #DC2626

### Buttons

#### Primary

- **Default:** #FF9900, Text: #1B1B1A
- **Hover:** Transparent, Border: #FF9900, Text: #FF9900

#### Cart

- **Default:** #FF9900, Text: #1B1B1A
- **Added:** #31D962, Text: #1B1B1A

### Navigation

- **Default:** #1B1B1A
- **Active:** #1B1B1A with 2px orange (#FF9900) underline, 4px below text

### Links

- **Colour:** #1B1B1A
- **Text decoration:** Underline, #FF9900

### Dark Section

- **Background:** #1B1B1A
- **Text:** #FCFBF4 at 100%
- **Subtext:** #FCFBF4 at 70%

## Input

- **Background:** #FFFFFF
- **Border:** #1B1B1A 1px
- **Border radius:** 0.25rem

***

## Typography

### Headings

**Font:** Bebas Neue (display)

|               | Desktop                                                   | Mobile                                                   |
|---------------|-----------------------------------------------------------|----------------------------------------------------------|
| **H1 (Hero)** | Regular (400), 72px (4.5rem), 2px (2.78%) letter-spacing  | Regular (400), 48px (3rem), 2px (4.17%) letter-spacing   |
| **H1**        | Regular (400), 56px (3.5rem), 2px (3.57%) letter-spacing  | Regular (400), 40px (2.5rem), 2px (5%) letter-spacing    |
| **H2**        | Regular (400), 40px (2.5rem), 2px (5%) letter-spacing     | Regular (400), 32px (2rem), 2px (6.25%) letter-spacing   |
| **H3**        | Regular (400), 28px (1.75rem), 2px (7.14%) letter-spacing | Regular (400), 24px (1.5rem), 2px (8.33%) letter-spacing |

### Navigation

**Font:** Bebas Neue (display)

|                | Desktop                                                       | Mobile                                                     |
|----------------|---------------------------------------------------------------|------------------------------------------------------------|
| **Navigation** | Semibold (600), 18px (1.125rem), 1.5px (8.33%) letter-spacing | Semibold (600), 16px (1rem), 1.5px (9.375%) letter-spacing |

### Body

**Font:** Assistant (sans-serif)

|                      | Desktop                                                                 | Mobile                                                                  |
|----------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|
| **Eyebrow (Hero)**   | Semibold (600), 16px (1rem), 3px (18.75%) letter-spacing, uppercase     | Semibold (600), 14px (0.875rem), 3px (21.43%) letter-spacing, uppercase |
| **Eyebrow**          | Semibold (600), 14px (0.875rem), 3px (21.43%) letter-spacing, uppercase | Semibold (600), 14px (0.875rem), 3px (21.43%) letter-spacing, uppercase |
| **Body**             | Regular (400), 16px (1rem)                                              | Regular (400), 14px (0.875rem)                                          |
| **Buttons**          | Semibold (600), 16px (1rem), 2px (12.5%) letter-spacing, uppercase      | Semibold (600), 14px (0.875rem), 2px (14.29%) letter-spacing, uppercase |
| **Badge**            | Semibold (600), 14px (0.875rem)                                         | Semibold (600), 14px (0.875rem)                                         |
| **Discounted Price** | Regular (400), 16px (1rem), strikethrough, muted                        | Regular (400), 14px (0.875rem), strikethrough, muted                    |
| **Price**            | Semibold (600), 16px (1rem)                                             | Semibold (600), 14px (0.875rem)                                         |
| **Movie Title**      | Regular (400), 16px, uppercase                                          | Regular (400), 14px (0.875rem), uppercase                               |
| **Form Label**       | Regular (400), 16px (1rem)                                              | Regular (400), 14px (0.875rem)                                          |
| **Link**             | Semibold (600), 16px (1rem)                                             | Semibold (600)w, 14px (0.875rem)                                        |

***

## Spacing (8-point scale)

**Root font size:** 16px. All spacing values should be implemented in rem in CSS.

| Scale | Value | rem     | Usage                                                                                                  |
|-------|-------|---------|--------------------------------------------------------------------------------------------------------|
| 1     | 4px   | 0.25rem | Rating gap, border radius on buttons and badges                                                        |
| 2     | 8px   | 0.5rem  | Gap between card elements (badge→title, title→rating, rating→button)                                   |
| 3     | 16px  | 1rem    | Card internal padding, gap between input, label, form errors and subscribe button                      |
| 4     | 24px  | 1.5rem  | Gap between cards                                                                                      |
| 5     | 32px  | 2rem    | Newsletter gap between text and form, gap between content blocks on text pages, mobile section padding |
| 6     | 48px  | 3rem    | Section padding top and bottom                                                                         |
| 7     | 64px  | 4rem    | Hero padding, page horizontal margins                                                                  |

***

## Component Specifications

### Figma

https://www.figma.com/design/PV8lhOge1aNHaK2OvS2iCh/Square-Eyes--Reworked-?node-id=0-1&t=m6tsUnvaYSciJcHd-1