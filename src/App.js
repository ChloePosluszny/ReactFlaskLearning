import ProjectsContainer from "./components/ProjectsContainer.js"

function App() {
  const projectList = ["Project 1", "Purple Project", "The Best Project", "Projectmcprojectface", "Project 2", "Proji"]

  return(
    <>
      <div><ProjectsContainer projects = {projectList}></ProjectsContainer></div>
    </>
  );
}

export default App;