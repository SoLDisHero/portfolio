import React, { useState } from 'react'
import Heading from "../components/Heading"
import { styled } from 'styled-components'
import {CiSearch} from "react-icons/ci"
import ProjectsInfo from "../assets/data/projectsData"
import ProjectItem from "../components/ProjectItem"
import { useEffect } from 'react'
const ProjectsStyle = styled.div`
  padding: 6rem 0;
  .projects{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .searchBar{
    position:relative;
    width:300px;
    margin-top: 5rem;
  }
  .searchBar input{
    width: 100%;
    font-size: 2rem;
    padding: .3rem;
    color: black;
    border-radius: 6px;
    outline:none;
    border: none;
  }
  .searchBar .searchIcon{
    position:absolute;
    width: 1.3rem;
    right: 0.5rem;
  }
  .searchBar .searchIcon path{
    color: black;
  }
  @media only screen and (max-width: 768px){
    .searchBar, .searchBar form, .searchBar input {
      width: 100%;
    }
  }
`

export default function Projects() {

  const [projectData, setProjectData] = useState(ProjectsInfo)
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if(searchText === "") return;
    setProjectData(() => {
      return ProjectsInfo.filter((item) => 
        item.name.toLowerCase().match(searchText.toLowerCase()
      ))
    })
  }, [searchText])
  
  function handleChange(e) {
    e.preventDefault();
    setSearchText(e.target.value);
    if(!e.target.value.length > 0){
      setProjectData(ProjectsInfo)
    }
  }




  return (
    <ProjectsStyle>
      <div className='container'>
        <Heading title='Projects' subTitle='some work in progress...'></Heading>
        <div className='searchBar'>
          <form>
            <input type='text' value={searchText} onChange={handleChange} placeholder='Project Name'></input>
            <CiSearch className="searchIcon"></CiSearch>
          </form>
        </div>
        <div className='projects'>
        {projectData.map((item)=> (
          <ProjectItem key={item.id} title={item.name} desc={item.desc} img={item.img}/>
        ))}
        
        </div>
      </div>
    </ProjectsStyle>
  )
}
