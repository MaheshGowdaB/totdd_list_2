document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("new-task");
  const taskList = document.getElementById("task-list");
  const addTaskBtn = document.getElementById("add-task-btn");

  // Function to create a new task
  const createTask = (taskText) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    const taskSpan = document.createElement("span");
    taskSpan.classList.add("task-text");
    taskSpan.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";

    // Mark task as completed when clicked
    taskSpan.addEventListener("click", () => {
      taskItem.classList.toggle("completed");
    });

    // Remove task when delete button is clicked
    deleteBtn.addEventListener("click", () => {
      taskItem.remove();
    });

    // Append elements to taskItem
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteBtn);

    // Add taskItem to the list
    taskList.appendChild(taskItem);
  };

  // Event listener for Add Task button
  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      createTask(taskText);
      taskInput.value = ""; // Clear input field after adding task
    }
  });

  // Add task when pressing Enter key
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTaskBtn.click();
    }
  });
});
