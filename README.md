# React + Vite Project

A Realstate0Listing-UI is a modern React application built with Vite for fast development and optimized builds.

## 🚀 Features

- **React 18** - Latest React with concurrent features
- **Vite** - Lightning fast build tool and development server
- **Hot Module Replacement (HMR)** - Instant updates during development
- **ESLint** - Code linting for consistent code quality
- **Modern JavaScript** - ES6+ support out of the box

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <https://github.com/ANUJ1994k/RealState-Listing-UI.git>
cd <RealstateListing-Ui>
```

2. Install dependencies:
```bash
npm install
```

## 🚦 Getting Started

### Development Server

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The build files will be generated in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/
├── components/
│   ├── PropertyCard.jsx
│   ├── PropertySkeleton.jsx
│   └── Navbar.jsx
├── pages/
│   ├── Home.jsx
│   ├── PropertyDetails.jsx
│   └── Favorites.jsx
├── store/
│   └── favorites.js
├── data/
│   └── properties.json
├── App.jsx
└── main.jsx

```

## ⚙️ Configuration

### Vite Configuration

The project uses `vite.config.js` for build configuration. Current plugins:
- `@vitejs/plugin-react` - Uses Babel for Fast Refresh

### ESLint Configuration

ESLint is configured with recommended React rules. You can modify the configuration in `.eslintrc.js` or your preferred config file.

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📦 Dependencies

### Production Dependencies
- `react` - React library
- `react-dom` - React DOM renderer

### Development Dependencies
- `@vitejs/plugin-react` - Vite React plugin
- `vite` - Build tool
- `eslint` - JavaScript linter
- `eslint-plugin-react` - React-specific ESLint rules
- `eslint-plugin-react-hooks` - React Hooks ESLint rules

## 🚀 Deployment

### Static Hosting

After running `npm run build`,  deploy the contents of the `dist` directory to any static hosting service:

- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)


## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Vite](https://vitejs.dev/) - Build tool and development server
- [ESLint](https://eslint.org/) - Code linting utility

## 📞 Support

Email: "anuj1994k@gmail.com"
Mobile:7065366023