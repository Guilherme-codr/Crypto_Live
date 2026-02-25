import { StrictMode } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {
  return (
      <div className="bg-bg-primary min-h-screen">
        <div>
          <Header />
          <Hero />
        </div>
      </div>
  )
}

export default App