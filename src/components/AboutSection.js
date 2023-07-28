import React from 'react'
import Heading from './Heading'
import Text from "./Text"
import Button from "./Button"
import ImgAbout from "../images/layout_bw.jpg"
import { styled } from 'styled-components'

const AboutSectionStyle = styled.div`
    padding: 1rem 0;
    .container{
        display:flex;
        align-items: center;
        justify-content: flex-start;
        text-align:left;
    }
    .left, .right{
        flex:1;
    }    
    .right img{
            border: 3px solid var(--color);
        }
    .headingPara{
        text-align:left;
    }
    .button_section{
        display:flex;
        align-items: center;
        justify-content: flex-start;
    }
    .textC{
        margin-left: 0;
        margin-top: 2rem;
    }
    @media only screen and (max-width: 950px) {
        .left{
            flex: 4;
        }
        .right{
            flex: 3;
        }
    }
    @media only screen and (max-width: 768px){
        padding:3rem 0;
        .container{
            flex-direction: column;
            text-align: center;
        }
        .left, .right{
            width: 100%;
        }
        .right{
            margin-top: 3rem;
        }
        .headingPara{
            text-align: center;
        }
        .textC{
            margin: 0 auto;
            margin-top: 2rem;
        }
        .button_section{
            flex-direction: column;
                .button-wrapper, a{
                width:100%;
            }
        }
        
    }
`

export default function AboutSection() {
  return (
    <AboutSectionStyle>
    <div className='container'>
        <div className="left">
            <Heading title='about me' subTitle='This story is'/>
            <Text>I'm a lifelong learner from MN, USA. I am extroverted introvert with passion for ...</Text>
            <div className="button_section">
                <Button btnText='More about me' booleanindex={false} btnLink='/about'></Button>
            </div>
        </div>
        <div className="right">
            <img src={ImgAbout} alt="about-me-layout" />
        </div>
    </div>
    </AboutSectionStyle>
  )
}
