import React from 'react'
import ContactForm from './ContactForm'
import SocialLinks  from './SocialLinks'

export default function Contact(){
    return (
        <section className='contact-wrapper full-section'> 
            <h2 className='page-title'>CONTACT</h2>
            <div className='contact-content-wrapper'>
                <ContactForm />
                <SocialLinks />
            </div>
        </section>
    )
}
