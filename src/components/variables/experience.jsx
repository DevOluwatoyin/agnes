import { SiMicrosoftexcel } from "react-icons/si";

export const tech = [
  {
    id: 1,
    icon: (
      <i className="devicon-mysql-plain colored text-color-html text-7xl md:text-[150px]"></i>
    ),
    title: "My Sql",
    style: "shadow-color-html",
  },
  {
    id: 2,
    icon: (
      <i className="devicon-python-plain text-color-javascript text-7xl md:text-[150px]"></i>
    ),
    title: "Python",
    style: "shadow-color-javascript",
  },
  {
    id: 3,
    icon: (
      <SiMicrosoftexcel className="text-color-tailwind mx-auto text-7xl md:text-[150px]" />
    ),
    title: "Excel",
    style: "shadow-color-tailwind",
  },
  {
    id: 4,
    icon: (
      <i className="devicon-github-original text-color-github text-7xl md:text-[150px]"></i>
    ),
    title: "Github",
    style: "shadow-color-github",
  },
];
