import Link from "next/link";

const Projects = () => {
  return (
    <div className="py-20" id="projects">
      <h2 className="mb-4 font-medium text-8xl">Project</h2>

      <section className="py-6">
        <hr />
        <div className="py-12 ">
          <h3 className="text-4xl font-medium">NoteMesh</h3>
          <div className="flex gap-4 py-3">
            <Link href="">Live</Link>
            <Link href="">Code</Link>
          </div>
          {/* Project Description  */}

          <ul className="list-disc">
            <li>
              Implemented secure user authentication ensuring data privacy.
            </li>
            <li>
              Achieved cross-device accessibility for seamless note access.
            </li>
            <li>
              Developed real-time note creation, editing, and deletion
              functionality.
            </li>
            <li> Enabled multi-user collaboration on the same note.</li>
            <li>
              <strong>Tech stack:</strong> Next.js, React Native, Node.js,
              MongoDB, Figma, Socket.io
            </li>
          </ul>
        </div>
        <hr />
      </section>
    </div>
  );
};

export default Projects;
