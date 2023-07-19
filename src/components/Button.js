import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const ButtonStyle = styled.div`
    margin-top: 2rem;
    .button{
        font-size: 1.8rem;
        background-color: ${(props) => (props.booleanindex ? "transparent" : "var(--bg-third)")};
        padding: 0.5em 1.5rem;
        border-radius: 10px;
        border: 3px solid var(--bg-secondary);
        display: inline-block;
        color: ${(props) => (props.booleanindex ? "var(--color)" : "white")}
    }
    @media only screen and (max-width: 768px) {
        .button{
            font-size: 1.4rem;
        }
    }
`

export default function Button({ 
    btnText = "Click me", 
    btnLink = "/",
    booleanindex = false
}) {
  return (
    <ButtonStyle booleanindex={booleanindex} className='button-wrapper'>
      <Link to={btnLink} className='button' >{btnText}</Link>
    </ButtonStyle>
  );
}

