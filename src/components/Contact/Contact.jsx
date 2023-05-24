import React from "react";

const Contact = () => {
  return (
    <section className="w-full items-center justify-center flex p-8 bg-Secondary ">
      <div className="max-w-7xl w-full bg-SecondaryLight rounded-[25px] p-8 gap-6 flex flex-col items-center justify-center">
        <h1 className="text-textH5 leading-none sm:text-textH2 md:text-textH1 font-SourceCodePro text-center md:leading-[61px]  ">
          Ready to start <br /> <span>your next project?</span>
        </h1>
        <p className="text-Primary text-textH5 leading-none sm:text-textH2 md:text-textH1 font-SourceCodePro text-center md:leading-[61px]">
          <a href="mailto:anaperafan.dev@gmail.com">Hit me up!</a>
        </p>
        <a
          className="text-textsmall md:text-leadParagraph"
          href="mailto:anaperafan.dev@gmail.com"
        >
          anaperafan.dev@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
