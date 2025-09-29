# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## About this project

## ⚙️ Installation & Setup

### 1. Create Vite Project
```bash
npm create vite@latest App_Name
Framework: React
Variant: JavaScript
cd App_Name
npm install
```

## 2. Install React Router DOM
```bash
npm install react-router-dom
```

## 3. Install Redux Toolkit
```bash
npm install @reduxjs/toolkit react-redux
```

## 3. Install Redux Toolkit
```bash
npm i react-hot-toast
```

## 4. Install & Configure Tailwind CSS
```bash
npm install tailwindcss @tailwindcss/vite

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

@import "tailwindcss";
```

## 5. Start Development Server
```bash
npm run dev
```

---

