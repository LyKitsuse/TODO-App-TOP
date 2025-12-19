import makeTodo from "./todo_actions/makeTodo.js";

import "./styles.css"

const newTask = document.getElementById("newTask");
const newTaskDialog = document.getElementById("newTaskDialog");

newTask.addEventListener("click", () => {
    newTaskDialog.show();
})





/**
 * Must be able to
 * - Make a TODO with (title, desc, dueDate, priority)
 * - Make a Project that has TODOs in them
 * - View TODOs by clicking
 * - Edit TODO
 * - Delete TODO
 * - Add Persistent Data using localStorage (https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
 */

/**
 * Personal Notes
 * - Each TODO can have their own ID
 * - The ID can be used to get the appropriate TODO for editing or deleting
 * - Return null if TODO id is invalid or DNE
 */