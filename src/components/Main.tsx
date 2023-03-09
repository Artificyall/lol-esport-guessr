import { useState } from "react"
import { PlayerInput, GuessList } from "."
import { Player } from "../types"
import { players } from "../data/players"

export const Main: React.FC = () => {
  const [guesses, setGuesses] = useState<Array<string>>([])
  const [didWin, setDidWin] = useState<boolean>(false)

  const getGuess = (): Player => {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const day = currentDate.getDate()
    const seed = `${year}${month}${day}`
    const randomNum = parseInt(seed, 10) % players.length
    return players[randomNum]
  }

  return (
    <>
      {didWin && (
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl text-green-500">
            You won ! Come back tomorrow
          </p>
        </div>
      )}
      {guesses.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl text-white">
            Enter a player name to start guessing
          </p>
        </div>
      )}
      <div className="flex flex-col items-center justify-center">
        <PlayerInput
          guesses={guesses}
          didWin={didWin}
          correctGuess={getGuess()}
          setGuesses={setGuesses}
          setDidWin={setDidWin}
        />
        <GuessList guesses={guesses} correctGuess={getGuess()} />
      </div>
    </>
  )
}
