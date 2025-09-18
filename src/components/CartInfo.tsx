import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../app/store'
import { removeItem, incrementQuantity, decrementQuantity } from '../features/cart/cartSlice'

export function CartInfo() {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)
  const dispatch = useDispatch()

  return (
    <div className="bg-gray-700 p-4 rounded-lg text-white mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold">Carrito</h2>
        <div className="flex items-center space-x-4">
          <p className="text-lg">Items: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
          <p className="text-lg font-bold">Total: ${totalPrice.toFixed(2)}</p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-600">
        <h3 className="font-bold mb-2 text-center">Productos en el carrito:</h3>
        {cartItems.length > 0 ? (
          <ul className="space-y-2">
            {cartItems.map(item => (
              <li key={item.id} className="text-sm flex justify-between items-center bg-gray-600 p-2 rounded">
                <span>- {item.name}</span>
                <div className="flex items-center gap-4">
                  {/* NUEVOS BOTONES PARA INCREMENTAR Y DECREMENTAR */}
                  <div className="flex items-center gap-2">
                    <button onClick={() => dispatch(decrementQuantity(item.id))} className="px-2 font-bold rounded hover:bg-gray-500">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(incrementQuantity(item.id))} className="px-2 font-bold rounded hover:bg-gray-500">+</button>
                  </div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    className="text-red-500 hover:text-red-300 font-bold text-lg"
                    aria-label={`Eliminar ${item.name}`}
                  >
                    &times;
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-400 text-center italic">Tu carrito está vacío.</p>
        )}
      </div>
    </div>
  )
}