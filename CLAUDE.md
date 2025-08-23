# 320 West Whitehall - Airbnb Guest Page Style Guide

## Project Overview
Static HTML page for Airbnb guests staying at a State College, PA property. The design should incorporate Penn State themes subtly and professionally while prioritizing guest information and usability.

## Color Palette

### Primary Colors (Penn State inspired)
- **Navy Blue**: #001E44 (Penn State Navy - use sparingly for headers/accents)
- **White**: #FFFFFF (Primary background)
- **Light Gray**: #F5F5F5 (Section backgrounds)

### Secondary Colors
- **Slate Gray**: #495057 (Body text)
- **Medium Gray**: #6C757D (Secondary text)
- **Accent Blue**: #0066CC (Links, buttons)
- **Success Green**: #28A745 (Availability, positive alerts)
- **Warning Orange**: #FFC107 (Important notices)

## Typography

### Font Stack
- **Headings**: 'Roboto Slab', Georgia, serif
- **Body**: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif

### Font Sizes
- **H1**: 2.5rem (40px) - Page title only
- **H2**: 2rem (32px) - Section headers
- **H3**: 1.5rem (24px) - Subsection headers
- **Body**: 1rem (16px)
- **Small text**: 0.875rem (14px)

## Layout Principles

### Structure
- **Max width**: 1200px (centered)
- **Mobile-first responsive design**
- **Grid system**: CSS Grid for main layout, Flexbox for components
- **Spacing**: 8px base unit (8, 16, 24, 32, 48px increments)

### Sections
1. **Hero/Welcome Section**
   - Subtle background with Penn State campus or State College imagery (opacity overlay)
   - Welcome message
   - Quick property highlights

2. **Essential Information Cards**
   - Check-in/Check-out
   - WiFi details
   - Emergency contacts
   - Parking information

3. **House Manual**
   - Appliance instructions
   - House rules
   - Amenities

4. **Local Recommendations**
   - Restaurants
   - Campus attractions
   - Shopping
   - Activities

5. **Transportation**
   - Campus shuttle info
   - Parking details
   - Local transportation options

## Design Elements

### Cards
- White background
- Subtle shadow: `box-shadow: 0 2px 4px rgba(0,0,0,0.1)`
- Border radius: 8px
- Padding: 24px

### Buttons
- Primary: Navy blue background, white text
- Secondary: White background, navy blue border and text
- Border radius: 4px
- Padding: 12px 24px
- Hover state: Slight opacity change (0.9)

### Icons
- Use Font Awesome or similar icon library
- Penn State paw print icon for special features (subtle)
- Functional icons for amenities and features

### Images
- High-quality photos of the property
- Local area photos (campus, downtown)
- Optimize for web (max 200KB per image)
- Lazy loading for performance

## Penn State Theming (Subtle Integration)

### Do's
- Use navy and white color scheme naturally
- Include one subtle Nittany Lion logo or paw print in footer
- Mention proximity to campus and Beaver Stadium
- Use phrases like "Welcome to Happy Valley"

### Don'ts
- Avoid overwhelming Penn State branding
- Don't use copyrighted logos without permission
- Keep it professional and welcoming to all guests
- Avoid game day specific information (dates change)

## Responsive Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## Accessibility
- WCAG 2.1 AA compliance
- Proper heading hierarchy
- Alt text for all images
- Sufficient color contrast (4.5:1 minimum)
- Keyboard navigation support
- Focus indicators

## Performance Goals
- Page load time: < 3 seconds
- Total page size: < 2MB
- Minimize HTTP requests
- Inline critical CSS
- Async load non-critical resources

## File Structure
```
/
├── index.html
├── css/
│   └── styles.css
├── images/
│   ├── property/
│   ├── local/
│   └── icons/
└── js/
    └── main.js (if needed, minimal)
```

## Content Tone
- **Friendly and welcoming**
- **Clear and concise**
- **Helpful without being overwhelming**
- **Professional but warm**

## Key Features to Include
- Emergency contact information (prominent)
- WiFi password (easy to find)
- Check-in/out procedures
- Parking instructions
- Trash/recycling schedule
- Local emergency services
- Property-specific quirks or instructions
- Weather-appropriate recommendations

## Testing Checklist
- [ ] Mobile responsiveness
- [ ] Cross-browser compatibility (Chrome, Safari, Firefox, Edge)
- [ ] Load time optimization
- [ ] Accessibility audit
- [ ] Print stylesheet for house manual
- [ ] Offline functionality (basic info cached)

---

*This style guide will ensure a professional, user-friendly guest page that subtly incorporates Penn State pride while prioritizing guest experience and information accessibility.*