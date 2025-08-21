# Ceylon Happy Laugh - React Website

A modern React application for Ceylon Happy Laugh hostel in Ella, Sri Lanka. Built with Vite for optimal performance and development experience.

## 🏨 About Ceylon Happy Laugh

Ceylon Happy Laugh is a charming hostel located in the picturesque hills of Ella, Sri Lanka. We offer comfortable accommodations for travelers seeking adventure and relaxation in one of Sri Lanka's most beautiful destinations.

**Location:** 4th Mile Post, Yahalawela, Passara Road, Ella, Sri Lanka  
**Contact:** +94 76 255 8683 | ceylonhappylaugh.ella@gmail.com

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Installation & Setup

1. **Navigate to the project directory**
   ```bash
   cd ceylon-happy-laugh
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - The application will automatically open at `http://localhost:3000`
   - If it doesn't open automatically, manually navigate to the URL shown in your terminal

## 📁 Project Structure

```
ceylon-happy-laugh/
├── public/                 # Static assets
│   ├── css/               # Stylesheets (Bootstrap, vendors, custom)
│   ├── js/                # JavaScript libraries (jQuery, plugins)
│   ├── img/               # Images and photos
│   ├── video/             # Video files
│   └── index.html         # Main HTML template
├── src/                   # React source code
│   ├── components/        # Reusable React components
│   │   ├── Header.jsx     # Navigation header
│   │   ├── Footer.jsx     # Site footer
│   │   ├── Preloader.jsx  # Loading animation
│   │   └── ProgressWrap.jsx # Scroll-to-top button
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Landing page
│   │   ├── About.jsx      # About us page
│   │   ├── RoomList.jsx   # All rooms listing
│   │   ├── Contacts.jsx   # Contact page
│   │   ├── DeluxeDoubleRoom.jsx
│   │   ├── DeluxeFamilyRoom.jsx
│   │   ├── DeluxeSingleRoom.jsx
│   │   ├── MixedDormitory.jsx
│   │   └── NotFound.jsx   # 404 error page
│   ├── App.jsx            # Main app component with routing
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles and imports
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🛠️ Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally

## 🎨 Features

### Modern React Architecture
- **React 18** with modern hooks and components
- **React Router** for client-side navigation
- **Vite** for fast development and building
- **Responsive Design** that works on all devices

### Preserved Original Functionality
- **All original styling** from the HTML version
- **jQuery plugins** (Owl Carousel, ScrollCue, Jarallax)
- **Animations and transitions** preserved
- **Image galleries** and interactive elements
- **Contact forms** and booking integration

### Clean URLs
- **No .html extensions** in URLs
- **SEO-friendly routing** (/, /about, /rooms, /contact)
- **Smooth client-side navigation**

## 🏠 Pages & Routes

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, about, rooms preview |
| About | `/about` | Detailed information about the hostel |
| Rooms | `/rooms` | Complete room listings and details |
| Individual Rooms | `/deluxe-double-room`, `/deluxe-family-room`, etc. | Detailed room pages |
| Contact | `/contacts` | Contact information and map |

## 🏨 Room Types

1. **Deluxe Double Room** - From LKR 12,000/night
   - Perfect for couples or two travelers
   - King-size bed or two single beds
   - Air conditioning, Smart TV, Wi-Fi

2. **Deluxe Family Room** - From LKR 15,000/night
   - Ideal for families or small groups
   - King-size bed + single bed
   - Spacious with modern amenities

3. **Deluxe Single Room** - From LKR 9,000/night
   - Perfect for solo travelers
   - Private and peaceful setting
   - All modern conveniences

4. **Mixed Dormitory** - From LKR 3,000/night
   - Budget-friendly for backpackers
   - Shared accommodation
   - Great for meeting fellow travelers

## 🔧 Development

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update navigation in `src/components/Header.jsx`

### Modifying Styles
- **External styles** are in `public/css/`
- **React-specific styles** are in `src/index.css`
- **Component styles** can be added inline or as CSS modules

### Adding Images
- Place images in `public/img/`
- Reference them as `/img/filename.jpg` in your components

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (below 768px)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Building for Production
```bash
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

### Deployment Options
- **Netlify** - Drag and drop the `dist` folder
- **Vercel** - Connect your GitHub repository
- **cPanel Hosting** - Upload `dist` folder contents to `public_html`

## 📞 Contact & Support

**Ceylon Happy Laugh Hostel**
- **Address:** 4th Mile Post, Yahalawela, Passara Road, Ella, Sri Lanka
- **Phone:** +94 76 255 8683 (24/7 Available)
- **Email:** ceylonhappylaugh.ella@gmail.com
- **Booking:** [Book on Booking.com](https://www.booking.com/hotel/lk/happy-laugh-hostel-ella12.en-gb.html)

## 🗺️ Location

Ceylon Happy Laugh is strategically located in Ella, providing easy access to:
- **Nine Arch Bridge** (Demodara)
- **Little Adam's Peak**
- **Ella Rock**
- **Ravana Falls**
- **Tea Plantations**

## 📄 License

This project is proprietary to Ceylon Happy Laugh hostel.

---

**🎯 Ready to explore the beauty of Ella? Book your stay with us today!**