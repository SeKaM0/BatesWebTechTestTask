import { combineReducers, configureStore } from '@reduxjs/toolkit';
import eventReducer from './reducers/eventSlice';

const rootReducer = combineReducers({
  eventReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
