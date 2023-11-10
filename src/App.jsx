import Navbar from './Components/Navbar'
import Main from './Components/Main'
import About from './Components/About'
import Projects from './Components/Projects'
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <Main />
      <div style={{ position: "relative" }}>
        <Projects />
        <About />
      </div>
    </>
  )
}

export default App
