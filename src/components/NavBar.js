import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

const NavbarStyle = styled.div`    
    position: fixed;
    z-index:100;
    width: 100%;
    left: 0;
    top: 0;
    padding: 0.3rem 0;
    background-color: var(--bg-base);
    ul {
        max-width: 1200px;
        text-align: center;
        margin: 0 auto;
        li{
            display: inline-block;
            border-radius: 8px;
            transition: .2s ease-in-out background-color;
            
        }
        a{
            display: inline-block;
            padding: 0.8rem 1.2rem;
            margin: 0 1rem;
            color: var(--color);
            font-size: 1.3rem;
            font-family:'Schibsted Grotesk', sans-serif; 
            outline:none;
            position:relative;
        }        
        a::before{
            content: "";
            position:absolute;
            bottom:0;
            left:0;
            width:100%;
            height: 2px;
            background-color:var(--bg-third);
            transform: scaleX(0) rotate(5deg);
            transform-origin:center;
            transition:transform .33s;
        }
        a:hover::before{
            transform:scaleX(1)
        }
    }
    @media only screen and (max-width: 768px){
        position: fixed;
        ul{           
            max-width:350px;
            max-height: 350px;
            li{
            display: block;
            border-radius: 21px;
            padding: 0.5rem 1.5rem;
            color: var(--color);
            font-size: 1.5rem;
            font-family:'Schibsted Grotesk', sans-serif;
                a{
                display: block;
                padding: 0.5rem 4rem;
                color: var(--color);
                font-size: 1.2rem;
                font-family:'Schibsted Grotesk', sans-serif; 
                }
            }
        }
        @keyframes move {
            from {
                transform: translateX(-5rem);
            }
            to {
                transform: translateY(0rem);                
                animation-play-state: paused;
            }
        }
    }
`
function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }
  
  export default function Navbar() {
    const [prevScroll, setPrevScroll] = useState(0);
    const [visible, setVisible] = useState(true);
  
    const handleScroll = debounce(() => {
      const currentScroll = window.scrollY;
      setVisible(prevScroll > currentScroll && currentScroll < 77);
      setPrevScroll(currentScroll);
    }, 100);
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [handleScroll]);
  
    return (
      <NavbarStyle className={visible ? 'navbar' : 'navbar hiddenNav'}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </NavbarStyle>
    );
  }
