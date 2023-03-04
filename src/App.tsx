import Players from "./components/Players"
import { players } from "./data/players"

const App: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Players players={players} />
      </div>
    </>
  )
}

export default App
