import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useCards from '../context/useCards'
import TypesInfo from '../TypesInfo'

const CardList = () => {
  const [page, setPage] = useState(1)
  const [isFetching, setFetching] = useState(false)
  const { cards, setCards, setTypeInfo, typeInfo } = useCards()
  const { type } = useParams()

  useEffect(() => {
    if (!isFetching) return
    loadMore()
  }, [isFetching])

  useEffect(() => {
    setTypeInfo(TypesInfo.find((el) => el.name === type))
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    axios
      .get(`https://api.pokemontcg.io/v1/cards?types=${type}&pageSize=10&page=${page}`)
      .then((response) => {
        if (page === 1) {
          setCards(response.data.cards)
        } else {
          setCards([...cards, ...response.data.cards])
        }
      })
  }, [page])

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return
    setFetching(true)
  }

  const loadMore = () => {
    setTimeout(() => {
      setPage(page + 1)
      setFetching(false)
    }, 2000)
  }

  return (
    <div>
      <div className="flex items-center mt-10 justify-center">
        <img
          src={typeInfo.image}
          className="rounded-full w-12 h-12 md:w-20 md:h-20 p-3 "
          style={{ backgroundColor: typeInfo.color }}
        />
        <div className="text-xl md:text-4xl font-bold ml-3" style={{ color: typeInfo.color }}>
          {typeInfo.name} type Pokémon
        </div>
      </div>
      <div className="text-center text-gray-500 text-thin mt-3">
        Select your favorite Pokémon...
      </div>
      <div className="flex flex-wrap justify-center md:mt-10 p-10">
        {cards?.map((card, index) => (
          <Link key={index} className="m-5" to={`/gallery/pokemon/${typeInfo.name}/${card.id}`}>
            <img
              src={card.imageUrl}
              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            />
          </Link>
        ))}
      </div>
      {isFetching && <div className="text-center mb-3">Fetching more cards...</div>}
    </div>
  )
}
export default CardList
