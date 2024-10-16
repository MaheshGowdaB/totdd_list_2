document.getElementById("add-task").addEventListener("click", function () {
  let taskInput = document.getElementById("new-task").value;

  if (taskInput.trim() === "") {
    alert("Please enter a task");
    return;
  }

  let taskList = document.getElementById("task-list");
  let taskItem = document.createElement("li");
  taskItem.innerHTML = `
        <span class="task-text">${taskInput}</span>
        <button class="btn complete-btn">Complete</button>
        <button class="btn remove-btn">Remove</button>
    `;

  taskList.appendChild(taskItem);
  document.getElementById("new-task").value = "";

  // Complete task
  taskItem
    .querySelector(".complete-btn")
    .addEventListener("click", function () {
      taskItem.querySelector(".task-text").classList.toggle("complete");
    });

  // Remove task
  taskItem.querySelector(".remove-btn").addEventListener("click", function () {
    taskList.removeChild(taskItem);
  });
});
