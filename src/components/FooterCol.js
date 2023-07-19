import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const FooterColStyle = styled.div`
    .heading {
        font-size: 2.3rem;
        margin-bottom: 2rem;
    }
    li{
        margin-bottom: 1rem;        
    }
    a{
        font-size: 1.7rem;
        color: var(--color);
    }
`

export default function FooterCol({
    heading = "This is heading",
    Links = [
        {
            type: "link",
            title : "Home",
            path : "/home"
        },
        {
            type : "link",
            title : "About",
            path : "/about"
        },
    ]
}) {
  return (
    <FooterColStyle>
        <h2 className='heading'>{heading}</h2>
        <ul>
            
            {Links.map((item, index) => (
                <li key={index}>
                    {item.type === "link" ? 
                    (<Link to={item.path}>{item.title}</Link>) : 
                    <a href={item.path} target='_blank' rel='noreferrer'>{item.title}</a>}
                </li>
            ))}
            
        </ul>
    </FooterColStyle>
  )
}
