import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../feautes/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})