import { tasks } from './makeTodo';
import { project } from './makeProject';

export default function removeTask(e) {
    if (!e.target.closest(".delete")) return;
    if (e.target.closest(".delete")) {
        const deleteSpan = e.target.closest(".delete");
        if(deleteSpan.closest(".task")){
            console.log("pang");
            const taskElem = deleteSpan.closest(".task");

            // remove task from array
            const index = tasks.findIndex(itTask => itTask.id === taskElem.id);
            if (index !== -1) {
                tasks.splice(index, 1);
            }
        }
        if(deleteSpan.closest(".project")) {
            
            const projElem = deleteSpan.closest(".project");

            // remove project from array
            const index = project.findIndex(itProj => itProj.id === projElem.id);
            if(index !== -1){
                // TODO: Delete Tasks with ID of the Proj
                for(let i = tasks.length - 1; i >= 0; i--) {
                    if(tasks[i].classID == projElem.id){
                        tasks.splice(i, 1);
                    }
                }

                console.log("peng");
                project.splice(index, 1);
            }
        }
    }
}