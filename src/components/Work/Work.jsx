import React from "react";
import { projects } from "../dataProjects/dataProjects";
import { AiOutlineGithub } from "react-icons/ai";
import deployicon from "../../assets/Work/deployicon.svg";
import row from "../../assets/Work/row.svg";
import rowBT from "../../assets/Work/row-bt.svg";
import "./work.css";
const Work = () => {
  return (
    <section
      id="Work"
      className="w-full items-center justify-center bg-Secondary   py-1 lg:px-[112px] flex flex-col px-6  "
    >
      <div className="max-w-7xl w-[80%] md:w-auto  flex-col items-center relative justify-center gap-8 flex flex-wrap ">
        <img
          className="absolute row-vector top-[187px] left-[-75px]"
          width="100px"
          src={row}
          alt="row"
        />
        <img
          className="absolute rowbt-vector   bottom-[57px]  right-[-71px]"
          width="100px"
          src={rowBT}
          alt="rowBT"
        />
        <div className="w-full max-w-7xl px-1 sm:px-4">
          <h2 className="md:text-textH2 text-textH4 text-left  font-SourceCodePro mb-1 ">
            My latest <span className="text-Primary">work</span>
          </h2>
        </div>

        <div className="w-full flex justify-center flex-wrap  gap-10 md:gap-6 p-0 md:p-4 flex-col lg:w-full lg:flex-row">
          {projects.map((project) => {
            const isInProcess =
              project.hasOwnProperty("finished") && project.finished;
            return (
              <div
                key={project.id}
                className=" relative w-full p-[26px] bg-SecondaryLight flex flex-col gap-6 rounded-[10px]  lg:w-[43%] "
              >
                {isInProcess === false && (
                  <span className="absolute right-0 top-0 bg-red-800 p-3 rounded-tr-xl">
                    En proceso
                  </span>
                )}
                <h1 className="md:text-textH3 text-textH5 font-SourceCodePro ">
                  {project.name}
                </h1>
                <div className="container-img">
                  <img src={project.img} alt="imagen" />
                </div>

                <div className="w-full flex justify-between  gap-5 px-1">
                  <div className="flex flex-wrap items-center gap-3 ">
                    {project.technologies.map((technology, i) => {
                      return (
                        <p
                          className="text-textsmall font-SourceSansPro bg-Secondary rounded-[3px] px-2 py-1"
                          key={i}
                        >
                          {technology}
                        </p>
                      );
                    })}
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <a href={project.linkGitHub} target="blank">
                      <AiOutlineGithub width="26px" height="26px" />
                    </a>
                    <a href={project.linkDeploy} target="blank">
                      <img
                        src={deployicon}
                        width="18px"
                        height="18px"
                        alt="img-deploy"
                      />
                    </a>
                  </div>
                </div>
                <p>{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
