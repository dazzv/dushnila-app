import { configureStore } from "@reduxjs/toolkit";
import toolkitSlice  from './toolkitSlice';

export default configureStore({
    reducer: {
        toolkit: toolkitSlice,
    },
})