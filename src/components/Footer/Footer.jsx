import React from 'react'
import classes from './footer.module.css'

function Footer() {
  return (
    <footer>
        <div>
            <em>"Embrace the Imperfection"</em>
            <br />
            Layout NeoBrutalism
        </div>
        <div style={{textAlign: 'right'}}>
            Built with ReacJs & CSS
            <br />
            &copy;{new Date().getFullYear()} Subaash
        </div>
    </footer>
  )
}

export default Footer