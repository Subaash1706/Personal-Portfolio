import styles from './blog.module.css'
import React from 'react'
import imageSource from './BlogImage'
import rightArrow from '../../../public/assets/svgs/rightArrow.svg'

const GridBlog = (props) => {
    const colorPalette = [
        '#69d2e7', '#7fbc8c', '#ff6b6b', '#ff69b4', 'c4a1ff', '#e3dff2', '#ffff00', '#a388ee','#7df9ff', '#ff4911'
    ]
    const blogObj = [
        {title: "Exploring the unusual: JavaScript arrays and the 'in' operator", link: "https://dev.to/subaash_b/exploring-the-unusual-javascript-arrays-and-the-in-operator-jlh"},
        {title: "7 Amazing use cases of Array.from() method in JavaScript", link: "https://dev.to/subaash_b/7-amazing-use-cases-of-arrayfrom-method-in-javascript-50l"},
        {title: "Redefine your Logic for stricter, safer JavaScript defaults with the '??' operator", link: "https://dev.to/subaash_b/redefine-your-logic-for-stricter-safer-javascript-defaults-with-the-operator-393m"},
        {title: "Simplify, Groupify, Conquer: The convenience of Object.GroupBy() in JavaScript", link: "https://dev.to/subaash_b/simplify-groupify-conquer-the-convenience-of-objectgroupby-in-javascript-2h5"},
        {title: "LinkedIn Collaborative articles", link: "https://www.linkedin.com/in/subaash-b-646646238/"},
        {title: "Referential equality: Where variables check-in and rarely check-out.", link: "https://dev.to/subaash_b/referential-equality-where-variables-check-in-and-rarely-check-out-14gp"},
    ]
  return (
    <div className={styles.blogWrapper} style={{opacity: props.intersecting ? '1' : '0' }}>
        {
            imageSource.map((item, ind)=>{
                return(
                    <figure key={ind}>
                        <img src={item} key={ind} className={styles.blogImages}/>
                        <figcaption style={{backgroundColor: colorPalette[Math.floor(Math.random()*colorPalette.length)]}}>
                            <span>{blogObj[ind].title}</span>
                            <a target='_blank' href={blogObj[ind].link}><img src={rightArrow} className={styles.toggleArrow}/></a>
                        </figcaption>
                    </figure>
                )
            })
        }
    </div>
  )
}

export default GridBlog