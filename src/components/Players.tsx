import PlayerItem from "./PlayerItem"
import { Player } from "../types"
import { AutoComplete } from "./AutoComplete"
import { useState } from "react"

interface PlayersProps {
  players: Array<Player>
  setSearch: (search: string) => void
  search: string
}

const Players: React.FC<PlayersProps> = ({ players, setSearch, search }) => {
  const [input, setInput] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setInput(e.target.value)
  }

  return (
    <>
      <div className="w-1/2">
        <div className="p-2 m-4 bg-zinc-800 hover:overflow-auto rounded-md flex flex-row justify-between cursor-pointer border border-gray-700 hover:border-gray-500">
          <p>Player</p>
          <p>|</p>
          <p>Name</p>
          <p>|</p>
          <p>Age</p>
          <p>|</p>
          <p>Role</p>
          <p>|</p>
          <p>Team</p>
          <p>|</p>
          <p>Country</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <input
            type="text"
            placeholder="Enter a player"
            className="p-2 mx-4 w-1/2 rounded-md appearance-none border border-gray-700 shadow-inner"
            onChange={handleChange}
            value={input}
          />
        </div>
        <AutoComplete search={search} setInput={setInput} />
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
