import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  //Se usa el use state, para actualizar el titulo del todo
  const [title, setTitle] = useState("");

  //Cuando se hace enter en el input, se carga el texto
  const handleSubmitAddTodo = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return setTitle("");
    }

    createTodo(title);
    setTitle(""); //Se actualiza el titulo a nada
  };

  return (
    <form
      action=""
      className="flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4 transition-all duration-1000 dark:bg-gray-800"
      onSubmit={handleSubmitAddTodo}
    >
      <span className="inline-block h-5 w-5 rounded-full border-2"></span>
      <input
        type="text"
        placeholder="Create a new todo..."
        className="w-full text-gray-400 outline-none transition-all duration-1000 dark:bg-gray-800"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;
