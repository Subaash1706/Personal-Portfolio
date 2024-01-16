import React, { useState } from 'react'
import classes from './item.module.css'
import { project1, project2 } from './ProjectImagesProvider'
import rightArrow from '../../../public/assets/svgs/rightArrow.svg'

function ProjectItem() {
    const projectImages = [ project1, project2 ]
    const projDetailsObj = [
        { title: 'Expense/Income tracker', description: 'A Responsive Expense/Income tracker to help users keep track of their transactions.', tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'ChartJs', 'TesseractJs'] },
        { title: 'CVHarbor', description: 'A website for effortless resume creation with pre-designed templates', tech: ['HTML', 'CSS', 'JavaScript', 'ReactJs' ] }
    ]
  return (
    <>
{   
    Array.from({length: projectImages.length}, (_, ind)=>{return(
        <div className={`projContainer ${classes.projContainer}`} key={ind}>
            <div className={classes.projImageContainer}>
                {
                    projectImages[ind].map((item, ind)=>{
                        return(
                            <img src={item} key={ind} />
                        )
                    })
                }
            </div>
            <div className={classes.projDetailsContainer}>
                {
                    <React.Fragment key={ind}>
                        <div className={classes.projTitleContainer}>
                            { projDetailsObj[ind].title }
                            <span className={classes.toggleArrow}>
                                <img src={rightArrow}/>
                            </span>
                        </div>
                        <div className={classes.projSummaryContainer}>
                            { projDetailsObj[ind].description }
                        </div>
                        <div className={classes.projTechContainer}>
                            { projDetailsObj[ind].tech.join(', ') }
                        </div>  
                    </React.Fragment>                              
                }

            </div>
        </div>        
    )})

}
    </>)
}

export default ProjectItem