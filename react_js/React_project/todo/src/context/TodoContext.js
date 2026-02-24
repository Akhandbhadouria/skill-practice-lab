import { createContext,useContext } from "react";

export const TodoContext=createContext({
    Todo:[{
        id:1,
        msg:"todo",
        complete:false
    }],
    addTodo: (todo)=>{},
    update: (id,todo)=>{},
    delete_todo: (id)=>{},
    toggleComplete: (id)=>{}
});

export const Context_provider=TodoContext.Provider;

export const useTodo=()=>{
    return useContext(TodoContext);
}