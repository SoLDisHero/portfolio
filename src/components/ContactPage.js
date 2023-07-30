import React from 'react'
import Heading from "./Heading"
import { styled } from 'styled-components'
import ContactInfoItem from './ContactInfoItem'
import { MdEmail, MdOutlineLocationOn, MdPhone } from 'react-icons/md'
import ContactForm from './ContactForm'

const ContactStyle = styled.div`
    padding: 11rem 0 ;
    .contact{
        display:flex;
        gap: 5rem;
        margin-top:5rem;
        justify-content: space-between;
        position:relative;
    }
    .contact::after{
        position: absolute;
        content: "";
        width: 2px;
        height: 60%;
        background-color: var(--color);
        left:50%;
        top:40%;
        transform: translate(-50%, -50%)
    }
    .left{
        width: 100%;
        max-width:500px;
    }
    .right{
        max-width: 500px;
        width: 100%;
    }
    @media only screen and (max-width: 768px) {
        .contact{
            flex-direction: column;            
        }
        .contact::after{
            display:none;
        }
        .left, .right{
            max-width:100%;
        }
        .headingPara{
            display:none;
        }
    }
`

export default function ContactPage() {
  return (
    <ContactStyle>
        <div className='container'>
            <Heading title='with me' subTitle='get in touch'/>
            <div className='contact'>
                <div className='left'>
                    <ContactInfoItem icon={<MdPhone/>} text='+1 763 843 40 97'/>
                    <ContactInfoItem icon={<MdEmail/>} text='geniaer@gmail.com'/>
                    <ContactInfoItem icon={<MdOutlineLocationOn/>} text='MN, USA'/>
                </div>
                <div className='right'>
                    <ContactForm/>
                </div>                
            </div>
        </div>
    </ContactStyle>
  )
}
