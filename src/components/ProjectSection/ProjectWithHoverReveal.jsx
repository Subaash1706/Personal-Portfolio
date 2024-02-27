import IndividualProjectItem from './IndividualProjectItem'
import classes from './project.module.css'
import React, { useState, useEffect } from 'react'
import { project1, project2, project3, project4, projectVert1,projectVert2, projectVert3, projectVert4 } from './ProjectImagesProvider'

const ProjectWithHoverReveal = (props) => {
  const [ mobileViewStatus, setMobileViewStatus ]= useState(false);

  useEffect(()=>{
    if(+window.innerWidth < 500) setMobileViewStatus(true)
    else setMobileViewStatus(false)
}, [ window.innerWidth ])
    const detailedItemArray = [
        { title: 'Expense/Income tracker', description: 'A Responsive Expense/Income tracker to help users keep track of their transactions.', tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'ChartJs', 'TesseractJs'], link: "https://subaash1706.github.io/Expensetracker/index.html#", imageSrc: [mobileViewStatus ? projectVert1 : project1] },

        { title: 'CVHarbor', description: 'A website for effortless resume creation with pre-designed templates', tech: ['HTML', 'CSS', 'JavaScript', 'ReactJs' ], link: "https://subaash1706.github.io/cvharbor/", imageSrc: [mobileViewStatus ? projectVert2 : project2] },

        { title: 'CSS artistry on Codepen', description: 'A codpen collection where I make visually appealing, interactive art with CSS', tech: ['HTML', 'CSS'], link: "https://codepen.io/collection/ExzBoM", imageSrc: [mobileViewStatus ? projectVert3 : project3]}, 

        { title: 'UI components on Uiverse.io', description: 'Design and Development of UI components for the open source platform, UIverse.io', tech: ['HTML', 'CSS'], link: "https://uiverse.io/profile/Subaashbala", imageSrc: [mobileViewStatus ? projectVert4 : project4]}
    ]
  return (
    <div className={classes.projectWrapper} style={{opacity: props.intersecting ? '1' : '0'}}>
        <IndividualProjectItem items={detailedItemArray} />
    </div>
  )
}

export default React.memo(ProjectWithHoverReveal)