# 320 West Whitehall - Guest Guide

A modern, accessible guest information page for an Airbnb property in State College, PA. Designed to provide guests with essential information and local recommendations in an easy-to-navigate format.

**Live Site:** [https://jw41784.github.io/320WWhitehall/](https://jw41784.github.io/320WWhitehall/)

## 🏡 Overview

This single-page web application serves as a comprehensive guide for Airbnb guests staying at 320 West Whitehall in State College, Pennsylvania. The page features:

- Essential check-in/check-out information
- WiFi credentials and parking details
- Local restaurant and brewery recommendations
- Hiking trails and attractions in the State College area
- Penn State game day information
- Recommended itineraries for various stay lengths

## ✨ Features

### User Experience
- **Mobile-First Design**: Fully responsive layout optimized for phones, tablets, and desktops
- **Collapsible Sections**: Organized content that expands on-demand to reduce scrolling
- **Smooth Navigation**: Sticky header with quick-jump links to major sections
- **Offline Capability**: Service worker enables basic offline functionality after first visit
- **QR Code Ready**: Designed for easy access via QR code for mobile guests

### Accessibility (WCAG 2.1 AA Compliant)
- **Keyboard Navigation**: Full keyboard support with visible focus indicators
- **Screen Reader Optimized**: Proper ARIA labels and semantic HTML structure
- **Skip-to-Content Link**: Quick navigation for keyboard and screen reader users
- **High Contrast**: Navy and white color scheme with 4.5:1+ contrast ratios
- **Descriptive Links**: All links have clear, contextual labels

### Performance
- **Fast Loading**: ~28KB HTML, optimized for quick loading on mobile networks
- **Cacheable Resources**: Separate CSS and JavaScript files for efficient caching
- **Service Worker**: Progressive Web App features with offline support
- **Minimal Dependencies**: No external frameworks or libraries

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern CSS with CSS Grid and Flexbox
- **Vanilla JavaScript**: No frameworks - lightweight and fast
- **Service Worker**: Offline capability and caching
- **GitHub Pages**: Free, reliable hosting

## 📁 Project Structure

```
320WWhitehall/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All CSS styles
├── js/
│   └── main.js             # JavaScript functionality
├── sw.js                   # Service Worker for offline support
├── favicon.svg             # Paw print favicon
├── CLAUDE.md               # Design system and style guide
└── README.md               # This file
```

## 🎨 Design System

The project follows a Penn State-inspired color palette:

- **Navy Blue** (`#001E44`): Primary brand color, headers, accents
- **White** (`#FFFFFF`): Primary background
- **Light Gray** (`#F5F5F5`): Section backgrounds
- **Accent Blue** (`#0066CC`): Links and interactive elements
- **Warning Orange** (`#FFC107`): Important alerts

Typography:
- **Headings**: System fonts (Segoe UI, San Francisco, etc.)
- **Body**: Sans-serif system font stack for optimal performance

## 🚀 Local Development

### Prerequisites
- A modern web browser
- A local web server (optional, but recommended for testing Service Worker)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/jw41784/320WWhitehall.git
   cd 320WWhitehall
   ```

2. **Run a local server**

   Using Python 3:
   ```bash
   python -m http.server 8000
   ```

   Using Node.js (with `npx`):
   ```bash
   npx serve
   ```

   Using PHP:
   ```bash
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### Testing

- **Desktop Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Devices**: Test responsive design on various screen sizes
- **Accessibility**: Test with screen readers (VoiceOver, NVDA) and keyboard navigation
- **Offline Mode**: Load page, then disconnect network to test Service Worker

## 📦 Deployment

This site is deployed on **GitHub Pages** and automatically updates when changes are pushed to the `main` branch.

### Manual Deployment

1. Commit changes to the repository
2. Push to GitHub
3. GitHub Pages automatically deploys from the `main` branch
4. Changes are live within 1-2 minutes

### Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Enable HTTPS in repository settings

## 🔧 Customization

### Updating Content

- **WiFi/Door Code**: Edit the "Essential Information" section in `index.html`
- **Restaurants/Attractions**: Modify collapsible sections in the Food & Drink and Activities areas
- **Styling**: Update `css/styles.css` to change colors, fonts, or layout
- **Functionality**: Modify `js/main.js` for interactive features

### Adding New Sections

1. Add new HTML section in `index.html`
2. Add navigation link in the header
3. Add corresponding styles in `css/styles.css`
4. Update Service Worker cache version in `sw.js`

## 📊 Accessibility Features

- ✅ WCAG 2.1 AA Compliance
- ✅ Keyboard navigation with visible focus indicators
- ✅ ARIA labels for interactive elements
- ✅ Skip-to-content link for screen readers
- ✅ Semantic HTML structure
- ✅ Sufficient color contrast (minimum 4.5:1)
- ✅ Responsive text sizing
- ✅ Alt text ready for images (if added)

## 🌟 Key Sections

1. **Quick Info**: WiFi, check-in/out, parking, emergency contacts
2. **Household Essentials**: Trash pickup, laundry, bus stop information
3. **Local Guide**: Groceries, coffee shops, quick eats, breweries
4. **Food & Drink**: Comprehensive restaurant and bar listings with Google Maps links
5. **Activities**: Hiking trails, attractions, family-friendly activities
6. **Game Day**: Penn State football information and sports bar recommendations
7. **Itineraries**: Suggested plans for weekend, extended, and long-term stays

## 📱 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ iOS Safari 14+
- ✅ Chrome for Android

## 🤝 Contributing

While this is a personal project for a specific property, contributions for bug fixes or accessibility improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available for personal and educational use. All local business information is publicly available.

## 👥 Authors

**Kristen & Jason** - Penn State Alumni, Airbnb Hosts

- GitHub: [@jw41784](https://github.com/jw41784)
- Property: [320 West Whitehall](https://jw41784.github.io/320WWhitehall/)

## 🙏 Acknowledgments

- Penn State community for local recommendations
- State College area businesses featured on the site
- Airbnb platform for hosting capabilities
- Open source community for web development best practices

## 📞 Support

For guest-related questions, please contact via the Airbnb app.

For technical issues with the website, please [open an issue](https://github.com/jw41784/320WWhitehall/issues).

---

**We Are... Penn State! 🐾**

*Last Updated: November 2025*
