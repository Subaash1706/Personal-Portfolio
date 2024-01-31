import React, { useState } from 'react'
import classes from './more.module.css'
import aadhiImg from '../../../public/assets/images/xp/aadhi.jpg';
import kluImg from '../../../public/assets/images/xp/tutor.png';
import aadImg from '../../../public/assets/images/xp/content.jpg';
import pinkSvg from '../../../public/assets/svgs/pinkstar.svg'
import star from '../../../public/assets/svgs/star.svg'
import bluestar from '../../../public/assets/svgs/bluestar.svg'

function MorePersonalInformation() {
    const cardInfo = [
        {
            heading: 'Who am I?',
            description: "I'm a 'Frontend web developer'. I'm self taught and I've been tinkering with the recent frontend web technologies like React for a while.",
            bgColor: '#fff'
        },
        {
            heading: 'What do I do?',
            description: "I develop websites which are engaging and responsive. I rarely design, but I can replicate designs into functional websites. I write tech content online alongside learning new stuff.",
            bgColor: '#fff'
        },
        {
            heading: 'Where am I at?',
            description: "I have been consistently pursuing excellence, thereby earned academic achievements and secured a sucessful career as an Assistant System Engineer. ",
            bgColor: '#fff'
        },
        {
            heading: 'What do I believe in?',
            description: "Known for my work ethic and consistency, I believe that the combination of both along with hardwork is the key to make a challenging path appear effortelessly successful.",
            bgColor: '#fff'
        }
    ]
    const xpInfo = [
        {
            role: 'Tutor',
            duration: "Feb'23 - Apr'23",
            name: 'Kalasalingam Academy of Research and Education',
            imgSrc: kluImg
        }, 
        {
            role: 'Intern',
            duration: "Jan'23 - Feb'23",
            name: 'Aadhi solar solutions',
            imgSrc: aadhiImg
        }, 
        {
            role: 'Content writer',
            duration: "Feb'22 - Mar'22",
            name: 'AskAnyDifference',
            imgSrc: aadImg
        }
    ]
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
                    <img src={pinkSvg} className={classes.pink}/>
                    <img src={star} className={classes.star} />
                    <img src={bluestar} className={classes.blue} />
                </div>
            </div>
        </section>
        {/* <section className={classes.xpInfoContainer}>
            <div className={classes.sectionHeading}>
                I've had experience working as
            </div>
            <ul>
                {
                    xpInfo.map((item, ind)=>{
                        return(
                            <li className={classes.indXpItem} key={ind}>
                                <img src={item.imgSrc} />
                                <div className={classes.xpDesc} style={{display: 'flex', flexDirection: 'column'}}>
                                    <div>{item.role}</div>
                                    <div>{item.name}</div>
                                    <div>{item.duration}</div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section> */}
    </div>
  )
}

export default MorePersonalInformation