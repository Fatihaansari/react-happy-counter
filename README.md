# Counter App

A simple, professional counter app built with React and TypeScript.

## Features

- Increase, decrease, and reset the count
- Clean, responsive UI that works on mobile and desktop
- Functional components with `useState`
- Separate, reusable components

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- npm, yarn, pnpm, or bun

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

4. Open your browser at the URL shown in the terminal.

## Build for production

```sh
npm run build
```

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Keep the default settings and click **Deploy**.

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
- [Tailwind CSS](https://tailwindcss.com/)
