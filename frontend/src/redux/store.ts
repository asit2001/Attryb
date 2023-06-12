import {configureStore} from "@reduxjs/toolkit"
import { carReducer, userReducer } from "./reducers"

export const store = configureStore({
    reducer:{
        car:carReducer,
        user:userReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch