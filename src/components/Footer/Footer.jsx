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
            <a href="https://www.buymeacoffee.com/Subaash" target="_blank" className={classes.coffeeLink}>
              <img src={coffee} alt="Buy me a coffee"/>
            </a>
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