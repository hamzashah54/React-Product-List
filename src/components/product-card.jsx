import { useCart } from "../contexts/cart-context"

export const ProductCard = ({ cardData }) => {
  const { name, price, image, description } = cardData
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(cardData)
  }

  return (
    <div className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 ease-out">
      <div className="relative overflow-hidden rounded-xl mb-4 bg-white/5">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
          {name}
        </h2>

        <h3 className="text-2xl font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
          {price}
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed break-words overflow-wrap-anywhere group-hover:text-white transition-colors duration-300">
          {description}
        </p>

        <button
          onClick={handleAddToCart}
          className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
