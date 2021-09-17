import { useEffect, useState } from 'react'
import { AiOutlineCopy } from 'react-icons/ai'
import { GrPowerReset } from 'react-icons/gr'

const Uppercases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const Lowercases = 'abcdefghijklmnopqrstuvwxyz'
const Numbers = '0123456789'
const Symbols = '.,;/\\\'"4@#$%^&*()_-='

const SecurityColors = {
  0: 'bg-gray-200',
  1: 'bg-red-500',
  2: 'bg-yellow-500',
  3: 'bg-green-500',
  4: 'bg-green-700',
}

const getRandomCharacter = (characters) => {
  return characters.charAt(Math.floor(Math.random() * characters.length))
}

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(8)
  const [isUppercase, setUppercase] = useState(true)
  const [isLowercase, setLowercase] = useState(true)
  const [isNumber, setNumber] = useState(true)
  const [isSymbols, setSymbol] = useState(true)
  const [password, setPassword] = useState('')

  const getSecurityLevel = () => {
    if (passwordLength <= 3) return [0, 0, 0, 0]
    if (passwordLength <= 6) return [1, 0, 0, 0]
    if (passwordLength <= 9) return [2, 2, 0, 0]
    if (passwordLength <= 12) return [3, 3, 3, 0]
    return [4, 4, 4, 4]
  }

  const generatePassword = () => {
    var collection = ''
    var result = ''
    var neededLength = passwordLength

    if (isUppercase) {
      collection += Uppercases
      if (neededLength > 0) {
        result += getRandomCharacter(Uppercases)
        neededLength--
      }
    }
    if (isLowercase) {
      collection += Lowercases
      if (neededLength > 0) {
        result += getRandomCharacter(Lowercases)
        neededLength--
      }
    }

    if (isNumber) {
      collection += Numbers
      if (neededLength > 0) {
        result += getRandomCharacter(Numbers)
        neededLength--
      }
    }

    if (isSymbols) {
      collection += Symbols
      if (neededLength > 0) {
        result += getRandomCharacter(Symbols)
        neededLength--
      }
    }

    for (var i = 0; i < neededLength; i++) {
      result += getRandomCharacter(collection)
    }
    setPassword(result)
  }

  const copyPassword = () => {
    navigator.clipboard.writeText(password)
    alert('copy success!')
  }

  const selectAllCharacters = () => {
    setUppercase(true)
    setLowercase(true)
    setNumber(true)
    setSymbol(true)
  }
  const selectEasyToRead = () => {
    setUppercase(true)
    setLowercase(true)
    setNumber(false)
    setSymbol(false)
  }

  useEffect(generatePassword, [isLowercase, isNumber, isSymbols, isUppercase, passwordLength])

  const securityLevel = getSecurityLevel()

  return (
    <div className="w-9/12 md:w-1/3 mx-auto my-20 ">
      <div className="text-xl font-bold text-center mb-8  md:mb-5">Password Generator</div>
      <div className="relative bg-gray-100">
        <div className="flex">
          <input
            type="text"
            className="focus:outline-none w-full py-2 px-4 text-gray-700 placeholder-gray-400 text-sm md:text-base bg-gray-100"
            name="password"
            placeholder="Password"
            value={password}
          />
          <button className="mr-3">
            <AiOutlineCopy onClick={copyPassword} />
          </button>
          <button className="mr-3">
            <GrPowerReset onClick={generatePassword} />
          </button>
        </div>
        <hr className="md:mt-5" />

        <div className="grid w-full h-1 grid-cols-12 gap-4 mt-5">
          {securityLevel.map((color) => (
            <div className={`h-full col-span-3 ${SecurityColors[color]}  rounded`}></div>
          ))}
        </div>
      </div>
      <div className="flex divide-x mt-8 md:mt-5">
        <div id="password-left" className="mr-3 w-1/2">
          <label className="text-gray-400 md:text-lg">Password length</label>
          <div className="flex">
            <input
              className="focus:outline-none border-b-2 border-gray-400 mr-3 w-2/3"
              type="number"
              min="0"
              max="50"
              value={passwordLength}
              onChange={(e) => {
                setPasswordLength(e.target.value)
              }}
            />
            <input
              type="range"
              name="password-length"
              min="0"
              max="50"
              value={passwordLength}
              onChange={(e) => {
                setPasswordLength(e.target.value)
              }}
              className="mt-3"
            />
          </div>
          <div className="mt-3 text-sm md:text-base">
            <div>
              <input type="radio" name="easy-all" id="easy" onChange={selectEasyToRead} />
              <label forHtml="easy">Easy to say</label>
            </div>

            <div>
              <input type="radio" name="easy-all" checked id="all" onChange={selectAllCharacters} />
              <label forHtml="all">All characters</label>
            </div>
          </div>
        </div>
        <div id="password-right" className="pl-5 w-1/2 text-sm md:text-base">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="uppercase"
              checked={isUppercase}
              id="uppercase"
              onChange={() => setUppercase(!isUppercase)}
            />
            <label forHtml="uppercase">Uppercase</label>
          </div>
          <div className="flex items-center mt-3">
            <input
              type="checkbox"
              name="lowercase"
              id="lowercase"
              checked={isLowercase}
              onChange={() => setLowercase(!isLowercase)}
            />
            <label forHtml="lowercase">Lowercase</label>
          </div>
          <div className="flex items-center mt-3">
            <input
              type="checkbox"
              name="numbers"
              id="numbers"
              checked={isNumber}
              onChange={() => setNumber(!isNumber)}
            />
            <label forHtml="numbers">Numbers</label>
          </div>
          <div className="flex items-center mt-3">
            <input
              type="checkbox"
              name="symbols"
              id="symbols"
              checked={isSymbols}
              onChange={() => setSymbol(!isSymbols)}
            />
            <label forHtml="symbols">Symbols</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PasswordGenerator
