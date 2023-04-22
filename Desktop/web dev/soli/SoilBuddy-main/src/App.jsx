import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'
import Form from './components/Form'
import { Link, Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Forms from './pages/Forms'
import About from './pages/about'
import Contact from './pages/contact'

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Forms />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App
