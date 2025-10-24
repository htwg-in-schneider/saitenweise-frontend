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

### Iteration 4: GitHub Page deployment

- Added `.github/workflows/build-and-deploy.js.yml` to deploy as GitHub Page.
- Tweaked `vite.config.js` to use correct base URL - otherwise the JS files won't be loaded when hosted as a GitHub page.

### Iteration 5: Vue Router and CRUD functionality for products

- Integrated `vue-router` to be able to have different views for different operations on products.
  - Routes are registered in `main.js`.
    - Important note: When hosting the app not under / on the server (as we are doing with GitHub Pages), `createWebHistory` must be provided with the app path!
  - Distinguishing between these views takes place in App.vue.
- Added a `CreateProduct` view to allow users to create new products via a form.
  - Simple implementation with JS alerts for success/error handling.
- Added an `EditProduct` view to allow users to edit or delete existing products.
  - Simple implementation with JS alerts for success/error handling.
- Integrated API calls for creating, updating, and deleting products:
  - **Create**: Sends a `POST` request to `/api/product`.
  - **Update**: Sends a `PUT` request to `/api/product/:id`.
  - **Delete**: Sends a `DELETE` request to `/api/product/:id`.
- Updated the `ProductCatalog` view to include:
  - A "Bearbeiten" button to navigate to the `EditProduct` view.
  - A "Neues Produkt" button to navigate to the `CreateProduct` view.