import Players from "./Players"
import { players } from "../data/players"
import { useState } from "react"

export const Main: React.FC = () => {
  const [search, setSearch] = useState<string>("")

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Players players={players} setSearch={setSearch} search={search} />
      </div>
    </>
  )
}
