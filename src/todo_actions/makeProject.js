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
     const ProjectArea = document.createElement('div');
    ProjectArea.id = "projectArea";
    const elem = document.querySelector('#elements');
    const printTaskHeader = document.createElement("h1");
    printTaskHeader.textContent = "Projects";

    elem.append(printTaskHeader);
    elem.append(ProjectArea);
}