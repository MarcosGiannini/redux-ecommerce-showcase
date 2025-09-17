import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})

// Inferimos los tipos `RootState` y `AppDispatch` del propio store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch