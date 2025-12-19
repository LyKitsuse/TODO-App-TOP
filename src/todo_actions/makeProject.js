export const project = [];
export function printProjects() {
    tasks.forEach((project) => {
        console.log(project);
    })
}

export default function makeProject(name, desc) {
    this.name = name;
    this.desc = desc;
    this.id = crypto.randomUUID();
}

export function printProject() {
    const elem = document.querySelector('#elements');
    const printTaskHeader = document.createElement("h1");
    printTaskHeader.textContent = "Projects";

    elem.append(printTaskHeader);
    let projArea;

    if(document.querySelector("#projectArea") == null) {
        projArea = document.createElement('div');
        projArea.id = "projectArea";
        elem.append(projArea);
    } else {
        projArea = document.querySelector('#projectArea');
    } 

    // Project Append

    project.forEach((itProject) => {

    })
}