import DAFITIIMG from "../../assets/Work/DAFITI.svg";
import FreshCareIMG from "../../assets/Work/FreshCare.jpeg";
import Portfolio from "../../assets/Work/Portfolio.svg";
import SUNSETIMG from "../../assets/Work/SUNSET.svg";

export const projects = [
  {
    id: 1,
    name: "Sunset",
    img: SUNSETIMG,
    technologies: ["React", "CSS Vanilla"],
    description: "Description",
    finished: true,
    linkGitHub: "https://github.com/Issblann/Sunset",
    linkDeploy: "https://sunset-issblann.vercel.app",
  },
  {
    id: 2,
    name: "Dafiti",
    img: DAFITIIMG,
    technologies: ["React", "NodeJS", "Tailwind"],
    description: "Description",
    finished: false,
    linkGitHub: "#",
    linkDeploy: "#",
  },
  {
    id: 3,
    name: "Portfolio",
    img: Portfolio,
    technologies: ["React", "Tailwind"],
    description: "Description",
    finished: true,
    linkGitHub: "https://github.com/Issblann/Portfolio",
    linkDeploy: "https://portfolio-issblann.vercel.app",
  },
  {
    id: 4,
    name: "FreshCare",
    img: FreshCareIMG,
    technologies: ["HTML", "CSS", "Javascript"],
    description: "Description",
    finished: true,
    linkGitHub: "https://github.com/Issblann/FreshCare",
    linkDeploy: "https://fresh-care.vercel.app",
  },
];
