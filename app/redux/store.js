import { api } from "@/shared/api/api";
import { combineReducers, configureStore } from "@reduxjs/toolkit";


const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})
