import makeTask, { tasks, printTask, saveTasks, loadTasks } from "./todo_actions/makeTodo.js";
import removeTask from "./todo_actions/remove.js";
import makeProject, { project, printProject, appendComboBox, saveProjects, loadProjects } from "./todo_actions/makeProject.js";
import storageAvailable from "./todo_actions/localStorage.js"
import "./styles.css";


const newTaskDialog = document.getElementById("newTaskDialog");
const newProjDialog = document.getElementById("newProjectDialog");
const toolbar = document.getElementById("toolbar");
const elem = document.getElementById('elements');

printAll();

toolbar.addEventListener('click', (e) => {
    console.log('pong')
    if(e.target.closest('#home')){
        console.log("ping")
        printAll();
    }
    if(e.target.closest('#newTask')){
        newTaskDialog.show();
    }
    if(e.target.closest('#newProject')){
        newProjDialog.show();
    }
    if(e.target.closest('#myTasks')){
        elem.innerHTML = '';
        printTask();
    }
    if(e.target.closest('#myProjects')){
        elem.innerHTML = '';
        printProject();
    }
})

// Form Submit Btn

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
    
    if (storageAvailable("localStorage")) {
        console.log("Storage Available!");

        if(!document.getElementById('taskForm').checkValidity()){
            // If the Form is Invalid
            console.log("Form Invalid");
            return;
        }
        else {
            // If the Form is valid
            let newTask = new makeTask(taskName.value, taskDesc.value, taskDue.value, taskPrio, taskTag.value);
            tasks.push(newTask);
            saveTasks();
            printAll();
            newTaskDialog.close();
        }
    } else {
        console.log("UNAVAILABLE!")
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
    saveProjects();
    printAll();
    newProjDialog.close();

})


export function printAll() {
    const elem = document.getElementById("elements");
    elem.innerHTML = '';
    loadTasks();
    loadProjects();
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