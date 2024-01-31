import IndividualProjectItem from './IndividualProjectItem'
import classes from './project.module.css'
import React from 'react'
import { project1, project2, project3 } from './ProjectImagesProvider'

const ProjectWithHoverReveal = (props) => {
    const detailedItemArray = [
        { title: 'Expense/Income tracker', description: 'A Responsive Expense/Income tracker to help users keep track of their transactions.', tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'ChartJs', 'TesseractJs'], link: "https://subaash1706.github.io/Expensetracker/index.html#", imageSrc: [project1] },
        { title: 'CVHarbor', description: 'A website for effortless resume creation with pre-designed templates', tech: ['HTML', 'CSS', 'JavaScript', 'ReactJs' ], link: "https://subaash1706.github.io/cvharbor/", imageSrc: [project2] },
        { title: 'Design of Rabbit R1 with CSS', description: 'A succesful attempt to replicate the design of Rabbit R1 using HTML and CSS', tech: ['HTML', 'CSS'], link: "https://codepen.io/Subaash-the-sans/pen/NWJRaeB", imageSrc: [project3]}
    ]
  return (
    <div className={classes.projectWrapper} style={{opacity: props.intersecting ? '1' : '0'}}>
        <IndividualProjectItem items={detailedItemArray} />
    </div>
  )
}

export default React.memo(ProjectWithHoverReveal)