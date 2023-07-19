import React from 'react'
import Text from "./Text"
import { styled } from 'styled-components'

const AboutInfoItemStyle = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    margin-top: 3rem;
    position:relative;
    .title{
        font-size: 2.5rem;
    }
    .items{
        display:flex;
        gap: 1.5rem;
        position:absolute;
        left: 18rem;
    }

    .item{
        background-color: var(--bg-secondary);
        padding: 1rem;
        border-radius: 8px;
    }
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        .items{
            position:initial;
            gap: 1rem;
        }
        .title{
            font-size: 2rem;
        }
    }
`

export default function AboutInfoItem({
    title = "Title",
    items = [
        "HTML", "CSS", "JavaScript"
    ]
}) {
  return (
    <AboutInfoItemStyle>
        <h3 className='title'>
            {title}
        </h3>
        <div className='items'>
            {items.map((item,index) => (
                <div className='item' key={index}>
                    <Text>{item}</Text>
                </div>
            ))}
        </div>
    </AboutInfoItemStyle>
  )
}
