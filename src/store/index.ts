import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { userService } from 'src/store/services/userService';
import { counterSlice } from './slices/counterSlice';
import { todosSlice } from './slices/todosSlice';

export default function getStore() {
  return configureStore({
    reducer: {
      counter: counterSlice.reducer,
      [userService.reducerPath]: userService.reducer,
      todos: todosSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userService.middleware),
    devTools: true,
  });
}

export type AppStore = ReturnType<typeof getStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(getStore);
