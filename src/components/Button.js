import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const ButtonStyle = styled.div`
    margin-top: 1rem;
    .button{
        font-size: 1.3rem;
        background-color: #D71313;
        padding: 0.5em 1.5rem;
        border-radius: 8px;
        border: 2px solid var(--bg-secondary);
        display: inline-block;
        color: white;
    }
    @media only screen and (max-width: 768px) {
        .button{
            font-size: 1.1rem;
        }
    }
`

export default function Button({ 
    btnText = "Click me", 
    btnLink = "/",
    booleanindex = false,
}) {
  return (
    <ButtonStyle className='button-wrapper'>
      <Link to={btnLink} className='button' >{btnText}</Link>
    </ButtonStyle>
  );
}

