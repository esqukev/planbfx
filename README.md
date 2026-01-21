# PlanB-FX Website

Website for PlanB-FX - Coming soon page with animated Halo effect.

## Features

- Modern Next.js 16 application
- Animated Vanta.js Halo background effect
- Custom All-Round-Gothic typography
- Responsive design
- Optimized for Vercel deployment

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/              # Next.js app directory
│   ├── layout.tsx    # Root layout with metadata
│   ├── page.tsx      # Main page component
│   ├── page.css      # Page styles
│   └── globals.css   # Global styles
├── public/           # Static assets
│   ├── logo-variant2.svg
│   └── favicon files
└── typography/       # Custom fonts (All-Round-Gothic)
```

## Deployment

### Deploy to Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

The deployment will be live automatically!

### Manual Build

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Vanta.js** - Animated background effects
- **Three.js** - 3D graphics library (via Vanta.js)

## License

Private project - All rights reserved
