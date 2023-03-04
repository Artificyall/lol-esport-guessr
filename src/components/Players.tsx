import PlayerItem from "./PlayerItem"
import { Player } from "../types"

interface PlayersProps {
  players: Array<Player>
}

const Players: React.FC<PlayersProps> = ({ players }) => {
  return (
    <>
      <div className="w-1/2">
        <div className="p-2 m-4 bg-zinc-800 hover:overflow-auto rounded-md flex flex-row justify-between cursor-pointer border border-gray-700 hover:border-gray-500">
          <p>Player</p>
          <p>Name</p>
          <p>Age</p>
          <p>Role</p>
          <p>Team</p>
          <p>Country</p>
        </div>
        <ul>
          {players.map(
            (player) =>
              player.Player === "Hans Sama" && (
                <li className="m-4" key={player.Player}>
                  <PlayerItem player={player} />
                </li>
              )
          )}
        </ul>
      </div>
    </>
  )
}

export default Players
