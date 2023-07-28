import React from 'react'
import Text from "../components/Text";
import Button from './Button';
import { styled } from 'styled-components';

const ContactStyle = styled.div`
    padding: 6rem 0;
    .contact-main{
        background-color: var(--bg-secondary);
        border-radius: 8px;
        padding: 3rem 0rem;
        text-align: center;        
    }
    .contact-heading{
        font-size: 3rem;
        margin-bottom: 2rem;
    }
    a{
        width:11rem;
    }
    @media only screen and (max-width: 768px) {
        .contact-heading{
            font-size: 1.8rem;
        }
    }
`

export default function ContactSection() {
  return (
    <ContactStyle>
        <div className='container'>
            <div className='contact-main'>
                <Text>don't be shy</Text>
                <h3 className='contact-heading'>
                    hit me up!
                </h3>
                <Button btnText='Mail me' btnLink='/contact'></Button>
            </div>
        </div>
    </ContactStyle>
  )
}
