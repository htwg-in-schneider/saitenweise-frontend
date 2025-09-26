# saitenweise-frontend

This template should help get you started developing with Vue 3 in Vite.

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

### Iteration 2: Dynamic product loading

- Replaced static product cards with dynamic rendering using Vue's `v-for`.
- Added API call to `http://localhost:8081/api/product` in `App.vue` to fetch products on mount.
- Products are now loaded from backend and displayed in a grid.
- "Details" button shows product description in an alert.
- Product images, titles, and prices are now populated from API data.
