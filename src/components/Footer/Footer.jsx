import React from 'react'
import classes from './footer.module.css'

function Footer() {
  return (
    <footer>
        <div>
            <span>Embrace the Imperfection</span>
            <br />
            <span>Layout: NeuBrutalism</span>
        </div>
        <div style={{textAlign: 'right'}}>
            <span>Built using React & CSS in Tamil Nadu, India</span>
            <br />
            <span>&copy;{new Date().getFullYear()} Subaash. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer