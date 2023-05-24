import React from "react";
import { projects } from "../dataProjects/dataProjects";
import { AiOutlineGithub } from "react-icons/ai";
import deployicon from "../../assets/Work/deployicon.svg";
import "./work.css";
const Work = () => {
  return (
    <section className="w-full items-center justify-center bg-Secondary   py-1 lg:px-[112px] flex flex-col px-6  ">
      <div className="max-w-7xl flex-col items-center justify-center flex flex-wrap ">
        <div className="w-full max-w-7xl px-1 sm:px-4">
          <h2 className="md:text-textH2 text-textH4 text-left  font-SourceCodePro mb-1 ">
            My Latest <span className="text-Primary">work</span>
          </h2>
        </div>

        <div className=" w-full flex justify-center flex-wrap gap-6 p-0 md:p-4 flex-col lg:w-full lg:flex-row">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className=" w-full p-[26px] bg-SecondaryLight flex flex-col gap-6 rounded-[10px]  lg:w-[40%] "
              >
                <h1 className="md:text-textH3 text-textH5 font-SourceCodePro ">
                  {project.name}
                </h1>
                <div className="container-img">
                  <img src={project.img} alt="imagen" />
                </div>

                <div className="w-full flex md:justify-between justify-normal gap-5 px-1">
                  <div className="flex flex-wrap items-center gap-3 ">
                    {project.technologies.map((technology, i) => {
                      return (
                        <p
                          className=" text-textsmall font-SourceSansPro bg-Secondary rounded-[3px] px-2  py-1"
                          key={i}
                        >
                          {technology}
                        </p>
                      );
                    })}
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <AiOutlineGithub width="26px" height="26px" />
                    <img
                      src={deployicon}
                      width="18px"
                      height="18px"
                      alt="img-deploy"
                    />
                  </div>
                </div>
                <p>{project.description}</p>
              </div>
            );
          })}

          {/* <div className="bg-SecondaryLight m-auto w-full  lg:w-[40%]">
            <h1>Nombre Proyecto</h1>
            <img width="572px" height="372px" s src={imgPrueba} alt="imagen" />
            <div>
              <div>
                <p>tecnologias</p>
              </div>
              <div>
                <img src="#" alt="img-github" />
                <img src="#" alt="img-deploy" />
              </div>
            </div>
            <p>descripcion</p>
          </div>
          <div className="bg-SecondaryLight m-auto w-full  lg:w-[40%]">
            <h1>Nombre Proyecto</h1>
            <img width="572px" height="372px" s src={imgPrueba} alt="imagen" />
            <div>
              <div>
                <p>tecnologias</p>
              </div>
              <div>
                <img src="#" alt="img-github" />
                <img src="#" alt="img-deploy" />
              </div>
            </div>
            <p>descripcion</p>
          </div>
          <div className="bg-SecondaryLight m-auto w-full  lg:w-[40%]">
            <h1>Nombre Proyecto</h1>
            <img width="572px" height="372px" s src={imgPrueba} alt="imagen" />
            <div>
              <div>
                <p>tecnologias</p>
              </div>
              <div>
                <img src="#" alt="img-github" />
                <img src="#" alt="img-deploy" />
              </div>
            </div>
            <p>descripcion</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Work;
