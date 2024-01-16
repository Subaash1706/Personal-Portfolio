import React, { useEffect, useState } from 'react'
import classes from './navbar.module.css'

function Navbar(props) {
  const [ navActiveStatus, setNavActiveStatus ] = useState('navHero')
  const [ classList, setClassList ] = useState('')
  const [navbarExpanded, setNavbarExpanded] = useState(
    () => window.innerWidth >= 576
  );
  const [ windowWidth, setWindowWidth ] = useState(600)

  useEffect(() => {
    const handleResize = () => {
      setNavbarExpanded(window.innerWidth >= 576);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(()=>{
    setWindowWidth(window.innerWidth);
  }, [] )
  function navbarExpansionfunction(e){
    setNavbarExpanded(prev=>!prev)
  }
  function assignActiveNavLink(e){
    if(!props.onExpandedMoreInfoSection) setNavActiveStatus(e.target.id)
    else{
      props.onCollapseMoreInfoSection('hello there')
    }
  }

  return (
    <nav className={classes.navbarContainer}>
        <div className={classes.logoContainer}>
        </div>
        <div className={`${classes.toggleNavbar}`} onClick={navbarExpansionfunction}></div>
        <ul style={{translate: navbarExpanded ? (+windowWidth < 576 ? '0 16px' : '0 0px') : '0 -120%'}}>
            <li><a href="#heroSection" className={!props.onExpandedMoreInfoSection ? (navActiveStatus === 'navHero' ? 'navbarActive' : '') : ''} onClick={assignActiveNavLink} id='navHero'>Home</a></li>
            <li><a href="#projects" className={!props.onExpandedMoreInfoSection ? (navActiveStatus === 'navProject' ? 'navbarActive' : '') : ''} onClick={assignActiveNavLink} id='navProject'>Projects</a></li>
            <li><a href="#blogs" className={!props.onExpandedMoreInfoSection ? (navActiveStatus === 'navBlog' ? 'navbarActive' : '') : ''} onClick={assignActiveNavLink} id='navBlog'>Blog</a></li>
            <li><a href="#contact" className={!props.onExpandedMoreInfoSection ? (navActiveStatus === 'navContact' ? 'navbarActive' : '') : ''} onClick={assignActiveNavLink} id='navContact'>Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar