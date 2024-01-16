import React from 'react'
import classes from './blog.module.css'
import Table from './Table'

function Blog() {
    const tableArray = [
        [
            'Simplify, Groupify, Conquer: The convenience of Object.GroupBy() in JavaScript',
            'Published to Dev.to',
            "On the internet since Dec'23"
        ], 
        [
            "Redefine your Logic for stricter, safer JavaScript defaults with the '??' operator",
            'Published to Dev.to',
            "On the internet since Dec'23"
        ],
        [
            '7 Amazing use cases of Array.from() method in JavaScript',
            'Published to Dev.to',
            "On the internet since Dec'23"
        ],
        [
            'Collaborative articles',
            'Published to LinkedIn',
            "On the internet since Dec'23"
        ],
        [
            "Exploring the unusual: JavaScript arrays and the 'in' operator",
            'Published to Dev.to',
            "On the internet since Nov'23"
        ]
    ]
    const links = [
        "https://dev.to/subaash_b/simplify-groupify-conquer-the-convenience-of-objectgroupby-in-javascript-2h5",
        "https://dev.to/subaash_b/redefine-your-logic-for-stricter-safer-javascript-defaults-with-the-operator-393m",
        "https://dev.to/subaash_b/7-amazing-use-cases-of-arrayfrom-method-in-javascript-50l",
        "https://www.linkedin.com/in/subaash-b-646646238/",
        "https://dev.to/subaash_b/exploring-the-unusual-javascript-arrays-and-the-in-operator-jlh"
    ]
  return (
    <div className={classes.blogContainer} id='blogs'>
        <ul className={classes.blogStats}>
            <li className={classes.viewNumber}>7000+ views</li>
            <li className={classes.interactions}>80+ interactions</li>
            <li className={classes.sinceDate}>Writing since Nov'23</li>
        </ul>
        <Table tableArray={tableArray} blogLinks = {links}/>
    </div>
  )
}

export default Blog