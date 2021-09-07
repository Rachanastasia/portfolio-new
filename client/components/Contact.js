import React from 'react'
import ContactForm from './ContactForm'
import SocialLinks  from './SocialLinks'

export default function Contact(){
    return (
        <section className='contact-wrapper full-section'> 
            <h2>Contact</h2>
            <div className='contact-content-wrapper'>
                <ContactForm />
                <SocialLinks />
            </div>
        </section>
    )
}
