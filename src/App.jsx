import { useState ,useEffect} from 'react'
import Aos from 'aos'
import Headers from './Header/Header'
import Footer from './Footer/Footer'

import './App.css'
import Hero from './UI/Hero'
import Exp from './Exp/Exp'
import Skill from './Skill/Skill'
import Project from './Project/project'
import Education from './Education/Eduction'

function App() {
 useEffect(() => {
  Aos.init();

 },[])



  return (
    <><main>
      <Headers/>
      <Hero/>
      <Exp/>
      <Skill/>
      <Project/>
      <Education/>
      <Footer/>
      </main>
    </>
  )
}

export default App
