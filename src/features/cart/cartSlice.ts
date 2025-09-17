import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Definimos un tipo para los productos que irán en el carrito
interface CartItem {
  id: number;
  name: string;
  price: number;
}

// Definimos cómo es el estado de esta slice
interface CartState {
  items: CartItem[];
  totalPrice: number;
}

// Usamos el tipo para definir el estado inicial
const initialState: CartState = {
  items: [],
  totalPrice: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Le decimos a la acción que su 'payload' será de tipo CartItem
    addItem: (state, action: PayloadAction<CartItem>) => {
      // Añadimos el nuevo item a la lista
      state.items.push(action.payload);
      // Sumamos su precio al total
      state.totalPrice += action.payload.price;
    },
  },
})

export const { addItem } = cartSlice.actions
export default cartSlice.reducer