import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice' // 1. Importamos el reducer del carrito

export const store = configureStore({
  reducer: {
    // 2. Registramos el reducer del carrito aquí
    cart: cartReducer,
  },
})

// Inferimos los tipos `RootState` y `AppDispatch` del propio store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch