import { configureStore } from "@reduxjs/toolkit";
import templateReducer from "./slice";

export default configureStore({
    reducer: {
        template: templateReducer,
    },
});
