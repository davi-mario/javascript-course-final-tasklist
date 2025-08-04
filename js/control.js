// Created by Davi Henrique  
// Month: July/August 2025  
// Based on a YouTube JavaScript tutorial  
// Practicing and improving JavaScript techniques

let counter = 0; // Unique ID for each task
let input = document.getElementById("inputTask"); // Input field
let btnAdd = document.getElementById("btn-add"); // Add button
let main = document.getElementById("taskArea"); // Area where tasks will appear

// Function to add a new task
function addTask() {
  let inputValue = input.value; // Get text typed by the user

  // Validate input (must not be empty)
  if (inputValue !== "" && inputValue !== null && inputValue !== undefined) {

    counter++; // Increase ID counter

    // HTML structure for one task
    let newItem = `
      <div id="${counter}" class="item">
      
        <!-- Left icon: will be a circle (unchecked) or check (checked). Clicking it toggles task status -->
        <div onclick="markTask(${counter})" class="item-icon">
          <i id="icon_${counter}" class="mdi mdi-circle-outline"></i>
        </div>

        <!-- Task name (text typed by the user). Clicking it also toggles the task status -->
        <div onclick="markTask(${counter})" class="item-name">
          ${inputValue}
        </div>

        <!-- Right button: when clicked, deletes the task -->
        <div class="item-button">
          <button onclick="deleteTask(${counter})" class="delete">
            <i class="mdi mdi-delete"></i>Delete
          </button>
        </div>
        
      </div>
    `;

    // Add the new task to the page
    main.innerHTML += newItem;

    // Clear input field and focus again
    input.value = "";
    input.focus();
  }
}

// Function to delete a task by its ID
function deleteTask(id) {
  let task = document.getElementById(id);
  task.remove(); // Removes the task element from the page
}

// Function to mark a task as completed or uncompleted
function markTask(id) {
  let item = document.getElementById(id);
  let currentClass = item.getAttribute("class"); // Get current class

  console.log(currentClass); // Debugging only (optional)

  if (currentClass === "item") {
    item.classList.add("checked"); // Add style for completed tasks

    let icon = document.getElementById("icon_" + id);
    icon.classList.remove("mdi-circle-outline");
    icon.classList.add("mdi-check-circle");

    // Move the completed task to the bottom
    item.parentNode.appendChild(item);

  } else {
    item.classList.remove("checked"); // Remove "checked" style

    let icon = document.getElementById("icon_" + id);
    icon.classList.remove("mdi-check-circle");
    icon.classList.add("mdi-circle-outline");
  }
}

// Pressing Enter will also add the task (keyboard shortcut)
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault(); // Avoid default form submission
    btnAdd.click();         // Simulate the Add button click
  }
});
