import React, { useEffect, useState } from 'react'
import classes from './landing.module.css'
import welcome from '../../../public/assets/svgs/welcome.svg'
import wish from '../../../public/assets/svgs/msg.svg'
import loading from '../../../public/assets/svgs/loadingcircle.svg'

function LandingPage({progress}) {
  const [ cursorState, setCursorState ] = useState(false)
  const [ reveal, setReveal ] = useState(false);
  const [ loadHide, setLoadHide ] = useState(false);
  const [ shrinkState, setShrinkState ]= useState(false);
  const [ layer, setLayer ] = useState(900)
  function moveCursor(e){
    if(!reveal && cursorState){
    const inner = document.getElementById('innerCircle');
    const innerX = inner.getBoundingClientRect().x;
    const innerY = inner.getBoundingClientRect().y;
    const cursor = document.getElementById('loaderCursor');
    cursor.style.top = `${+e.clientY - innerY}px`;
    cursor.style.left = `${+e.clientX - innerX}px`
  }
  }
  const { imageState: image, docState: doc } = progress;
  function renderDynamicCursorText(){
    if(!image && !doc) {
      return 'Loading assets'
    }
    else{
      if(image && !doc) {
        return 'Rendering page';
      }
      else if(image && doc) return 'Click to reveal'
    }
  }
  function revealSiteContent(){
    if(image && doc){ 
      setReveal(true)
      setCursorState(false);
      setTimeout(() => {
        setLoadHide(true);
      }, 550);
    };
  }
  useEffect(()=>{
    if(loadHide) {
      setTimeout(() => {
        setShrinkState(true)
      }, 500);
    }
  }, [ loadHide ])
  useEffect(()=>{
    if(shrinkState){
      setLayer(100)
    }
  })
  const docEle = document.documentElement;
  const root= document.getElementById('root');
  !shrinkState ? (docEle.style.setProperty('--ROOT-MAX-HEIGHT', '100vh'), docEle.style.setProperty('--SCROLL-WIDTH', '0px')) : (docEle.style.setProperty('--ROOT-MAX-HEIGHT', 'unset'), docEle.style.setProperty('--SCROLL-WIDTH', '10px'));
  function preventScroll(e){e.preventDefault();}
  return (
  <>
    {!loadHide && <div className={`${classes.container}`} id='loadContainer' onWheel={preventScroll} onScroll={preventScroll}>
      <div className={classes.landingPageContainer}>
          <div>
            <img src={welcome} />
            <img src={welcome} />
            <img src={welcome} />
            <img src={welcome} />
          </div>
          <div>
            <img src={wish} />
            <img src={wish} />
            <img src={wish} />
            <img src={wish} />
          </div>
          <div>
            <img src={welcome} />
            <img src={welcome} />
            <img src={welcome} />
            <img src={welcome} />
          </div>
          <div>
            <img src={wish} />
            <img src={wish} />
            <img src={wish} />
            <img src={wish} />
          </div>
      </div>
      <div className={`${classes.circle}`}>
        <img src={loading} loading='eager'/>
        <div className={`${classes.innerCircle}`} onMouseMove={moveCursor} onMouseLeave={()=>setCursorState(false)} onMouseEnter={()=>setCursorState(true)} id='innerCircle'>
          <div className={`${classes.cursor} ${reveal && classes.zoomInOut}`} id='loaderCursor' style={{top: !cursorState && '50%', left: !cursorState && '50%'}} onClick={revealSiteContent}>
            { !reveal ? renderDynamicCursorText() : '' }
          </div>
        </div>
      </div>
    </div>}
    {
    loadHide && 
      <div className={`${classes.postLoadContainer} `}>
        <div className={`${classes.postLoadContainerCursor} ${shrinkState && classes.shrink}`} style={{zIndex: layer}}>

        </div>
      </div>
    }
  </>
  )
}

export default LandingPage