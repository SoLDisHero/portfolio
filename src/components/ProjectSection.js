import 'swiper/css';
import 'swiper/css/bundle';
import React from 'react';
import Heading from './Heading';
import projects from "../assets/data/projectsData";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from "swiper/modules"
import ProjectItem from './ProjectItem';
import { styled } from 'styled-components';
SwiperCore.use([Navigation]);

const ProjectStyle = styled.div`
  padding: 10rem 0;
  .projects-items{
    display:flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  //comes from Swiper
  .swiper-container{ 
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next{
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: var(--bg-third);
    z-index:10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--bg-secondary);
    border-radius: 8px;
  }
  .swiper-button-next{
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after{
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projects-items{
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
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
            <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: {
                slidesPerView:1,
              },
              768: {
                slidesPerView:2,
              },
              1200: {
                slidesPerView:2,
              }
            }}
            >
                {projects.map((project, index) => {
                  
                     return (
                      <SwiperSlide key={project.id}>
                      <ProjectItem title={project.name} img={project.img} desc={project.desc}/>
                      </SwiperSlide>
                     )
                })}
            </Swiper>
            </div>
        </div>
    </ProjectStyle>
  )
}