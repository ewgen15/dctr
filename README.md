# DoctorNow — Mobile Clinic App

This is a code bundle for the Mobile Clinic App (DoctorNow). The original design is available at [Figma](https://www.figma.com/design/WknOXRJcPDfLmcqKulREAD/Mobile-Clinic-App-Design).

## Installing Node.js (if needed)

You need Node.js (which includes `npm`) to run this project. If `node` or `npm` is not found:

**Option A — Official installer (simplest)**  
1. Go to [https://nodejs.org](https://nodejs.org)  
2. Download the **LTS** version for macOS  
3. Run the installer, then **close and reopen your terminal**  
4. Run `node -v` and `npm -v` to confirm

**Option B — Homebrew** (if you use [Homebrew](https://brew.sh))  
```bash
brew install node
```

After Node is installed, **open a new terminal** and continue with the steps below.

---

## Project setup

1. **Install dependencies**:
   ```bash
   npm install
   ```
   Or with pnpm: `pnpm install`

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

The app runs with Vite + React and uses Tailwind CSS and Radix UI components.

---

## GitHub Pages

The site is set up to deploy to **GitHub Pages** on every push to `main`.

**One-time setup:** In the repo on GitHub go to **Settings → Pages**. Under "Build and deployment", set **Source** to **GitHub Actions**.

**Live URL (after first deploy):**  
https://ewgen15.github.io/dctr/
  