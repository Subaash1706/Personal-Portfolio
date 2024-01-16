import React from 'react'
import Form from './Form'
import classes from './contact.module.css'
import Follow from './Follow'

function Contact() {
  return (
    <div className={classes.contactContainer} id='contact'>
       <Form /> 
       <Follow />
    </div>
  )
}

export default Contact