import React from 'react'
import Project from './Project'

const projects = [
    {
        title: 'Sliced',
        description: 'A recipe app that scales up and down ingredients',
        stack: ['React', 'Node.js', 'Express', 'CSS3', 'PostgreSQL'],
        images: [],
        links: [
            {title: 'View App', href: 'https://sliced.rachanastasia.vercel.app/'},
            {title: 'Client Code', href: 'https://github.com/Rachanastasia/sliced-client'},
            {title: 'Server Code', href: 'https://github.com/Rachanastasia/sliced-API'},
            {title: 'Blog Post', href: 'https://rachanastasia.medium.com/a-tale-of-three-string-parsing-algorithms-ed62a13bc62b'}
        ]
    },
    {
        title: 'Spaced Repetition',
        description: 'A language learning app that uses the spaced repetition technique',
        stack: ['React', 'Node.js', 'Express', 'CSS3', 'PostgreSQL'],
        images: [],
        links: [
            {title: 'View App', href: 'https://spaced-repetition-dun.vercel.app/'},
            {title: 'Client Code', href: 'https://github.com/Rachanastasia/spaced-repetition-client'},
            {title: 'Server Code', href: 'https://github.com/Rachanastasia/spaced-repetition-server'}
        ]
    }
]

export default function Projects(){

    return (
        <section>
            <h2 className='section-title'>Projects</h2>
            {projects.map(p => <Project {...p} />)}
        </section>
    )
}


