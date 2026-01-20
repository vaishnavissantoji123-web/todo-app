import React, { useState } from 'react'



const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("")
  const handleSubmit=(e) => {
    e.preventDefault(); 
    if(!value) return;
    addTodo(value);
    setValue("");

    
  }
  return (
   <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-6">
    <input
    type="text"
    value={value}
    placeholder="Type Your task..."
    className="px-4 py-1.5 rounded-sm border border-gray-400 w-full max-w-5xl bg-gray-50"
    onChange={(e)=>setValue(e.target.value)}
    />
        
        <button type="submit" className="px-6 py-2 bg-green-400 rounded-sm">Add Task</button>
   </form>
  )
}

export default TodoForm