import React from 'react'
import BaseButton from './BaseButton'

export default function HireMe(){
    //TODO: have link to resume and LinkedIn and gmail
    //TODO: write breif description of looking for a job
    return (
        <section className='about-wrapper'> 
            <h2>Hire Me</h2>
            <div className='about-content-wrapper'>
                <div className="about-paragraph-wrapper">
                    <p>
                        I'm looking for a new position as a Software Engineer. Please check out my resume below. I am also open to doing contract and consultant work. Specialize in front-end implementation.
                    </p>
                    <div className='about-links-wrapper'>
                        <BaseButton content='PROJECTS' onClick={null}/>
                        <BaseButton content='BLOG' href='https://rachanastasia.medium.com/'/>
                        <BaseButton content='RESUME'/>
                    </div>
                </div>
            </div>
        </section>
    )
}
