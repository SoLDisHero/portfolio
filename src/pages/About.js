import React, { useState } from 'react'
import Text from "../components/Text"
import AboutImg from "../images/about_bw.jpg"
import { styled } from 'styled-components'
import AboutInfoItem from '../components/AboutInfoItem'
import LettersAnimated from '../components/LettersAnimated'

const AboutPageStyle = styled.div`
  padding: 10rem 0 7rem 0;
  .top{
    display:flex;
    align-items:center;
    justify-content: center;
    gap: 2rem;
  }
  a{
    font-size: 1.3rem;
    background-color:#D71313;
    padding: 0.5em 1.5rem;
    border-radius: 8px;
    border: 2px solid var(--bg-secondary);
    display: inline-block;
    color: white;
    opacity: 0;
    animation: backInLeft 1.5s 1s;
    animation-fill-mode: forwards;
  }
    .left{
      flex:4;
      .about-subheading{
      font-size: 2rem;
      margin-bottom: 2rem;
      span{
        padding: 0.3rem;
        padding-left: 0;
      }
    }
    .text-animate{
            opacity: 0;
            animation: bounceIn 1s 1s;
            animation-fill-mode: forwards;
            min-width: 10px;
        }
        .text-animate._1 {
        animation-delay: 0.1s;
        }
        .text-animate._2 {
        animation-delay: 0.2s;
        }
        .text-animate._3 {
        animation-delay: 0.3s;
        }
        .text-animate._4 {
        animation-delay: 0.4s;
        }
        .text-animate._5 {
        animation-delay: 0.5s;
        }
        .text-animate._6 {
        animation-delay: 0.6s;
        }
        .text-animate._7 {
        animation-delay: 0.7s;
        }
        .text-animate._8 {
        animation-delay: 0.8s;
        }
        .text-animate._9 {
        animation-delay: 0.9s;
        }
        .text-animate._10 {
        animation-delay: 1s;
        }
        .text-animate._11 {
        animation-delay: 1.1s;
        }
        .text-animate._12 {
        animation-delay: 1.2s;
        }
        .text-animate._13 {
        animation-delay: 1.3s;
        }
        .text-animate._14 {
        animation-delay: 1.4s;
        }
        .text-animate._15 {
        animation-delay: 1.5s;
        }
        .text-animate._16 {
        animation-delay: 1.4s;
        }
        .text-animate._17 {
        animation-delay: 1.5s;
        }
        .text-animate._18 {
        animation-delay: 1.4s;
        }
        .text-animate._19 {
        animation-delay: 1.3s;
        }
        .text-animate._20 {
        animation-delay: 1.2s;
        }
        .text-animate._21 {
        animation-delay: 1.1s;
        }
        .text-animate._22 {
        animation-delay: 1s;
        }
        .text-animate._23 {
        animation-delay: .9s;
        }
        .text-animate._24 {
        animation-delay: .8s;
        }
        .text-animate._25 {
        animation-delay: .7s;
        }
        .text-animate._26 {
        animation-delay: 0.6s;
        }
        .text-animate._27 {
        animation-delay: 0.5s;
        }
        .text-animate._28 {
        animation-delay: 0.4s;
        }
        .text-animate._29 {
        animation-delay: 0.3s;
        }
        .text-animate._30 {
        animation-delay: 0.2s;
        }
        .text-animate._31 {
        animation-delay: 0.1s;
        }
  }
  .right{
    flex:2;
  }  
  .about-heading{
    font-size: 2.8rem;
    margin-bottom: 1.3rem;
  }
  .about-info{    
    opacity: 0;
    animation: fadeIn 3s 0.1s;
    animation-fill-mode: forwards;
    margin-bottom: 2rem;
    .textC{
      max-width:100%;
    }
  }
  .right{
    img{
      border: 2px solid var(--bg-third);
    }
  }
  .bottom{
      margin-top: 8rem;
  }
  .bottom-item{
    margin-bottom: 1rem;
  }
  .bottom-heading{
    font-size: 2rem;
    text-transform: uppercase;
    margin-top: 5rem;
  }
  .cv-button{
    font-size: 0.8rem;
    background-color:#D71313;
    padding: 1em 0.5rem;
    border-radius: 8px;
    border: 2px solid var(--bg-secondary);
    display: inline-block;
    color: white;
    transition: all 1s ease;
    position:absolute;
  }
  @media only screen and (max-width: 768px) {
    padding: 12rem 0 1rem 0;
    .top{
      flex-direction: column;
      gap: 3rem;
    }
    .about-subheading{
      font-size: 1.8rem;
    }
    .about-heading{
      font-size: 2rem;
    }
    .bottom-heading{
      font-size: 1.8rem;
    }
    a{
      font-size: 1.2rem;
    }
  }
`

export default function About() {
  const [isDisabled, setDisabled] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setDisabled(true);
    console.log(isDisabled)
  }
  const upLetters = ["H", "i", ",", " ", "I", "'", "m", " ", "E", "u", "g", "e", "n", "e", " "]
  const downLetters = ["a", " ", "W", "e", "b", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r", "."]
  return (
    <AboutPageStyle>
      <div className='container'>
        <div className='top'>
          <div className='left'>
          <div className='about-subheading'>
          <LettersAnimated letterClass={"text-animate"} letters={upLetters} idx={1}/>
            <h2 className='about-heading'>
            <LettersAnimated letterClass={"text-animate"} letters={downLetters} idx={16}/>
            </h2>
          </div>
            
            <div className='about-info'>
              <Text>
                I am from Gomel, Belarus. It is a beautiful country in the middle
                of Europe.
                Since my childhood, I love computers. I always wanted to be part of the tech world. 
                At first, I tried to mend and fixed broken parts
                of the computers, which marked the start of my IT journey.
                <br/>
                <br/>
                I always wanted to work with computers, and I found my path in web development.
                I started coding, learning, exploring, and challenging myself.
                It's fascinating, and I enjoy every step of it. I'm still growing and learning.
                <br/>
                <br/>
                I also have a passion for the gym, travel, flying drones, and trying new things.
              </Text>
            </div>            
            
            <a href='EY resume.pdf' download="Eugene_Yerashenka_CV.pdf" onClick={handleClick}>Download CV</a>

            <p className={isDisabled === true ? "cv-button" : ""}>{isDisabled === true ? "Feel free to contact me for CV" : ""}</p>

          </div>
          <div className='right'>
            <img src={AboutImg} alt='my-pic'></img>
          </div>
        </div>
        <div className='bottom'>
          <div className='bottom-item'>
            <h2 className='bottom-heading'>
              Education
            </h2>
            <AboutInfoItem 
            title='School' 
            items={["Gomel State School #34"]}>              
            </AboutInfoItem>
            <AboutInfoItem 
            title='University' 
            items={["Francisk Skorina Gomel State University"]}>              
            </AboutInfoItem>
            <AboutInfoItem 
            title='Courses' 
            items={["The Web Development Bootcamp by Angela Yu", "The Web Developer Bootcamp by Colt Steele"]}>              
            </AboutInfoItem>
          </div>
          <div className='bottom-item'>
            <h2 className='bottom-heading'>
              My skills
            </h2>
            <AboutInfoItem 
            title='FrontEnd' 
            items={["HTML", "CSS", "JavaSript", "REACT", "Bootstrap", "Others"]}>              
            </AboutInfoItem>
            <AboutInfoItem 
            title='BackEnd' 
            items={["Node", "Express", "Mongo DB", "Mongoose", "Others"]}>              
            </AboutInfoItem>
          </div>
        </div>
      </div>
    </AboutPageStyle>
  )
}
