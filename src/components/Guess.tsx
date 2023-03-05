import { Player } from "../types"

interface GuessProps {
  player: Player
  correctGuess: Player
}

const Guess: React.FC<GuessProps> = ({ player, correctGuess }) => {
  return (
    <>
      <div
        className={`p-2 m-1 w-full bg-zinc-800 hover:overflow-auto rounded-md flex flex-row justify-between cursor-pointer border border-gray-700 hover:border-gray-500 ${
          player.Name == correctGuess.Name && "bg-green-700"
        }`}
      >
        <p>{player.Player}</p>
        <p>|</p>
        <p>{player.Name}</p>
        <p>|</p>
        <p>{player.Age}</p>
        <p>|</p>
        <p>{player.Role}</p>
        <p>|</p>
        <p>{player.Team}</p>
        <p>|</p>
        <p>{player.Country}</p>
      </div>
    </>
  )
}

export default Guess
