# saitenweise-frontend

Frontend for a string instrument webshop.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-blue?style=for-the-badge)](https://htwg-in-schneider.github.io/saitenweise-frontend/)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Iterations

### Iteration 0: Getting started

Created new Vue project with `npm create vue:latest`.

### Iteration 1: Static content

Made static product page from mock work as a Vue project:

- Source: category.html from static project
- Logo and CSS go into assets folder
- index.html: link CSS and bootstrap JS
- App.vue: Main content goes here. Logo image link adapted.

### Iteration 2: GitHub Page deployment

- Added `.github/workflows/build-and-deploy.js.yml` to deploy as GitHub Page.
- Tweaked `vite.config.js` to use correct base URL - otherwise the JS files won't be loaded when hosted as a GitHub page.
- Added custom favicon

### Iteration 3: Dynamic product loading from local data

- Replaced static product cards with dynamic rendering using Vue's `v-for` from local `products` array in data.js.
- Products are displayed in a grid.
- "Details" button shows product description in an alert.
- Product images, titles, and prices are now populated from array data.
