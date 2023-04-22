import Todo from "./Todo";

function TodoContainer({ todoList, deleteTask, completeTask, editTask }) {
  return (
    <div className="todolist-Container">
      <ul className="todo-list">
        {todoList.map((todo, index) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              index={index}
              deleteTask={deleteTask}
              completeTask={completeTask}
              editTask={editTask}
            />
          );
        })}
      </ul>
    </div>
  );
}
export default TodoContainer;
