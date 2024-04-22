import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export const links = [
  {
    id: 1,
    icon: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),
    href: "https://www.linkedin.com/in/agnes-oladeinde-12172b198",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    icon: (
      <>
        Github <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/Aggie-lawlah",
  },
  {
    id: 3,
    icon: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: "mailto:oladeindeagnes@gmail.com",
  },
  {
    id: 4,
    icon: (
      <>
        Resume <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: "/resume.pdf",
    style: "rounded-br-md",
    download: true,
  },
];