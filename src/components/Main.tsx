import { players } from "../data/players"
import { useState } from "react"
import { Guess } from "./Guess"
import { PlayerInput } from "./PlayerInput"
import { Player } from "../types"

export const Main: React.FC = () => {
  const [guesses, setGuesses] = useState<Array<string>>([])
  const [didWin, setDidWin] = useState<boolean>(false)

  const getPlayer = (player: string): Player => {
    return players.find((p) => p.Player === player)!
  }

  const getGuess = (): Player => {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const day = currentDate.getDate()
    const seed = `${year}-${month}-${day}`
    const randomNum = parseInt(seed.replace(/-/g, ""), 10) % players.length
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
      <div className="flex flex-col items-center justify-center">
        <PlayerInput
          guesses={guesses}
          didWin={didWin}
          correctGuess={getGuess()}
          setGuesses={setGuesses}
          setDidWin={setDidWin}
        />
        <div className="flex flex-col items-center justify-center">
          {[...guesses].reverse().map((guess, i) => {
            return (
              <Guess
                key={i}
                player={getPlayer(guess)}
                correctGuess={getGuess()}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
