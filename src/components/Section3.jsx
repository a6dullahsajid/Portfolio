import projects from "../data/projects.js";
import Project from "./Project.jsx";
export default function Section3() {
  return (
    <section id="section3">
      <h2 className="projects">
        Projects
        <div className="line"></div>
      </h2>
      <div className="allprojects">
        {projects.map((project, index)=> {
          return (
            <Project
              key={index}
              name={project.name}
              description={project.description}
              image={project.imagePrev}
              link={project.link}
              code={project.code}
              techUsed={project.techUsed}
            />
          );
        })}
      </div>
    </section>
  );
}
