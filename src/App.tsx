import { useDispatch } from 'react-redux'
import { addItem } from './features/cart/cartSlice'
import { CartInfo } from './components/CartInfo'

function App() {
  const dispatch = useDispatch()
  const productToAdd = { id: 1, name: 'Pizza Pepperoni', price: 12.50 }

  const handleAddItem = () => {
    dispatch(addItem(productToAdd))
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <CartInfo />
      <h1 className="text-3xl font-bold my-4 text-center">Mi Tienda de Pizzas</h1>
      <div className="bg-gray-800 p-4 rounded-lg max-w-sm mx-auto">
        <h2 className="text-xl">{productToAdd.name}</h2>
        <p className="text-lg my-2">${productToAdd.price}</p>
        <button
          onClick={handleAddItem}
          className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Añadir al Carrito
        </button>
      </div>
    </div>
  )
}

export default App