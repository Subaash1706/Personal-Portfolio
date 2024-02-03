import React, { useEffect, useRef, useState } from 'react'
import classes from './form.module.css'
import Button from '../Button/Button'
import emailjs from '@emailjs/browser'
import _default from '@emailjs/browser'


function Form() {
    const [ formResponseStatus, setFormResponseStatus ] = useState(false);
    const [ disabledButton, setDisableButton ] = useState(false);
    const [ name, setName ] = useState('');
    const formRef = useRef()
    function formSubmitHandler(e){
        e.preventDefault()
        setDisableButton(true);
        emailjs.sendForm('service_6d741yg', 'template_np60r8d', formRef.current, 'U2qIQCz2e4LikqCFC')
        .then((res)=>{
            if(res.status === 200){
                setFormResponseStatus(true)
            }
            else{
                setFormResponseStatus(false)
            }
        }), 
        (err)=>{
            console.log(err.text)
        }
    }
    useEffect(()=>{
        if(formResponseStatus) setDisableButton(false)
    }, [ formResponseStatus ])
  return (
    <>
        {
            formResponseStatus && 
            <div className={classes.formSubmittedContainer}>
                Yayy! Your response has been received.
            </div>
        }
        {!formResponseStatus && <form className={classes.contactForm} onSubmit={formSubmitHandler} ref={formRef} >
            <div style={{display: 'flex'}}>
                <input type="text" placeholder="What's your First name?" name='first_name' style={{borderRight: 'none', borderBottom: 'none'}} onChange={(e)=>setName(e.target.value)} value={name} required/>
                <input type="text" placeholder="What's your Second name?" name='second_name' style={{borderBottom: 'none'}}/>
            </div>
            <div className={classes.textAreaParaContainer}>
                <div className={classes.inputParaContainer}>
                    <input type="email" placeholder="What's your Email Id?" name='email' className={classes.emailInput} required/>
                </div> 
                <textarea name="message" id="message" cols="30" rows="5" placeholder='Enter your message' style={{borderBottom: 'none'}} required></textarea>
            </div>
            <center style={{textAlign: 'center'}} className={classes.buttonContainer}>
                <Button labelName={!disabledButton ? 'Send message' : 'Sending message'} style={{width: '25%', marginBlock:'1rem'}} color={'rgba(105, 210, 231, 1)'} disabled={(name.length > 0 ? false : true) || disabledButton }/>
            </center>
        </form>}
    </>
  ) 
}

export default Form