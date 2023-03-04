import { Player } from "./types"

interface PlayerProps {
  player: Player
}

const PlayerItem: React.FC<PlayerProps> = ({ player }) => {
  return (
    <>
      <div className="p-2 bg-zinc-800 hover:overflow-auto rounded-md flex flex-row cursor-pointer border border-gray-700 hover:border-gray-500">
        <div className="flex-1">{player.Player}</div>
        <div className="flex-1">{player.Name}</div>
        <div className="flex-1">{player.Age}</div>
        <div className="flex-1">{player.Role}</div>
        <div className="flex-1">{player.Team}</div>
        <div className="flex-1">{player.Country}</div>
      </div>
    </>
  )
}

export default PlayerItem
