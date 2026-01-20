import { useEffect, useState } from "react";
import TodoForm from "./components/todo-form";
import TodoItem from "./components/todo-item";


function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("ourtodos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("ourtodos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todoText) => {
    const newTodo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  console.log(todos);

  const markCompleted=(id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {
          ...todo,
          completed:!todo.completed}
          :todo
      )
    )
  };
  const deleteTodo=(id)=>{
    setTodos(
      todos.filter((todo)=>todo.id !==id)
    )
  
}
  return (
    <>

      <div className="max-h-screen p-20 flex flex-col gap-10 justify-center items-center">
        <h1 className="text-4xl font-bold">First App</h1>
        <div className="bg-gray-200 p-10 w-full rounded-lg">
          <TodoForm addTodo={addTodo} />
          {todos && (
            <div className="bg-gray-50 text-black p-10 my-10 max-w-4/6 mx-auto rounded-md">
              {todos &&
                todos.map((todo, idx) => <TodoItem key={idx} todo={todo} />)}
            </div>
          )}

        </div>
      </div>
    </>
   ); 
  }

export default App;