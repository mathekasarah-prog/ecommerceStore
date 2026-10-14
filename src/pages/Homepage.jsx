import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Truck, ShieldCheck, RotateCcw, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const perks = [
  { icon: Truck, title: "Free shipping", text: "On all orders over $50" },
  { icon: ShieldCheck, title: "Secure checkout", text: "Your data stays protected" },
  { icon: RotateCcw, title: "Easy returns", text: "30-day money-back promise" },
];

function Homepage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [pRes, cRes] = await Promise.all([
          fetch("https://fakestoreapi.com/products?limit=10"),
          fetch("https://fakestoreapi.com/products/categories"),
        ]);
        const pData = await pRes.json();
        const cData = await cRes.json();
        setProducts(pData);
        setCategories(cData);
      } catch (err) {
        console.error("Failed to load homepage data", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Badge className="bg-white/20 text-white hover:bg-white/20 mb-4">
              New season, new arrivals
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Fresh finds, <span className="text-yellow-300">delivered fast.</span>
            </h1>
            <p className="mt-4 text-lg text-white/90 max-w-md">
              Discover trending products at prices you will love. Shop smarter with Driply.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
  <Link to="/products">
    <Button size="lg" className="bg-white text-indigo-700 hover:bg-white/90">
      Shop Now
    </Button>
  </Link>

  <a href="#categories">
    <Button
      size="lg"
      variant="outline"
      className="border-white text-white bg-transparent hover:bg-white/10 hover:text-white"
    >
      Browse Categories
    </Button>
    </a>
    </div>
    </div> 

      <img
         src="https://images.unsplash.com/photo-1612832021080-1f3e5c8b6f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
         alt="Featured product"
         className="w-full max-w-sm mx-auto drop-shadow-2xl"
          />
        </div>
      </section>

      {/* PERKS */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-6 grid sm:grid-cols-3 gap-4">
          {perks.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-indigo-50 text-indigo-600">
                <Icon size={22} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{title}</p>
                <p className="text-sm text-gray-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Shop by category</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/products?category=${cat.slug}`}
              className="px-4 py-2 rounded-full border border-indigo-200 text-indigo-700 bg-indigo-50 hover:bg-indigo-600 hover:text-white transition capitalize"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured products</h2>
          <Link to="/products" className="text-indigo-600 font-medium hover:underline">
            View all
          </Link>
        </div>

        {loading ? (
          <p className="mt-8 text-gray-500">Loading products...</p>
        ) : (
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <Card
                key={p.id}
                className="overflow-hidden transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="bg-gray-50 aspect-square flex items-center justify-center">
                  <img src={p.thumbnail} alt={p.title} className="h-full object-contain" />
                </div>
                <CardContent className="p-4">
                  <p className="font-semibold text-gray-900 truncate">{p.title}</p>
                  <div className="flex items-center gap-1 text-sm text-yellow-500 mt-1">
                    <Star size={14} fill="currentColor" />
                    <span className="text-gray-600">{p.rating}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-lg font-bold text-indigo-700">${p.price}</span>
                    <Button asChild size="sm">
                      <Link to={`/products/${p.id}`}>View</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* CTA BANNER */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to find your next favourite thing?
          </h2>
          <p className="mt-2 text-gray-300">Thousands of products. One simple checkout.</p>
          <Button asChild size="lg" className="mt-6 bg-yellow-400 text-gray-900 hover:bg-yellow-300">
            <Link to="/products">Start shopping</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Homepage;

  