import React, { useState } from 'react'
import classes from './main.module.css'
import Heading from '../Heading/Heading'
import Skills from '../SkillGrid/Skills'
import Project from '../ProjectSection/Project'
import Blog from '../Blog/Blog'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import HeroSection from '../Hero/HeroSection'

function Main(props) {
  const [ moreSection, setMoreSection ] = useState(false)

  console.log(moreSection)
  return (
    <main>
        <HeroSection onExpandMoreSection={(data)=>props.onExpandMoreSectionFromHero(data)}/>
        <Heading innerHTML='I work with'/>
        <section>
          <Skills />
        </section>
        <Heading innerHTML='Some of my works' />
        <section>
          <Project />
        </section>
        <Heading innerHTML = 'Some of my writings'/>
        <section>
          <Blog />
        </section>
        <Heading innerHTML = "Let's Connect" />
        <section>
          <Contact />
        </section>
        <section>
          <hr />
          <Footer />
        </section> 
    </main>
  )
}

export default Main