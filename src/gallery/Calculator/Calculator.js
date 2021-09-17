import { useState } from 'react'
import './Calculator.css'

const NUMBER = 'NUMBER'
const OPERATOR = 'OPERATOR'

const keyboard = [
  [
    {
      type: NUMBER,
      value: '7',
    },
    {
      type: NUMBER,
      value: '8',
    },
    {
      type: NUMBER,
      value: '9',
    },
    {
      type: OPERATOR,
      value: '+',
    },
  ],
  [
    {
      type: NUMBER,
      value: '4',
    },
    {
      type: NUMBER,
      value: '5',
    },
    {
      type: NUMBER,
      value: '6',
    },
    {
      type: OPERATOR,
      value: '-',
    },
  ],
  [
    {
      type: NUMBER,
      value: '1',
    },
    {
      type: NUMBER,
      value: '2',
    },
    {
      type: NUMBER,
      value: '3',
    },
    {
      type: OPERATOR,
      value: '*',
    },
  ],
  [
    {
      type: NUMBER,
      value: '0',
    },
    {
      type: NUMBER,
      value: '.',
    },
    {
      type: OPERATOR,
      value: '=',
    },
    {
      type: OPERATOR,
      value: '/',
    },
  ],
]

const Calculator = () => {
  const [result, setResult] = useState(null)
  const [number, setNumber] = useState(null)
  const [operator, setOperator] = useState(null)

  const reset = () => {
    setResult(null)
    setNumber(null)
    setOperator(null)
  }

  const setNum = (value) => {
    if (number === 'Erreur') {
      setNumber(value)
      setOperator(null)
      setResult(null)
    }
    if (!number) {
      setNumber(value)
    } else setNumber(number + value)
  }

  const caculate = (value) => {
    if (number === 'Erreur') {
      reset()
      return
    }
    let nextNumber = null
    if (result === null) {
      setResult(number * 1)
    } else if (operator) {
      if (number !== null) {
        switch (operator) {
          case '+':
            setResult(result + number * 1)
            break
          case '-':
            setResult(result - number * 1)
            break
          case '*':
            setResult(result * number * 1)
            break
          case '/':
            if (number == '0') nextNumber = 'Erreur'
            else setResult(result / (number * 1))
            break
          case '=':
            break
        }
      }
    }
    setOperator(value)
    setNumber(nextNumber)
  }

  return (
    <div id="Calculator" className="h-screen pt-10 md:pt-20">
      <div className="w-10/12 md:w-1/4 mx-auto text-center">
        <div className="text-2xl md:text-4xl">Javascript Calculator</div>
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-red-300 mt-2">
          Don't divide by zero
        </div>

        <div className="text-lg mt-20">
          <div className="flex justify-between items-center">
            <button className="w-16 h-16" onClick={reset}>
              C
            </button>
            <div className="text-red-300">{(number ? number : result) || 0}</div>
          </div>

          {keyboard.map((row, index) => (
            <div className="flex justify-between mt-7" key={index}>
              {row.map((key, index) => (
                <button
                  className="w-16 h-16"
                  key={index}
                  onClick={() => (key.type === NUMBER ? setNum(key.value) : caculate(key.value))}
                >
                  {key.value}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calculator
