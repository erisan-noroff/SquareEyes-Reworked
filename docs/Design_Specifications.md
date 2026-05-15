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
- **Error:** (define if needed for form validation)

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
- **Underline offset:** 0.25rem

### Dark Section

- **Background:** #1B1B1A
- **Text:** #FCFBF4 at 100%
- **Subtext:** #FCFBF4 at 70%

***

## Typography

### Headings

**Font:** Bebas Neue (display)

|               | Desktop                                 | Mobile                                  |
|---------------|-----------------------------------------|-----------------------------------------|
| **H1 (Hero)** | Regular (400), 72px, 2px letter-spacing | Regular (400), 48px, 2px letter-spacing |
| **H1**        | Regular (400), 56px, 2px letter-spacing | Regular (400), 40px, 2px letter-spacing |
| **H2**        | Regular (400), 40px, 2px letter-spacing | Regular (400), 32px, 2px letter-spacing |
| **H3**        | Regular (400), 28px, 2px letter-spacing | Regular (400), 24px, 2px letter-spacing |

### Navigation

**Font:** Bebas Neue (display)

|                | Desktop                                            | Mobile               |
|----------------|----------------------------------------------------|----------------------|
| **Navigation** | Semibold (600), 18px, 1.5px (8.33%) letter-spacing | Semibold (600), 16px |

### Body

**Font:** Assistant (sans-serif)

|                      | Desktop                                                      | Mobile                                                       |
|----------------------|--------------------------------------------------------------|--------------------------------------------------------------|
| **Eyebrow (Hero)**   | Semibold (600), 16px, 3px (18.75%) letter-spacing, uppercase | Semibold (600), 14px, 3px (18.75%) letter-spacing, uppercase |
| **Eyebrow**          | Semibold (600), 14px, 3px (21.43%) letter-spacing, uppercase | Semibold (600), 14px, 3px (21.43%) letter-spacing, uppercase |
| **Body**             | Regular (400), 16px                                          | Regular (400), 14px                                          |
| **Buttons**          | Semibold (600), 16px, 2px (12.5%) letter-spacing, uppercase  | Semibold (600), 14px, 2px (12.5%) letter-spacing, uppercase  |
| **Badge**            | Semibold (600), 14px                                         | Semibold (600), 14px                                         |
| **Discounted Price** | Regular (400), 16px, strikethrough, muted                    | Regular (400), 14px, strikethrough, muted                    |
| **Price**            | Semibold (600), 16px                                         | Semibold (600), 14px                                         |
| **Movie Title**      | Regular (400), 16px, uppercase                               | Regular (400), 14px, uppercase                               |
| **Form Label**       | Regular (400), 16px                                          | Regular (400), 14px                                          |

***

## Spacing (8-point scale)

**Root font size:** 16px. All spacing values should be implemented in rem in CSS.

| Scale | Value | rem     | Usage                                                                |
|-------|-------|---------|----------------------------------------------------------------------|
| 1     | 4px   | 0.25rem | Rating gap, border radius on buttons and badges                      |
| 2     | 8px   | 0.5rem  | Gap between card elements (badge→title, title→rating, rating→button) |
| 3     | 16px  | 1rem    | Card internal padding, gap between input, subscribe button and label |
| 4     | 24px  | 1.5rem  | Gap between cards                                                    |
| 5     | 32px  | 2rem    | Newsletter gap between text and form, mobile section padding         |
| 6     | 48px  | 3rem    | Section padding top and bottom                                       |
| 7     | 64px  | 4rem    | Hero padding, page horizontal margins                                |

***

## Component Specifications

### Movie Card

- **Width:** 17.625rem
- **Height:** 36.5rem
- **Image:** 15.625rem × 22.875rem
- **Internal padding:** 1rem all sides
- **Border:** #1B1B1A at 15% opacity, 1px
- **Border radius:** 0.25rem

### Buttons

- **Height:** 3rem
- **Padding:** 1rem horizontal
- **Border radius:** 0.25rem

### Input Fields

- **Height:** 3rem
- **Padding:** 1rem horizontal
- **Border:** #1B1B1A at 15% opacity, 1px
- **Border radius:** 0.25rem
- **Background:** #FCFBF4

### Hero

- **Height:** 34.375rem–37.5rem desktop, 18.75rem–21.875rem mobile
- **Gradient:** linear-gradient(to right, rgba(0,0,0,0.6), transparent)
- **Content max-width:** 31.25rem

### Promo Banner

- **Size:** 75rem × 21.875rem
- **Split:** 50/50 (37.5rem text panel, 37.5rem image panel)
- **Internal padding:** 3rem all sides
- **Gap between elements:** 2rem

### Newsletter

- **Background:** #1B1B1A
- **Gap between text and form:** 2rem
- **Input width:** 15.625rem
- **Input height:** 3rem