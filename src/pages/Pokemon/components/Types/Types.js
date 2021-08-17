import Logo from '../../images/pokemon-logo.png'
import TypesInfo from '../../TypesInfo'
import { Link } from 'react-router-dom'
import useCards from '../../context/useCards'
import { useEffect } from 'react'

const Types = () => {
  const { setCard, setTypeInfo } = useCards()
  useEffect(() => {
    setCard({})
    setTypeInfo({})
  }, [])

  return (
    <>
      <div className="mt-10">
        <img src={Logo} alt="logo-pokemon" className="w-1/7 h-40 mx-auto" />
        <div className="text-center mt-2 text-gray-500 font-thin text-lg ">
          Select your favorite type...
        </div>
        <div className="flex flex-wrap justify-center px-10">
          {TypesInfo.map((type, index) => (
            <Link
              className="mx-5 w-44 h-48 my-10 flex justify-center items-center"
              style={{ background: 'rgb(250, 250, 250)' }}
              key={index}
              to={`/projects/pokemon/${type.name}`}
            >
              <div className="m-5">
                <div
                  className="rounded-full cursor-pointer flex justify-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 filter  hover:saturate-200"
                  style={{ backgroundColor: type.color }}
                >
                  <img src={type.image} className="p-5" />
                </div>

                <div className="text-center mt-2" style={{ color: type.color }}>
                  {type.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
export default Types
