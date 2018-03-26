'use strict';

class App {
    constructor() {
    }
    initialize() {
        this.projectsList = document.getElementsByClassName('project-view');
        this.index = 0;
        console.log(this.projectsList);
        
        // Set first to active and the rest to inactive-right
        this.projectsList[0].classList.add('project-view-active');
        for (let i = 1; i < this.projectsList.length; ++i) {
            this.projectsList[i].classList.add('project-view-inactive-right');
        }
        
        // Deactivate the left scroll button
        document.getElementById('scroll-button-left').classList.add('scroll-button-inactive');
        
        if (this.index == this.projectsList.length - 1) {
            // Deactivate the right scroll button
            document.getElementById('scroll-button-right').classList.add('scroll-button-inactive');
        }
    }
    projects_toggle(context) {
        console.log(context.innerHTML);
        
        for (let i = 0; i < this.projectsList.length; ++i) {
            let projectTechList = this.projectsList[i].getElementsByTagName('ul')[0].getElementsByTagName('li');
            projectTechList = [].slice.call(projectTechList).map((a,b)=>{console.log(a.innerHTML)});
        }
        
        // TODO: Filter shown projects based on technology used
        // TODO: Map project skills to a separate array
        // TODO: Fix potential indexing issues e.g. end of list, project index change
    }
    project_list_scroll(direction=0) {
        // Don't scroll past the beginning or end of the list
        // Ignore direction = 0
        if (direction == 0) {return;}
        else if (direction == -1 && this.index == 0) {return;}
        else if (direction == 1 && this.index == this.projectsList.length - 1) {return;}
        
        // Set the current project view to inactive
        let project = this.projectsList[this.index];
        let projectClassList = project.classList;
        projectClassList.remove('project-view-active');
        projectClassList.add(direction == -1 ? 'project-view-inactive-right' : 'project-view-inactive-left');
        this.index += direction;

        // Set the new project view to active
        project = this.projectsList[this.index];
        projectClassList = project.classList;
        projectClassList.remove(direction == -1 ? 'project-view-inactive-left' : 'project-view-inactive-right');
        projectClassList.add('project-view-active');
        
        // Activate or deactive the scroll buttons
        if (this.index == 0) {
            // Deactivate the left scroll button
            document.getElementById('scroll-button-left').classList.add('scroll-button-inactive');
        } else if (this.index == 1) {
            // Activate the left scroll button
            document.getElementById('scroll-button-left').classList.remove('scroll-button-inactive');
        }
        
        if (this.index == this.projectsList.length - 1) {
            // Deactivate the right scroll button
            document.getElementById('scroll-button-right').classList.add('scroll-button-inactive');
        } else if (this.index == this.projectsList.length - 2) {
            // Activate the right scroll button
            document.getElementById('scroll-button-right').classList.remove('scroll-button-inactive');
        }
    }
    
}

let app = new App();