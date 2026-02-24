import {  React, useState} from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({ todo}) {
    const [iseditable,setIsEditable]=useState(false);
    const [Msg,set_msg]=useState(todo.msg);
    const {update,delete_todo,toggleComplete}=useTodo()

    const editTodo=()=>{
        update(todo.id,{...todo,todo:Msg})
        setIsEditable(false);
    }
    const toggleCompleted=()=>{
        toggleComplete(todo.id);
    }


    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.complete ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.complete}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    iseditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.complete ? "line-through" : ""}`}
                value={Msg}
                onChange={(e) => set_msg(e.target.value)}
                readOnly={!iseditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.complete) return;

                    if (iseditable) {
                        editTodo();
                    } else setIsEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {iseditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => delete_todo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
