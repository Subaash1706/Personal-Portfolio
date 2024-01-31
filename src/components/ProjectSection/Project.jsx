import React from 'react'
import classes from './project.module.css'
import ProjectItem from './ProjectItem'
import dotBg from '../../../public/assets/svgs/dotbackground.svg'

function Project() {
  function mouseOverFn(e){
    const cont = document.querySelector('.projectContainer')
    cont.style.backgroundImage =  `url(${dotBg})`
  }
  function mouseDownfn(e){
    const cont = document.querySelector('.projectContainer')
    cont.style.backgroundImage = '';
  }
  return (
    <div className={`projectContainer ${classes.projectContainer}`} onMouseEnter={mouseOverFn} onMouseLeave={mouseDownfn} id='projects'>
    </div>
  )
}

export default Project