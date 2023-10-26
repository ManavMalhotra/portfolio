import Link from "next/link";
import projects from "../data/projects.json";

const Projects = () => {
  return (
    <div className="py-20" id="projects">
      <h2 className="mb-4 font-medium text-8xl">Project</h2>

      {projects.map((project) => (
        <>
          <section className="py-6 project-card">
            <h3 className="text-4xl font-medium">{project.name}</h3>
            <div className="flex gap-4 py-3">
              <Link href={project.url}>Live</Link>
              <Link href={project.code}>Code</Link>
            </div>
            {/* Project Description  */}

            <ul className="list-disc">
              <li>{project.point1}</li>
              <li>{project.point2}</li>
              <li>{project.point3}</li>
              <li>{project.point4}</li>
              <li>
                <strong>Tech stack: </strong>
                {project.technologies.map((tech) => (
                  <span className="px-2 py-1 bg-gray-200 rounded-md text-gray-700 text-sm mr-2">
                    {tech}
                  </span>
                ))}
              </li>
            </ul>
          </section>
          <hr />
        </>
      ))}
    </div>
  );
};

export default Projects;
