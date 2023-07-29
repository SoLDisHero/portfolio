import React, { useState, useRef } from 'react'
import { styled } from 'styled-components';
import emailjs from '@emailjs/browser';
const FormStyle = styled.div`
    width: 100%;
    .form-group{
        width:100%;
        margin-bottom: 1.5rem;
    }
    input, textarea{
        width: 100%;
        font-size: 1.5rem;
        padding: 1rem;
        color: white;
        background-color: var(--bg-secondary);
        outline: none;
        border: none;
        border-radius: 10px;
        font-family: 'Schibsted Grotesk', sans-serif;
    }
    textarea{
        min-height: 173px;
        resize:vertical;
    }
    button[type="submit"]{
        background-color: #D71313;
        color: white;
        font-size: 1.3rem;
        display: inline-block;
        outline:none;
        border:none;
        padding: 0.5em 2rem;
        border-radius: 8px;
        cursor: pointer;
    }
    @media only screen and (max-width: 768px){
        button[type="submit"]{
            width:100%;
            margin-top:2rem;
        }
    }
`

export default function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if(name && email && message){
            emailjs.sendForm(
            process.env.REACT_APP_YOUR_SERVICE_ID, 
            process.env.REACT_APP_YOUR_TEMPLATE_ID, 
            form.current, 
            process.env.REACT_APP_YOUR_PUBLIC_KEY)
            .then((result) => {
            console.log(result.text);
            setName("");
            setEmail("");
            setMessage("");
            }, (error) => {
            console.log(error.text);
            });
        }
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

  return (
    <div>
        <FormStyle >
        <form onSubmit={sendEmail}  ref={form}>
            <div className='form-group'>
                <input 
                placeholder="Your name"
                type='text' 
                id='name' 
                name='name' 
                value={name} 
                onChange={e => setName(e.target.value)}></input>
            </div>
            <div className='form-group'>                
                <input 
                placeholder="Your email"
                type='email' 
                id='email' 
                name='email' 
                value={email} 
                onChange={e => setEmail(e.target.value)}></input>
            </div>
            <div className='form-group'>
                <textarea 
                placeholder="Your message"
                type='text' 
                id='message' 
                name='message' 
                value={message} 
                onChange={e => setMessage(e.target.value)}></textarea>
            </div>
            <button type='submit'>Send</button>
            </form>
        </FormStyle>
    </div>
  )
}
