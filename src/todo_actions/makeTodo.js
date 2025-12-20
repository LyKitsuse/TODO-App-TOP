import { isFirstDayOfMonth } from 'date-fns';
import { printAll } from '../index';
import { project } from './makeProject';

export const tasks = [];
export function printTasks() {
    tasks.forEach((task) => {
        console.log(task);
    })
}

export default function makeTask(name, desc, dueDate, priority, tag) {
    this.name = name;
    this.desc = desc;
    if(tag == 'null' || tag == ''){
        this.tag = "Unset"; 
    }
    else {
        project.forEach((proj, it) => {
            if(proj.name == tag) {
                this.class = proj.id;
                proj.count += 1;
            }
        })
        this.tag = tag;
    }
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = crypto.randomUUID();
}

export function printTask() {
    const elem = document.querySelector('#elements');
    const printTaskHeader = document.createElement("h1");
    printTaskHeader.textContent = "Tasks";

    elem.append(printTaskHeader);
    let taskArea;

    if(document.querySelector("#taskArea") == null) {
        taskArea = document.createElement('div');
        taskArea.id = "taskArea";
        elem.append(taskArea);
    } else {
        taskArea = document.querySelector('#taskArea');
    } 
    
    // print Each Task

    tasks.forEach((itTask) => {
        const task = document.createElement("div");
        taskArea.append(task);

        if(itTask.class != null){
            task.className = `task ${itTask.class}`;
        }
        else {
            task.className = `task`;
        }
        
        task.id = itTask.id;

        const infoContainer = document.createElement("div");
        infoContainer.className = "infoContainer";
        task.append(infoContainer);

        const name = document.createElement("span");
        name.textContent = itTask.name;
        const desc = document.createElement("span");
        desc.textContent = itTask.desc;
        const tag = document.createElement("span");
        tag.textContent = itTask.tag;

        infoContainer.append(name);
        name.className = "name";
        infoContainer.append(desc);
        desc.className = "description";
        infoContainer.append(tag);
        tag.className = "tag";

        const taskContainer = document.createElement("div");
        taskContainer.className = "taskContainer";

        const dueDate = document.createElement("span");
        dueDate.textContent = itTask.dueDate;

        const priority = document.createElement("span");
        changePriority(priority ,itTask.priority);
        priority.className = "priority";

        const deleteBtn = document.createElement("span");
        deleteBtn.className = "delete";
        deleteBtn.innerHTML = '<i class="fi fi-br-trash"></i>';

        task.append(taskContainer);
        taskContainer.append(dueDate);
        taskContainer.append(priority);
        taskContainer.append(deleteBtn);
    });
}

export function changePriority(prio, itTask) {
    if(!itTask) {
        prio.innerHTML = '<i class="fi fi-br-star"></i>';
    } else {
        // Prioritize
        prio.innerHTML = '<i class="fi fi-sr-star" style="color: gold"></i>';
    }
}

document.getElementById("elements").addEventListener("click", (e) => {
    // check if a priority icon was clicked
    if (!e.target.closest(".priority")) return;

    const prioritySpan = e.target.closest(".priority");
    const taskElem = prioritySpan.closest(".task");

    tasks.forEach((itTask) => {
        if (itTask.id === taskElem.id) {
            itTask.priority = !itTask.priority;
        }
    });

    // re-render
    printAll();
});


// TODO: Project Tag
// TODO: Add Persistent Data


