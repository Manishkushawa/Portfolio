import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'

import Portfolio from './Pages/Portfolio'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import "./App.css"
import Services from './Pages/Services'
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Services></Services>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App