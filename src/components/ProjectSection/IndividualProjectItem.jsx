import styles from './item.module.css'
import rightArrow from '../../../public/assets/svgs/rightArrow.svg'
import React, { useState } from 'react'

const IndividualProjectItem = (props) => {
    const [ cursorImage, setCursorImage ] = useState('')
    const colorPalette = [
        '#69d2e7', '#7fbc8c', '#ff6b6b', '#ff69b4', 'c4a1ff', '#e3dff2', '#ffff00', '#a388ee','#7df9ff', '#ff4911'
    ]
    const shortPalette = [
        '#DCFFB7', '#7BD3EA', '#ffbb64','#ff6b6b'
    ]
    function cursorMoveHandler(e, image){
        const x = e.clientX;
        const y = e.clientY;
        const cursor = document.querySelector('#cursor')
        const subCursor = document.querySelector('#subCursor');
        const wrapper = document.querySelector('#projectWrapper')
        const wrapperX = wrapper.getBoundingClientRect().x;
        const wrapperY = wrapper.getBoundingClientRect().y;
        cursor.style.left = `${x-wrapperX}px`
        cursor.style.top = `${y-wrapperY}px`
        setCursorImage(image)
        cursor.style.background = `url(${cursorImage})`;
        cursor.style.backgroundSize = 'cover';
        subCursor.style.left = `${x-wrapperX}px`
        subCursor.style.top = `${y-wrapperY}px`
        subCursor.style.backgroundColor = shortPalette[e.target.id.split('-')[1]]
    }
    function cursorLeaveHandler(e){
        const cursor = document.querySelector('#cursor')
        const subCursor = document.querySelector('#subCursor');
        cursor.style.width = '0px';
        subCursor.style.scale = '0';
        cursor.style.opacity = '0';
        subCursor.style.opaicty = '0';
        cursor.style.border = 'none'
    }
    function cursorEnterHandler(e){
        const cursor = document.querySelector('#cursor')
        const subCursor = document.querySelector('#subCursor');
        cursor.style.width = '60vh';
        subCursor.style.scale = '1';
        cursor.style.opacity = '1';
        subCursor.style.opacity = '1';
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
                            id={`indItem-${ind}`} 
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
        <div className={styles.subCursor} id='subCursor'>view</div>
        <div style={{position: 'absolute', left: '-9999px', top: '-9999px', opacity: '0', visibility: 'hidden'}}>
            {props.items.map((item, ind)=>{
                return(<div key={ind} style={{background: `url(${item.imageSrc[0]}) 0% 0% / contain`, width: '30vw', aspectRatio : '1'}}></div>)
            })}
        </div>
    </ul>
  )
}

export default IndividualProjectItem