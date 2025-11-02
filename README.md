# Portfolio

## A personal portfolio website

A modern, bento-style portfolio website showcasing my work as a Product Security Intern at Vontier. Built for optimal performance and SEO.

## Features

- Modern and minimal bento-like, sleek UI design
- All in one page (almost)
- Fully responsive design
- Performance and SEO optimizations
- Ready to be deployed on Netlify
- LinkedIn posts integration
- Interactive 3D globe visualization
- Dynamic timezone display

## Tech Stack

- UnoCSS - Atomic CSS engine
- Motion - Animation library
- D3.js - Data visualization for the globe
- Solid.js & Svelte - Component frameworks

## About

Ashmith Maddala is a Product Security Intern at Vontier with a passion for cybersecurity, ethical hacking, and AI-driven security automation. He focuses on penetration testing, vulnerability assessment, security tooling, and building secure systems.

### Expertise

- Penetration Testing & Ethical Hacking
- Security Automation & AI Integration
- Vulnerability Assessment & Management
- Network Security & Packet Analysis
- Python & Security Tooling
- Cloud Security

### Current Focus

Product Security Intern at Vontier - Learning and building security tools

## Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/ashmithhmaddala/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm run dev
```

4. Open your browser and visit `http://localhost:4321`

## Configuration

### Update Personal Information

1. Update social links in `src/lib/constants.ts`:
   - GitHub profile URL
   - LinkedIn profile URL
   - Email address

2. Update site URL in the configuration file:
   - Replace the site URL with your actual domain

3. Update profile image:
   - Replace `/public/me.webp` with your profile picture

4. Update timezone (if needed):
   - If you're not in US Eastern Time, update the timezone in `src/lib/helpers.ts`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run check` - Run type checking

## Project Structure

```
portfolio/
├── public/          # Static assets (images, fonts, etc.)
├── src/
│   ├── components/  # Reusable components
│   ├── layouts/     # Layout components
│   ├── lib/         # Utilities and helpers
│   └── pages/       # Route pages
├── package.json     # Dependencies
└── configuration files
```

## Deployment

### Netlify

1. Fork this repository
2. Connect your repository to Netlify
3. Netlify will automatically detect and deploy the project

### GitHub Pages

1. Update the base URL in configuration to match your repository path
2. Build the project: `npm run build`
3. Push the `dist` folder to your repository
4. Enable GitHub Pages in repository settings

### Other Platforms

This project can be deployed to Vercel, Cloudflare Pages, or any static hosting service.

## Customization

### Themes

The portfolio uses a dark theme by default. You can customize colors and styles in `src/assets/index.css` or through UnoCSS configuration.

### Globe Visualization

The 3D globe component displays countries you've visited. Update the countries array in `src/components/Globe.tsx` to show your visited countries.

## License

MIT License - feel free to use this template for your own portfolio

## Contact

- Email: ashmith.maddala@gmail.com
- LinkedIn: [ashmith-maddala](https://www.linkedin.com/in/ashmith-maddala)
- GitHub: [ashmithhmaddala](https://github.com/ashmithhmaddala)

## Credits

Portfolio template inspired by bento-style portfolio designs.

