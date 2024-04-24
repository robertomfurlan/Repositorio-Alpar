document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
  
    addTaskButton.addEventListener("click", function() {
      const taskName = taskInput.value.trim();
      if (taskName !== "") {
        addTask(taskName);
        taskInput.value = "";
      }
    });
  
    function addTask(taskName) {
      const taskItem = document.createElement("li");
      taskItem.classList.add("task");
      taskItem.innerHTML = `
        <input type="checkbox">
        <label>${taskName}</label>
        <button class="deleteTask">X</button>
      `;
      taskList.appendChild(taskItem);
  
      const deleteButton = taskItem.querySelector(".deleteTask");
      deleteButton.addEventListener("click", function() {
        taskList.removeChild(taskItem);
      });
  
      const checkbox = taskItem.querySelector("input[type='checkbox']");
      checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
          taskItem.classList.add("completed");
        } else {
          taskItem.classList.remove("completed");
        }
      });
    }
  });  