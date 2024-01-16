import React from 'react'
import classes from './landing.module.css'

function LandingPage() {
  return (
    <div className={classes.landingPageContainer}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div> 
        <section className={classes.name}>
          <section className={classes.subContainer}>
            <span>&lt;</span>              
            <span className={classes.nameSpan}>
              <span>W</span>
              <span>e</span>
              <span>l</span>
              <span>c</span>
              <span>o</span>
              <span>m</span>
              <span>e</span>
            </span>
            <span>&nbsp;/&gt;</span>
          </section>
        </section>
    </div>
  )
}

export default LandingPage