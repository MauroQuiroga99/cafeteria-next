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
  },
});

export const { setOrder } = orderSlice.actions;
export default orderSlice.reducer;
