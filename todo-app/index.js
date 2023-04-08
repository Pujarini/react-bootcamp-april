const todoInput = document.querySelector(".new-todo");
const todoContainer = document.querySelector(".todosContainer");
let todoListItemsCount = 0;

const filterActions = ["All", "Active", "Completed"];

function completeAndDeleteTodos(e) {
  const todoListItemClassName = e.target.className;
  const todoListItem = e.target;

  if (todoListItemClassName === "todo-toggle") {
    // completed the item

    const todoCompleteStatus = todoListItem.checked;
    if (todoCompleteStatus) {
      todoListItem.parentNode.classList.add("todoItem__completed");
    } else {
      todoListItem.parentNode.classList.remove("todoItem__completed");
    }
  }

  if (todoListItemClassName === "todoList__delete") {
    // delete item
    const parent = todoListItem.parentNode.parentNode;
    parent.remove();
  }
}

function editTodo(e) {
  const parent = e.target.parentNode.parentNode; // li with edit mode
  const todoItem = e.target; // todo value
  const value = e.target.innerText; // todo value
  const viewContent = todoItem.parentNode; // div

  if (todoItem.className === "todo-value") {
    parent.classList.add("editTodo");
    viewContent.style.display = "none";
    const editTodoItem = document.createElement("input");
    editTodoItem.className = "edit_mode";
    editTodoItem.value = value;
    console.log(parent);
    parent.appendChild(editTodoItem);
    editTodoItem.addEventListener("keyup", function (e) {
      const editedValue = e.target.value;
      if (e.key === "Enter") {
        const inputBox = parent.querySelector(".edit_mode");
        inputBox.remove();
        viewContent.style.display = "flex";
        const newEditedTodoItem = viewContent.querySelector(".todo-value");
        newEditedTodoItem.innerText = editedValue;
        parent.classList.remove("editTodo");
      }
    });
  }
}

function applyFilters(e) {
  const filter = e.target.className;
  const todoList = document.querySelector(".todo-list").childNodes;

  todoList.forEach((todo) => {
    const completedItemStatus = todo
      .querySelector(".todo-view")
      .classList.contains("todoItem__completed");
    if (filter === "All") {
      // all
      todo.removeAttribute("style");
    } else if (filter === "Completed") {
      console.log("completed");
      //completed

      if (!completedItemStatus) {
        todo.style.display = "none";
      } else {
        console.log(todo);
        todo.querySelector(".todo-view").style.display = "flex";
      }
    } else if (filter === "Active") {
      if (completedItemStatus) {
        todo.style.display = "none";
      } else {
        todo.removeAttribute("style");
      }
    }
  });
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "filters-Container";
  const todoItemsCount = document.createElement("span");
  todoItemsCount.className = "todo-count";
  todoItemsCount.innerText = 0;

  const filterGroup = document.createElement("ul");
  filterActions.map((item) => {
    const filters = document.createElement("li");
    filters.className = item;
    filters.innerText = item;
    filterGroup.appendChild(filters);
  });
  filterGroup.addEventListener("click", applyFilters);

  footer.appendChild(todoItemsCount);
  footer.appendChild(filterGroup);
  todoContainer.appendChild(footer);
}

function createTodoListContainer() {
  const todoList = document.createElement("section");
  todoList.className = "main";

  const todoItems = document.createElement("ul");
  todoItems.className = "todo-list";
  todoList.appendChild(todoItems);
  todoContainer.appendChild(todoList);

  todoItems.addEventListener("click", completeAndDeleteTodos);
  todoItems.addEventListener("dblclick", editTodo);
}

function updateTodoItemCount() {
  const itemCount = document.querySelector(".todo-count");
  itemCount.innerText = `${todoListItemsCount} Items`;
}

function addTodo(todo) {
  todoInput.value = "";
  todoListItemsCount++;
  updateTodoItemCount();

  const todoItem = document.createElement("li");
  todoItem.className = "todoItem";
  const todoContent = document.createElement("div");
  todoContent.className = "todo-view";

  const todoValue = document.createElement("label");
  todoValue.className = "todo-value";
  todoValue.innerText = todo;

  const todoComplete = document.createElement("input");
  todoComplete.className = "todo-toggle";
  todoComplete.type = "checkbox";

  const delButton = document.createElement("button");
  delButton.className = "todoList__delete";
  delButton.innerText = "X";

  todoContent.appendChild(todoComplete);
  todoContent.appendChild(todoValue);
  todoContent.appendChild(delButton);

  todoItem.appendChild(todoContent);

  const todoList = document.querySelector(".todo-list");
  todoList.appendChild(todoItem);
}

todoInput.addEventListener("keyup", function (e) {
  const inputValue = todoInput.value;
  if (e.key === "Enter") {
    if (inputValue) {
      if (!todoContainer.querySelector(".main")) {
        createTodoListContainer();
        createFooter();
      }
    }
    addTodo(inputValue);
  }
});

/**
 * keyup
 * keydown
 */

/**
 * existing todo item then container is available already
 * butif no todo item then you have toi create a container
 */
