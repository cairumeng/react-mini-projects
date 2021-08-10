import TodolistImage from '../images/todolist.png'
import CountdownTimerImage from '../images/countdownTimer.jpg'
import PasswordGeneratorImage from '../images/passwordGenerator.jpg'
import HackerNews from '../images/hackerNews.jpg'
import { useHistory } from 'react-router-dom'

const techColors = {
  react: 'green-500',
  tailwindcss: 'blue-500',
  laravel: 'red-500',
  dayjs: 'yellow-500',
  'react-router': 'purple-500',
  'open api': 'pink-500',
}
const projects = [
  {
    name: 'Todo list',
    slug: 'todo-list',
    image: TodolistImage,
    description: 'A todo list app built to keep track of errands or tasks that to de done.',
    tags: ['react', 'tailwindcss'],
  },
  {
    name: 'Countdown Timer',
    slug: 'countdown-timer',
    image: CountdownTimerImage,
    description:
      "A simple virtual clock that mesures the remaings months, days, hours, minutes from present time to next New Year's Eve",
    tags: ['react', 'dayjs', 'tailwindcss'],
  },
  {
    name: 'Password Generator',
    slug: 'password-generator',
    image: PasswordGeneratorImage,
    description: 'An app that creates random or customized passwords for users.',
    tags: ['react', 'tailwindcss'],
  },
  {
    name: 'Hacker News',
    slug: 'hacker-news',
    image: HackerNews,
    description: 'A HackerNews clone with react and open api.',
    tags: ['react', 'tailwindcss', 'react-router', 'open api'],
  },
]

const ProjectCard = ({ project }) => {
  const history = useHistory()
  return (
    <div
      className="flex flex-shrink-0 h-60 max-w-xl bg-white shadow-lg rounded-lg overflow-hidden mr-10 mt-10 cursor-pointer"
      onClick={() => history.push(`/projects/${project.slug}`)}
    >
      <img className="w-1/2" src={project.image} />
      <div className="flex flex-col justify-between w-1/2 p-4">
        <div>
          <h1 className="text-gray-900 font-bold text-2xl">{project.name}</h1>
          <p className="mt-2 text-gray-600 text-sm">{project.description}</p>

          <div className="my-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className={`inline-block rounded-full text-white bg-${techColors[tag]} px-2 py-1 text-xs font-bold mr-3`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="text-right">
          <button className="mt-3 px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
            demo
          </button>
        </div>
      </div>
    </div>
  )
}

const Gallery = () => (
  <div className="flex flex-wrap">
    {projects.map((project, index) => (
      <ProjectCard project={project} key={index} />
    ))}
  </div>
)

export default Gallery
