import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface todo {
  id: number;
  todo: string;
}

interface todo2 {
  todo: todo[];
}

const initialState: todo2 = {
  todo: [],
};

const add = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: todo = {
        todo: action.payload,
        id: Date.now(),
      };
      state.todo.push(newTodo);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, remove } = add.actions;
export default add.reducer;
