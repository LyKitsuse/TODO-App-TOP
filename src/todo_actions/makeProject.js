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
        const project = document.createElement("div");
        projArea.append(project);

        project.classname = "project";
        project.id = itProject.id;
        project.className = 'project';

        const name = document.createElement('span');
        name.className = "name";
        name.textContent = itProject.name;
        project.append(name);

        const projectDesc = document.createElement("div");
        projectDesc.className = "projectDesc";
        projectDesc.textContent = itProject.desc;
        project.append(projectDesc);

        const description = document.createElement('span');
        description.className = "description";
        projectDesc.append(description);

        const projectContainer = document.createElement("div");
        projectDesc.append(projectContainer);
        projectContainer.className = "projectContainer";

        // TODO: Task Rewrite
        const totalTask = document.createElement("span");
        projectContainer.append(totalTask);
        totalTask.textContent = "Total Task: null"; // TODO: Replace

        const deleteBtn = document.createElement("span");
        projectContainer.append(deleteBtn);
        deleteBtn.innerHTML = '<i class="fi fi-br-trash"></i>';


    })
}