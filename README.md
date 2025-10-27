# 2Z Interiors Uganda - Under Construction Page

A modern, responsive landing page for 2Z Interiors Uganda, showcasing the brand while the main website is under development.

## 🏢 About 2Z Interiors

2Z Interiors Uganda is a premier interior design and fit-out company specializing in bespoke solutions for residential, commercial, and hospitality spaces.

### Contact Information
- **Main Branch:** Gayaza Town, Gayaza, Wakiso
- **Showroom:** Maganjo Bombo Rd., Opp Kabs Hotel
- **Phone:** +256 758 794396
- **Email:** wilberwilliamz.ww@gmail.com
- **Social:** @2zinteriors

## 🚀 Tech Stack

- **Framework:** React 19.1.1
- **Build Tool:** Vite 7.1.7
- **Styling:** Tailwind CSS 4.1.16
- **Language:** JavaScript (ES Modules)
- **Linting:** ESLint 9.36.0

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd 2zinteriors
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Features

- **Responsive Design:** Fully optimized for mobile, tablet, and desktop
- **Email Notification Form:** Collect visitor emails for launch updates
- **WhatsApp Integration:** Floating WhatsApp button for instant contact
- **SEO Optimized:** Meta tags, Open Graph, and Twitter cards configured
- **Modern UI:** Clean, minimalistic design with custom brand colors
- **Accessibility:** ARIA labels and semantic HTML throughout

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Netlify

1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy!

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy.

## 📁 Project Structure

```
2zinteriors/
├── public/              # Static assets
│   ├── logo-white.png
│   └── favicon_io/
├── src/
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles & Tailwind config
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── postcss.config.js   # PostCSS configuration
└── vite.config.js      # Vite configuration
```

## 🎨 Customization

### Brand Colors
Colors are defined in `src/index.css` using Tailwind's `@theme` directive:
- **Primary:** `#8b0b24` (Deep Red)
- **Accent:** `#1746a2` (Blue)
- **Dark:** `#1a1a1f` (Background)

### Content Updates
Edit contact information, social links, and copy directly in `src/App.jsx`.

## 📄 License

© 2025 2Z Interiors Uganda. All rights reserved.

## 🙏 Credits

**Website Design & Development:** [Tamiti Team](https://tamiti.com)

---

Built by [Tamiti](https://tamiti.com)
