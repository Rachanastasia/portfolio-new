import React from 'react'
import SocialLinks  from './SocialLinks'
import Me from '../assets/rachel-reilly.jpg'
import Image from 'next/image'

//TODO: Skills section


export default function About(){
    return (
        <section> 
            <div className='content-width-wrapper'>
                <h2>About</h2>
                <div className='about-content-wrapper'>
                    <Image className='about-img' src={Me} priority={true} />

                        <div className="about-paragraph-wrapper">
                        <p>
                            I'm a fullstack Software Engineer in Chicago, IL who is passionate about helping start-ups. 
                        </p>
                        </div>

                        <SocialLinks />
                    </div>
            </div>
        </section>
    )
}
