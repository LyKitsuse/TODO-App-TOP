export const tasks = [];
export function printTasks() {
    tasks.forEach((task) => {
        console.log(task);
    })
}

export default function makeTask(name, desc, dueDate, priority) {
    this.name = name;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = crypto.randomUUID();
}



