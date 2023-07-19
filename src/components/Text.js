import React from 'react'
import { styled } from 'styled-components'

const TextStyle = styled.div`
    max-width: 500px;
    margin: 0 auto;
    font-size: 1.5em;
    line-height: 1.5rem;
    @media only screen and (max-width: 768px) {
        font-size: 1.3em;
    }

`

export default function Text({children}) {
  return (
    <TextStyle className='textC'>
    <p>{children}</p>
    </TextStyle>
  )
}
