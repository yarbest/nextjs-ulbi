import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppDispatch, RootState } from '..';

export const fetchTodosCreateThunk = createAsyncThunk('todos/fetchTodos', async (_, thunkApi) => {
  try {
    const todos = await (await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10'))?.json();
    return todos;
  } catch (e) {
    return thunkApi.rejectWithValue('Couldn"t load todos');
  }
});

interface ITodo {
  id: number;
  title: string;
}

const initialState: { todos: null | ITodo[]; isLoading: boolean; error: string } = {
  todos: null,
  isLoading: false,
  error: '',
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos(state, action: PayloadAction<ITodo[]>) {
      state.todos = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.todos, // todos - название слайса
      };
    },

    [fetchTodosCreateThunk.fulfilled.type]: (state, action: PayloadAction<ITodo[]>) => {
      state.isLoading = false;
      state.error = '';
      state.todos = action.payload;
    },
    [fetchTodosCreateThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchTodosCreateThunk.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const selectTodos = (state: RootState) => state.todos.todos;

export const { setTodos } = todosSlice.actions;

export const fetchTodos = () => async (dispatch: AppDispatch) => {
  const todos = await (await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10'))?.json();
  dispatch(setTodos(todos));
};
