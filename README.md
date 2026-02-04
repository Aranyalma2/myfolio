# MyFolio

A modern, customizable portfolio website built with Vue 3, TypeScript, and Vite. This application provides a clean way to showcase your skills, experience, education, projects, and certifications.

<img src="/git-assets/pic1.jpg" />

## Features

- Easy and simple customization
- Responsive design that works on all devices
- Project showcase with image galleries
- Filterable projects by technology labels
- Education and work experience timeline
- Skills and certifications sections
- Contact information and social links

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (22+)
- Yarn package manager

## Installation

1. Clone or download this repository

2. Install dependencies:

```bash
yarn install
```

## Running the Application

### Development Mode

To run the application in development mode with hot-reload:

```bash
yarn dev
```

### Production Build

To build the application for production:

```bash
yarn build
```

The built files will be generated in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
yarn preview
```

## Code Quality

### Linting

To check for code quality issues:

```bash
yarn lint
```

To automatically fix linting issues:

```bash
yarn lint:fix
```

### Formatting

To format all code files:

```bash
yarn format
```

To check if files are properly formatted:

```bash
yarn format:check
```

## Project Structure

```
public/              # Static images
src/
├── assets/          # Static assets (internal images, CSS files)
│   └── css/         # CSS stylesheets
├── components/      # Vue components
├── data/            # Data files for content
├── router/          # Vue Router configuration
├── types/           # TypeScript type definitions
└── views/           # Page components
```

## Customization

To customize this portfolio with your own information, see the detailed [CUSTOMIZATION.md](CUSTOMIZATION.md) guide.

## License

MIT License - feel free to use this template for your own portfolio.
