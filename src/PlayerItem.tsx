import { Player } from "./types"

interface PlayerProps {
  player: Player
}

const PlayerItem: React.FC<PlayerProps> = ({ player }) => {
  return (
    <>
      <div className="p-2 bg-zinc-800 hover:overflow-auto rounded-md flex flex-row cursor-pointer border border-gray-700 hover:border-gray-500">
        <p className="flex-1">{player.Player}</p>
        <p className="flex-1">{player.Name}</p>
        <p className="flex-1">{player.Age}</p>
        <p className="flex-1">{player.Role}</p>
        <p className="flex-1">{player.Team}</p>
        <p className="flex-1">{player.Country}</p>
      </div>
    </>
  )
}

export default PlayerItem
