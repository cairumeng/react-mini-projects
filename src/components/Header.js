import { Link } from 'react-router-dom'
import Logo from '../logo.svg'

const Header = () => {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-800  ">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className=" flex items-center">
              <Link className="flex-shrink-0" to="/">
                <img className="h-8 w-8" src={Logo} alt="CAI Rumeng" />
              </Link>
              <div>
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    to="/"
                  >
                    CV
                  </Link>

                  <Link
                    className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    to="/gallery"
                  >
                    Gallery
                  </Link>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="ml-4 flex items-center md:ml-6"></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Header
