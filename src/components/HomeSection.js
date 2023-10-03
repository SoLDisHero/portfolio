import React, { useEffect, useState } from 'react'
// import MyPhoto from "../images/me_bw.jpg"
// import Text from './Text'
import { styled } from 'styled-components'

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
        span{
            width:100%;
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
        animation-duration: 18s;    
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
                    <span className='home_name first'>Hello, I am </span>
                    <span className='home_name z'>E</span>
                    <span className='home_name'>u</span>
                    <span className='home_name z'>g</span>
                    <span className='home_name'>e</span>
                    <span className='home_name z'>n</span>
                    <span className='home_name'>e</span>
                </h1>
            </div>                        
            <div className='home_img'>
            {boxes.map((x,i) => (
                <div key={i} className='box'></div>
            ))}
            </div>
            <div className='cloud one'></div>
            {/* <div className='cloud two'></div>
            <div className='cloud three'></div> */}
            <div className='cloudOfRain rain-cloud four'>
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
            </div>
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
