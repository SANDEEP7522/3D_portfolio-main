import { Link } from "react-router-dom";
import React from "react";
import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        Over the years, I've worked on many projects, but the ones showcased
        here are the most meaningful to me. Many are open-source, so if you find
        something that resonates with you, feel free to explore the codebase and
        contribute your ideas for further enhancements. Your input is highly
        valued!
      </p>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-5 font-poppins">
                <Link
                  to={project.link01}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 flex items-center gap-1"
                >
                  Frontend
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </Link>

                <Link
                  to={project.link02}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 flex items-center gap-1"
                >
                  Backend{" "}
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
