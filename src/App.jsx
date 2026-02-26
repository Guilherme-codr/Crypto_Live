import Header from "./components/Header"
import Hero from "./components/Hero"
import Coins_Dashboard from "./components/Coins_Dashboard"

function App() {
  return (
      <div className="bg-bg-primary min-h-screen">
        <div>
          <Header />
          <Hero />
          <Coins_Dashboard />
        </div>
      </div>
  )
}

export default App