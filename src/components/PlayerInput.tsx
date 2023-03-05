import { players } from "../data/players"
import { useState, useEffect } from "react"

interface PlayerInputProps {
  guesses: Array<string>
  setGuesses: (guesses: Array<string>) => void
}

export const PlayerInput: React.FC<PlayerInputProps> = ({
  guesses,
  setGuesses,
}) => {
  const [search, setSearch] = useState<string>("")
  const [activeIndex, setActiveIndex] = useState<number>(-1)
  const [filteredPlayers, setFilteredPlayers] = useState(players)

  const addGuess = (player: string) => {
    if (guesses.includes(player)) return
    setGuesses([...guesses, player])
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
    setActiveIndex(-1)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowUp") {
      event.preventDefault()
      setActiveIndex(
        (prevIndex) =>
          (prevIndex - 1 + filteredPlayers.length) % filteredPlayers.length
      )
    } else if (event.key === "ArrowDown") {
      event.preventDefault()
      setActiveIndex((prevIndex) => (prevIndex + 1) % filteredPlayers.length)
    } else if (event.key === "Enter" && activeIndex !== -1) {
      event.preventDefault()
      addGuess(filteredPlayers[activeIndex].Player)
      setSearch("")
      setActiveIndex(-1)
    }
  }

  useEffect(() => {
    setFilteredPlayers(
      players.filter(
        (player) =>
          !guesses.includes(player.Player) &&
          player.Player.toLowerCase().startsWith(search.toLowerCase()) &&
          player.Player.toLowerCase() !== search.toLowerCase()
      )
    )
  }, [search, guesses])

  const handleClick = (player: string) => {
    console.log(`Selected player: ${player}`)
    setSearch("")
    setActiveIndex(-1)
  }

  return (
    <div className="relative flex flex-col justify-center items-center m-3">
      <form className="w-72">
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="block w-full px-4 py-3 rounded-md placeholder-gray-300 text-gray-300 focus:outline-none focus:border focus:border-gray-500"
            placeholder="Enter player name"
          />
          {search && filteredPlayers.length > 0 && (
            <ul className="absolute z-10 w-full border border-gray-400 rounded-md mt-2 overflow-y-auto max-h-52">
              {filteredPlayers.map((player, index) => (
                <li
                  key={player.Player}
                  className={`px-4 py-2 cursor-pointer ${
                    index === activeIndex ? "bg-slate-800" : "bg-[#242424]"
                  }`}
                  onClick={() => handleClick(player.Player)}
                >
                  {player.Player}
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>
    </div>
  )
}
