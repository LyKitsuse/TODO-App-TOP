export const tasks = [];
export function printTasks() {
    tasks.forEach((task) => {
        console.log(task);
    })
}

export default function makeTask(name, desc, dueDate, priority) {
    this.name = name;
    this.desc = desc;
    this.tag = "Unset"
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

        task.className = "task";
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
        dueDate.textContent = "9/11/2001";

        // Turn into Function
        const priority = document.createElement("span");
        if(!itTask.priority) {
            priority.innerHTML = '<i class="fi fi-br-star"></i>';
        } else {
            priority.innerHTML = '<i class="fi fi-sr-star"></i>'
        }
        priority.className = "priorty";

        const deleteBtn = document.createElement("span");
        deleteBtn.className = "delete";
        deleteBtn.innerHTML = '<i class="fi fi-br-trash"></i>';

        task.append(taskContainer);
        taskContainer.append(dueDate);
        taskContainer.append(priority);
        taskContainer.append(deleteBtn)
    });
}


