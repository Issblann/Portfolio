import React from "react";
import AboutmeIMG from "../../assets/Aboutme/aboutme-img.jpg";
const Aboutme = () => {
  return (
    <section
      id="Aboutme"
      className="w-full pt-[70px]  bg-SecondaryLight pb-6 flex justify-center p-10"
    >
      <div className="max-w-4xl items-center text-center md:text-start md:items-stretch  justify-center flex-col md:flex-row flex gap-[24px]">
        <img
          className=" h-[280px] m-auto w-[90%] md:w-[50%] rounded-[10px]"
          src={AboutmeIMG}
          alt="AboutmeIMG"
        />
        <div className="flex flex-col p-5 gap-5">
          <p className="text-leadParagraph font-OpenSans">ABOUT ME</p>
          <p className="text-[#ABADB2] text-textbody md:text-leadParagraph font-OpenSans ">
            I am a passionate Frontend Developer who loves web development and
            creating attractive interfaces. I am always learning and focused on
            improving my skills. I have experience in creating personal and
            academic projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
