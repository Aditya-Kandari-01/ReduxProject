import SearchBar from "./components/SearchBar"
import Tabs from "./components/Tabs"
import ResultGrid from "./components/ResultGrid"
const App = () => {
  return (
    <div className="min-h-screen text-white w-full bg-gray-950">
      <SearchBar></SearchBar>
      <Tabs></Tabs>
      <ResultGrid></ResultGrid>
    </div>

  )
}

export default App
 