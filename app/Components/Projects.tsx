import Link from "next/link";
import projects from "../data/projects.json";

const Projects = () => {
  return (
    <div className="pt-20" id="projects">
      <h2 className="mb-4 font-medium text-4xl">Project</h2>

      {projects.map((project) => (
        <>
          <section className="pb-8 project-card">
            <h3 className="text-xl font-medium">{project.name}</h3>
            <div className="flex gap-4 py-3">
              <Link href={project.url}>Live</Link>
              <Link href={project.code}>Code</Link>
            </div>
            {/* Project Description  */}

            <li className="list-disc ">{project.point2}</li>
            <li className="list-disc ">{project.point1}</li>
            <li className="list-disc ">{project.point3}</li>
            <li className="list-disc ">{project.point4}</li>
            <li>
              <strong>Tech stack: </strong>
              {project.technologies.map((tech, i) => (
                <span
                  className="px-2 py-1 bg-gray-200 rounded-md text-gray-700 text-sm mr-2"
                  key={i}
                >
                  {tech}
                </span>
              ))}
            </li>
          </section>
          <hr />
        </>
      ))}
    </div>
  );
};

export default Projects;
