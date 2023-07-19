import React, { useState } from 'react'
import { styled } from 'styled-components';

const FormStyle = styled.form`
    width: 100%;
    .form-group{
        width:100%;
        margin-bottom: 1.5rem;
    }
    label{
        font-size: 1.5rem;
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
        margin-top: 1rem;
    }
    textarea{
        min-height: 200px;
        resize:vertical;
    }
    button[type="submit"]{
        background-color: var(--bg-third);
        color: var(--color);
        font-size: 1.5rem;
        display: inline-block;
        outline:none;
        border:none;
        padding: 0.5rem 2rem;
        border-radius: 8px;
        cursor: pointer;
    }
`

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

  return (
    <div>
        <FormStyle>
            <div className='form-group'>
                <label htmlFor='name'>Your name</label>
                <input 
                type='text' 
                id='name' 
                name='name' 
                value={name} 
                onChange={e => setName(e.target.value)}></input>
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Your email</label>
                <input 
                type='text' 
                id='email' 
                name='email' 
                value={email} 
                onChange={e => setEmail(e.target.value)}></input>
            </div>
            <div className='form-group'>
                <label htmlFor='message'>Your email</label>
                <textarea 
                type='text' 
                id='message' 
                name='message' 
                value={message} 
                onChange={e => setMessage(e.target.value)}></textarea>
            </div>
            <button type='submit'>Send</button>
        </FormStyle>
    </div>
  )
}
