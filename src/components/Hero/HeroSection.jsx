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

  const [rotationRate, setRotationRate] = useState({ alpha: 0, beta: 0, gamma: 0 });

  useEffect(() => {
      let lastExecution = Date.now();
      const throttleInterval = 100; // Time in milliseconds

      const handleDeviceMotion = (e) => {
          const now = Date.now();
          if (now - lastExecution >= throttleInterval) {
              // Accumulate the new rotation values with the existing ones
              setRotationRate((prevRotationRate) => ({
                  alpha: prevRotationRate.alpha + Math.floor(e.rotationRate.alpha),
                  beta: prevRotationRate.beta + Math.floor(e.rotationRate.beta),
                  gamma: prevRotationRate.gamma + Math.floor(e.rotationRate.gamma),
              }));
              lastExecution = now;
          }
      };

      window.addEventListener('devicemotion', handleDeviceMotion);

      // Cleanup event listener on component unmount
      return () => {
          window.removeEventListener('devicemotion', handleDeviceMotion);
      };
  }, []);
  
  const useMousePosition = () => {
    const [
      mousePosition,
      setMousePosition
    ] = React.useState({ x: null, y: null });
  React.useEffect(() => {
      const updateMousePosition = ev => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
      };
      
      document.getElementById('heroSection').addEventListener('mousemove', updateMousePosition);
      return () => {
        document.getElementById('heroSection').removeEventListener('mousemove', updateMousePosition);
      };
    }, []);

    return mousePosition;
  };

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
  function mouseMoveHandler(e){
    // console.log('moving')
    const bg = document.getElementById('heroSectionBg')
    const circle = document.querySelector('.circle')
    const avatarImage = document.getElementById('avatarSectionImage')
    avatarImage.style.transform =  `translate(${Math.floor((e.clientX)/60)}px, ${Math.floor((e.clientY)/60)}px)`
    // circle.style.transform = `translate(calc(-50% + ${(e.clientX)/40}px), ${(e.clientY)/40}px)`
    bg.style.transform =  `translate(${Math.floor((e.clientX)/60)}px, ${Math.floor((e.clientY)/60)}px)`
    // bg.style.transform = `translateY(${(e.clientY)/10}px)`
  }

  if(rotationRate.alpha !== null){
    const bg = document.getElementById('heroSectionBg')
    const avatar = document.getElementById('avatarSectionImage')
    if(bg && avatar){
      bg.style.transform = `translate(
        clamp(9vw, ${(rotationRate.beta) / 5}px, 50vw), 
        clamp(0%, ${(rotationRate.alpha) / 5}px, 40vh)
        
      )`;
      
      avatar.style.transform = `translate(
        clamp(-5vw, ${Math.floor(rotationRate.beta / 5)}px, 5vw), 
        clamp(-5px, ${Math.floor(rotationRate.alpha / 15)}px, 5vh)
      )`;
      // bg.style.transition = 'all 0ms linear!important'
      avatar.style.transition = 'all 500ms linear'
    }
    }
  return (
  <>
    <div className={classes.heroSectionWrapper} id='heroSection' onMouseMove={(e)=>{mouseMoveHandler(e)}}>
    <div id='heroCursor'></div>
    <div id='heroSectionBg'></div>
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
      <div className={classes.avatarSection} id='avatarSectionImage' style={{transition: 'all 100ms ease-out'}}>
      </div>
        <div className={`${classes.circle} circle`} id='circle' style={{transform: !featureSupport ? `translate3d(-50%, -0%, 0) scale(${scrollY})` : 'translate3d(-50%, 0, 0)', transition: !featureSupport ? 'transform 250ms ease-out' : ''}}>
              
        </div>

      {/* <svg className={`${classes.circle} circle`} id='circle'>
      <filter id="turbulence">
        <feTurbulence type="turbulence" baseFrequency="0.02 0.04" numOctaves="1" result="NOISE"></feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="50">
        </feDisplacementMap>
      </filter>
      </svg> */}

        <div className={classes.mouseAnimationContainer}>
            <img src={scrollArrow} alt='Scroll down'/>
        </div>
    </div>
  </>
  )
}

export default HeroSection