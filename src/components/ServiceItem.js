import React from 'react';
import {AiOutlineAntDesign} from "react-icons/ai";
import Text from "../components/Text";
import { styled } from 'styled-components';

const ServiceItemStyle = styled.div`
    text-align:center;    
    flex:1;
    .icon-service{
        svg{width:3rem;}
    }
    .text-service-title{
        font-size:2rem;
        font-family: 'Schibsted Grotesk', sans-serif;
    }
    .textC{
        margin-top: 1.5rem;
    }
`

export default function ServiceItem({
    icon =  <AiOutlineAntDesign/>,
    descTitle = "Website Design",
    descText = "I do a unique design that you will love",
}) {
  return (
    <ServiceItemStyle>
        <div className='icon-service'>
            {icon}
                <div className='text-service-title'>
                    {descTitle}
                </div>
            <Text>{descText}</Text>
        </div>
    </ServiceItemStyle>
  )
}
