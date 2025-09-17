import { useSelector } from 'react-redux'

// Este es un tipo que vamos a necesitar, ahora te explico
import type { RootState } from '../app/store'

export function CartInfo() {
  // Usamos useSelector para leer datos del store.
  // Le decimos que queremos la longitud del array 'items' del estado 'cart'.
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