# Bloomfolio Template Setup Guide

This guide will help you set up and customize your Bloomfolio portfolio template.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:4321` to see your portfolio.

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📝 Customization

### 1. Personal Information

Edit `src/pages/index.astro` to update your personal information:

```javascript
const portfolioData = {
  name: "David Pillco",
  title: "Portafolio de David Pillco",
  description: "Este es mi portafolio",
  avatarUrl: "/avatar.png",
  location: "Madrid - España",
  email: "contact.davidpill@gmail.com",
  socialLinks: {
    github: "https://github.com/davidpill47",
    linkedin: "https://linkedin.com/in/dapillco47",
  },
  about: {
    title: "Sobre Mi",
    description: `Ingeniero en Ciencias de la Computación con experiencia en proyectos, asistencia técnica, redes, creación de
      software y desarrollo web. Centrado en la investigación aplicada y en las robustas competencias técnicas,
      enfocadas en la creación de soluciones innovadoras y eficaces que perfeccionan procesos y elevan la calidad de
      de procesos o servicios.`,
  },
};
```

### 2. Add Your Avatar

Add your profile picture as `public/fotoperfil.jpeg` (recommended size: 512x512px)

### 3. Add Content
Aqui el contenido 
#### Work Experience

Create markdown files in `src/content/work/`:

```markdown
---
company: "Cooperativa de Ahorro y Crédito Coopmego"
position: "Asistente de Soporte Técnico"
description: "- Resolución de incidencias de hardware y software para usuarios internos.
  - Instalación, configuración y mantenimiento de estaciones de trabajo y periféricos.
  - Soporte en aplicaciones de ofimática y sistemas de gestión interna.
  - Mantenimiento preventivo y correctivo de la infraestructura tecnológica."
startDate: "2024-01-01"
endDate: "2024-07-01"
link: "https://coopmego.com"
logo: "/images/coopmego_logo.png"
---
```

#### Education

Create markdown files in `src/content/education/`:

```markdown
---
institution: "University Name"
course: "Degree Name"
description: "What you studied"
startDate: "2015-09-01"
endDate: "2019-05-30"
link: "https://university.edu"
logo: "/images/university-logo.png" # Optional
---
```

#### Projects

Create markdown files in `src/content/projects/`:

```markdown
---
title: "Project Name"
description: "Project description"
image: "./project-image.png"
startDate: "2023-06-01"
endDate: "2023-12-01"
skills: ["React", "TypeScript", "Node.js"]
demoLink: "https://demo.example.com"
sourceLink: "https://github.com/yourusername/project"
---
```

Add project images in the same directory as the markdown file.

#### Hackathons

Create markdown files in `src/content/hackathons/`:

```markdown
---
title: "Hackathon Name"
location: "City, State"
description: "What you built"
startDate: "2023-11-23"
endDate: "2023-11-25"
sourceLink: "https://github.com/yourusername/hackathon-project"
logo: "/images/hackathon-logo.png" # Optional
---
```

#### Blog Posts

Create markdown files in `src/content/blog/`:

```markdown
---
title: "Post Title"
description: "Post description"
image: "./post-cover.png"
publishDate: "2024-01-15"
updatedDate: "2024-01-20" # Optional
tags: ["Web Development", "TypeScript"] # Optional
---

# Your Blog Content

Write your blog post content here using markdown.

## Subheading

More content...
```

Add blog post cover images in the same directory as the markdown file.

## 🎨 Theming

The template supports light and dark themes. Users can toggle between themes using the theme switcher in the top-right corner.

To customize DaisyUI themes, you can modify the theme configuration in your `astro.config.mjs` or add custom CSS variables in `src/styles/global.css`.

## 📁 Project Structure

```
bloomfolio/
├── public/              # Static assets
│   ├── avatar.png       # Your profile picture
│   └── favicon.svg
├── src/
│   ├── components/      # Reusable components
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── WorkExperience.astro
│   │   ├── Education.astro
│   │   ├── Projects.astro
│   │   ├── Hackathons.astro
│   │   ├── Contact.astro
│   │   ├── ThemeToggle.astro
│   │   └── SkillBadge.astro
│   ├── content/         # Content collections
│   │   ├── work/        # Work experience entries
│   │   ├── education/   # Education entries
│   │   ├── projects/    # Project entries
│   │   ├── hackathons/  # Hackathon entries
│   │   └── blog/        # Blog posts
│   ├── layouts/
│   │   ├── Layout.astro      # Base layout
│   │   └── BlogLayout.astro  # Blog post layout
│   ├── pages/
│   │   ├── index.astro           # Homepage
│   │   ├── blog/
│   │   │   ├── index.astro       # Blog listing
│   │   │   └── [...slug].astro  # Blog post pages
│   ├── styles/
│   │   └── global.css       # Global styles
│   └── content.config.ts    # Content collections config
└── package.json
```

## 🛠 Tech Stack

- **Astro 5.x** - Static site generator
- **Tailwind CSS 4.x** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **TypeScript** - Type safety
- **Content Collections** - Type-safe content management

## 📦 Available Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

## 🎯 Next Steps

1. Replace placeholder content with your own information
2. Add your actual project screenshots and blog images
3. Customize the color scheme (optional)
4. Deploy to your favorite hosting platform (Vercel, Netlify, etc.)

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [DaisyUI Documentation](https://daisyui.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)

## 🤝 Need Help?

Check the `CLAUDE.md` file for detailed architecture information and development guidelines.
