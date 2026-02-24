import { useEffect, useState } from 'react'

import './App.css'
import { TodoContext,Context_provider,useTodo } from './context/TodoContext'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItems';
function App() {
const [todos,setTodos]=useState([]); //todos holds the current list of todo items in the app. setTodos is a function used to update the todos state whenever a new todo is added, deleted, updated, or toggled

  const   addTodo= (todo)=>{
      setTodos((prev)=>[{id:Date.now(),...todo},...prev]) //basic js if we pass directly setTodo(todo)-> it will delete all the stored totos . so ...prev means all the previous values.
    }
   const update= (id,todo)=>{
      setTodos((prev)=>
        prev.map((prevTodos)=>
          (prevTodos.id===id ? todo:prevTodos)))
    }
   const delete_todo= (id)=>{
      setTodos((prev)=>prev.filter((curr_todo)=>curr_todo.id!=id));
    }
    const toggleComplete= (id)=>{
      setTodos((prev)=>prev.map((curr_todo)=>curr_todo.id===id?{...curr_todo,complete:!curr_todo.complete}:curr_todo))
    }

//Helps persist todos between page reloads.
//Prevents todos from resetting when the user refreshes the page.
    useEffect(() => { 
     const todos=JSON.parse(localStorage.getItem("todos"));
      if(todos && todos.length>0){
        setTodos(todos);
      }

    }, [])

    //It serializes the todos array into a string using JSON.stringify(todos). & Saves it into localStorage under the key "todos".
    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos));
    },[todos])
    


  return (
    <Context_provider value={{todos,addTodo,update,delete_todo,toggleComplete}}>   {/*declare these values so that these values can be excess by its child like form and item */}
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div> 
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((t)=>(
                          <div key={t.id} className='w-full'><TodoItem todo={t}/></div>
                        ))}
                    </div>
                </div>
            </div>
    </Context_provider>
  )
}

export default App
