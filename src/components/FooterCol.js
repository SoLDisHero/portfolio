import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import {FaFacebook} from "react-icons/fa"

const FooterColStyle = styled.div`
    li{
        margin-top: 1rem;        
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
            icon: FaFacebook,
            type: "link",
            title : "Home",
            path : "/home"
        },
        {
            icon: FaFacebook,
            type: "link",
            title : "Home",
            path : "/home"
        }
    ]
}) {
  return (
    <FooterColStyle>
        <h2 className='heading'>{heading}</h2>
        <ul className='icon'>
            
            {Links.map((item, index) => (
                <li key={index} > 
                    {item.type === "link" ? 
                    (<Link to={item.path} target='_blank'>{item.icon}</Link>) : 
                    <a href={item.path} target='_blank' rel='noreferrer'>{item.title}</a>}
                </li>
            ))}
            
        </ul>
    </FooterColStyle>
  )
}
