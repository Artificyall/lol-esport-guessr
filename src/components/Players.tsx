import PlayerItem from "./PlayerItem"
import { Player } from "../types"

interface PlayersProps {
  players: Array<Player>
}

const Players: React.FC<PlayersProps> = ({ players }) => {
  return (
    <>
      <ul className="grid gap-4 grid-cols-3 grid-rows-3">
        {players.map(
          (player) =>
            player.Player === "Hans Sama" && (
              <li className="m-4" key={player.Player}>
                <PlayerItem player={player} />
              </li>
            )
        )}
      </ul>
    </>
  )
}

export default Players
