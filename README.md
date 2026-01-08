# Next.js Futuristic OS Portfolio
A high-performance, immersive developer portfolio designed to look and feel like a futuristic Operating System. Built with the **Next.js App Router**, **Tailwind CSS v4**, and **React Three Fiber**.

## Key Features
* **3D Starfield Background**: Hardware-accelerated particle system using `Three.js` and `Maath`.

* **Glassmorphism UI**: High-end frosted glass effects using Tailwind v4 `@utility` classes.

* **Bento Grid Layout**: Responsive, modular grid system for showcasing content.

* **Interactive Console (`/console`)**: A functional CLI terminal with simulated boot sequences and commands.

* **Holographic Hero**: Image component with RGB-shift glitches, scanlines, and blend-mode transparency.

* **Tech Arsenal (`/stack`)**: Animated skill visualization with progress bars and "power-up" effects.

* **Neural Contact Form**: encrypted-style data transmission simulation.

* **Immersive Project Gallery**: Scaled-down iframe previews of live projects


 ## Tech Stack

* **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)

* **Styling**: [Tailwind CSS v4 (CSS-first configuration)](https://tailwindcss.com/)

* **Animation**: [Framer Motion](https://www.framer.com/motion/)

* **3D Engine**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) & [Drei](https://github.com/pmndrs/drei)

* **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started
1. **Clone the repository:**

        git clone https://github.com/Anvians/Portfolio.git
        cd future-portfolio
2. **Install dependencies:**

        npm install framer-motion lucide-react three @types/three @react-three/fiber @react-three/drei maath
3. **Run the development server:**

        npm run dev
4. Open http://localhost:3000 with your browser.

## Project Structure
```text
app/
├── _components/       # UI Logic (Not routes)
│   ├── StarBackground.js  # 3D Particle System
│   ├── HeroImage.js       # Holographic Glitch Component
│   ├── GlassCard.js        # Reusable Bento Cells
|   ├── ProjectCard.js
│   ├── Navbar.js          # Floating Dock
│   └── CustomCursor.js    # Physics-based Pointer
├── console/           # Interactive Terminal Page
├── stack/             # Tech Stack Visualization
├── projects/          # Dynamic Project Gallery
├── contact/           # Contact Form
├── globals.css        # Tailwind v4 Theme Variables
├── layout.js          # Root Layout (Z-Index Layering)
└── page.js            # Main Dashboard (Bento Grid)    
```
**Note**: Some files are in directory may not be used.

## Customization Guide
**1. Changing Color (Tailwind v4)**
Open `app/globals.css`. We use CSS variables for the neon theme:
```text
@theme {
  --color-neon-cyan: #00f2fe;   /* Primary Glow */
  --color-neon-purple: #4facfe; /* Secondary Glow */
  --color-dark-bg: #030303;     /* Deep Space Background */
}
```

**2. Updating Projects**

Edit `app/projects/projectData.js`:

```js
export const projects = [
  {
    slug: "my-app",
    title: "My App",
    liveUrl: "https://...",
    // ...
  }
];
```
**3. Tuning the "Blur"**

If the glass effect is too strong, adjust the `glass-panel` utility in `app/globals.css`:
```css
@utility glass-panel {
  backdrop-filter: blur(16px); /* Lower this value for sharpness */
}
```
**4. Custom Console Commands**

Edit `app/console/page.js` to add your own "Easter eggs" or commands:
```text
case "secret":
  newHistory.push({ type: "system", content: "YOU FOUND THE SECRET!" });
  break;
```

##  License
This project is open source and available under the [MIT License](./LICENSE).