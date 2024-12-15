import { DragDropContext } from "@hello-pangea/dnd";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

//Extrae los todos del localStorage, pero si falla el proceso, se almancena un arreglo vacío
const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

//Fucion que ordena los todos
const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [remove] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, remove);

  return result;
};

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  //Cuando un todo le suceda algo, esta función se ejecutará
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Crear el todo
  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    //Ingresar el todo en el arreglo
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all"); //Declarando el useState, para el filtro

  const changeFilter = (filter) => setFilter(filter); //Cambia el estado del filtro

  const filterTodos = () => {
    //Filtra los todos, según la opción que selecciones
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  //Se llama la funcion que ordena los todos, si es que cumplen los elementos
  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;

    setTodos((prevTasks) =>
      reorder(prevTasks, source.index, destination.index),
    );
  };

  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-1000 md:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
      <Header />

      <main className="container mx-auto mt-8 px-4 md:max-w-xl">
        <TodoCreate createTodo={createTodo} />

        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList
            todos={filterTodos()}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        </DragDropContext>

        <TodoComputed
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
        />

        <TodoFilter changeFilter={changeFilter} filter={filter} />

        {/* TodoFilter */}
      </main>

      <footer className="mt-8 text-center dark:text-gray-300">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default App;
