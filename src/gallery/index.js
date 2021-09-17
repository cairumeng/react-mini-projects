import TodolistImage from './images/todolist.png'
import CountdownTimerImage from './images/countdownTimer.jpg'
import PasswordGeneratorImage from './images/passwordGenerator.jpg'
import HackerNews from './images/hackerNews.png'
import Caculator from './images/caculator.jpg'
import Pokemon from './images/pokemon.jpg'
import TicTacToe from './images/ticTacToe.png'
import ShoppingCart from './images/shoppingCart.jpg'
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
    name: 'Shopping Cart',
    slug: 'shopping-cart',
    image: ShoppingCart,
    description: 'A clothes shopping page.',
    tags: ['react', 'tailwindcss', 'open api'],
  },
  {
    name: 'Pokemon',
    slug: 'pokemon',
    image: Pokemon,
    description: 'A pokemon trading card game website.',
    tags: ['react', 'tailwindcss', 'react-router', 'open api'],
  },
  {
    name: 'Hacker News',
    slug: 'hacker-news',
    image: HackerNews,
    description: 'A HackerNews clone with react and open api.',
    tags: ['react', 'tailwindcss', 'react-router', 'open api'],
  },
  {
    name: 'Todo list',
    slug: 'todo-list',
    image: TodolistImage,
    description: 'A todo list app built to keep track of errands or tasks that to de done.',
    tags: ['react', 'tailwindcss'],
  },
  {
    name: 'Calculator',
    slug: 'calculator',
    image: Caculator,
    description: 'This calculator is based on javascript function and easy to use',
    tags: ['react', 'tailwindcss'],
  },
  {
    name: 'Password Generator',
    slug: 'password-generator',
    image: PasswordGeneratorImage,
    description: 'An app that creates random or customized passwords for users.',
    tags: ['react', 'tailwindcss'],
  },
  {
    name: 'Countdown Timer',
    slug: 'countdown-timer',
    image: CountdownTimerImage,
    description:
      "A simple virtual clock that mesures the remaing time from present to next New Year's Eve",
    tags: ['react', 'dayjs', 'tailwindcss'],
  },

  {
    name: 'TicTacToe',
    slug: 'tic-tac-toe',
    image: TicTacToe,
    description:
      'A Tic-Tac-Toe game for two players, X and O, who take turns marking the spaces in a 3×3 grid.',
    tags: ['react', 'tailwindcss'],
  },
]

const ProjectCard = ({ project }) => {
  const history = useHistory()
  return (
    <div
      className="flex h-44 md:h-56 max-w-xl bg-white shadow-lg rounded-lg overflow-hidden mt-10 mx-auto cursor-pointer"
      onClick={() => history.push(`/gallery/${project.slug}`)}
    >
      <img className="w-1/2" src={project.image} />
      <div className="flex flex-col justify-between w-1/2 p-2 md:p-4">
        <div>
          <h1 className="text-gray-900 font-bold text-base md:text-2xl">{project.name}</h1>
          <p className="text-overflow mt-2 text-gray-600 text-sm">{project.description}</p>

          <div className="my-2 tag-overflow">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className={` inline-block rounded-full text-white bg-${techColors[tag]} px-2 py-1 text-xs font-bold mr-3`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="text-right">
          <button className="mt-3 px-2 py-1 md:px-3 md:py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
            demo
          </button>
        </div>
      </div>
    </div>
  )
}

const Gallery = () => (
  <div className="flex flex-wrap p-15 mx-5 mb-10">
    {projects.map((project, index) => (
      <ProjectCard project={project} key={index} />
    ))}
  </div>
)

export default Gallery
