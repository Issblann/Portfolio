import React from "react";
import linkedinIcon from "../../assets/Hero/linkedin-svg.svg";
import githubIcon from "../../assets/Hero/github-icon.svg";
const Footer = () => {
  return (
    <section className="bg-Secondary w-full ">
      <div className=" max-w-7xl items-center m-auto flex justify-between p-5 w-full ">
        <h1 className="text-textbody font-SourceSansPro ">Ana.Dev</h1>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/anaperafan-dev/">
            <img src={linkedinIcon} alt="linkedinIcon" />
          </a>
          <a href="https://github.com/Issblann">
            <img src={githubIcon} alt="githubIcon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
