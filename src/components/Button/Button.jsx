import React from 'react'
import classes from './button.module.css'

function Button(props) {
  return (
    <button className={classes.button} style={{backgroundColor: props.color ? props.color : 'white', ...(props.style ? props.style : '')}} disabled={props.disabled ? props.disabled : false} onClick={props.onClick}>
        {props.labelName}
    </button>
  )
}

export default Button