import React from 'react'
import Heading from './Heading'
import ServiceItem from './ServiceItem'
import { styled } from 'styled-components'
import { AiOutlineAntDesign } from 'react-icons/ai'
import {HiOutlineCode} from 'react-icons/hi'
import {FaConnectdevelop} from 'react-icons/fa'

const ServiceSectionStyle = styled.div`
    padding: 10rem 0;
    .all-service-items{
        display: flex;
        gap: 3rem;
        justify-content: space-between;
        margin-top:5rem;
    }
    @media only screen and (max-width: 768px) {
        .all-service-items{
            flex-direction: column;
            max-width: 350px;
            margin: 0 auto;
            margin-top: 3rem;
        }
    }
`

export default function ServiceSection() {
  return (
      <ServiceSectionStyle>
    <div className='container'>
        <Heading title='services' subTitle="I am offering my"/>
        <div className='all-service-items'>
            <ServiceItem
            icon={<AiOutlineAntDesign/>}
            descTitle='Web Design'
            descText='I do a unique design that you will love.'
            />
            <ServiceItem 
            icon={<HiOutlineCode/>}
            descTitle='Building Websites'
            descText='I develop the websites from scratch.'
            />
            <ServiceItem
            icon={<FaConnectdevelop/>}
            descTitle='Full-stack development'
            descText='I provide full-stack development with databases.'
            />
        </div>
    </div>
    </ServiceSectionStyle>
  )
}
