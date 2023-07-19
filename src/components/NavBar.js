import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import Tick from './Tick'

const NavbarStyle = styled.div`
    .navbar{
        
    }
    position: fixed;
    z-index:100;
    width: 100%;
    left: 0;
    top: 0;
    transition: top 0.3s;
    padding: 0.5rem 0;
    background-color: var(--bg-base);
    background-image: url("https://www.transparenttextures.com/patterns/3px-tile.png");
    ul {
        max-width: 1200px;
        text-align: center;
        margin: 0 auto;
        li{
            display: inline-block;
            border-radius: 8px;
            transition: .2s ease-in-out background-color;
            
        }
        li:hover{
            background-color: var(--bg-secondary);  
            background-image: url("https://www.transparenttextures.com/patterns/3px-tile.png");
        }
        a{
            display: inline-block;
            padding: 1rem 1.5rem;
            margin: 0 1rem;
            color: var(--color);
            font-size: 1.5rem;
            font-family:'Schibsted Grotesk', sans-serif; 
            outline:none;
        }
        .active{
        color: #DDE6ED;
        }
        ${'' /* .selected{
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
        } */}
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
                width:100%;
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

export default function Navbar() {
    const [selectedItem, setSelectedItem] = useState("");
    //hide navbar
    const [prevScroll, setPrevScroll] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);

    function handleScroll() {
        const currentScroll = window.scrollY;
        // setVisible(prevScroll < currentScroll || currentScroll === 0);
        // setPrevScroll(currentScroll);
        setVisible(prevScroll > currentScroll);
        setPrevScroll(currentScroll);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    })

    function handleClick(item) {
        setSelectedItem(item)
    }

  return (
    <NavbarStyle className={visible ? "navbar" : "navbar hiddenNav"}>
    <ul >
        <li>
            <NavLink to="/" onClick={() => handleClick("home")}>
            {selectedItem === "home" ? <Tick/> : ""}Home</NavLink>
        </li>
        <li>
            <NavLink to="/about" onClick={() => handleClick("about")}>
            {selectedItem === "about" ? <Tick/> : ""}About</NavLink>
        </li>
        <li>
            <NavLink to="/projects" onClick={() => handleClick("projects")}>
            {selectedItem === "projects" ? <Tick/> : ""}Projects</NavLink>
        </li>
        <li>
            <NavLink to="/contact" onClick={() => handleClick("contact")}>
            {selectedItem === "contact" ? <Tick/> : ""}Contact</NavLink>
        </li>        
    </ul>
    </NavbarStyle>
  )
}
