import { useEffect } from "react";
import experiences from "../data/experiences.json";
import exp from "constants";

const Experience = () => {
  useEffect(() => {
    console.log(experiences);
  }, []);
  return (
    <div className="py-20" id="experience">
      <h2 className="font-medium text-8xl">Experience</h2>

      {experiences.map((exp, i) => (
        <>
          <section className="py-6" key={i}>
            <label>{`${exp.startDate} - ${exp.endDate}`}</label>
            <h3 className="text-xl font-medium">
              {`${exp.name} - @${exp.company}`}
            </h3>
            <li className="list-disc pl-6">{exp.point1}</li>
            <li className="list-disc pl-6">{exp.point2}</li>
            <li className="list-disc pl-6">{exp.point3}</li>
            {exp.point4 ? (
              <li className="list-disc pl-6">{exp.point4}</li>
            ) : null}
            <div>
              {exp.technologies.map((tech, i) => (
                <span
                  className="px-2 py-1 bg-gray-200 rounded-md text-gray-700 text-sm mr-2"
                  key={i}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
          <hr />
        </>
      ))}
    </div>
  );
};

export default Experience;
