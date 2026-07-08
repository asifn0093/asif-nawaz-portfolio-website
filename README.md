# Asif Nawaz — Portfolio Website

A professional portfolio website built with React, Vite, Tailwind CSS v4, and Framer Motion. Showcases projects, experience, skills, blog posts, and contact information with a clean, modern design and dark mode support.

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI framework |
| **Vite 8** | Build tool and dev server |
| **Tailwind CSS v4** | Utility-first CSS framework |
| **Framer Motion** | Page animations and scroll-triggered transitions |
| **React Router v7** | Client-side routing |
| **React Icons** | Icon library (Font Awesome, Simple Icons, etc.) |
| **EmailJS** | Contact form email delivery |
| **Oxlint** | Linting |

## Project Structure

```
src/
├── App.jsx                    # Root component with router setup
├── main.jsx                   # Entry point
├── index.css                  # Global styles + Tailwind theme config
├── context/
│   └── ThemeContext.jsx        # Dark/light theme toggle
├── components/
│   ├── Layout.jsx              # Shared layout (Navbar + Outlet + Footer)
│   ├── Navbar.jsx              # Navigation bar with theme toggle
│   ├── Footer.jsx              # Footer with links and socials
│   ├── Hero.jsx                # Homepage hero section
│   ├── FeaturedProjects.jsx    # Featured projects grid (homepage)
│   ├── StatsBar.jsx            # Statistics bar (homepage)
│   ├── HomeCTA.jsx             # Call-to-action section (homepage)
│   ├── ProjectCard.jsx         # Reusable project card
│   ├── SkillIcon.jsx           # Reusable skill icon
│   └── ContactForm.jsx         # EmailJS contact form
├── pages/
│   ├── Home.jsx                # Landing page
│   ├── About.jsx               # About me + skills
│   ├── Projects.jsx            # All projects
│   ├── Experience.jsx          # Work history
│   ├── Blog.jsx                # Blog posts
│   ├── Contact.jsx             # Contact form page
│   └── FAQs.jsx                # Frequently asked questions
└── data/
    ├── projects.js             # Project entries
    ├── experience.js           # Experience entries
    ├── skills.js               # Skill categories
    ├── blog.js                 # Blog posts
    └── faqs.js                 # FAQ entries
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Linting

```bash
npm run lint
```

## Customization

### Personal Info

Update the following files to personalize the portfolio:

| File | What to change |
|---|---|
| `src/data/projects.js` | Project list, descriptions, links |
| `src/data/experience.js` | Work history entries |
| `src/data/skills.js` | Skills and icons |
| `src/data/blog.js` | Blog posts |
| `src/data/faqs.js` | FAQ content |
| `src/components/Hero.jsx` | Tagline and CTA text |
| `src/components/Footer.jsx` | Social links and email |

### Theme Colors

Edit `src/index.css` to customize the color palette:

```css
@theme {
  --color-primary: #6366f1;       /* Indigo - main brand color */
  --color-primary-dark: #4f46e5;  /* Darker indigo - hover states */
  --color-accent: #06b6d4;        /* Cyan - accent color */
  --color-surface: #ffffff;       /* Light mode background */
  --color-surface-dark: #0f172a;  /* Dark mode background */
}
```

### Contact Form

The contact form uses EmailJS. Configure your EmailJS service in `ContactForm.jsx`:

```js
emailjs.sendForm(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  form.current,
  "YOUR_PUBLIC_KEY"
);
```

## Pages Overview

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero + Featured Projects + Stats + CTA |
| `/about` | About | Bio + Skills grid |
| `/projects` | Projects | All project cards |
| `/experience` | Experience | Work history timeline |
| `/blog` | Blog | Blog post cards |
| `/contact` | Contact | Contact form |
| `/faqs` | FAQs | Accordion FAQ list |

## Features

- **Dark mode support** — Toggle via navbar, respects system preference
- **Responsive design** — Mobile-first layout using Tailwind breakpoints
- **Scroll animations** — Framer Motion `whileInView` for sections
- **SEO-friendly** — Semantic HTML, meta tags ready for extension
- **Performance** — Lazy loading images, Vite code splitting

## Deployment

Build the project and deploy the `dist/` folder to any static host:

```bash
npm run build
```

Supports Vercel, Netlify, GitHub Pages, Cloudflare Pages, and any static file server.

## License

MIT
