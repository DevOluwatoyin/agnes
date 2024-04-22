import { projects } from './variables/projects'

const Projects = () => {
  
  return (
    <div name="projects"
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white">
      <div className="max-w-7xl px-4 pt-24 mx-auto flex flex-col justify-center w-full md:px-8">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map(({id, src, demo, code}) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden group">
            <img src={src} width={384} style={{aspectRatio: "2"}} alt="calculator Ui" className="duration-200 group-hover:scale-105" />
            <div className="flex items-center justify-center">
              <a href={code} target="_blank" rel="noreferrer" className="px-6 py-3 m-4 duration-200 hover:scale-105 text-center">View Project</a>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
