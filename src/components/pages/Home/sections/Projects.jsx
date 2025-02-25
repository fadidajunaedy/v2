import { IoIosArrowRoundForward } from "react-icons/io";
import projects from "../../../../datas/json/projects.json";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section>
      <div className="container border-b border-dark-2 py-12">
        <h2 className="mb-4 md:mb-8">Projects</h2>
        <ul className="w-full flex flex-col-reverse gap-3 md:gap-6">
          {projects.map((project, index) => (
            <li key={index} className="group">
              <Link
                to={`/projects/${project.key}`}
                title={project.title}
                className="transition-all duration-300 ease-in-out flex items-center gap-2 cursor-pointer leading-none"
              >
                <IoIosArrowRoundForward
                  size={24}
                  className="transition-all duration-300 ease-in-out w-0 group-hover:w-auto -mr-2 group-hover:mr-2 group-hover:text-accent"
                />
                <span className="group-hover:text-[var(--color-white)] group-hover:font-bold">
                  {String(index + 1).padStart(3, "0")}.
                </span>
                <p className="text-white">{project.title}</p>
                <span className="self-end mb-1 border-b border-dashed border-[var(--color-grey)] group-hover:text-white flex-grow -translate-y-[0.05rem]"></span>
                <p className="text-xs sm:text-sm text-right group-hover:text-white italic">
                  {project.year}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
