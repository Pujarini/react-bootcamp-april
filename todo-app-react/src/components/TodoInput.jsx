import { useState } from "react";

/**
 * {
 * id:1,
 * name:play,
 * active:true
 * }
 * @param {} param0
 * @returns
 */

/**
 * add a input on click of enter
 * add a logic where user can't input empty todo
 * create the above the object as todo
 * [{name:play},{naem:eat}]
 */

const TodoInput = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  const [count, setCount] = useState(0);
  function userInput(e) {
    const value = e.target.value;
    if (value !== "") {
      setTodo(e.target.value);
    }
  }

  const onSubmitHAndler = (e) => {
    e.preventDefault();
    if (todo) {
      let todoItem = {
        id: count,
        name: todo,
        active: true,
      };
      addTodo(todoItem);
      setCount(count + 1);
      setTodo("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHAndler}>
        <input
          type="text"
          placeholder="Enter todos"
          onChange={userInput}
          value={todo}
        />
      </form>
    </div>
  );
};

/**
 * input.addEventListener("click", function(e){})
 */

export default TodoInput;
