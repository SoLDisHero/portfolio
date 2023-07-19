import React from 'react'
import Text from "../components/Text"
import Button from "../components/Button"
import AboutImg from "../images/about_bw.jpg"
import { styled } from 'styled-components'
import AboutInfoItem from '../components/AboutInfoItem'

const AboutPageStyle = styled.div`
  padding: 20rem 0 10rem 0;
  .top{
    display:flex;
    align-items:center;
    justify-content: center;
    gap: 2rem;
  }
  .left{
    flex:3;
  }
  .right{
    flex:2;
  }
  .about-subheading{
    font-size: 2rem;
    margin-bottom: 2rem;
    span{
      background-color: var(--bg-secondary);
      padding: 0.5rem;
      border-radius: 10px;
    }
  }
  .about-heading{
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  .about-info{
    margin-bottom: 4rem;
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
      margin-top: 10rem;
  }
  .bottom-item{
    margin-bottom: 1rem;
  }
  .bottom-heading{
    font-size: 2.8rem;
    text-transform: uppercase;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 16rem 0 1rem 0;
    .top{
      flex-direction: column;
      gap: 5rem;
    }
    .about-subheading{
      font-size: 1.8rem;
    }
    .about-heading{
      font-size: 2.5rem;
    }
    .bottom-heading{
      font-size: 2.4rem;
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
              Hi, I'm <span>Eugene Y.</span>
            </p>
            <h2 className='about-heading'>a Web Developer.</h2>
            <div className='about-info'>
              <Text>
                I am from Gomel, Belarus. It is a beautiful country in the middle
                of Europe.
                Since my childhood, I love computers. I always want to be part
                of an evolving society. At first, I tried to mend and fixed broken parts of
                of the computers. That's when my journey has begun to IT.
                <br/>

                <br/>
                I always wanted to relate my live with computers. Web design and web development are
                the answer. I started coding, learning, resolving new issues, and 
                most important is challenge myself. I find it really intersting and 
                I enjoy the process. But I still evolving and learning.
                <br/>
                <br/>
                Also, I love gym, travelling, flying with drone and discovering something
                new. I will be happy to work with you. 
                <br/>
                <br/>
                Sincerely, Eugene.
              </Text>
            </div>
            <Button btnText='Download CV' btnLink='#'></Button>
          </div>
          <div className='right'>
            <img src={AboutImg} alt='my-image'></img>
          </div>
        </div>
        <div className='bottom'>
          <div className='bottom-item'>
            <h2 className='bottom-heading'>
              Education
            </h2>
            <AboutInfoItem 
            title='School' 
            items={["Gomel State School 34"]}>              
            </AboutInfoItem>
            <AboutInfoItem 
            title='University' 
            items={["Gomel State University of F.Skorina"]}>              
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
            items={["Node", "Express", "Mongo DB", "Others"]}>              
            </AboutInfoItem>
          </div>
        </div>
      </div>
    </AboutPageStyle>
  )
}
