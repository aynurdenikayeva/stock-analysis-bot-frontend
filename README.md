# Stock Analysis Bot - Frontend

A modern React frontend for the Stock Analysis Bot platform. The application provides an intuitive dashboard for stock analysis, portfolio tracking, and watchlist management.

## Features

* Dashboard page
* Stock search and analysis
* Portfolio management
* Watchlist management
* Responsive UI
* REST API integration with Spring Boot backend

## Technologies

* React
* Vite
* JavaScript
* Axios
* CSS / Tailwind CSS

## Project Structure

```text
src/
│
├── pages
├── components
├── services
├── assets
└── App.jsx
```

## Setup

### Clone Repository

```bash
git clone https://github.com/aynurdenikayeva/stock-analysis-bot-frontend.git
cd stock-analysis-bot-frontend
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Application runs on:

```text
http://localhost:5173
```

## Backend Connection

The frontend expects the backend API to be running at:

```text
http://localhost:8080
```

Example API call:

```javascript
fetch("http://localhost:8080/api/stocks/analyze/AAPL")
```

## Pages

### Home

Overview dashboard for stock analysis.

### Portfolio

Displays user portfolio holdings.

### Watchlist

Displays tracked stocks.

### Analysis

Shows RSI, MACD, EMA, and trading signals.

## Future Improvements

* Authentication
* Dark mode
* Charts and visualizations
* Real-time stock prices
* Portfolio performance analytics

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
