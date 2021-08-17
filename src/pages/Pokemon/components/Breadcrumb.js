import { Link } from 'react-router-dom'
import useCards from '../context/useCards'

const Breadcrumb = () => {
  const { card, typeInfo } = useCards()

  return (
    <div className="flex h-12 bg-gray-100 items-center justify-center">
      <ul className="flex text-gray-500 text-sm lg:text-base">
        <li className="inline-flex items-center">
          <Link to="/projects/pokemon">Types</Link>
          {typeInfo.name && (
            <svg className="h-5 w-auto text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </li>
        {typeInfo.name && (
          <li className="inline-flex items-center">
            <Link to={`/projects/pokemon/${typeInfo.name}`}>{typeInfo.name}</Link>
            {card.id && (
              <svg className="h-5 w-auto text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </li>
        )}
        {card.id && (
          <li className="inline-flex items-center">
            <Link to={`/projects/pokemon/${typeInfo.name}/${card.id}`}>{card.id}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Breadcrumb
