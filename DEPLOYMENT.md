# Deployment Guide

## Vercel Deployment

This app is configured for deployment on Vercel. Follow these steps:

### 1. Environment Variables
Set up the following environment variable in your Vercel dashboard:
- `GEMINI_API_KEY`: Your Google Gemini API key

### 2. Deploy to Vercel

#### Option A: Using Vercel CLI
```bash
npm install -g vercel
vercel
```

#### Option B: Using Vercel Dashboard
1. Connect your GitHub repository to Vercel
2. Import the project
3. Add the environment variable `GEMINI_API_KEY`
4. Deploy

### 3. Build Configuration
The app uses:
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x (recommended)

### 4. Domain Configuration
After deployment, you can:
- Use the provided `.vercel.app` domain
- Add a custom domain in the Vercel dashboard

## Local Development
```bash
npm install
npm run dev
```

## Build Locally
```bash
npm run build
npm run preview
```