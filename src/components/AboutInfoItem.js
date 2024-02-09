import React from 'react'
import Text from "./Text"
import { styled } from 'styled-components'

const AboutInfoItemStyle = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    margin-top: 1.7rem;
    position:relative;
    .title{
        font-size: 1.8rem;
    }
    .items{
        display:flex;
        gap: 1rem;
        position:absolute;
        left: 12rem;
    }

    .item{
        background-color: var(--bg-secondary);
        padding: 0.65rem;
        border-radius: 5px;
        border: 1px solid var(--color);
    }
    @media only screen and (max-width: 1015px) {
        flex-direction: column;
        align-items: flex-start;        
        gap: 1rem;
        .items{
            position:initial;
            gap: 0.5rem;
            display:flex;
            flex-wrap:wrap;
        }
        .title{
            font-size: 1.5rem;
        }
    }
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;        
        gap: 1rem;
        .items{
            position:initial;
            gap: 0.5rem;
            display:flex;
            flex-wrap:wrap;
        }
        .title{
            font-size: 1.5rem;
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
