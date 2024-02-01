import styles from './item.module.css'
import rightArrow from '../../../public/assets/svgs/rightArrow.svg'
import React, { useState } from 'react'

const IndividualProjectItem = (props) => {
    const [ cursorImage, setCursorImage ] = useState('')
    const colorPalette = [
        '#69d2e7', '#7fbc8c', '#ff6b6b', '#ff69b4', 'c4a1ff', '#e3dff2', '#ffff00', '#a388ee','#7df9ff', '#ff4911'
    ]
    const shortPalette = [
        '#7fbc8c', '#a388ee', '#ffa07a','#ff6b6b'
    ]
    function cursorMoveHandler(e, image){
        const x = e.clientX;
        const y = e.clientY;
        const cursor = document.querySelector('#cursor')
        const wrapper = document.querySelector('#projectWrapper')
        const wrapperX = wrapper.getBoundingClientRect().x;
        const wrapperY = wrapper.getBoundingClientRect().y;
        cursor.style.left = `${x-wrapperX}px`
        cursor.style.top = `${y-wrapperY}px`
        setCursorImage(image)
        cursor.style.background = `url(${cursorImage})`;
        cursor.style.backgroundSize = 'cover'
    }
    function cursorLeaveHandler(e){
        const cursor = document.querySelector('#cursor')
        cursor.style.width = '0px';
        cursor.style.opacity = '0';
        cursor.style.border = 'none'
    }
    function cursorEnterHandler(e){
        const cursor = document.querySelector('#cursor')
        cursor.style.width = '60vh';
        cursor.style.opacity = '1';
        cursor.style.border ='4px solid black'
    }
    function cursorClickHandler(e, link){
        const arrow = document.createElement('a');
        arrow.href = link;
        arrow.setAttribute('target', '_blank')
        arrow.click();
    }
  return (
    <ul className={styles.wrapper} id='projectWrapper' onMouseLeave={cursorLeaveHandler}>    
        {
            props.items.map((item, ind)=>{
                return(
                        <li 
                            key={ind} 
                            className={styles.indItem} 
                            onMouseMove={(e)=>cursorMoveHandler(e, ...item.imageSrc)}  
                            onMouseEnter={cursorEnterHandler} 
                            onClick={(e)=>cursorClickHandler(e, item.link)} 
                            id={`indItem${ind}`} 
                            style={{backgroundColor: shortPalette[ind]}}
                        >
                            <div className={styles.projImage} style={{background: `url(${item.imageSrc[0]}) 0% 0% /contain`}}></div>
                            <div className={styles.title}>
                                <span>{item.title}</span>
                                <ul className={styles.techStack}>
                                    {item.tech.map((item, ind)=>{return(<li key={ind}>{item}</li>)})} 
                                </ul>
                            </div>
                            <div className={styles.desc}>{item.description}</div>
                            <div className={styles.toggleArrow}>
                                <a target="_blank" href={item.link} id = 'link'><img src={rightArrow}/></a>
                            </div>
                        </li>
                    )
            })
        }
        <div className={styles.cursor} id='cursor'></div>
        <div style={{position: 'absolute', left: '-9999px', top: '-9999px', opacity: '0', visibility: 'hidden'}}>
            {props.items.map((item, ind)=>{
                return(<div key={ind} style={{background: `url(${item.imageSrc[0]}) 0% 0% / contain`, width: '30vw', aspectRatio : '1'}}></div>)
            })}
        </div>
    </ul>
  )
}

export default IndividualProjectItem