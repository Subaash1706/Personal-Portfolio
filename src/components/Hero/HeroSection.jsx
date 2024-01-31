import React, { useEffect, useState } from 'react'
import classes from './hero.module.css'
import dottedBg from '../../../public/assets/svgs/dotbackground.svg'
import personalBG from '../../../public/assets/images/personalBG.png'
import Button from '../Button/Button'
import Overlay from './Overlay/Overlay'
import avatar from '../../../public/assets/images/avatar.png'
// import nameSvg from '../../../public/assets/svgs/name.svg'
// import nameSvg from '../../../public/assets/svgs/nameredesign.svg'
import nameSvg from '../../../public/assets/svgs/nameredesignoutlined.svg'
import strokeSvg from '../../../public/assets/svgs/namestrokeshadow.svg'
import mouse from '../../../public/assets/images/mouse.gif'
import full from '../../../public/assets/images/fullscreen.gif'

function HeroSection(props) {
  const [ toggleTip, setToggleTip ] = useState(true)
  const [ heroAnimationState, setHeroAnimationState ] = useState(true);
  setTimeout(() => {
      setToggleTip(false)
  }, 10000);
  useEffect(()=>{
    (window.innerHeight < (+window.scrollY)) ? setHeroAnimationState(false) : setHeroAnimationState(true);     
  }, [ window.scrollY ])
  const rootElement = document.documentElement;
  if(heroAnimationState){
    rootElement.style.setProperty('--BACKGROUND-ANIMATION-PLAYSTATE', 'running');
  }
  else rootElement.style.setProperty('--BACKGROUND-ANIMATION-PLAYSTATE', 'paused');
  return (
    <div className={classes.heroSectionWrapper} id='heroSection'>
      <div className={classes.marqueeNameWrapper} style={{animationPlayState: heroAnimationState ? 'running' : 'paused'}}>
        <img src={nameSvg} className={classes.marqueeName}/>
        <img src={nameSvg} className={classes.marqueeName}/>
        <img src={nameSvg} className={classes.marqueeName}/>
        <img src={nameSvg} className={classes.marqueeName}/>
      </div>
      <div className={classes.marqueeStrokedNameWrapper} style={{animationPlayState: heroAnimationState ? 'running' : 'paused'}}>
        <img src={strokeSvg} />
        <img src={strokeSvg} />
        <img src={strokeSvg} />
        <img src={strokeSvg} />
      </div> 
      <div className={classes.avatarSection}>
      </div>
        <div className={classes.circle} ></div>
      {toggleTip && <div className={classes.mouseAnimationContainer}>
        <div>
          <img className={classes.mouseAnimation} src={mouse} />
          <span>Scroll</span>
        </div>
        <div>
          <img className={classes.mouseAnimation} src={full} />
          <span>Hit F11</span>
        </div>

      </div>}
    </div>
  )
}

export default HeroSection