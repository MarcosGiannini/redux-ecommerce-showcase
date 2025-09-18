import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// 1. AHORA NUESTRO ITEM NECESITA UNA CANTIDAD
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number; // Nueva propiedad
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 2. HACEMOS EL ADDITEM MUCHO MÁS INTELIGENTE
    addItem: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const itemInCart = state.items.find(item => item.id === action.payload.id);
      
      if (itemInCart) {
        // Si el item ya existe, solo incrementamos su cantidad
        itemInCart.quantity++;
      } else {
        // Si no existe, lo añadimos al array con cantidad 1
        state.items.push({ ...action.payload, quantity: 1 });
      }

      // Actualizamos el precio total en ambos casos
      state.totalPrice += action.payload.price;
    },

    // 3. QUITAMOS EL ITEM POR COMPLETO (SIN IMPORTAR LA CANTIDAD)
    removeItem: (state, action: PayloadAction<number>) => { // El payload es el 'id' del producto
      const itemToRemove = state.items.find(item => item.id === action.payload);
      if (itemToRemove) {
        // Restamos el precio total de todos los items de este tipo
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        // Filtramos el array para quitar el item
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
    
    // 4. NUEVAS ACCIONES PARA MANEJAR LA CANTIDAD DESDE EL CARRITO
    incrementQuantity: (state, action: PayloadAction<number>) => { // El payload es el 'id' del producto
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity++;
        state.totalPrice += item.price;
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => { // El payload es el 'id' del producto
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        // Si la cantidad es 1, al decrementar eliminamos el item
        if (item.quantity === 1) {
          state.totalPrice -= item.price;
          state.items = state.items.filter(item => item.id !== action.payload);
        } else {
          item.quantity--;
          state.totalPrice -= item.price;
        }
      }
    },
  },
})

// 5. EXPORTAMOS TODAS LAS NUEVAS ACCIONES
export const { addItem, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions
export default cartSlice.reducer