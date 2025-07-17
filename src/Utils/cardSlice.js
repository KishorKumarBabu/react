import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const index = state.items.findIndex(
        (i) => i.card.info.id === action.payload.card.info.id
      );
      if (index !== -1) {
        state.items[index].quantity = (state.items[index].quantity || 1) + 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(
        (i) => i.card.info.id === action.payload.card.info.id
      );
      if (index !== -1) {
        if ((state.items[index].quantity || 1) > 1) {
          state.items[index].quantity -= 1;
        } else {
          state.items.splice(index, 1);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cardSlice.actions;
export default cardSlice.reducer;
