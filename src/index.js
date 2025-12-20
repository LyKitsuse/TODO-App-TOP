import makeTask, { tasks, printTask } from "./todo_actions/makeTodo.js";
import makeProject, { project, printProject, checkTagExist } from "./todo_actions/makeProject.js";
import "./styles.css";

const home = document.getElementById("home");
const newTask = document.getElementById("newTask");
const newTaskDialog = document.getElementById("newTaskDialog");
const newProj = document.getElementById("newProject");
const newProjDialog = document.getElementById("newProjectDialog");
const myTasks = document.getElementById("myTasks");
const myProjects = document.getElementById("myProjects");

home.addEventListener("click", () => {
    printAll();
})

newTask.addEventListener("click", () => {
    newTaskDialog.show();
});

newProj.addEventListener("click", ()=> {
    newProjDialog.show();
})

myTasks.addEventListener("click", () => {
    const elem = document.getElementById("elements");
    elem.innerHTML = '';
    printTask();
})

myProjects.addEventListener("click", () => {
    const elem = document.getElementById("elements");
    elem.innerHTML = '';
    printProject();
})

const submitTask = document.querySelector("#submitTask");
const submitProj = document.querySelector("#submitProj");
const cancel = document.querySelector(".cancel");

const taskName = document.getElementById("taskName");
const taskDesc = document.getElementById("taskDesc");
const taskDue = document.getElementById("taskDue");


const projName = document.getElementById("projectName");
const projDesc = document.getElementById("projectDesc");

submitTask.addEventListener("click", (e)=> {
    let taskPrio = document.getElementById("taskPrio").checked;
    let taskTag = document.getElementById("taskTag");
    console.log("ping")
    if(!checkTagExist(taskTag.value)) {
        alert("Must be a Valid Project Name!");
    }
    else {
        let newTask = new makeTask(taskName.value, taskDesc.value, taskDue.value, taskPrio, taskTag.value);
        tasks.push(newTask);
    }
    document.getElementById('taskForm').reset();

    printAll();
});

submitProj.addEventListener("click", () => {
    let newProj = new makeProject(projName.value, projDesc.value);
    project.push(newProj);
    document.getElementById('projForm').reset();

    printAll();
})


export function printAll() {
    const elem = document.getElementById("elements");
    elem.innerHTML = '';
    printProject();
    printTask();
}

cancel.addEventListener("click", () => {
    newTaskDialog.close();
    newProjDialog.close();
})




/**
 * Must be able to
 * / Make a TODO with (title, desc, dueDate, priority)
 * / Make a Project that has TODOs in them
 * - Project Needs to reflect all tasks with the tag of the proj id
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