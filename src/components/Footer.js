import React from 'react'
import Text from "../components/Text";
import FooterCol from './FooterCol';
import { styled } from 'styled-components';

const FooterStyle = styled.div`
    padding-top: 5rem;
    background-color: var(--bg-secondary);
    .container{
        display: flex;
        gap: 3rem;        
    }
    .col1{
        flex: 2;
    }
    .col2,
    .col3,
    .col4{
        flex: 1;
    }
    .col1-title{
        font-size: 3.5rem;
        margin-bottom: 1rem;
    }
    .copyright{
        background-color: var(--bg-base);
        background-image: url("https://www.transparenttextures.com/patterns/3px-tile.png");
        text-align: center;
        padding: 2rem 0;
        margin-top: 2rem;
    }
    @media only screen and (max-width: 768px){
        .container{
            flex-direction: column;
            gap: 0rem;
                  
        }
        .container > div {
                    margin-top: 5rem;
                }
        .col1 .textC{
                margin-left:0;
                max-width:100%;
            }
        .copyright{
            .container{
                div{
                    margin-top: 0;
                }
            }
        }    
    }
`

export default function Footer() {
  return (
    <FooterStyle>
        <div className='container'>
            <div className='col1'>
                <h2 className='col1-title'>Eugene Y.</h2>
                <Text>a web developer from MN, USA. I love what I'm doing.</Text>
            </div>
            <div className='col2'>
                <FooterCol 
                heading='Important Links' 
                Links={[
                    {title : "Home", path:"/", type:"link"},
                    {title : "About", path:"/about", type:"link"},
                    {title : "Projects", path:"/projects", type:"link"},
                    {title : "Contact", path:"/contact", type:"link"},
                    ]}/>
            </div>
            <div className='col3'>
                <FooterCol 
                    heading='Contact info' 
                    Links={[
                    {title : "+17638434097", path:"tel: 7638434097"},
                    {title : "geniaer@gmail.com", path:"mailto:geniaer@gmail.com"},
                    ]}
                />
            </div>
            <div className='col4'>
                <FooterCol 
                    heading='Social Links' 
                    Links={[
                    {title : "Facebook", path:"https://www.facebook.com/EugeneYer/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0"},
                    {title : "Instagram", path:"https://www.instagram.com/soldishero/"},
                    ]}
                />
            </div>
        </div>
        <div className='copyright'>
            <div className='container'>
                <Text>|© 2023 - Eugene Y|</Text>
            </div>
        </div>
    </FooterStyle>
  )
}
