# Faiz Ali - Personal Website

A modern, responsive personal website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design with dark mode support
- ⚡ Fast performance with Next.js 14 and App Router
- 📱 Mobile-first responsive design
- 🎯 SEO optimized with proper metadata
- 🔧 TypeScript for better development experience
- 🎨 Tailwind CSS for styling
- 📦 Modular component architecture
- 🚀 Easy to customize and deploy

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd personal_website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Edit `src/data/content.ts` to update your personal information:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  location: "Your Location",
  bio: "Your bio...",
  about: "More about you..."
};
```

### Social Links

Update your social media links in the same file:

```typescript
export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  email: "your.email@example.com"
};
```

### Skills

Add or modify your skills in the `skills` array:

```typescript
export const skills: Skill[] = [
  { name: "React", icon: "⚛️", category: "frontend" },
  { name: "Next.js", icon: "▲", category: "frontend" },
  // Add more skills...
];
```

### Projects

Update your projects in the `projects` array:

```typescript
export const projects: Project[] = [
  {
    title: "Your Project",
    description: "Project description...",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://your-project.com",
    github: "https://github.com/yourusername/project"
  },
  // Add more projects...
];
```

### Styling

The website uses Tailwind CSS for styling. You can customize colors, fonts, and other styles by modifying the Tailwind classes in the components.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Button.tsx          # Reusable button component
│   ├── Navigation.tsx     # Navigation component
│   └── ProjectCard.tsx    # Project card component
└── data/
    └── content.ts          # All content data
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The website can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the website, feel free to open an issue or contact me.

---

Built with ❤️ using Next.js and Tailwind CSS
