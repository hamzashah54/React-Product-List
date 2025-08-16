import { products } from "./data/products"
import { ProductCard } from "./components/product-card"
import { CartIcon } from "./components/cart-icon"
import { CartSidebar } from "./components/cart-sidebar"
import { CartProvider } from "./contexts/cart-context"
import "./App.css"

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.2),transparent_60%)]"></div>

        {/* Cart Components */}
        <CartIcon />
        <CartSidebar />

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              HS Store
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our amazing collection of tech products with beautiful designs and premium quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.id} cardData={product} />
            ))}
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-white/10">
            <p className="text-gray-400">
              © 2024 HS Store. Premium technology at your fingertips.
            </p>
          </div>
        </div>
      </div>
    </CartProvider>
  )
}

export default App





