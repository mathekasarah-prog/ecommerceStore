# Driply 💧

Driply is a modern, responsive React-based e-commerce web application. It allows users to browse products, inspect detailed views, manage a shopping cart, and navigate a protected checkout flow.

---

## ✨ Features

* **Homepage**: Landing page featuring a prominent "Shop Now" call-to-action.
* **Product Listing**: Dynamically fetches and displays products from the [Fake Store API](https://fakestoreapi.com).
* **Product Details**: Dedicated view for individual product information.
* **Product Tabs**: Organized sections for **Overview**, **Reviews**, and **Specifications**.
* **Search & Filtering**: Real-time product search by title and category filtering.
* **Shopping Cart**: Full cart management (add items, remove items, and update quantities).
* **Cart Summary**: Automatic calculation of item subtotals and total pricing.
* **Authentication Flow**: Basic login demonstration with state persistence.
* **Protected Checkout**: Automatically redirects unauthenticated users to the login page.
* **Responsive UI**: Built using [Tailwind CSS](https://tailwindcss.com) and [shadcn/ui](https://shadcn.com) components.

---

## 🛠️ Technologies Used

* **Frontend Library**: React (Vite)
* **Language**: JavaScript (ES6+)
* **Styling**: Tailwind CSS & shadcn/ui
* **Routing**: React Router
* **State Management**: React Context API (`AuthContext`, `CartContext`)
* **Data Fetching**: Axios
* **API Source**: Fake Store API
* **Version Control**: Git & GitHub

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── ui/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── ProtectedCheckout.jsx
├── context/
│   ├── AuthContext.jsx
│   └── CartContext.jsx
├── pages/
│   ├── Homepage.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── Login.jsx
│   └── product-tabs/
│       ├── Overview.jsx
│       ├── Reviews.jsx
│       └── Specifications.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
* [Node.js](https://nodejs.org) (v16 or higher recommended)
* `npm` (comes with Node.js)
* [Git](https://git-scm.com)

### Installation

1. **Clone the repository:**
   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. **Navigate into the project folder:**
   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   cd ecommerceStore
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to the local URL displayed in your terminal (typically `http://localhost:5173`).

---

## 🌐 Product Data

Driply retrieves product information dynamically from the public [Fake Store API](https://fakestoreapi.com). This provides sample e-commerce data including titles, prices, categories, images, and descriptions.

---

## 🤝 Contributing & Collaboration

Contributions, issues, and feature requests are welcome! 

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
