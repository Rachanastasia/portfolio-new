import React from 'react'
import BaseButton from './BaseButton'

export default function About(){
    return (
        <section className='about-wrapper'>        
            <h1 className='section-title main-title'>Rachel Reilly</h1>
            <span className='about-subtitle'>Full Stack Developer</span>
            <div className='about-content-wrapper'>
                {/* <img className='about-img' src={require('../assets/rachel.jpg')} /> */}
                <div className="about-paragraph-wrapper">
                    <p>
                        Hi, I’m Rachel. I’m a Full Stack Developer from Chicago with experience working with React, React Native, GraphQL, Node.js, and SQL.
                    </p>
                    <p>
                        My background as an artist informs my programming beyond the UI. I learned how to take concepts -- classes and context, hue and negative space -- and apply them for different effects. I practiced listening to feedback during critiques, realizing that other people often saw things in my work that I had overlooked. 
                    </p>
                    <p>In art school, I took classes in drawing, ceramics, and color theory to push my skills as an artist beyond my preferred discipline. I try to adapt this mindset when growing my abilities as a developer, practicing data structures and algorithms in Python, doing SQL drills, and diving into computer architecture, in addition to the daily work I do as a Full Stack JavaScript Developer.</p>
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
