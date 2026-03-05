# Setup Instructions for DynaRetarget React Integration

## Project Structure

This project has been set up with:
- **React 18** with TypeScript
- **Vite** as the build tool
- **Tailwind CSS** for styling
- **shadcn/ui** compatible structure
- **framer-motion** for animations

## Directory Structure

```
dynaretarget.io/
├── src/
│   ├── components/
│   │   └── ui/
│   │       └── sparkles-text.tsx    # SparklesText component
│   ├── lib/
│   │   └── utils.ts                 # Utility functions (cn helper)
│   ├── App.tsx                      # Main React app
│   ├── main.tsx                     # React entry point
│   └── index.css                    # Tailwind CSS imports
├── static/                          # Static assets (preserved)
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## Why `/components/ui` Directory?

The `/components/ui` directory is the standard location for shadcn/ui components. This structure:
- Follows shadcn/ui conventions for easy component management
- Allows for easy integration with shadcn CLI (`npx shadcn-ui@latest add [component]`)
- Keeps UI components organized and separate from business logic
- Makes it easy to share and reuse components across the project

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

This will install:
- `react` and `react-dom`
- `framer-motion` (for SparklesText animations)
- `clsx` and `tailwind-merge` (for className utilities)
- `typescript` and `@types/react`
- `vite` and `@vitejs/plugin-react`
- `tailwindcss`, `postcss`, and `autoprefixer`

### 2. Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Component Usage

The `SparklesText` component has been integrated throughout the page to replace all instances of "DynaRetarget" text. Here's how to use it:

```tsx
import { SparklesText } from "@/components/ui/sparkles-text";

// Basic usage
<SparklesText text="DynaRetarget" />

// With custom styling
<SparklesText 
  text="DynaRetarget" 
  className="text-white text-6xl"
  sparklesCount={15}
/>

// With custom colors
<SparklesText 
  text="DynaRetarget" 
  colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
/>
```

## Component Props

- `text` (required): The text to display with sparkles
- `className` (optional): Additional CSS classes
- `sparklesCount` (optional, default: 10): Number of sparkles to animate
- `colors` (optional): Object with `first` and `second` color strings for sparkles

## Integration Points

The SparklesText component is used in:
1. **Main hero title** - Large display with 15 sparkles
2. **Abstract section** - Inline text with 8 sparkles (3 instances)
3. **Section headings** - Medium size with 10 sparkles (4 instances)

## Notes

- The component uses `"use client"` directive (for Next.js compatibility, though we're using Vite)
- All sparkles are animated using `framer-motion`
- The component is fully responsive and works with Tailwind CSS classes
- The original static HTML structure has been converted to React JSX

## Troubleshooting

### Node Version Requirement
**IMPORTANT**: This project requires Node.js 18 or higher. Vite 5 requires Node.js ^18.0.0 || >=20.0.0.

If you see errors like `SyntaxError: Unexpected reserved word` or version warnings:

#### Option 1: Using nvm (Recommended)
```bash
# Install nvm if not already installed
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Load nvm in current shell
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install and use Node.js 18
nvm install 18
nvm use 18

# Verify version
node --version  # Should show v18.x.x or higher
```

#### Option 2: If you have .npmrc with prefix settings
If you have a `~/.npmrc` file with `prefix` or `globalconfig` settings, nvm may conflict with it. You have two options:

**Option A**: Temporarily disable the prefix (backup first):
```bash
cp ~/.npmrc ~/.npmrc.backup
echo "# Temporarily disabled for nvm compatibility" > ~/.npmrc
# Then use nvm as above
```

**Option B**: Use nvm with --delete-prefix flag:
```bash
nvm use --delete-prefix 18 --silent
```

#### Option 3: Manual Node.js Installation
Download and install Node.js 18+ from [nodejs.org](https://nodejs.org/)

### Path Aliases
The `@/` alias is configured in:
- `tsconfig.json` (for TypeScript)
- `vite.config.ts` (for Vite bundler)

If imports don't work, ensure both files have the correct path configuration.

### Dev Server Not Starting
If `npm run dev` fails:
1. Ensure Node.js 18+ is installed and active
2. Delete `node_modules` and `package-lock.json`, then run `npm install` again
3. Check that all dependencies installed correctly
