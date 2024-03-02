import styles from './blog.module.css'
import React from 'react'
import imageSource from './BlogImage'
import rightArrow from '../../../public/assets/svgs/rightArrow.svg'

const GridBlog = (props) => {
    const colorPalette = [
        '#69d2e7', '#7fbc8c', '#ff6b6b', '#ff69b4', 'c4a1ff', '#e3dff2', '#ffff00', '#a388ee','#7df9ff', '#ff4911'
    ]
    const blogObj = [
        {title: "Exploring the unusual: JavaScript arrays and the 'in' operator", link: "https://dev.to/subaash_b/exploring-the-unusual-javascript-arrays-and-the-in-operator-jlh", date: "Nov 25, 2023", hits: "100+", interactions: '10+'},

        {title: "7 Amazing use cases of Array.from() method in JavaScript", link: "https://dev.to/subaash_b/7-amazing-use-cases-of-arrayfrom-method-in-javascript-50l", date: "Dec 5, 2023",hits: "250+", interactions: '10+'},

        {title: "Redefine your Logic for stricter, safer JavaScript defaults with the '??' operator", link: "https://dev.to/subaash_b/redefine-your-logic-for-stricter-safer-javascript-defaults-with-the-operator-393m", date: "Dec 14, 2023", hits: "4100+", interactions: "40+"},

        {title: "Simplify, Groupify, Conquer: The convenience of Object.GroupBy() in JavaScript", link: "https://dev.to/subaash_b/simplify-groupify-conquer-the-convenience-of-objectgroupby-in-javascript-2h5", date: "Dec 24, 2023", hits: "2600+", interactions: "35+" },

        {title: "LinkedIn Collaborative articles", link: "https://www.linkedin.com/in/subaash-b-646646238/", hits: "14,000+", interactions: ""},

        {title: "Referential equality: Where variables check-in and rarely check-out.", link: "https://dev.to/subaash_b/referential-equality-where-variables-check-in-and-rarely-check-out-14gp", date: "Jan 09, 2024", hits: "80+", interactions: "15+"},
    ]
  return (
    <div className={styles.blogContainer} style={{opacity: props.intersecting ? '1' : '0' }}>
        {
            imageSource.map((item, ind)=>{
                return(
                    <div className={styles.blogWrapper} key={`${item.title}_${ind}`}>
                        <span style={{position: 'relative', display: 'inline-block', backgroundSize: 'contain'}}>
                            <img src={item} />
                        </span>
                        <div className={styles.blogInfo}>
                            <a className={styles.title} href={blogObj[ind].link} target='_blank'>{blogObj[ind].title}</a>
                            <div className={styles.interactions}>
                                <div>{blogObj[ind].hits} Hits</div>
                                {blogObj[ind].interactions ? <div>{blogObj[ind].interactions} Interactions</div> : ''}
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default GridBlog