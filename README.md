# Ceylon Happy Laugh - React + Vite Website

A modern React application for Ceylon Happy Laugh hostel in Ella, Sri Lanka. Built with Vite for optimal performance and development experience.

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone or download the project**
   ```bash
   # If using Git
   git clone <repository-url>
   cd ceylon-happy-laugh
   
   # Or extract the downloaded ZIP file and navigate to the folder
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
   - The application will automatically open at `http://localhost:5173`
   - If it doesn't open automatically, manually navigate to the URL shown in your terminal

## 📁 Project Structure

```
ceylon-happy-laugh/
├── public/                 # Static assets (images, videos, CSS, JS)
│   ├── css/               # Stylesheets
│   ├── js/                # JavaScript libraries
│   ├── img/               # Images
│   ├── video/             # Video files
│   └── index.html         # Main HTML template
├── src/                   # React source code
│   ├── components/        # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Preloader.jsx
│   │   └── ProgressWrap.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── RoomList.jsx
│   │   ├── Contacts.jsx
│   │   ├── DeluxeDoubleRoom.jsx
│   │   ├── DeluxeFamilyRoom.jsx
│   │   ├── DeluxeSingleRoom.jsx
│   │   ├── MixedDormitory.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🛠️ Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally

## 🎨 Features

### Clean URLs
- No `.html` extensions in URLs
- SEO-friendly routing
- Smooth client-side navigation

### Modern Architecture
- React components for better maintainability
- Vite for fast development and building
- Preserved all original styling and functionality

### Preserved Functionality
- All animations (ScrollCue, Jarallax parallax)
- Carousel functionality (Owl Carousel)
- Interactive elements and jQuery plugins
- Video autoplay on scroll
- Mobile-responsive design

## 🔧 Development

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update navigation in `src/components/Header.jsx`

### Modifying Styles
- Main styles are in `public/css/style.css`
- Vendor styles in `public/css/vendors.css`
- Custom styles in `public/css/custom.css`

### Adding Images
- Place images in `public/img/`
- Reference them as `/img/filename.jpg` in your components

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (below 768px)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📞 Support

For technical support or questions about the website:
- Email: ceylonhappylaugh.ella@gmail.com
- Phone: +94 76 255 8683

## 📄 License

This project is proprietary to Ceylon Happy Laugh hostel.