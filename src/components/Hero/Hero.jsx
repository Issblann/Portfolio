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
    <section
      id="Home"
      className="w-full  mb-24 bg-Secondary pb-6 mt-8 flex flex-col items-center justify-center "
    >
      <div className="max-w-7xl flex-col md:flex-row items-center py-[92px] principal-container flex gap-[60px]">
        <div className="flex flex-col gap-6 text-center md:text-start ">
          <h1 className="text-textH1 font-SourceCodePro  leading-[61px] ">
            Hello I'm <br /> Ana Perez
          </h1>

          <p className="text-textbody font-OpenSans text-[#ABADB2]">
            Frontend developer based in Cali, Colombia 📍
          </p>
          <div className="w-full max-w-7xl items-center flex gap-5 justify-center md:justify-normal ">
            <a href="https://github.com/Issblann" target="blank">
              <img src={githubIcon} alt="githubIcon" />
            </a>
            <a
              href="https://www.linkedin.com/in/anaperafan-dev/"
              target="blank"
            >
              <img src={linkedinIcon} alt="linkedinIcon" />
            </a>
          </div>
          <div className="flex gap-6 justify-center md:justify-normal">
            <a
              className="flex items-center bg-Primary py-3 px-5 hover:bg-PrimaryDark transition-all ease-in-out h-[39px] rounded-md text-textsmall font-SourceSansPro"
              href="https://drive.google.com/file/d/1RtdqViRI0Wv2lQ75sh63q8Bt2EaTIkKj/view?usp=sharing"
              target="blank"
            >
              CV English
            </a>
            <a
              className="flex items-center bg-Primary hover:bg-PrimaryDark transition-all ease-in-out py-3 px-5 a h-[39px] rounded-md text-textsmall font-SourceSansPro"
              href="https://drive.google.com/file/d/1Zg86HgReZzKRoS3Pzxx9PkFIQlSDJ3lh/view?usp=sharing"
              target="blank"
            >
              CV Spanish
            </a>
          </div>
        </div>

        <div className="container-img-hero"></div>
      </div>
      <div className=" grid grid-cols-3 md:flex lg:gap-4 px-5 gap-4 md:items-center md:justify-center py-[12px] md:gap-1  md:w-[80px] m-auto contaner-icons ">
        {tecnologies.map((technology) => {
          return (
            <div
              className="flex items-center justify-center bg-SecondaryLight px-[15px] rounded-[4px] py-[3px] font-SourceSansPro text-textbody gap-1"
              key={technology.name}
            >
              <img src={technology.icon} alt={technology.name} />
              <p className=" font-SourceSansPro text-textsmall md:text-textbody">
                {technology.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
