document.addEventListener('DOMContentLoaded', () => {

  let list = document.querySelector(".todo-list"),
    items = list.children,
    emptyListMessage = document.querySelector(".empty-tasks"),
    newItemForm = document.querySelector(".add-form"),
    newItemTitle = newItemForm.querySelector(".add-form-input"),
    taskTemplate = document.querySelector("#task-template").content,
    newItemTemplate = taskTemplate.querySelector(".todo-list-item");

  list.innerHTML = localStorage.getItem('todo');
  for (let i = 0; i < items.length; i++) {
    addCheckHandler(items[i]);
  }
  toggleEmptyListMessage();

  newItemForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    let taskText = newItemTitle.value;
    let task = newItemTemplate.cloneNode(true);
    let taskDescription = task.querySelector("span");

    taskDescription.textContent = taskText;
    newItemTitle.value = '';

    addCheckHandler(task);
    list.appendChild(task);
    toggleEmptyListMessage();
    saveLocal();
  });

  function toggleEmptyListMessage() {
    if (items.length === 0) {
      emptyListMessage.classList.remove("hidden");
    } else {
      emptyListMessage.classList.add("hidden");
    }
  }

  function addCheckHandler(item) {
    let checkbox = item.querySelector(".todo-list-input");

    checkbox.addEventListener("change", function () {
      item.classList.add('did');
      setTimeout(() => {
        item.remove();
        toggleEmptyListMessage();
        saveLocal();
      }, 1500);
    });
  }

  function saveLocal() {
    localStorage.setItem("todo", list.innerHTML);
  }
});
