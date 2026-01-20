import { Trash2 } from "lucide-react";

const TodoItem = ({todo, markCompleted, deleteTodo}) => {
  return (
    <div className="flex justify-between gap-10 bg-gray-100 p-4 rounded-sm" >
      <input  className="w-fit"type ="checkbox" checked={todo.completed} onChange={()=>markComplete(todo.id)}/>
      <span className={`$ {todo.completed&& 'line-through italic'}flex-1`}>{todo.text}</span>
      <button className="p-2 w -4 h-4 text-white bg-red-500 rounded-sm"
      onClick={() => deleteTodo(todo.id)}
      >
        <Trash2 />
      </button> 
    </div>
  ); 
};

export default TodoItem;