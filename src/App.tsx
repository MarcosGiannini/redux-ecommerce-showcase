import { useState } from 'react' // 1. Importamos useState
import { useDispatch } from 'react-redux'
import { addItem } from './features/cart/cartSlice'
import { CartInfo } from './components/CartInfo'

function App() {
  const dispatch = useDispatch()
  const productToAdd = { id: 1, name: 'Pizza Pepperoni', price: 12.50 }

  // 2. Creamos nuestro estado local. Por defecto, no está añadido (false).
  const [isAdded, setIsAdded] = useState(false)

  const handleAddItem = () => {
    // Si ya ha sido añadido, no hacemos nada (evita clics rápidos)
    if (isAdded) return

    dispatch(addItem(productToAdd))

    // 3. Cambiamos el estado local a 'true'
    setIsAdded(true)

    // 4. Después de 1.5 segundos, lo volvemos a poner a 'false'
    setTimeout(() => {
      setIsAdded(false)
    }, 1500)
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 font-sans">
      <CartInfo />
      <h1 className="text-3xl font-bold my-4 text-center">Mi Tienda de Pizzas</h1>
      <div className="bg-gray-800 p-4 rounded-lg w-full md:max-w-sm mx-auto transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1">
        <h2 className="text-xl">{productToAdd.name}</h2>
        <p className="text-lg my-2">${productToAdd.price}</p>
        
        {/* 5. El botón ahora cambia su estilo y texto según el estado 'isAdded' */}
        <button
          onClick={handleAddItem}
          disabled={isAdded} // Lo desactivamos mientras está en estado 'añadido'
          className={`mt-2 w-full font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out ${
            isAdded
              ? 'bg-green-500 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 hover:scale-105'
          }`}
        >
          {isAdded ? '¡Añadido! ✅' : 'Añadir al Carrito'}
        </button>
      </div>
    </div>
  )
}

export default App