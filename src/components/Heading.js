import React from 'react'
import { styled } from 'styled-components'

const HeadingStyle = styled.div`
text-align: center;
    p{
        font-family: 'Nunito', sans-serif;
        font-size: 2rem;
    }
    h2{
        font-size:3rem;
        margin-top: .4rem;
        text-transform:uppercase;
    }
@media only screen and (max-width: 768px){
    p{
        font-size: 1.3rem;
    }
    h2{
        font-size: 2rem;
    }
}
`

export default function Heading({title = "Title", subTitle = "Subtitle"}) {
  return (
    <HeadingStyle className='headingPara'>
        <p>{subTitle}</p>
        <h2>{title}</h2>
    </HeadingStyle>
  )
}
