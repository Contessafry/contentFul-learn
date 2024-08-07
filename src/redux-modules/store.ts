// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./restaurantSlice";
import menuReducer from "./menuSlice";
import { pokemonApi } from "./api/pokemon";
import { restaurantApi } from "./api/restaurant";

export const store = configureStore({
  reducer: {
    [restaurantApi.reducerPath]: restaurantApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    restaurant: restaurantReducer,
    menu: menuReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(restaurantApi.middleware, pokemonApi.middleware),
});

// Inferenze dei tipi per i dispatch e lo stato
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
