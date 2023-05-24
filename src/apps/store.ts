import { configureStore } from "@reduxjs/toolkit";
import { authServiceApi } from "./services/authService";
import { productCategoryServiceApi } from "./services/productCategoryService";
import authSliceReducer from "./slices/authSlice";
import { productServiceApi } from "./services/productService";
import { orderServiceApi } from "./services/orderService";

export const store = configureStore({
  reducer: {
    [authServiceApi.reducerPath]: authServiceApi.reducer,
    [productCategoryServiceApi.reducerPath]: productCategoryServiceApi.reducer,
    [productServiceApi.reducerPath]: productServiceApi.reducer,
    [orderServiceApi.reducerPath]: orderServiceApi.reducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authServiceApi.middleware,
      productServiceApi.middleware,
      orderServiceApi.middleware,
    ),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
