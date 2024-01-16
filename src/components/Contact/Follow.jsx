import React, { useState, useEffect } from 'react'
import classes from './follow.module.css'

function Follow() {
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
    <ul className={classes.followContainer}>
        <div className={classes.banner}>See what I share on</div>
        {
            Object.keys(followObj).map((item, ind)=>{
                return(
                    <li key={ind} onClick={(e)=>redirectToLinks(e)} id={item}>{item}</li>
                )
            })
        }
    </ul>
  )
}

export default Follow