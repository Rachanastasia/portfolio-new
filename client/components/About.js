import React from 'react'
import SocialLinks  from './SocialLinks'
import Me from '../assets/rachel-reilly.jpg'
import Image from 'next/image'

export default function About(){
    return (
        <section className='full-section'> 
                <h2>About</h2>
                <div className='about-content-wrapper'>
                    <Image className='about-img' src={Me} priority={true} />
                        <div className="about-paragraph-wrapper">
                        <p>
                            I'm a fullstack Software Engineer in Chicago, IL who is passionate about helping start-ups. 
                        </p>
                        </div>
                        <div className='skills-links-wrapper'>
                            <Skills />   
                            <SocialLinks hasResume />
                        </div>
                    </div>  
        </section>
    )
}


function Skills(){
    return (
        <div className='skills-wrapper'>
            <h3>Skills</h3>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>React Native</li>
                <li>Node.js</li>
                <li>GraphQL</li>
                <li>PostgreSQL</li>
                <li>AWS</li>
                <li>Docker</li>
                <li>Python</li>
                <li>CSS</li>
                <li>SASS</li>
            </ul>
        </div>
    )
}
