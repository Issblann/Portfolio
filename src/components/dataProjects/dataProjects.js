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
    description:
      "Weather page with a map and geolocation function. Designed with an intuitive and attractive interface. Uses OpenWeather API.",
    finished: true,
    linkGitHub: "https://github.com/Issblann/Sunset",
    linkDeploy: "https://sunset-issblann.vercel.app",
    isFigma: true,
  },
  {
    id: 2,
    name: "Dafiti",
    img: DAFITIIMG,
    technologies: ["React", "NodeJS", "Tailwind"],
    description:
      "A minimalist and simple eCommerce that offers a straightforward shopping experience. Designed with a clean and elegant interface. Product filtering and categories, payment gateway, and wishlist functionality.",
    finished: false,
    isFigma: true,
  },
  {
    id: 3,
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
    id: 4,
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
