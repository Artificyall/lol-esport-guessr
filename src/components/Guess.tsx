import { Player } from "../types"

interface GuessProps {
  player: Player
  correctGuess: Player
}

export const Guess: React.FC<GuessProps> = ({ player, correctGuess }) => {
  return (
    <>
      <div
        className={`p-2 m-1 w-full  hover:overflow-auto rounded-md flex flex-row justify-between cursor-pointer border border-gray-700 hover:border-gray-500 ${
          player.Name == correctGuess.Name ? "bg-green-900 " : "bg-zinc-800"
        }`}
      >
        <p
          className={`${
            player.Player === correctGuess.Player
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {player.Player}
        </p>
        <p>|</p>
        <p
          className={`${
            player.Name === correctGuess.Name
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {player.Name}
        </p>
        <p>|</p>
        <p
          className={`${
            player.Age === correctGuess.Age ? "text-green-500" : "text-red-500"
          }`}
        >
          {player.Age}{" "}
          {player.Age > correctGuess.Age
            ? "↓"
            : player.Age < correctGuess.Age
            ? "↑"
            : ""}
        </p>
        <p>|</p>
        <p
          className={`${
            player.Role === correctGuess.Role
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {player.Role}
        </p>
        <p>|</p>
        <p
          className={`${
            player.Team === correctGuess.Team
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {player.Team}
        </p>
        <p>|</p>
        <p
          className={`${
            player.Country === correctGuess.Country
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {player.Country}
        </p>
      </div>
    </>
  )
}
