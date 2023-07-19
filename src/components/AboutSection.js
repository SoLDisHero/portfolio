import React from 'react'
import Heading from './Heading'
import Text from "./Text"
import Button from "./Button"
import ImgAbout from "../images/layout_bw.jpg"
import { styled } from 'styled-components'
import ScrollToTop from './ScrollToTop'

const AboutSectionStyle = styled.div`
    padding: 10rem 0;
    .container{
        display:flex;
        align-items: center;
        justify-content: flex-start;
        text-align:left;
    }
    .left, .right{
        flex:1;
    }
    .headingPara{
        text-align:left;
    }
    .button_section{
        display:flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 2rem;
    }
    .textC{
        margin-left: 0;
        margin-top: 2rem;
    }
    @media only screen and (max-width: 950px) {
        .left{
            flex:4;
        }
        .right{
            flex: 3;
        }
    }
    @media only screen and (max-width: 768px){
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
            <Text>I'm eager to learn and get new technologies. I'm from MN, USA. I'm ready for relocation and your prepositions.</Text>
            <div className="button_section">
                <Button btnText='More about' booleanindex={false } onClick={<ScrollToTop/>}></Button>
            </div>
        </div>
        <div className="right">
            <img src={ImgAbout} alt="about-me-layout" />
        </div>
    </div>
    </AboutSectionStyle>
  )
}
