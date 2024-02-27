import React from 'react'
import classes from './footer.module.css'
import coffee from '../../../public/assets/images/coffee.png'

function Footer() {
  return (
    <footer>
        <div>
            <span>Embrace the Imperfection</span>
            <br />
            <span>Layout: NeuBrutalism</span>
        </div>
        <div style={{textAlign: 'right'}} className={classes.second}>
            <span>Built using React & CSS in Tamil Nadu, India</span>
            <br />
            <span className={classes.rights}>&copy;{new Date().getFullYear()} Subaash. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer