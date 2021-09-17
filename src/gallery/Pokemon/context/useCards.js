import { createContext, useContext, useState } from 'react'

export const CardsContext = createContext()

export const CardsContextProvider = ({ children }) => {
  const [typeInfo, setTypeInfo] = useState({})
  const [cards, setCards] = useState([])
  const [card, setCard] = useState({})

  return (
    <CardsContext.Provider value={{ cards, setCards, typeInfo, setTypeInfo, card, setCard }}>
      {children}
    </CardsContext.Provider>
  )
}

const useCards = () => useContext(CardsContext)

export default useCards
