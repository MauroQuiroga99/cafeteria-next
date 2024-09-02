import { OrderItem } from "@/src/types";
import { createSlice } from "@reduxjs/toolkit";

type xState = {
  order: OrderItem[];
};

const initialState: xState = {
  order: [],
};

const orderSlice = createSlice({
  name: "pedido",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    addOrder: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.order.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.subtotal = existingItem.price * existingItem.quantity;
      } else {
        state.order.push({
          ...newItem,
          quantity: 1,
          subtotal: newItem.price,
        });
      }
    },
    incrementQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.order.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.subtotal = existingItem.price * existingItem.quantity;
      }
    },
  },
});

export const { setOrder, addOrder, incrementQuantity } = orderSlice.actions;
export default orderSlice.reducer;
