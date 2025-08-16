import { useCart } from "../contexts/cart-context"

export const CartIcon = () => {
  const { getTotalItems, toggleCart } = useCart()
  const totalItems = getTotalItems()

  return (
    <button
      onClick={toggleCart}
      className="fixed top-6 right-6 z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
    >
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h7"
        />
      </svg>

      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </button>
  )
}
