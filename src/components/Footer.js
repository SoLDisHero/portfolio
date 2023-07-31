import React from 'react'
import Text from "../components/Text";
import FooterCol from './FooterCol';
import { styled } from 'styled-components';
import {FaFacebook} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"
import {HiOutlineMailOpen} from "react-icons/hi"

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
        color:#4267B2;
    }
    ${'' /* .icon li:nth-child(3) svg:hover{
        background: #f09433; 
        background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
        background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
        background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    } */}
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
                    {icon: <FaFacebook/>, type: "link", title : "Facebook", path:"https://www.facebook.com/EugeneYer/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0"},
                    // {icon:<FaInstagramSquare/>, type: "link", title : "Instagram", path:"https://www.instagram.com/soldishero/"},
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
