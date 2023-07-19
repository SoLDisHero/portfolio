import React from 'react'
import MyPhoto from "../images/me_bw.jpg"
import Text from './Text'
import { styled } from 'styled-components'

const HomeStyle = styled.div`
    .home{
        height: 75vh;
        min-height: 1000px;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content:center;
        position:relative; 
    }
    .home_heading{
        margin-bottom: -10rem;
        font-size: 2rem;
        position:relative;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        color: white;
        span{
            display: inline-block;
            width:100%;
        }
        .home_name{
            font-size: 5rem;
            font-family:'Nunito', sans-serif;            
        }
    }
    .home_img{
        max-width: 900px;
        width: 100%;
        height: 600px;
        margin: 0 auto;
        border: 2px solid var(--bg-third)
    }
    .home_info{
        margin-top: -7rem;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
    @media only screen and (max-width: 768px) {
        .home{
            min-height: 750px;
            top: 10rem;
        }
        .home_heading{
            font-size: 1.3rem;
            margin-bottom: -8rem;
            .home_name{
                font-size: 3rem;
            }
        }
        .home_img{
            height: 450px;
        }
        .home_info{
            margin-top: -6rem;
        }
    }
`

export default function HomeSection() {
  
  return (
    <HomeStyle>
    <div className="home">
        <div className='container'>
            <h1 className='home_heading'>
                <span>Hello, I am </span>
                <span className='home_name'>Eugene</span>
            </h1>            
            <div className='home_img'>
                <img src={MyPhoto} alt="my-photo" />
            </div>
            <div className='home_info'>
                <Text>I am highly motivated in web development. I'm a lifelong learner.</Text>
                {/* <Button btnText={"About Me"} btnLink={"/about"} booleanindex={false}/> */}
            </div>
        </div>   
    </div> 
    </HomeStyle>
  )
}
