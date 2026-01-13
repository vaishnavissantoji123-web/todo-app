import React from 'react'

const TodoForm = () => {
  return (
    <form className="flex flex-col justify-center items-center gap-6">
        <input
          type="text" placeholder="type your task... " className="px-4 py-1.5 rounded-5m b0rder-gray-400 w-ful max-w-5xl" />
          <buttont type="submit" className="px-6 py-2 bg-gray-400 rounded-sm">Add task</buttont>
    </form>
     
  )
}

export default TodoForm