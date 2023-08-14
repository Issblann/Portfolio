import React from "react";
import AboutmeIMG from "../../assets/Aboutme/aboutme-img.jpg";
const Aboutme = () => {
  return (
    <section
      id="Aboutme"
      className="w-full pt-[70px]  bg-SecondaryLight pb-6 flex justify-center p-10"
    >
      <div className="max-w-6xl items-center text-center  md:text-start md:items-stretch justify-center flex-col md:flex-row flex gap-[24px]">
        <img
          className=" h-[300px] m-auto w-[90%] md:w-[50%] rounded-[10px]"
          src={AboutmeIMG}
          alt="AboutmeIMG"
        />
        <div className="flex flex-col p-5 gap-5 ">
          <p className=" text-3xl font-OpenSans">ABOUT ME</p>
          <p className="text-[#ABADB2] text-textbody md:text-leadParagraph font-OpenSans ">
            Welcome to my digital corner! My journey in web development began
            with a strong inclination for crafting aesthetic and functional
            interfaces that captivate users. As I progressed, I also delved a
            bit into the realm of full-stack development, dipping my toes into
            backend work while keeping a strong focus on my frontend expertise.
            My portfolio showcases a collection of challenging projects that
            reflect my ability to address obstacles and translate them into
            appealing solutions. I am someone who thrives on continuous learning
            and embraces a proactive problem-solving approach
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
