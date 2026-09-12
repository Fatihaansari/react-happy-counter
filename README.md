# Counter App

A simple, beginner-friendly counter app built with React, TypeScript, and Vite.

## Features

- Increase, decrease, and reset the count
- Clean, responsive UI
- Functional components with `useState`
- Separate, reusable components

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- A package manager such as npm, yarn, pnpm, or bun

### Run locally

1. Clone the repository:

   ```sh
   git clone <this-repository-url>
   cd <repository-name>
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Open your browser at the URL shown in the terminal (usually `http://localhost:8080`).

## Build for production

```sh
npm run build
```

The production-ready files will be generated in the `dist/` folder.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Keep the default settings (Vercel will detect Vite automatically) and click **Deploy**.

Your counter app will be live at the URL Vercel provides.

## Project Structure

```
src/
  components/
    Counter.tsx        # Main counter logic and state
    CounterButton.tsx  # Reusable button component
  routes/
    index.tsx          # Home page that renders the Counter
```

## Built With

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
