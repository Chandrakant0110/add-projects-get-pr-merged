import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "Todo",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    deleted: (state, action) => state.filter((t) => t.id !== action.payload.id),
    edit: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state[index].todo = action.payload.todo;
      }
    },
  },
});

export default todoSlice.reducer;
export const { add, deleted, edit } = todoSlice.actions;
