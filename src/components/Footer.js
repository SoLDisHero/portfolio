import React from 'react'
import Text from "../components/Text";
import FooterCol from './FooterCol';
import { styled } from 'styled-components';
import {BsGithub} from "react-icons/bs"
import {HiOutlineMailOpen} from "react-icons/hi"
import {BiLogoLinkedinSquare} from "react-icons/bi"

const FooterStyle = styled.div`
    background-color: #363636;
    color:var(--bg-base);
    .copyright{
        text-align: center;
        padding-bottom:2.3rem;
    }
    .col{
        display:flex;
        justify-content:center;
        margin:1rem;
    }
    ul li{
        display:inline-block;
        padding:1rem 5rem;
        transition: 0.2s;
        margin-top:1.8rem;
    }
    .icon li:nth-child(1) svg:hover{
        color:#D71313;
    }
    .icon li:nth-child(2) svg:hover{
        color: #0077b5;
    }
    .icon li:nth-child(3) svg:hover{
        color:black;
    }
    ul li:hover{
        transform:scale(1.3);
    }
    a{
        color:var(--bg-base);
    }
    @media only screen and (max-width: 768px){
        ul li{
            padding:0 2rem;
            margin: 2rem 0;
        }
        .copyright{
            padding-bottom:2rem;
        }
    }
`

export default function Footer() {
  return (
    <FooterStyle>
        <div className='container'>
            <div className='col'>
                <FooterCol
                    heading='' 
                    Links={[
                    {icon: <HiOutlineMailOpen/> , type: "link", title : "Email", path:"mailto:geniaer@gmail.com"},
                    {icon: <BiLogoLinkedinSquare/>, type: "link", title : "LinkedIn", path:"https:linkedin.com/in/eugene-yerashenka-85a7118b"},
                    {icon:<BsGithub/>, type: "link", title : "GitHub", path:"https://github.com/SoLDisHero"},
                    ]}
                />
            </div>
            <div className='copyright'>
                <div className='container'>
                    <Text>|© {new Date().getFullYear()}  Eugene Y.|</Text>
                </div>
            </div>
        </div>        
    </FooterStyle>
  )
}
