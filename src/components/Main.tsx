import { players } from "../data/players"
import { useState } from "react"
import PlayerItem from "./PlayerItem"
import { PlayerInput } from "./PlayerInput"
import { Player } from "../types"

export const Main: React.FC = () => {
  const [guesses, setGuesses] = useState<Array<string>>([])

  const getPlayer = (player: string): Player => {
    return players.find((p) => p.Player === player)!
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <PlayerInput guesses={guesses} setGuesses={setGuesses} />
        <div className="w-1/2 flex flex-col items-center justify-center">
          {guesses.map((guess, i) => (
            <PlayerItem key={i} player={getPlayer(guess)} />
          ))}
        </div>
      </div>
    </>
  )
}
