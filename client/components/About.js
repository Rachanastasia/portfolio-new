import React from 'react'
import {RiLinkedinLine, RiGithubLine} from 'react-icons/ri'
import {AiOutlineMedium} from 'react-icons/ai'
import Me from '../assets/sliced-new.jpg'
import Image from 'next/image'

export default function About(){
    return (
        <section > 
            <h2>About</h2>
            <div className='about-content-wrapper'>
                <div className='image-wrapper'>
                    <Image className='about-img' width={300} height={300} src={Me} />
                </div>
                <div className='paragraph-links-wrapper'>
                    <div className="about-paragraph-wrapper">
                    <p>
                        Hi, I’m Rachel. I am a full stack Software Engineer specializing in React Native but passionate about IoT and the future of tech beyond mobile. I was introduced to tech as an artist through the Maker community where I learned that -- with some additional knowledge -- I could apply the constructive skills I developed as an artist to make things that solve concrete problems. 
                    </p>
                    <p>
                    When I learned to paint, I was told, 𝙄𝙛 𝙮𝙤𝙪 𝙨𝙚𝙚 𝙖 𝙘𝙤𝙡𝙤𝙧 𝙨𝙞𝙢𝙞𝙡𝙖𝙧 𝙩𝙤 𝙤𝙣𝙚 𝙮𝙤𝙪 𝙖𝙡𝙧𝙚𝙖𝙙𝙮 𝙢𝙞𝙭𝙚𝙙, 𝙢𝙖𝙠𝙚 𝙞𝙩 𝙛𝙧𝙤𝙢 𝙩𝙝𝙖𝙩 𝙘𝙤𝙡𝙤𝙧 ; I think about this often when I am creating a React component or a GraphQL Type. I strive to write code that is cohesive and aware of the relationship between the parts so that it is easy to read and adapt.</p>
                    <p> 
                    Beyond my obsession with craftsmanship, I see a lot of similarities between my creative work and my programming. I am trained to analyze a problem from different angles and implement solutions, both established and novel. I learned to iterate on my work, which led me to turn a simple string parser into a robust recipe scaling algorithm in my project, Sliced.
                    </p>
                    </div>
                    <div className='about-links-wrapper'>
                        <a className='footer-button' href='https://www.linkedin.com/in/rachel-a-reilly/'>
                            <RiLinkedinLine />
                        </a>
                        <a className="footer-button" href='https://rachelrly.medium.com/'>
                            <AiOutlineMedium/>
                        </a>
                        <a className='footer-button' href='https://github.com/rachelrly'>
                            <RiGithubLine />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
