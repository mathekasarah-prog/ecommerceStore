# Sarah's Store

A React e-commerce store where users can browse products, search and filter them, view product details, add items to a cart, and check out through a protected page. Built as a bootcamp project to practice routing, global state with Context API, data fetching, and protected routes.

**Live demo:** https://your-deployed-site-url-here
**Repository:** https://github.com/mathekasarah-prog/ecommerceStore.git

## Features

- Browse all products fetched from the [DummyJSON API](`https://fakestoreapi.com/products/${id}`)
- Search products by name (controlled input)
- Filter products by category, combined with search
- Product details page with nested tabs: Overview, Reviews, Specifications
- Related products shown on the details page
- Shopping cart with add, remove, and quantity update buttons
- Cart is saved in `localStorage`, so it survives a page refresh
- Login form with validation, using the DummyJSON auth endpoint
- Protected checkout page: logged-out users are redirected to the login page, then returned to checkout after logging in
- Checkout form with validation and an order summary
- Loading and error states for every data fetch
- Responsive layout styled with Tailwind CSS and shadcn/ui

## Tech Stack

- [React](https://react.dev/) (JavaScript) with [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) for routing, dynamic routes, and nested routes
- Context API for global state (cart, auth, filters)
- [Tailwind CSS](https://tailwindcss.com/) and [shadcn/ui](https://ui.shadcn.com/) for styling and components
- [DummyJSON](https://dummyjson.com/) as the data source (using `fetch`)

## Routes

| Path                              | Page                              | Access     |
| --------------------------------- | --------------------------------- | ---------- |
| `/`                               | Home                              | Public     |
| `/products`                       | Product list with search/filters  | Public     |
| `/products/:id`                   | Product details (Overview tab)    | Public     |
| `/products/:id/reviews`           | Product details (Reviews tab)     | Public     |
| `/products/:id/specifications`    | Product details (Specs tab)       | Public     |
| `/cart`                           | Shopping cart                     | Public     |
| `/login`                          | Login                             | Public     |
| `/checkout`                       | Checkout                          | Logged in  |

## State Management

Three context providers wrap the app in `main.jsx`:

- **AuthContext**: the logged-in user, `login`, and `logout`. The user is stored in `localStorage`.
- **CartContext**: cart items, `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`, and computed totals. Saved in `localStorage`.
- **FilterContext**: the search text and selected category, shared between the search bar, the category filter, and the products page.

## Project Structure

```
src/
  components/
    ui/                  shadcn/ui components
    CartItem.jsx
    CategoryFilter.jsx
    Navbar.jsx
    ProductCard.jsx
    ProductList.jsx
    ProtectedRoute.jsx
    RelatedProducts.jsx
    SearchBar.jsx
  context/
    AuthContext.jsx
    CartContext.jsx
    FilterContext.jsx
  pages/
    details/
      Overview.jsx
      Reviews.jsx
      Specifications.jsx
    Cart.jsx
    Checkout.jsx
    Home.jsx
    Login.jsx
    ProductDetails.jsx
    Products.jsx
  App.jsx
  main.jsx
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/mathekasarah-prog/ecommerceStore.git
cd your-repo-name
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```


## Deployment

Because this is a single-page app using React Router, the host needs a rewrite rule so that refreshing a page like `/products/1` does not return a 404.

- **Vercel:** add a `vercel.json` with `{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }`

## Possible Future Improvements

- Toast notifications when adding to cart
- Wishlist feature
- Pagination for the product list
- Real payment and order history

## Acknowledgements

- Product data from [DummyJSON](https://dummyjson.com/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
