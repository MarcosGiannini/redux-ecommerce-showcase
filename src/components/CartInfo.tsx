import { useSelector } from 'react-redux'
import type { RootState } from '../app/store'

export function CartInfo() {
  const itemCount = useSelector((state: RootState) => state.cart.items.length)
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)

  return (
    <div className="bg-gray-700 p-4 rounded-lg text-white text-center mb-4">
      <h2 className="text-2xl font-bold">Carrito</h2>
      <p className="text-lg mt-2">Items: {itemCount}</p>
      <p className="text-lg">Precio Total: ${totalPrice.toFixed(2)}</p>
    </div>
  )
}