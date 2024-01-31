import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import classes from './main.module.css'
import Heading from '../Heading/Heading'
import Skills from '../SkillGrid/Skills'
import Project from '../ProjectSection/Project'
import Blog from '../Blog/Blog'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import HeroSection from '../Hero/HeroSection'
import ProjectWithHoverReveal from '../ProjectSection/ProjectWithHoverReveal'
import GridBlog from '../Blog/GridBlog'
import Follow from '../Contact/Follow'
import MorePersonalInformation from '../More/MorePersonalInformation'

function Main(props) {
  const [ moreSection, setMoreSection ] = useState(false)
  const { ref:heroRef, inView:heroInView } = useInView({
    threshold: 0
  });
  const { ref: moreInfoRef, inView: moreInfoInView } = useInView({
    threshold: 0
  })
  const { ref:skillsRef, inView:skillsInView } = useInView({
    threshold: 0,
    rootMargin: '-150px 0px 0px 0px'
  });
  const { ref:skillsHeadingRef, inView:skillsHeadingInView } = useInView({
    threshold: 0.15,
    rootMargin: '-150px 0px 0px 0px'
  });
  const { ref:projectRef, inView:projectInView } = useInView({
    threshold: 0.15,
    rootMargin: '-150px 0px 0px 0px'
  });
  const { ref:blogRef, inView:blogInView } = useInView({
    threshold: 0,
    rootMargin: '-150px 0px 0px 0px'
  });
  const { ref:followRef, inView:followInView } = useInView({
    threshold: 0,
    rootMargin: '-150px 0px 0px 0px'
  });
  const { ref:contactRef, inView:contactInView } = useInView({
    threshold: 0,
    rootMargin: '-150px 0px 0px 0px'
  });
  return (
    <main style={{...props.style}}>
        <div ref={heroRef} style={{position: 'sticky', top: '0px'}} id='heroSection'>
          <HeroSection onExpandMoreSection={(data)=>props.onExpandMoreSectionFromHero(data)} animationState={heroInView}/>
        </ div>

        <div className='masterHeadingWrapper'>
          <Heading innerHTML='More about me' intersecting={moreInfoInView}/>
        </div>
        <section ref={moreInfoRef}>
           <MorePersonalInformation />
        </section>

        <div className='masterHeadingWrapper'>
          <Heading innerHTML='I work with' intersecting={skillsInView}/>
        </div>
        <section ref={skillsRef}>
           <Skills intersecting = {skillsInView}/>
        </section>

        <div className='masterHeadingWrapper'>
          <Heading innerHTML='Some of my works' intersecting={projectInView} />
        </div>
        <section ref={projectRef} id='projects'>
          <ProjectWithHoverReveal intersecting={projectInView}/>
        </section>

        <div className='masterHeadingWrapper'>
          <Heading innerHTML = 'Some of my writings' intersecting={blogInView}/>
        </div>
        <section ref={blogRef} id='blogs'>
          <GridBlog intersecting={blogInView}/>
        </section>

        <div className='masterHeadingWrapper'>
          <Heading innerHTML = "Let's Connect" intersecting={followInView}/>
        </div>
        <section ref={followRef} id='follow'>
          <Follow intersecting={followInView} />
        </section>

        <div className='masterHeadingWrapper' >
          <Heading innerHTML = "Let's Collaborate" intersecting={contactInView}/>
        </div>
        <section ref={contactRef} id='contact'>
          <Contact intersecting={contactInView}/>
        </section>

        <section>
          {/* <hr /> */}
          <Footer />
        </section> 

    </main>
  )
}

export default Main