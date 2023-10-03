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
    
    </div>
    </MapStyle>
    )
}
