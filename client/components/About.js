import React from 'react'
import SocialLinks  from './SocialLinks'
import Me from '../assets/rachel-reilly.jpg'
import Image from 'next/image'

export default function About(){
    return (
        <section className='full-section'> 
                <h2>About</h2>
                <div className='about-content-wrapper'>
                    <div className='image-wrapper'>
                        <Image className='about-img' src={Me} priority={true}/>
                    </div>
                        <div className="about-paragraph-wrapper">
                        <p>
                        I am a full stack Software Engineer specializing in React Native but passionate about the future of tech beyond mobile. I was introduced to tech as an artist through the Maker community where I learned that -- with some additional knowledge -- I could apply the constructive skills I developed as an artist to make things that solve concrete problems.                         </p>
                        <p>
                        When I learned to paint, I was told, 𝙄𝙛 𝙮𝙤𝙪 𝙨𝙚𝙚 𝙖 𝙘𝙤𝙡𝙤𝙧 𝙨𝙞𝙢𝙞𝙡𝙖𝙧 𝙩𝙤 𝙤𝙣𝙚 𝙮𝙤𝙪 𝙖𝙡𝙧𝙚𝙖𝙙𝙮 𝙢𝙞𝙭𝙚𝙙, 𝙢𝙖𝙠𝙚 𝙞𝙩 𝙛𝙧𝙤𝙢 𝙩𝙝𝙖𝙩 𝙘𝙤𝙡𝙤𝙧 ; I think about this often when I am creating a React component or a GraphQL Type. I strive to write code that is cohesive and aware of the relationship between the parts so that it is easy to read and adapt.                        </p>
                        <p>Beyond my obsession with craftsmanship, I see a lot of similarities between my creative work and my programming. I am trained to analyze a problem from different angles and implement solutions, both established and novel. I learned to iterate on my work, which led me to turn a simple string parser into a robust recipe scaling algorithm in my project, Sliced.</p>
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
            <h3>SKILLS</h3>
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
