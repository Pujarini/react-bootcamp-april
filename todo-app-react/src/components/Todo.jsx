import React, { useState } from "react";
import EditTodo from "./EditTodo";

const Todo = ({ todo, deleteTask, completeTask, editTask }) => {
  const [edit, setEdit] = useState(false);

  const deleteTodo = () => {
    deleteTask(todo.id);
  };

  const toggleStatus = () => {
    completeTask(todo.id);
  };

  const handleEditMode = () => {
    setEdit(true);
  };

  const cancelEditMode = () => {
    setEdit(false);
  };
  /**
   * true ? "xyz": "abc"
   */

  return (
    <>
      {edit ? (
        <EditTodo
          todo={todo}
          editTask={editTask}
          cancelEditMode={cancelEditMode}
        />
      ) : (
        <li>
          <input type="checkbox" onClick={toggleStatus} />
          <span onClick={handleEditMode}>{todo.name}</span>
          <button onClick={deleteTodo}>x</button>
        </li>
      )}
    </>
  );
};

export default Todo;
