import React from 'react';
import Heading from './Heading';
import projects from "../assets/data/projectsData";
import ProjectItem from './ProjectItem';
import { styled } from 'styled-components';

const ProjectStyle = styled.div`
  padding: 6rem 0;
  .projects-items{
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap:4rem;
    margin-top:3rem;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    .projects-items{
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`

export default function ProjectSection() {
  return (
    <ProjectStyle>
        <div className='container'>
            <Heading title='projects' subTitle='some of my'/>
            <div className='projects-items'>            
                {projects.map((project, index) => {                  
                     return (                      
                      <ProjectItem title={project.name} img={project.img} desc={project.desc} key={index}/>
                      )                      
                })}
                
            </div>
        </div>
    </ProjectStyle>
  )
}