import React, { useState, useEffect } from 'react'
import classes from './table.module.css'
import arrow from '../../../public/assets/svgs/rightArrow.svg'

// accepted format: [ [], [], [] ] array of arrays
function Table(props) {
    const [ link, setLink ] = useState('')

    useEffect(() => {
        const anchor = document.createElement('a');
        anchor.href = link;
        anchor.target = '_blank';
        document.body.appendChild(anchor);
        if(link){
            anchor.click();
        }
        return () => {
          document.body.removeChild(anchor);
        };
      }, [link]);
    
      function openClickedArticle(e){
        const parent = e.target.parentElement
        if(e.target.tagName === 'SPAN'){
            const grandParent = parent.parentElement;
            setLink(props.blogLinks[grandParent.id])
        }
        else if(
            e.target.tagName === 'IMG'
        ){
            const grandParent = parent.parentElement;
            const ggrandParent = grandParent.parentElement;
            setLink(props.blogLinks[ggrandParent.id])
        }
        else{
            setLink(props.blogLinks[parent.id])
        }
    }
    
  return (
    <table>
        <tbody>
        {
            props.tableArray.map((tableRow, index)=>{
                return(
                    <tr key={index} id={index} onClick={openClickedArticle}>
                        {
                            tableRow.map((tableData, index)=>{
                                return(
                                    <td key={index} id={index}>{tableData}</td>
                                )
                            })
                          
                        }
                        <td>
                            <span className={classes.blogLink}>
                                <img src={arrow} />
                            </span>
                        </td>
                    </tr>
                )
            })
        }
        </tbody>
    </table>
  )
}

export default Table