import React, { useState } from 'react'
import classes from './hero.module.css'
import dottedBg from '../../../public/assets/svgs/dotbackground.svg'
import personalBG from '../../../public/assets/images/personalBG.png'
import Button from '../Button/Button'
import Overlay from './Overlay/Overlay'

function HeroSection(props) {
  return (
    <div>
    <div className={classes.heroContainer} id='heroSection'>
        <div className={classes.introductionSection}>
            <span className={classes.nameSection}>Hi, I'm <span className={classes.nameSpan}>Subaash</span></span>
            <span>&lt;FrontendWebDeveloper /&gt;</span>
            <div className={classes.buttonContainer}>
                <Button labelName='Know more' color='pink' onClick={()=>props.onExpandMoreSection(true)}/>
            </div>
        </div>
        <div className={classes.illustration}>
            <img src={personalBG} className={classes.personalBg}/>
            <img src={dottedBg} className={classes.dottedBg} />
        </div>
    </div>
    <Overlay />
    </div>
  )
}

export default HeroSection