import { useEffect, useState } from 'react'
const TicTacToe = () => {
  const [table, setTable] = useState([])
  const [result, setResult] = useState(null)
  const [turn, setTurn] = useState(false)
  const reset = () => {
    setTable(new Array(3).fill(0).map(() => new Array(3).fill(0)))
    setTurn(false)
    setResult(null)
  }
  useEffect(
    () => reset(),

    [],
  )

  const symbols = {
    1: 'X',
    2: 'O',
  }

  const checkWinner = (row, col) => {
    const value = turn ? 2 : 1
    for (let i = 0; i < 3; i++) {
      if (table[row][i] !== value) {
        break
      } else if (i === 2) {
        setResult(true)
        return true
      }
    }

    for (let i = 0; i < 3; i++) {
      if (table[i][col] !== value) break
      else if (i === 2) {
        setResult(true)
        return true
      }
    }
    for (let i = 0; i < 3; i++) {
      if (table[i][i] !== value) break
      else if (i === 2) {
        setResult(true)
        return true
      }
    }

    for (let i = 2; i >= 0; i--) {
      if (table[2 - i][i] !== value) break
      else if (i === 0) {
        setResult(true)
        return true
      }
    }
    return false
  }
  const play = (row, col) => {
    if (result) return
    if (table[row][col] !== 0) return
    if (!turn) table[row][col] = 1
    else table[row][col] = 2

    if (!checkWinner(row, col)) {
      setTurn(!turn)
    }
  }

  return (
    <div className="flex flex-col items-center mt-40">
      <div className="text-4xl font-bold mb-5">Tic Tac Toe</div>
      {result ? (
        <div className="text-green-500 text-2xl font-bold">
          {turn ? <strong>O</strong> : <strong>X</strong>} wins
        </div>
      ) : (
        <div className="text-lg">
          It's turn of{' '}
          {turn ? (
            <span className="font-bold text-blue-500">O</span>
          ) : (
            <span className="font-bold text-blue-500">X</span>
          )}
        </div>
      )}

      <div className="grid grid-rows-3 grid-flow-col mt-3">
        {table.map((arr, row) =>
          arr.map((_, col) => (
            <div
              className="border-2 font-bold text-3xl w-20 h-20 flex items-center justify-center"
              key={col}
              onClick={() => play(row, col)}
            >
              {symbols[table[row][col]]}
            </div>
          )),
        )}
      </div>
      <button className="border rounded-lg bg-blue-500 px-5 py-3 text-white mt-5" onClick={reset}>
        Reset
      </button>
    </div>
  )
}

export default TicTacToe
