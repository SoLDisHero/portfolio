import React, { useState, useRef, useEffect } from 'react'
import { styled } from 'styled-components';
import emailjs from '@emailjs/browser';

const FormStyle = styled.div`
    width: 100%;
    .form-group{
        width:100%;
        margin-bottom: 1.3rem;
        opacity: 0;
        animation: fadeInUp 2s 2s;
        animation-fill-mode: forwards;
    }
    input, textarea{
        width: 100%;
        font-size: 1.1rem;
        padding: .9rem;
        color: white;
        background-color: var(--bg-secondary);
        outline: none;
        border-radius: 3px;
        border: 1px solid var(--color);
        font-family: 'Schibsted Grotesk', sans-serif;
    }
    textarea{
        min-height: 173px;
        resize:vertical;
    }
    button[type="submit"]{
        background-color: #D71313;
        color: white;
        font-size: 1.1rem;
        display: inline-block;
        outline:none;
        border:none;
        padding: 0.6em 2rem;
        border-radius: 3px;
        cursor: pointer;
        letter-spacing: 6px;
        opacity: 0;
        animation: fadeInUp 2s 2s;
        animation-fill-mode: forwards;
    }
    .send-button{
    font-size: 1rem;
    background-color:#D71313;
    padding: 0.4em 1.5rem;
    border-radius: 8px;
    border: 2px solid var(--bg-secondary);
    display: inline-block;
    color: white;
    transition: all 1s ease;
    position:absolute;
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
    const [isSend, setSend] = useState(false);

    const handleClick = (e) => {
        if(name === "" && email === "" && message === ""){
            setSend(false);
        }else{
            setSend(true);
        }
    }
    useEffect(() => {
        if(isSend) {
            const timer = setTimeout(() => {
                setSend(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isSend])
  return (
    <div>
        <FormStyle >
        <form onSubmit={sendEmail}  ref={form}>
            <div className='form-group'>
                <input 
                required
                placeholder="Name"
                type='text' 
                id='name' 
                name='name' 
                value={name} 
                onChange={e => setName(e.target.value)}></input>
            </div>
            <div className='form-group'>                
                <input 
                required
                placeholder="Email"
                type='email' 
                id='email' 
                name='email' 
                value={email} 
                onChange={e => setEmail(e.target.value)}></input>
            </div>
            <div className='form-group'>
                <textarea 
                required
                placeholder="Message"
                type='text' 
                id='message' 
                name='message' 
                value={message} 
                onChange={e => setMessage(e.target.value)}></textarea>
            </div>
            <button type='submit' onClick={handleClick}>SUBMIT</button>
        </form>
            <p className={isSend === true ? "send-button" : ""}>{isSend === true ? "Your message has been sent" : ""}</p>
        </FormStyle>
    </div>
  )
}
