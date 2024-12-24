import { configureStore } from "@reduxjs/toolkit";
import createName from "./Slices/create";


export const store = configureStore({
    reducer: {
        F_name: createName
    }
})