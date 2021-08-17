document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById("create-task-form");
  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    renderTask(e.target.querySelector("input").value);
    newTaskForm.reset();
  })
  
});

function renderTask(userInput) {
  const newItem = document.createElement("li");
  const delBttn = document.createElement("button");

  newItem.textContent = `${userInput} `;
  delBttn.addEventListener("click", () => newItem.remove());

  tasks.appendChild(newItem);
  delBttn.textContent = " del ";
  newItem.appendChild(delBttn);
}
