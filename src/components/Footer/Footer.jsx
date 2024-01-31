import React from 'react'
import classes from './footer.module.css'

function Footer() {
  return (
    <footer>
        <div>
            Embrace the Imperfection
            <br />
            Layout: NeuBrutalism
        </div>
        <div style={{textAlign: 'right'}}>
            Built using React & CSS in Tamil Nadu, India
            <br />
            &copy;{new Date().getFullYear()} Subaash. All rights reserved
        </div>
    </footer>
  )
}

export default Footer