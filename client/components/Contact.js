import React from 'react'
import BaseButton from './BaseButton'
import SocialLinks  from './SocialLinks'

export default function Contact(){
    return (
        <section className='contact-wrapper'> 
            <h2>Contact</h2>
            <div className='contact-content-wrapper'>
                <form>
                    <fieldset>
                        <label>Name</label>
                        <input />
                    </fieldset>
                    <fieldset>
                        <label>Email</label>
                        <input />
                    </fieldset>
                    <fieldset>
                        <label>Message</label>
                        <textarea />
                    </fieldset>
                    <BaseButton onClick={()=>{}} />
                </form>
                <SocialLinks />
            </div>
        </section>
    )
}
