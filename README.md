# saitenweise-frontend

Saitenweise is a webshop for string instruments. It sells violins, violas, cellos, double basses, and accessories (strings, bows, rosin). This is the Frontend for the shop.

## Getting started with Vue.js

Information from Vue template:

- **Recommended IDE Setup:**
  - [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (disable Vetur)
- **Customize configuration:**
  - See [Vite Configuration Reference](https://vite.dev/config/)
- **Project Setup:** Install dependencies:

    ```sh
    npm install
    ```

- **Development:** Compile and hot-reload:

    ```sh
    npm run dev
    ```

- **Production:** Compile and minify:

    ```sh
    npm run build
    ```

- **Production Preview:** Serve content in dist folder:

    ```sh
    npm run preview
    ```

## Iterations (see Git commits)

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

### Iteration 3: API base URL configuration via `.env` files

- Introduced `.env` files to manage environment-specific variable for the API base URL.
- Updated API calls in `App.vue` to use `import.meta.env.VITE_API_URL` instead of hardcoded URLs.
- This allows easy switching between development and production backends.
