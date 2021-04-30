import React from 'react'

export default function About(){
    return (
        <section>        
            <h1>Rachel Reilly</h1>
            <span class='about-subtitle'>Full Stack Developer</span>
            <div class='about-content-wrapper'>
                <img class='about-img' src='./images/rachel.jpg' />
                <div class="about-paragraph-wrapper">
                    <p>
                        Hi, I’m Rachel. I’m a Full Stack Developer from Chicago with experience working with React, React Native, GraphQL, Node.js, and SQL.
                    </p>
                    <p>
                        My background as an artist informs my programming beyond the UI. I learned how to take concepts--classes and context, hue and negative space--and apply them for different effects. I practiced listening to feedback during critiques, realizing that other people often saw things in my work that I had overlooked. 
                    </p>
                    <p>In art school, I took classes in drawing, ceramics, and color theory to push my skills as an artist beyond my preferred discipline. I try to adapt this mindset when growing my abilities as a developer, practicing data structures and algorithms in Python, doing SQL drills, and diving into computer architecture, in addition to the daily work I do as a Full Stack JavaScript Developer.</p>
                    
                </div>
            </div>
        </section>
    )
}

{/* <p>
                    Scroll down to view my recent projects. Read my <a class="about-link" href='https://rachanastasia.medium.com/'>Medium posts</a>. Resume<a class='about-link' href='RachelReillyResume.docx'>resume</a>.
                </p> */}