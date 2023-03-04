import "./App.css"
import Players from "./Players"
import { players } from "./data/players"

const App: React.FC = () => {
  return (
    <>
      <Players players={players} />
    </>
  )
}

export default App
