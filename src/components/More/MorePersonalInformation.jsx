import React, { useState } from 'react'
import classes from './more.module.css'
import Heading from '../Heading/Heading'
import arrow from '../../../public/assets/svgs/rightArrow.svg'
import colors from '../../../public/assets/images/colors.jpg'

function MorePersonalInformation() {
    const [ xpExpandStatus, setXpExpandStatus ] = useState({
        first: false, 
        second: false, 
        third: false
    })
    const cardInfo = [
        {
            heading: 'Who am I?',
            description: "I am a recent BTech graduate, who is passionate about web development. I'm self taught and I've been tinkering with the recent frontend web technologies for a while.",
            bgColor: '#fdfd96'
        },
        {
            heading: 'What do I do?',
            description: "I develop websites which are engaging and responsive. I rarely design, but I can reproduce the design into a functional website. I write tech content online alongside learning new stuff.",
            bgColor: '#ffb2ef'
        },
        {
            heading: 'Where am I at?',
            description: "I have been consistently pursuing excellence, thereby earning academic achievements and securing a sucessful career in IT industry. ",
            bgColor: '#bafce2'
        },
        {
            heading: 'What do I believe in?',
            description: "Known for my work ethic and consistency, I believe that the combination of both along with hardwork is the key to make a challenging path appear effortelessly successful.",
            bgColor: '#87ceeb'
        }
    ]
    const xpInfo = [
        {
            role: 'Tutor',
            duration: "Feb'23 - Apr'23",
            name: 'Kalasalingam Academy of Research and Education',
            responsibilities: [
                        "Provided daily support to freshman students for theoretical understanding and practical experiments.",
                        "Facilitated team-based learning, ensuring timely completion of laboratory records.",
                        "Assisted faculty in planning and executing daily experiments, contributing to curriculum development.",
                        "Corrected student record works for accuracy before submission for approval.",
                        "Collaborated with subject teacher on an energy auditing project, guiding methodology and analysis.",
                        "Created a comprehensive spreadsheet for household energy audit in the energy project.",
                        "Conducted quizzes under faculty guidance to foster creative thinking in students."
                        ]
        }, 
        {
            role: 'Intern',
            duration: "Jan'23 - Feb'23",
            name: 'Aadhi solar solutions',
            responsibilities: [
                "Contributed actively to solar energy projects, gaining hands-on experience in maintenance and troubleshooting.",
                "Participated in the implementation of solar street lamps and water heaters",
                "Collaborated with the design team to integrate solar infrastructure into industrial premises.",
                "Explored agricultural applications, observing the study of a Polycarbonate-based solar dryer for drying clove.",
                "Collaborated with engineers, technicians, and project managers for successful project execution."
            ]
        }, 
        {
            role: 'Content writer',
            duration: "Feb'22 - Mar'22",
            name: 'AskAnyDifference',
            responsibilities: [
                "Conducted research on assigned topics and created plagiarism-free content.",
                "Adhered to a minimum word count (980 words) and strict article format.",
                "Utilized online tools for grammar checks and formatting.",
                "Contributed content on various topics, emphasizing differences between subjects.",
                "Submitted articles for approval and, after thorough checks, released them to the web."
            ]
        }
    ]
    function xpExpandHandler(e){
        const left = document.querySelector('.cardLeft')
        const right = document.querySelector('.cardRight')
        setXpExpandStatus(prev=>{return{...prev, [`${e.target.id}`]: !prev[`${e.target.id}`]}})
    }
  return (
    <div className={classes.moreInfoConainer}>
        <section className={classes.personalInfoContainer}>
            <div className={classes.leftContainer}>
                <div className={classes.verticalFlex}>
                    {
                        cardInfo.map((item, index)=>{
                            return(<div className={classes.moreInfoCardContainer} key={index}>
                                <div className={classes.moreInfoHeading}>
                                    { item.heading}
                                </div>
                                <div className={classes.moreInfoDesc} style={{backgroundColor: item.bgColor}}>
                                    { item.description }
                                </div>
                            </div>)
                        })
                    }

                </div>
                <div className={classes.imgSpace}>
                </div>
            </div>
        </section>
        <Heading innerHTML="Professional Experiences"/>
        <section className={classes.experienceContainer}>
            <div className={classes.s2leftContainer}>
                {
                    xpInfo.map((item, ind)=>{
                        return(
                            <div className={classes.s2LeftCardContainer} key={ind}>
                                <div className={`cardLeft ${classes.cardLeft}`} style={{width: xpExpandStatus[Object.keys(xpExpandStatus)[ind]] ? '25%' : '100%'}}>
                                    <div className={classes.cardLeftHeading}>{item.role}</div>
                                    <div className={classes.cardLeftDuration}>{item.duration}</div>
                                    <div className={classes.cursor} onClick={xpExpandHandler} id={Object.keys(xpExpandStatus)[ind]}>
                                        <img src={arrow} id={Object.keys(xpExpandStatus)[ind]} style={{transform: xpExpandStatus[Object.keys(xpExpandStatus)[ind]] ? 'rotateZ(180deg)' : 'rotateZ(0deg)'}}/>
                                    </div>
                                </div>
                                <div 
                                    className={`cardRight ${classes.cardRight}`}
                                    style={{display: xpExpandStatus[Object.keys(xpExpandStatus)[ind]] ? 'block' : 'none'}}
                                    >
                                    <div className={classes.cardRightName}>
                                        {item.name}
                                    </div>
                                    <ul className={classes.resp}>
                                      {item.responsibilities.map((item, ind)=><li key={ind}>{item}</li>)}  
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    </div>
  )
}

export default MorePersonalInformation