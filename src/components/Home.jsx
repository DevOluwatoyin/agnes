import { Link } from 'react-scroll'
import heroImg from '../assets/image.jpg'
import { IoIosArrowForward } from 'react-icons/io'

const Home = () => {
  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center px-4 pt-24 gap-10 md:flex-row md:px-8 md:justify-between">
        <div className="flex flex-col justify-center items-center md:items-baseline md:justify-between">
          <h2 className="w-full max-w-3xl text-white text-4xl font-bold text-center md:text-7xl md:text-left">
            Data Scientist
          </h2>
          <p className="text-gray-500 py-4 max-w-md">Ms. Excel, SQL, Python</p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <IoIosArrowForward size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heroImg}
            alt="hero"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home
