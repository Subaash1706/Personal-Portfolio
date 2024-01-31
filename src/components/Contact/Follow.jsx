import React, { useState, useEffect } from 'react'
import classes from './follow.module.css'
import arrow from '../../../public/assets/svgs/rightArrow.svg'

function Follow(props) {
    const followObj = {
        LinkedIn: 'https://www.linkedin.com/in/subaash-b-646646238/',
        "Dev.to": 'https://dev.to/subaash_b',
        X: 'https://twitter.com/Subaashbala',
        GitHub: 'https://github.com/Subaash1706/'
    }
    const [ link, setLink ] = useState('')

    useEffect(() => {
        const anchor = document.createElement('a');
        anchor.href = link;
        anchor.target = '_blank';
        document.body.appendChild(anchor);
        if(link) anchor.click();
        return () => {
          document.body.removeChild(anchor);
        };
      }, [link]);
    function redirectToLinks(e){
        setLink(followObj[e.target.id])
    }
  return (
    <ul className={classes.followContainer} onClick={(e)=>redirectToLinks(e)} style={{opacity: props.intersecting ? '1' : '0'}}>
        {
            Object.keys(followObj).map((item, ind)=>{
                return(
                    <li key={ind}  id={item}>
                      {item}
                      <span id={`${item}`}>
                        <img src={arrow} className={classes.arrow} id={item}/>
                      </span>
                    </li>
                )
            })
        }
    </ul>
  )
}

export default Follow