import React from 'react'
import BaseButton from './BaseButton'
import SocialLinks  from './SocialLinks'

export default function Contact(){
    return (
        <section className='about-wrapper'> 
            <h2>Contact</h2>
            <div className='about-content-wrapper'>
                {/* <img className='about-img' src={require('../assets/rachel.jpg')} /> */}
                <div className="about-paragraph-wrapper">
                    <p>
                        Hi, I’m Rachel. I’m a Full Stack Developer from Chicago.
                    </p>
                    <p>
                        My background as an artist informs my programming beyond the UI. I learned how to take concepts -- classes and context, hue and negative space -- and apply them for different effects. I practiced listening to feedback during critiques, realizing that other people often saw things in my work that I had overlooked. 
                    </p>
                    <p>In art school, I took classes in drawing, ceramics, and color theory to push my skills as an artist beyond my preferred discipline. I try to adapt this mindset when growing my abilities as a developer, practicing data structures and algorithms in Python, doing SQL drills, and diving into computer architecture, in addition to the daily work I do as a Full Stack JavaScript Developer.</p>
                    <SocialLinks />m
                </div>
            </div>
        </section>
    )
}
