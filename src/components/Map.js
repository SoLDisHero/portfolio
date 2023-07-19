import React from 'react'
import { styled } from 'styled-components'

const MapStyle = styled.div`
    min-height: 400px;
    .container{
        position: relative;
        min-height: 400px;
    }
    iframe{
         display:inline-block;
         margin-bottom:2rem;
         border-radius:12px;
         width: 100%;
    }
    @media only screen and (max-width: 768px) {
        .container {
            width:350px;
            position:relative;
            overflow: hidden;
        }
        .container iframe{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
`

export default function Map() {
  return (
    <MapStyle>
    <div className='container'>
        <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d372907.0822941413!2d-93.39414166643265!3d45.01259816734099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b333909377bbbd%3A0x939fc9842f7aee07!2sMinneapolis%2C%20MN!5e0!3m2!1sen!2sus!4v1689649863748!5m2!1sen!2sus" 
        width="1200" 
        height="450" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
  
    </div>
    </MapStyle>
    )
}
