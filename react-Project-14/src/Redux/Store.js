import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/Counter/counterSlice";       // import counter reducer here

const store = configureStore({
    reducer: {
        counter: counterReducer
    },
}); 
export default store;