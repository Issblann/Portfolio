import React from "react";
import "./Hero.css";
import htmlIcon from "../../assets/Hero/html-icon.svg";
import cssIcon from "../../assets/Hero/css-icon.svg";
import jsIcon from "../../assets/Hero/js-icon.svg";
import tsIcon from "../../assets/Hero/ts-icon.svg";
import reactIcon from "../../assets/Hero/react-icon.svg";
import angularIcon from "../../assets/Hero/angular-icon.svg";
import nodejsIcon from "../../assets/Hero/nodejs-icon.svg";
import figmaIcon from "../../assets/Hero/figma-icon.svg";
import mysqlIcon from "../../assets/Hero/sql-icon.svg";
import githubIcon from "../../assets/Hero/github-icon.svg";
import linkedinIcon from "../../assets/Hero/linkedin-svg.svg";

const Hero = () => {
  const tecnologies = [
    {
      name: "HTML",
      icon: htmlIcon,
    },
    {
      name: "CSS",
      icon: cssIcon,
    },
    {
      name: "JavaScript",
      icon: jsIcon,
    },
    {
      name: "TypeScript",
      icon: tsIcon,
    },
    {
      name: "React",
      icon: reactIcon,
    },
    {
      name: "Angular",
      icon: angularIcon,
    },
    {
      name: "NodeJs",
      icon: nodejsIcon,
    },
    {
      name: "Figma",
      icon: figmaIcon,
    },
    {
      name: "MySql",
      icon: mysqlIcon,
    },
  ];
  return (
    <section className="w-full bg-Secondary">
      <div className="max-w-7xl flex-col items-center px-[238px] py-[92px] principal-container  m-auto flex gap-[24px]">
        <h1 className="text-textH1 font-SourceCodePro text-center leading-[61px] ">
          Hello I'm Ana Perez
        </h1>
        <p className="text-[#ABADB2] text-leadParagraph font-OpenSans ">
          I am a passionate Frontend Developer who loves web development and
          creating attractive interfaces. I am always learning and focused on
          improving my skills. I have experience in creating personal and
          academic projects.
        </p>
        <div className="w-full max-w-7xl items-center flex justify-center gap-7 ">
          <img src={githubIcon} alt="githubIcon" />
          <img src={linkedinIcon} alt="linkedinIcon" />
        </div>
        <div className="flex gap-4 w-full items-center justify-center contaner-icons ">
          {tecnologies.map((technology) => {
            return (
              <div
                className="flex items-center justify-center bg-SecondaryLight w-full md:w-1/3 px-[15px] rounded-[4px] py-[3px] font-SourceSansPro text-textbody gap-1"
                key={technology.name}
              >
                <img src={technology.icon} alt={technology.name} />
                <p>{technology.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
