import React from 'react'
import { Link } from 'react-router-dom'
import ProjectImg from "../images/calc.png"
import { styled } from 'styled-components'

const ProjectItemStyle = styled.div`
    .project-img{
        width: 100%;
        height: 400px;
        overflow: hidden;
        border-radius: 12px;
        display: inline-block;
        border: 2px solid var(--color);
        img{
            height: 100%;
        }
    }
    .project-info{
        margin-top: 1rem;
        background-color: var(--bg-secondary);
        padding: 1rem;
        border-radius: 12px;
    }
    .project-title{
        font-size: 2.2rem;
        color: white;
    }
    .project-desc{
        font-size: 1.6rem;
        font-family:'Schibsted Grotesk', sans-serif;
        margin-top: 1rem;
    }
    @media only screen and(max-width: 768px) {
        .project-img{
            height: 350px;
        }
    }
`
export default function ProjectItem({
    img = ProjectImg,
    title = "Project Name",
    desc = "Some description"
}) {
  return (
    <ProjectItemStyle>
        <Link to="/projects" className="project-img">
            <img src={img} alt='image of project'/>
        </Link>
        <div className='project-info'>
            <Link to="#">
                <h3 className='project-title'>
                    {title}
                </h3>
            </Link>
            <p className='project-desc'>
                {desc}
            </p>
        </div>
    </ProjectItemStyle>
  )
}
