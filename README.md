# Remix SPA with Shadcn and Radix UI

This project is a Single Page Application (SPA) built using [Remix](https://remix.run/) and [Shadcn UI components](https://shadcn.dev/). It leverages [Radix UI](https://www.radix-ui.com/), [Tailwind CSS](https://tailwindcss.com/), and [Vite](https://vitejs.dev/) for a modern, performant, and responsive user interface.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Scripts](#scripts)
- [Using Shadcn Components](#using-shadcn-components)
- [Project Structure](#project-structure)
- [Linting and Formatting](#linting-and-formatting)
- [Testing](#testing)
- [License](#license)

## Features

- **Remix SPA:** Fast and modern web application framework.
- **Shadcn Components:** UI components built on top of Radix UI and styled using Tailwind CSS.
- **TypeScript:** Type-safe development with TypeScript support.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Vite:** Next-generation frontend tooling for fast builds and live reloading.
- **Husky and Lint-Staged:** Pre-commit hooks for ensuring code quality.
- **Vitest:** Unit testing framework.
- **Biome:** Unified linter, formatter, and code analyzer.

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/remix-spa.git
cd remix-spa
```

Install dependencies:

```bash
bun install
```

## Scripts

Here are the available bun scripts for the project:

- `build`: Build the production version of the app using Vite.
- `dev`: Start the development server with live reload.
- `preview`: Preview the built app locally.
- `typecheck`: Type-check the project using TypeScript.
- `format`: Format the code using Biome.
- `lint`: Lint the codebase using Biome.
- `test`: Run unit tests with Vitest.
- `prepare`: Setup Husky pre-commit hooks.

## Using Shadcn Components

### Installing Shadcn Components[https://ui.shadcn.com/docs/components/accordion]

To add Shadcn components to your project, run the following command:

```bash
bunx shadcn-ui@latest add <component-name>
```

For example, to add a button component, you would run:

```bash
bunx shadcn-ui@latest add button
```

### Customizing Components

Shadcn components are styled using Tailwind CSS, which means you can easily customize them by extending your `tailwind.config.js` file. You can modify the colors, spacing, typography, and more based on your design needs.

### Example Usage

Here's an example of how you can use a Shadcn button in your Remix component:

```tsx
import { Button } from "@/components/ui/button";

export default function Example() {
  return <Button>Click me</Button>;
}
```

Ensure that your components are imported from the appropriate path as shown above.

## Project Structure

```plaintext
├── public/                # Static assets
├── src/                   # Source code
│   ├── components/        # UI components
│   ├── routes/            # Remix routes
│   ├── styles/            # Global styles
│   └── utils/             # Utility functions
│   └── constants/         # Constant Variables
├── tailwind.config.js     # Tailwind CSS configuration
├── remix.config.js        # Remix configuration
├── vite.config.js         # Vite configuration
└── package.json           # Project dependencies and scripts
```

## Linting and Formatting

This project uses Biome for linting and formatting. The linting and formatting configuration ensures consistent code style throughout the codebase. Pre-commit hooks are configured with Husky to run these checks automatically.

To manually run the linter and formatter, use the following commands:

```bash
bun run lint
bun run format
```

## Testing

Unit tests are written using Vitest. To run the tests, use the following command:

```bash
bun run test
```

You can also run staged tests before committing code with:

```bash
bun run test:staged
```