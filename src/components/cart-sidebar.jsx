import { useCart } from "../contexts/cart-context"

export const CartSidebar = () => {
  const { cartItems, removeFromCart, getTotalPrice, getTotalItems, isCartOpen, closeCart } = useCart()

  if (!isCartOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-96 bg-slate-900/95 backdrop-blur-md border-l border-white/20 z-50 transform transition-transform duration-300 ease-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-white/20">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Shopping Cart</h2>
              <button onClick={closeCart} className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-300 text-sm mt-1">
              {getTotalItems()} {getTotalItems() === 1 ? "item" : "items"} in cart
            </p>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center text-gray-400 mt-8">
                <svg
                  className="w-16 h-16 mx-auto mb-4 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h7"
                  />
                </svg>
                <p>Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-16 h-16 object-contain rounded-lg bg-white/5"
                      />
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-sm">{item.name}</h3>
                        <p className="text-emerald-400 font-bold">{item.price}</p>
                        <p className="text-gray-400 text-xs">Qty: {item.quantity}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-300 transition-colors duration-200 p-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-white/20">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-white">Total:</span>
                <span className="text-2xl font-bold text-emerald-400">${getTotalPrice().toFixed(2)}</span>
              </div>
              <button className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
