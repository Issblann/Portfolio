import DAFITIIMG from "../../assets/Work/DAFITI.svg";
import FreshCareIMG from "../../assets/Work/FreshCare.jpeg";
import Portfolio from "../../assets/Work/Portfolio.svg";
import SUNSETIMG from "../../assets/Work/SUNSET.svg";
import HyperX from "../../assets/Work/HyperX.jpeg";
export const projects = [
  {
    id: 4,
    name: "HyperX",
    img: HyperX,
    technologies: ["React", "Styled Components"],
    description:
      "Web page virtual store inspired by the design of hyperx, store peripherals gamers. It was made as a final project for the React module. Functional.",
    finished: true,
    linkGitHub: "https://github.com/Issblann/eccommerce-tech-NUCBA",
    linkDeploy: "https://eccommerce-tech-nucba.vercel.app",
    isFigma: false,
  },
  {
    id: 3,
    name: "Sunset",
    img: SUNSETIMG,
    technologies: ["React", "CSS Vanilla"],
    description:
      "Weather page with a map and geolocation function. Designed with an intuitive and attractive interface. Uses OpenWeather API.",
    finished: true,
    linkGitHub: "https://github.com/Issblann/Sunset",
    linkDeploy: "https://sunset-issblann.vercel.app",
    isFigma: true,
  },
  {
    id: 2,
    name: "Portfolio",
    img: Portfolio,
    technologies: ["React", "Tailwind"],
    description:
      "Here, I showcase my most innovative projects, reflecting my ability to design and develop diverse functionalities.",
    finished: true,
    linkGitHub: "https://github.com/Issblann/Portfolio",
    linkDeploy: "https://portfolio-issblann.vercel.app",
    isFigma: true,
  },
  {
    id: 1,
    name: "FreshCare",
    img: FreshCareIMG,
    technologies: ["HTML", "CSS", "Javascript"],
    description:
      "eCommerce platform dedicated to Korean skincare and beauty. Focused on quality, effectiveness, and the latest trends.",
    finished: true,
    linkGitHub: "https://github.com/Issblann/FreshCare",
    linkDeploy: "https://fresh-care.vercel.app",
    isFigma: false,
  },
];
