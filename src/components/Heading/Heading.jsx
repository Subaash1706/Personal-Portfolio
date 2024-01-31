import React from 'react'
import classes from './heading.module.css'
import circle from '../../../public/assets/svgs/circle.svg'

function Heading(props) {
  return (
    <div className={classes.headingWrapper} style={{filter: props.intersecting ? 'brightness(1) ': 'brightness(0.25)'}} >
      <div className={classes.scrollWrapper}>
        {props.innerHTML}
        <span>
          <img src={circle}/>
        </span>
        {props.innerHTML}
        <span>
          <img src={circle}/>
        </span>
        {props.innerHTML}
        <span>
          <img src={circle}/>
        </span>
        {props.innerHTML}
        <span>
          <img src={circle}/>
        </span>
        {props.innerHTML}
        <span>
          <img src={circle}/>
        </span>
        {props.innerHTML}
        <span>
          <img src={circle}/>
        </span>        
        {props.innerHTML}
        <span>
          <img src={circle}/>
        </span>        
        {props.innerHTML}
        <span>
          <img src={circle}/>
        </span>        
      </div>
    </div>
  )
}

export default Heading