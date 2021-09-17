import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useCards from '../context/useCards'
import TypesInfo from '../TypesInfo'
import Spinner from '../../../components/Spinner/Spinner'

const Card = () => {
  const { typeInfo, setTypeInfo, card, setCard } = useCards()
  const { id, type } = useParams()

  useEffect(() => {
    setTypeInfo(TypesInfo.find((el) => el.name === type))
  }, [])

  useEffect(() => {
    axios
      .get(`https://api.pokemontcg.io/v1/cards/${id}`)
      .then((response) => setCard(response.data.card))

    return () => {
      setCard({})
    }
  }, [])

  if (!card) return <Spinner />
  return (
    <div>
      <div className="flex items-center justify-center mt-10 border-b pb-5">
        <div>
          <img
            src={typeInfo.image}
            style={{ backgroundColor: typeInfo.color }}
            className="rounded-full w-6 h-6 md:w-10 md:h-10 p-2 mb-1"
          />
          <div className="text-sm md:text-base" style={{ color: typeInfo.color }}>
            HP {card.hp}
          </div>
        </div>
        <div className="text-lg md:text-4xl font-bold text-gray-500 mx-3">
          {card.name} #{card.nationalPokedexNumber}
        </div>
        <div className="text-sm md:text-2xl font-thin">
          {card.supertype} -{card.subtype}
        </div>
      </div>
      <div className="md:flex md:justify-center mt-5 mx-auto md:w-3/4">
        <img src={card.imageUrl} className="mx-auto md:self-start md:mr-5 md:mt-5" />
        <div className="w-full p-5">
          {card.ability && (
            <>
              <div className="text-red-700 font-light">
                [{card.ability.type}]<span className="md:text-2xl ml-2">{card.ability.name}</span>
              </div>
              <div className="md:text-lg text-gray-400 font-light mt-5">{card.ability.text}</div>
            </>
          )}
          {card.text && (
            <>
              <div className="md:text-2xl mt-3 font-light">Rules</div>
              {card.text.map((rule, index) => (
                <div className="md:text-lg text-gray-400 font-light mt-2" key={index}>
                  {rule}
                </div>
              ))}
            </>
          )}

          <div className="md:text-2xl mt-5 font-light">Attacks</div>
          <div className="mt-3 items-center">
            {card.attacks?.map((attack, index) => {
              return (
                <div key={index}>
                  <div className="flex items-center">
                    {attack.cost?.map((costType, index) => {
                      const costTypeInfo = TypesInfo.find((type) => type.name === costType)

                      return (
                        <img
                          key={index}
                          src={costTypeInfo?.image}
                          style={{ backgroundColor: costTypeInfo?.color }}
                          className="w-6 h-6 md:w-10 md:h-10 rounded-full p-2 mr-2"
                        />
                      )
                    })}
                    <div className="text-sm md:text-lg">
                      {attack.name} | <strong>{attack.damage}</strong>
                    </div>
                  </div>
                  <div className="mt-3 text-gray-500 font-thin">{attack.text}</div>
                </div>
              )
            })}
          </div>

          <div className="my-4 mx-20">
            <div className="flex justify-between">
              <div className="w-32 text-center">
                <div className="text-sm md:text-lg">Weekness</div>
                <div>
                  {card.weaknesses?.map((weakness, index) => {
                    const weaknessTypeInfo = TypesInfo.find((type) => type.name === weakness.type)
                    return (
                      <div className="flex mt-2 items-center justify-center" key={index}>
                        <img
                          src={weaknessTypeInfo?.image}
                          style={{ backgroundColor: weaknessTypeInfo?.color }}
                          className="w-5 h-5 rounded-full p-1 mr-2"
                        />
                        <div className="text-sm md:text-base">{weakness.value}</div>
                      </div>
                    )
                  }) || 'N/A'}
                </div>
              </div>
              <div className="w-32 text-center">
                <div className="text-sm md:text-lg">Resistance</div>
                <div>
                  {card.resistances?.map((resistance, index) => {
                    const resistanceTypeInfo = TypesInfo.find(
                      (type) => type.name === resistance.type,
                    )
                    return (
                      <div className="flex mt-2 items-center justify-center" key={index}>
                        <img
                          src={resistanceTypeInfo?.image}
                          style={{ backgroundColor: resistanceTypeInfo?.color }}
                          className="w-5 h-5 rounded-full p-1 mr-2"
                        />
                        <div className="text-sm md:text-base">{resistance.value}</div>
                      </div>
                    )
                  }) || 'N/A'}
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <div className="w-32 text-center">
                <div className="text-sm md:text-lg">Retreat Cost</div>
                <div className="mt-2 flex justify-center">
                  {card.retreatCost?.map((retreatCost, index) => {
                    const retreatCostTypeInfo = TypesInfo.find((type) => type.name === retreatCost)
                    return (
                      <img
                        key={index}
                        src={retreatCostTypeInfo?.image}
                        style={{ backgroundColor: retreatCostTypeInfo?.color }}
                        className="w-5 h-5 rounded-full p-1 mr-2"
                      />
                    )
                  })}
                </div>
              </div>
              <div className="w-32 text-center">
                <div className="text-sm md:text-lg">Artist</div>
                <div className="text-gray-400 mt-2 text-sm md:text-base">
                  {card.artist || 'N/A'}
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <div className="w-32 text-center">
                <div className="text-sm md:text-lg">Rarity</div>
                <div className="text-gray-400 mt-2 text-sm md:text-base">
                  {card.rarity || 'N/A'}
                </div>
              </div>
              <div className="w-32 text-center">
                <div className="text-sm md:text-lg">Set</div>
                <div className="text-gray-400 mt-2 text-sm md:text-base"> {card.set || 'N/A'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
