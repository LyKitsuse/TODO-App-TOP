import makeTask, { tasks, printTask } from "./todo_actions/makeTodo.js";
import removeTask from "./todo_actions/remove.js";
import makeProject, { project, printProject, checkTagExist, appendComboBox } from "./todo_actions/makeProject.js";
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
    let taskTag = document.getElementById("projectTag");
    console.log("ping")
    if(!checkTagExist(taskTag.value)) {
        alert("Must be a Valid Project Name!");
    }
    else if(!document.getElementById('taskForm').checkValidity()){
        console.log("Form Invalid");
        return;
    }
    else {
        let newTask = new makeTask(taskName.value, taskDesc.value, taskDue.value, taskPrio, taskTag.value);
        tasks.push(newTask);
        printAll();
        newTaskDialog.close();
    }
    document.getElementById('taskForm').reset();
});

submitProj.addEventListener("click", () => {
    if(projName.value.length === 0){
        throwError();
        return;
    }
    if(!document.getElementById('projForm').checkValidity()) {
        console.log("Form Invalid");
        return;
    }
    let newProj = new makeProject(projName.value, projDesc.value);
    project.push(newProj);
    document.getElementById('projForm').reset();
    appendComboBox();
    printAll();
    newProjDialog.close();

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

document.getElementById("elements").addEventListener("click", (e) => {
    removeTask(e);
    printAll();
});

function throwError() {
    alert("Invalid Project Name!");
}

/**
 * Must be able to
 * / Make a task with (title, desc, dueDate, priority)
 * / Make a Project that has tasks in them
 * / Project Needs to reflect all tasks with the tag of the proj id
 * - Edit task
 * / Delete task/proj
 * - Add Persistent Data using localStorage (https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
 */