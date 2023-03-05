import { players } from "../data/players"
import { useState } from "react"
import Guess from "./Guess"
import { PlayerInput } from "./PlayerInput"
import { Player } from "../types"

const correctGuess = {
  Player: "Hans Sama",
  Name: "Steven Liv",
  Age: 23,
  Role: "Bot",
  Team: "G2 Esports",
  Country: "France",
}

export const Main: React.FC = () => {
  const [guesses, setGuesses] = useState<Array<string>>([])
  const [didWin, setDidWin] = useState<boolean>(false)

  const getPlayer = (player: string): Player => {
    return players.find((p) => p.Player === player)!
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <PlayerInput
          guesses={guesses}
          didWin={didWin}
          correctGuess={correctGuess}
          setGuesses={setGuesses}
          setDidWin={setDidWin}
        />
        <div className="w-1/2 flex flex-col items-center justify-center">
          {guesses.map((guess, i) => (
            <Guess
              key={i}
              player={getPlayer(guess)}
              correctGuess={correctGuess}
            />
          ))}
        </div>
      </div>
    </>
  )
}
