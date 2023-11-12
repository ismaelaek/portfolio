import Navbar from './Components/Navbar'
import Main from './Components/Main'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
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
        <Contact />
    </>
  )
}

export default App
