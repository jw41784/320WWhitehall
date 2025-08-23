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

## Implementation Details & Updates

### Project Deployment
- **GitHub Repository**: https://github.com/jw41784/320WWhitehall
- **Live Site**: https://jw41784.github.io/320WWhitehall/
- **Access Method**: QR code for mobile guests

### Key Property Information
- **Hosts**: Kristen & Jason (Penn State grads)
- **WiFi**: Network: SweetSuite / Password: whitehall
- **Parking**: Free in driveway, orange cones mark parking area
- **Door Code**: Available in Airbnb app
- **Emergency**: First aid kit in bathroom closet, fire extinguisher under kitchen sink
- **No washer/dryer in unit** - nearest laundromats provided

### Content Sections Implemented

#### 1. Quick Info Section
- WiFi credentials (reversed colors - labels highlighted)
- Check-in/out times with door code reference to app
- Free parking with orange cone markers
- Emergency contacts via Airbnb app
- Fire safety equipment locations

#### 2. Household Essentials Section (New)
- **Trash & Recycling**: Wednesday pickup, cans by driveway, out Tuesday night
- **Laundry**: Links to Wash & Dri and Westside Laundry
- **Bus Stop**: Less than 5 min walk via Oakhurst Lane through Hearthside parking lot

#### 3. Local Guide Section
- **Groceries**: Weis (closest on Westerly Pkwy), Wegmans, Trader Joe's, Giant - all with map links
- **Coffee**: Elixr, Café Lemont, Rothrock - all with working Google Maps links
- **Quick Eats**: Cozy Thai, Tasty K (Korean fried chicken), Little Szechuan (hot pot recommended)
- **Breweries**: Voodoo (Lemont, creekside), Axemann (Bellefonte), Otto's

#### 4. Food & Drink Section (Detailed)
- **Breakfast**: The Waffle Shop (busy but line moves fast), The Naked Egg Cafe (Pine Grove Mills)
- **Restaurants**: Full listings with specialties
- **Breweries**: Antifragile (downtown with Uncle John's Jawns), corrected locations for Voodoo and Happy Valley Brewing

#### 5. Activities Section
- Hiking trails with accurate Google Maps links
- Attractions and family activities
- Longer stay essentials (removed duplicate laundromat info)

#### 6. Game Day Section
- Penn State football information
- **Sports bars added**: Champs Downtown, Bill Pickle's Tap Room, Primanti Bros with addresses

### Technical Improvements

#### Link Updates
- **All goo.gl links replaced** with working Google Maps search URLs (45+ links fixed)
- Format: `https://www.google.com/maps/search/[Business+Name+Location]`
- Fixed broken external links issue caused by discontinued goo.gl service

#### Navigation
- Smooth scrolling navigation with fallback for older browsers
- Mobile hamburger menu
- Sticky header for easy navigation
- Removed house manual section per request

#### Favicon
- Simple paw print emoji (🐾) in SVG format
- White background for visibility
- Multiple favicon link formats for browser compatibility

#### Mobile Optimizations
- Responsive card layouts
- Touch-friendly link targets
- Collapsible sections for reduced scrolling
- Service worker for basic offline capability

### Content Corrections Made
- Voodoo Brewing: Corrected location to Lemont with creekside seating
- Tasty K: Clarified as Korean fried chicken specialist
- Little Szechuan: Changed recommendation to hot pot
- Happy Valley Brewing: Removed incorrect outdoor seating reference
- Hero text: Changed to navy blue for better readability

### JavaScript Features
- Mobile navigation toggle
- Smooth scroll to sections
- Collapsible content sections
- Service worker registration for offline caching
- Browser compatibility fallbacks

### Performance & Accessibility
- All CSS inlined for fast loading
- Minimal JavaScript
- WCAG compliant color contrast
- Semantic HTML structure
- Print-friendly styles included

---

*Updated implementation reflects all host-specific requirements and corrections made during development.*