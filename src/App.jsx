import './App.css'
import { Navbar } from './components'
import { About, Blogs, Contact, Features, Home, Works } from './pages'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Features />
      <Works />
      <Blogs />
      <Contact />
    </>
  )
}

export default App
