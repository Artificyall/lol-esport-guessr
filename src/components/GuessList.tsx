import { Player } from "../types"
import { Guess } from "./Guess"
import { players } from "../data/players"

interface GuessListProps {
  guesses: Array<string>
  correctGuess: Player
}

export const GuessList: React.FC<GuessListProps> = ({
  guesses,
  correctGuess,
}) => {
  const getPlayer = (player: string): Player => {
    return players.find((p) => p.Player === player)!
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {[...guesses].reverse().map((guess, i) => {
        return (
          <Guess
            key={i}
            player={getPlayer(guess)}
            correctGuess={correctGuess}
          />
        )
      })}
    </div>
  )
}
