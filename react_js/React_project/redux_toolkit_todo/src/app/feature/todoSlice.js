import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"hello Akhand"}] // initial state items . initialize when redux store
}

export const todoSlice=createSlice({
    name:'todos',                                         //name is a keyword and 'todo is a variable ' // todos is the name of slice
    initialState,
    reducers:{                                           //These are functions that describe how the state should change when an action is dispatched.
        addTodo:(state,action)=>{                        // state=> Jo bhi current data (initialState) store mein hai usko represent karta hai.
             const todo={
                id:nanoid(),
                text:action.payload  //action.payload: Jo bhi data dispatch karte time pass kiya gaya, wo milta hai yaha.

             }    
             state.todos.push(todo)                                       // action => 
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((to)=>to.id!=action.payload)
        },
        updateTodo:(state,action)=>{
            const {id,new_msg}=action.payload;   //passing 2 parameter from dispatch
            const temp_todo=state.todos.find(to=>to.id===id)
            if(temp_todo){
                temp_todo.text=new_msg;
            }
        }
    }
})

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions;    // for excesing individualy

export default todoSlice.reducer  //exporting all the reducers to the store 




//Define a Redux state slice (a small piece of your app's state)
// Write reducer functions to describe how state changes
// Automatically generate action creators for each reducer function



//                                      what id redux
// In Redux (and Redux Toolkit), a reducer is a pure function that:

// Takes the current state and an action as input.

// Returns a new state.