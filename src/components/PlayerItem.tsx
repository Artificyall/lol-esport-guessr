import { Player } from "../types"

interface PlayerProps {
  player: Player
}

const PlayerItem: React.FC<PlayerProps> = ({ player }) => {
  return (
    <>
      <div className="p-2 bg-zinc-800 hover:overflow-auto rounded-md flex flex-row justify-between cursor-pointer border border-gray-700 hover:border-gray-500">
        <p>{player.Player}</p>
        <p>{player.Name}</p>
        <p>{player.Age}</p>
        <p>{player.Role}</p>
        <p>{player.Team}</p>
        <p>{player.Country}</p>
      </div>
    </>
  )
}

export default PlayerItem
