import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "./feature/todoSlice"   // todoreducer is just a variable name that store th expot from todoSlicer (todoSlice.reducer)
export const store=configureStore({
    reducer:todoreducer   // initializing the reducer to the rducers which we declare in the todoSlicer 
});