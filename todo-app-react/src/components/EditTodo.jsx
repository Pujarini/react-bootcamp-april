import React, { useState } from "react";

const EditTodo = ({ todo, editTask, cancelEditMode }) => {
  const [newTodo, setnewTodo] = useState(todo.name);

  const newTodoHandler = (e) => {
    setnewTodo(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (newTodo) {
      editTask(todo.id, newTodo);
      cancelEditMode();
    }
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="update Todo Item"
        onChange={newTodoHandler}
        value={newTodo}
      />
      <button
        className="btn__Cancel"
        type="button"
        onClick={() => cancelEditMode()}
      >
        Cancel
      </button>
      <button className="btn__editSave" type="submit">
        Save
      </button>
    </form>
  );
};

export default EditTodo;
