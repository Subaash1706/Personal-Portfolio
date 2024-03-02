import React, { useEffect, useState } from 'react'
import classes from './hero.module.css'
import nameSvg from '../../../public/assets/svgs/nameredesignoutlined.svg'
import strokeSvg from '../../../public/assets/svgs/namestrokeshadow.svg'
import scrollArrow from '../../../public/assets/svgs/scrolldownarrow.svg'

function HeroSection(props) {
  const [ toggleTip, setToggleTip ] = useState(true)
  const [ heroAnimationState, setHeroAnimationState ] = useState(true);
  const [ scrollY, setScrollY ] = useState(1);
  const [ featureSupport, setFeatureSupport ] = useState(true);
  setTimeout(() => {
      setToggleTip(false)
  }, 10000);
  useEffect(()=>{
    (window.innerHeight < (+window.scrollY)) ? setHeroAnimationState(false) : setHeroAnimationState(true);     
  }, [ window.scrollY ])

  useEffect(()=>{
    const circle = document.getElementById('circle');
      if(!('animationTimeline' in circle.style)){
        setFeatureSupport(false);
        if(+window.scrollY > 0 && +window.scrollY <= 600){
          setScrollY((0.02 * (window.scrollY/2)));
        }
        else if(+window.scrollY === 0) setScrollY(1);
      }
  }, [window.scrollY])
  const rootElement = document.documentElement;
  if(heroAnimationState){
    rootElement.style.setProperty('--BACKGROUND-ANIMATION-PLAYSTATE', 'running');
  }
  else rootElement.style.setProperty('--BACKGROUND-ANIMATION-PLAYSTATE', 'paused');
  return (
  <>
    <div className={classes.heroSectionWrapper} id='heroSection'>
      <div className={classes.marqueeNameWrapper} style={{animationPlayState: heroAnimationState ? 'running' : 'paused'}}>
        <img src={nameSvg} className={classes.marqueeName} alt='Subaash'/>
        <img src={nameSvg} className={classes.marqueeName} alt='Subaash'/>
        <img src={nameSvg} className={classes.marqueeName} alt='Subaash'/>
        <img src={nameSvg} className={classes.marqueeName} alt='Subaash'/>
      </div>
      <div className={classes.marqueeStrokedNameWrapper} style={{animationPlayState: heroAnimationState ? 'running' : 'paused'}}>
        <img src={strokeSvg} alt='Subaash stroked text'/>
        <img src={strokeSvg} alt='Subaash stroked text'/>
        <img src={strokeSvg} alt='Subaash stroked text'/>
        <img src={strokeSvg} alt='Subaash stroked text'/>
      </div> 
      <div className={classes.avatarSection}>
      </div>
        <div className={`${classes.circle} circle`} id='circle' style={{transform: !featureSupport ? `translate3d(-50%, -0%, 0) scale(${scrollY})` : 'translate3d(-50%, 0, 0)', transition: !featureSupport ? 'transform 250ms ease-out' : ''}}></div>
        <div className={classes.mouseAnimationContainer}>
            <img src={scrollArrow} alt='Scroll down'/>
        </div>
    </div>
  </>
  )
}

export default HeroSection