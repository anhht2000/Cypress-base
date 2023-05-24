import { configureStore } from "@reduxjs/toolkit";
import { authServiceApi } from "./services/authService";
import { productCategoryServiceApi } from "./services/productCategoryService";
import authSliceReducer from "./slices/authSlice";
import { productServiceApi } from "./services/productService";

export const store = configureStore({
  reducer: {
    [authServiceApi.reducerPath]: authServiceApi.reducer,
    [productCategoryServiceApi.reducerPath]: productCategoryServiceApi.reducer,
    [productServiceApi.reducerPath]: productServiceApi.reducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authServiceApi.middleware,
      productServiceApi.middleware,
    ),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
