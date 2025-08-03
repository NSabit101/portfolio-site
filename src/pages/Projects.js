import React from 'react';

function Projects() {
  return (
    <div>
      <h2>My Projects</h2>

      <div className="project">
        <img src="/assets/project1.png" alt="Project 1" />
        <h3>Weather App</h3>
        <p>Built a React-based weather dashboard using OpenWeather API.</p>
      </div>

      <div className="project">
        <img src="/assets/project2.png" alt="Project 2" />
        <h3>ToDo List</h3>
        <p>Created a task manager with local storage and filters.</p>
      </div>

      <div className="project">
        <img src="/assets/project3.png" alt="Project 3" />
        <h3>Portfolio Site</h3>
        <p>This responsive site showcases my work and skills.</p>
      </div>
    </div>
  );
}

export default Projects;
