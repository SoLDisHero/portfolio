import React from 'react'
import { styled } from 'styled-components'

const TickStyle = styled.span`
.selected{
            animation: move 0.3s ease;
        }
        @keyframes move {
            0% {
                transform: translateY(-5rem);
            }
            100% {
                transform: translateY(0.1rem);
                
                animation-play-state: paused;
            }
        }
`

export default function Tick() {
  return (
    <TickStyle>
    <span className="material-symbols-outlined selected">
line_end_arrow
</span>
</TickStyle>
  )
}
