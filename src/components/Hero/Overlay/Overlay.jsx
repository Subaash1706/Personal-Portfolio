import React from 'react'
import classes from './overlay.module.css'
import bluestar from '../../../../public/assets/svgs/bluestar.svg'
import pinkstar from '../../../../public/assets/svgs/pinkstar.svg'
import star from '../../../../public/assets/svgs/star.svg'
import filledStar from '../../../../public/assets/svgs/pinkfilledstar.svg'


function Overlay() {
  return (
    <div className={classes.overlayContainer}>
        <img src={bluestar}/>
        <img src={star} />
        <img src={filledStar} />
        <img src={pinkstar} />
    </div>
  )
}

export default Overlay