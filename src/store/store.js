import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import timesReducer from "./features/times/timesSlice";
import availableTimesReducer from "./features/AvilableTimes/AvailableTimesSlice.js";
import bouquetReducer from "./features/pricing/PricingSlice";
import addonsReducer from "./features/addons/AddonsSlice";
import { staffsApi } from "./features/staff/Staff.js";
import { setupListeners } from "@reduxjs/toolkit/dist/query/index.js";
import { blogsApi } from "./features/blog/blog.js";
import { endpointsApi } from "./features/endpoints/endpoints.js";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    times: timesReducer,
    availableTimes: availableTimesReducer,
    bouquet: bouquetReducer,
    addons: addonsReducer,
    [staffsApi.reducerPath]: staffsApi.reducer,
    [blogsApi.reducerPath]: blogsApi.reducer,
    [endpointsApi.reducerPath]: endpointsApi.reducer,
  },
  middleware: (getDeafultMiddleware) => {
    return getDeafultMiddleware().concat(
      staffsApi.middleware,
      blogsApi.middleware,
      endpointsApi.middleware
    );
  },
});
setupListeners(store.dispatch);