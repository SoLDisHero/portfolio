import React from 'react'
import {MdPhone} from "react-icons/md"
import Text from "./Text"
import { styled } from 'styled-components'

const ItemStyle = styled.div`
    padding: 1.5rem;
    background-color: var(--bg-secondary);
    display: flex;
    align-items: center;
    gap: 1.5rem;
    border-radius: 10px;
    margin-bottom: 2rem;
    .icon{
        color:white;
        background-color: var(--bg-third);
        padding:1rem;
        align-items: center;
        justify-content:center;
        border-radius:50%;
    }
    svg{
        width: 1.5rem;
    }
`

export default function ContactInfoItem({
    icon = <MdPhone/>,
    text = "Random info"
}) {
  return (
    <ItemStyle>
        <div className='icon'>
            {icon}
        </div>
        <div className='info'>
            <Text>{text}</Text>
        </div>
    </ItemStyle>
  )
}
