import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoContainer from "./components/TodoContainer";
import TodoFilter from "./components/TodoFilter";
import "./App.css";

//onclick

/**
 * Lifting the state up
 * conditional rendering
 * key
 * parent --> child -x- parent
 */

/**
 *
 * @returns 1. component
 * 2. State in a component
 */

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    if (todo) {
      createTaskList();
    }
  }, [todo]);

  const toggleTodoComplete = (id) => {
    const updatedList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, active: !todo.active };
      }
      return todo;
    });
    setTodoList(updatedList);
  };

  const deleteTask = (id) => {
    const updatedList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedList);
  };
  /**
   * {id:hjjh,name:"hggh", active:true}
   */

  const editTask = (id, newTodo) => {
    const editedList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, name: newTodo };
      }
      return todo;
    });
    setTodoList(editedList);
  };

  const createTaskList = () => {
    const updatedTodoList = [...todoList, todo];
    setTodoList(updatedTodoList);
  };

  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoInput addTodo={setTodo} />
      <h2>{todoList.length} tasks remaining</h2>
      <TodoContainer
        todoList={todoList}
        deleteTask={deleteTask}
        completeTask={toggleTodoComplete}
        editTask={editTask}
      />
      <TodoFilter />

      {/**
       * 1. input component done
       * 2.todolist container done
       * 3. todo filter done
       */}
    </div>
  );
}

export default App;
