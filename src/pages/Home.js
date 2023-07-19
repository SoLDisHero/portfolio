import React from 'react'
import HomeSection from '../components/HomeSection'
import AboutSection from '../components/AboutSection'
import ServiceSection from '../components/ServiceSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <div>
    <HomeSection/>
    <AboutSection/>
    <ServiceSection/>
    <ProjectSection/>
    <ContactSection/>
    </div>
  )
}
