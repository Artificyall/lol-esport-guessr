import { players } from "../data/players"

interface AutoCompleteProps {
  search: string
  setInput: (input: string) => void
}

export const AutoComplete: React.FC<AutoCompleteProps> = ({
  search,
  setInput,
}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {search && (
          <ul>
            {players
              .filter((player) =>
                player.Player.toLowerCase().startsWith(search.toLowerCase())
              )
              .map((player) => (
                <li
                  key={player.Player}
                  className="p-0.5 border border-slate-700 rounded-md cursor-pointer"
                  onClick={() => setInput(player.Player)}
                >
                  {player.Player}
                </li>
              ))}
          </ul>
        )}
      </div>
    </>
  )
}
