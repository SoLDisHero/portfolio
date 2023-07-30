import React from 'react'
import Text from "../components/Text"
import AboutImg from "../images/about_bw.jpg"
import { styled } from 'styled-components'
import AboutInfoItem from '../components/AboutInfoItem'

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
  }
  .left{
    flex:4;
  }
  .right{
    flex:2;
  }
  .about-subheading{
    font-size: 2rem;
    margin-bottom: 2rem;
    span{
      background-color: var(--bg-secondary);
      padding: 0.3rem;
      border-radius: 10px;
    }
  }
  .about-heading{
    font-size: 2.8rem;
    margin-bottom: 1.3rem;
  }
  .about-info{
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
  return (
    <AboutPageStyle>
      <div className='container'>
        <div className='top'>
          <div className='left'>
            <p className='about-subheading'>
              Hi, I'm <span>Eugene</span>
            </p>
            <h2 className='about-heading'>a Web Developer.</h2>
            <div className='about-info'>
              <Text>
                I am from Gomel, Belarus. It is a beautiful country in the middle
                of Europe.
                Since my childhood, I love computers. I always wanted to be a part
                of IT community. At first, I tried to mend and fixed broken parts
                of the computers. That's when my journey has begun to IT.
                <br/>
                <br/>
                I always wanted to relate my life with computers. Web design and web development are
                the answer. I started coding, learning, exploring, and 
                most important is challenging myself. I find it really intersting and 
                I enjoy the process. But I still evolving and learning.
                <br/>
                <br/>
                Also, I love gym, travelling, flying with drone and trying something
                new.
              </Text>
            </div>
            
            <a href='EY resume.pdf' download="Eugene_Yerashenka_CV.pdf">Download CV</a>
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
