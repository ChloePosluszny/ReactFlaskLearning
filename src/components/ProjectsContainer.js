import * as React from 'react';
import "./ProjectsContainer.css"
import Container from "./Container.js";

function ProjectsContainer({projects}) {
    const usersList = ["list","of","users","for","project","1","2","3","4"];
    const hardwareSetsList = [["HWset1", 50, 100], ["HWset2", 34, 100], ["HWset3", 100, 100], ["HWset4", 100, 100]];

    return(
        <>
            <div className = "ProjectsContainer">
                <h1>Projects</h1>
                <ul>
                    {projects.map((project) => (
                        <Container key={project} title={project} users={usersList} hardwareSets={hardwareSetsList}>
                            {project}
                        </Container>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ProjectsContainer;