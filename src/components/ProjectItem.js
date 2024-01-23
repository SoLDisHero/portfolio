import React from 'react'
import ProjectImg from "../images/calc.png"
import { styled } from 'styled-components'
// import Button from './Button'

const ProjectItemStyle = styled.div`        
    .card{
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
        transition: 0.3s;
        animation: all 5s ease-in-out;
        border-radius:10px;
        background-color: var(--bg-secondary);
        height: 100%;
        position: relative;
    }
    .card:hover{
        transform:scale(1.1);
        box-shadow: 0px 0px 10px 0px;
        border-radius:6px;
    }
    .project-img{
        width: 100%;
        height: 350px;
        overflow: hidden;
        border-radius: 8px;
        display: inline-block;
        border: 3px solid var(--color);
    }
    .project-info{
        background-color: var(--bg-secondary);
        padding: 1rem;
        border-radius: 6px;
        margin-bottom: 5rem;
    }
    .project-title{
        font-size: 2rem;
        color: var(--color);
    }
    .project-desc{
        font-size: 1rem;
        font-family:'Schibsted Grotesk', sans-serif;
        margin-top: 1rem;
        color: var(--color);
    }
    a{
        width:60%;
        font-size: 1.1rem;
        background-color: #D71313;
        padding: 0.7em 1.5rem;
        border-radius: 10px;
        border: 1px solid var(--bg-secondary);
        display: inline-block;
        color: white;
        position: absolute;
        top: 90%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    @media only screen and (max-width: 768px) {
        .card{
        height: 100%;
        }
        .project-img{
            height: 300px;
        }
        .project-title{
            font-size: 1.6rem;
        }
        .project-desc{
        font-size: 1rem;
        }
        a{
            font-size: 1.1rem;
        }
    }
`
export default function ProjectItem({
    img = ProjectImg,
    title = "Project Name",
    desc = "Some description",
    link = "https://diabetic-regular-calculator.vercel.app/"
}) {
  return (
    <ProjectItemStyle>
    <div className='card'>
        <div className="project-img">
            <img src={img} alt='imageofproject'/>
        </div>
        <div className='project-info'>
                <h3 className='project-title'>
                    {title}
                </h3>
            <p className='project-desc'>
                {desc}
            </p>
            {/* <Button btnLink='https://diabetic-regular-calculator.vercel.app/'></Button>    */}
            <a href={link} rel="noreferrer" target="_blank">Click me</a>      
        </div>  
              
    </div>
    </ProjectItemStyle>
  )
}
