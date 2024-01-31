import React, { useState } from 'react'
import classes from './skills.module.css'
import htmlIcon from '../../../public/assets/images/icons/html.png'
import cssIcon from '../../../public/assets/images/icons/css.png'
import bootstrapIcon from '../../../public/assets/images/icons/bootstrap.png'
import jsIcon from '../../../public/assets/images/icons/js.png'
import reactIcon from '../../../public/assets/images/icons/react.png'
import figmaIcon from '../../../public/assets/images/icons/figma.png'


function Skills(props) {
    const [ currentCursor, setCurrentCursor ] = useState('')
    const skillsArray = [
        { name: 'HTML', cursor: htmlIcon, bg: 'rgba(23, 210, 251,1)' },
        { name: 'CSS', cursor: cssIcon, bg: 'rgba(255, 105, 180, 1)' }, 
        { name: 'Bootstrap', cursor: bootstrapIcon, bg: 'rgba(151, 35, 201, 1)' },
        { name: 'JavaScript', cursor: jsIcon, bg: 'rgba(244, 215, 56, 1)' },
        { name: 'ReactJs', cursor: reactIcon, bg: 'rgba(105, 210, 231, 1)' },
        { name: 'React-Redux', cursor: reactIcon, bg: 'rgba(196, 161, 255, 1)' },
        { name: 'Figma', cursor: figmaIcon, bg: 'rgba(255, 160, 122, 1)' }
    ]
    function mouseMoveHandler(e, {cursor}){
        const cursorTrace = document.querySelector('.cursor');
        const container = document.querySelector('.skillContainer')
        const width = container.getBoundingClientRect().x;
        const  height = container.getBoundingClientRect().y;
        cursorTrace.style.backgroundImage = `url(${cursor})`;
        cursorTrace.style.top = `${(+e.clientY)- height}px`;
        cursorTrace.style.left = `${(+e.clientX) - width}px`;
    }
  return (
    <div className={`skillContainer ${classes.skillContainer}`} style={{opacity: props.intersecting ? '1' : '0', filter: props.intersecting ? 'saturate(1)' : 'saturate(0)'}}>
        {
            skillsArray.map((item, index)=>{
                return(
                    <div key={index} className={classes.skillName} style={{backgroundColor: item.bg}} id={index} onMouseMove={(e)=>mouseMoveHandler(e, item)}>{item.name}</div>
                )
            })
        }
        <div className={`cursor ${classes.cursor}`}></div>
    </div>
  )
}

export default Skills