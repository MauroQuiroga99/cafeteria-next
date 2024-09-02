import { RootState } from "../index";

export const getOrder = (state: RootState) => {
  return state.pedido.order;
};
