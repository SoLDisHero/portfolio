import React from 'react'
import Heading from './Heading'
import ServiceItem from './ServiceItem'
import { styled } from 'styled-components'
import { AiOutlineAntDesign } from 'react-icons/ai'
import {HiOutlineCode} from 'react-icons/hi'
import {FaConnectdevelop} from 'react-icons/fa'

const ServiceSectionStyle = styled.div`
    padding: 7rem 0;
    .all-service-items{
        display: flex;
        gap: 3rem;
        justify-content: space-between;
        margin-top:3rem;
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
        <Heading title='with' subTitle="I could be helpfull"/>
        <div className='all-service-items'>
            <ServiceItem classname="first"
            icon={<AiOutlineAntDesign/>}
            descTitle='Web Design'
            descText='I do a unique design that you will love.'
            />
            <ServiceItem classname="second"
            icon={<HiOutlineCode/>}
            descTitle='Building Websites'
            descText='I develop the websites from scratch.'
            />
            <ServiceItem classname="third"
            icon={<FaConnectdevelop/>}
            descTitle='Full-stack'
            // descText='I provide full-stack development with databases.'
            descText='I also build projects behind the scenes.'
            />
        </div>
    </div>
    </ServiceSectionStyle>
  )
}
