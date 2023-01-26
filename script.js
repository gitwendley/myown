const navLinks = document.querySelectorAll("nav a");
const currentPage = window.location.pathname;

navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute("href");
      const target = document.querySelector(targetId);
      target.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.
const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("task-input");
const addTaskForm = document.getElementById("add-task-form");

// Add event listener to the form to handle the adding of new tasks
addTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Get the input value
  const task = taskInput.value;
  // Create a new list item with the task text
  const li = document.createElement("li");
  li.textContent = task;
  // Append the list item to the task list
  taskList.appendChild(li);
  // Clear the input
  taskInput.value = "";
});




