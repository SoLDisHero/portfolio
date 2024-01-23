import React, { useEffect, useState } from 'react'
// import MyPhoto from "../images/me_bw.jpg"
// import Text from './Text'
import { styled } from 'styled-components'
import LettersAnimated from './LettersAnimated';

const HomeStyle = styled.div`
    overflow:hidden;
    .section{
        display:flex;
        align-items:center;
        justify-content:center;
        gap:2rem;
    }
    .left{
        width:80%;
    }
    .home{
        height: 45vh;
        min-height: 400px;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content:center;
        position:relative;
    }
    .home_heading{
        text-align:right;
        font-size: 2rem;
        position:relative;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        color: #363636;
        .text-animate{
            opacity: 0;
            animation: bounceIn 1s 1s;
            animation-fill-mode: forwards;
            min-width: 10px;
        }
        .text-animate._1 {
        animation-delay: 0.1s;
        }
        .text-animate._2 {
        animation-delay: 0.2s;
        }
        .text-animate._3 {
        animation-delay: 0.3s;
        }
        .text-animate._4 {
        animation-delay: 0.4s;
        }
        .text-animate._5 {
        animation-delay: 0.5s;
        }
        .text-animate._6 {
        animation-delay: 0.6s;
        }
        .text-animate._7 {
        animation-delay: 0.7s;
        }
        .text-animate._8 {
        animation-delay: 0.8s;
        }
        .text-animate._9 {
        animation-delay: 0.9s;
        }
        .text-animate._10 {
        animation-delay: 1s;
        }
        .text-animate._11 {
        animation-delay: 1.1s;
        }
        .text-animate._12 {
        animation-delay: 1.2s;
        }
        .text-animate._13 {
        animation-delay: 1.3s;
        }
        .text-animate._14 {
        animation-delay: 1.4s;
        }
        .text-animate._15 {
        animation-delay: 1.5s;
        }
        .text-animate._16 {
        animation-delay: 1.6s;
        }
        .text-animate._17 {
        animation-delay: 1.7s;
        }
        .text-animate._18 {
        animation-delay: 1.8s;
        }
        .text-animate._19 {
        animation-delay: 1.9s;
        }
        .home_name{
            display: inline;
            font-size: 5rem;
            font-family:'Nunito', sans-serif;    
                  
        }
        .z{
                position:relative;
                z-index:-100;
            }  
    }
    .home_img{
        max-width: 650px;
        width: 100%;
        height: 500px;
        margin: 0 auto;
        position:relative;
        overflow:hidden;
        display:flex;
        flex-wrap:wrap;
        gap:2px;
    }
    .home_img .box{
        position:relative;
        width:40px;
        height:40px;
    }
    .animate{
        animation: animateBox 2s linear forwards;
    }
    @keyframes animateBox{
        0%{
            filter: hue-rotate(0deg);
        }
        50%{
            background: var(--bg-secondary);
        }
        100%{
            filter: hue-rotate(360deg);
        }
    }
    .home_info{
        margin-top: -7rem;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
    .textC{
        color: var(--bg-secondary);
    }
    .cloud.one{
        top:52%;
        width:145px;
        height:45px;
    }
    .cloud.two{
        top:33%;
        width:60px;
        height:20px;
        animation-duration: 10s;
    }
    .cloud.three{
        top:20%;
        width:90px;
        height:30px;
        animation-duration: 23s;
    }
    .cloud{
        position:absolute;
        left:0;
        background: #FFDBAA;
        border-radius:100px;
        animation: moveCloud 25s infinite linear;
        z-index:-1;
    }
    .cloudOfRain{
        position:absolute;
        left:0;
        background: var(--color);
        border-radius:100px;
        animation: moveCloud 5s infinite linear;
        z-index:-1;
    }
    .cloudOfRain::before{
        content: "";
        position:absolute;
        top: -80%;
        left: 10%;
        width: 50%;
        height: 150%;
        background:var(--color);
        border-radius:50%;
    }
    .cloudOfRain::after{
        content: "";
        position:absolute;
        top: -40%;
        right: 20%;
        width: 30%;
        height: 100%;
        background:var(--color);
        border-radius:50%;
    }
    .cloudOfRain.four{
        top:68%;
        width:140px;
        height:35px;
        animation-duration: 48s;    
        z-index:-1;    
    }
    .cloudOfRain.five{
        top:5%;
        width:80px;
        height:15px;
        animation-duration: 39s;    
        z-index:-1;    
    }
    .rain-cloud{
        position:absolute;
        display:flex;
        z-index:1;
    }
    .rain-cloud span{
        position:relative;
        bottom:-10px;
        width:10px;
        height:10px;
        margin:0 2px;
        background:var(--color);
        border-radius: 50%;
        animation: rain 5s infinite linear;
        transform-origin: bottom;
        animation-duration:calc(15s / var(--i));
    }
    @keyframes rain{
        0%{
            transform: translateY(0) scale(1);
        }
        70%{
            transform: translateY(50px) scale(1);
        }
        100%{
            transform: translateY(75px) scale(0);
        }
    }
    .cloud::before{
        content: "";
        position:absolute;
        top: -80%;
        left: 10%;
        width: 50%;
        height: 150%;
        background:#FFDBAA;
        border-radius:50%;
    }
    .cloud::after{
        content: "";
        position:absolute;
        top: -40%;
        right: 20%;
        width: 30%;
        height: 100%;
        background:#FFDBAA;
        border-radius:50%;
    }
    @keyframes moveCloud {
        0%{
            left: 0;
            transform:translateX(-100%)
        }
        100%{
            left: 100%;
            transform:translateX(0%)
        }
    }
    @media only screen and (max-width: 768px) {
        .home{
            min-height: 550px;
            top: 5rem;  
        }
        .home_heading{
            font-size: 1.3rem;
            margin-bottom: -8rem;     
            .home_name{
                font-size: 3rem;
            }
            .first{
                letter-spacing:4px;
            }
        }
        .cloudOfRain.four{
        top:70%;
        width:80px;
        height:25px;
        animation-duration: 48s;    
        z-index:-1;    
    }
        .home_img{
            height: 350px;
        }
        .home_info{
            margin-top: -6rem;
        }
    .home_img .box{
        width:20px;
        height:20px;
    }
}
`

export default function HomeSection() {
  const [boxes, setBoxes] = useState([]);
  const letterArrayUp = ["H", "e", "l", "l", "o", ",", " ", "I", " ", "a", "m", " "]; 
  const letterArrayDown = ["E", "u", "g", "e", "n", "e", "."]; 

  useEffect(() => {
    setBoxes(Array.from({length: 150}, (x,i) => i))
  },[]);

  useEffect(() => {
    const interval = setInterval(() => {
        const num = Math.floor(Math.random() * boxes.length);
        let boxInt = document.querySelectorAll(".box");
        boxInt[num].classList.toggle("animate");
    });
    return () => {
        clearInterval(interval)
    }
  }, [boxes]);
  return (
    <HomeStyle>
    <div className="home">
        <div className='container section'>
            <div className='left'>
                <h1 className='home_heading'>
                    <LettersAnimated letterClass={"home_name text-animate"} letters={letterArrayUp} idx={1}/>
                    <LettersAnimated letterClass={"home_name text-animate"} letters={letterArrayDown} idx={13}/>
                </h1>
            </div>                        
            <div className='home_img'>
            {boxes.map((x,i) => (
                <div key={i} className='box'></div>
            ))}
            </div>
            {/* <div className='cloud one'></div> */}
            {/* <div className='cloud two'></div>
            <div className='cloud three'></div> */}
            {/* <div className='cloudOfRain rain-cloud four'>
                <span style={{"--i":12}}></span>
                <span style={{"--i":10}}></span>
                <span style={{"--i":11}}></span>
                <span style={{"--i":14}}></span>
                <span style={{"--i":18}}></span>
                <span style={{"--i":16}}></span>
                <span style={{"--i":19}}></span>
                <span style={{"--i":20}}></span>
                <span style={{"--i":16}}></span>
                <span style={{"--i":14}}></span>
                <span style={{"--i":18}}></span>
                <span style={{"--i":11}}></span>
                <span style={{"--i":13}}></span>
                <span style={{"--i":15}}></span>
                <span style={{"--i":12}}></span>
                <span style={{"--i":17}}></span>
                <span style={{"--i":13}}></span>
                <span style={{"--i":15}}></span>
            </div> */}
            {/* <div className='cloudOfRain rain-cloud five'>
                <span style={{"--i":12}}></span>
                <span style={{"--i":10}}></span>
                <span style={{"--i":11}}></span>
                <span style={{"--i":14}}></span>
                <span style={{"--i":18}}></span>
                <span style={{"--i":16}}></span>
                <span style={{"--i":19}}></span>
                <span style={{"--i":20}}></span>
                <span style={{"--i":16}}></span>
                <span style={{"--i":14}}></span>
                <span style={{"--i":18}}></span>
                <span style={{"--i":11}}></span>
                <span style={{"--i":13}}></span>
                <span style={{"--i":15}}></span>
                <span style={{"--i":12}}></span>
                <span style={{"--i":17}}></span>
                <span style={{"--i":13}}></span>
                <span style={{"--i":15}}></span>
            </div> */}
        </div>   
    </div> 
    </HomeStyle>
  )
}
