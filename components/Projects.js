import React from 'react'
import Project from './Project'
import sliceUpImage from '../assets/slice-up.png'
import sliceDownImage from '../assets/slice-down.png'

const projects = [
    {
        title: 'Sliced',
        description: 'A recipe app that scales up and down ingredients',
        stack: ['React', 'Node.js', 'Express', 'CSS3', 'PostgreSQL'],
        images: [sliceUpImage, sliceDownImage],
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
    },
    {
        title: 'GraphQL Bookshelf',
        description: "This full-stack project explores types and the connections between data in GraphQL",
        stack: ['React', 'GraphQL', 'Apollo Client', 'Node.js', 'Express', 'CSS3'],
        links: [
            {title: 'View App', href: 'https://bookshelf-orcin.vercel.app/'},
            {title: 'Client Code', href: 'https://github.com/Rachanastasia/graphql-bookshelf-client'},
            {title: 'Server Code', href: 'https://github.com/Rachanastasia/graphql-bookshelf-api'}
        ]
    },
    {
        title: 'One Dimensional Chess',
        description: "One Dimensional Chess is a static two-player game that follows Glimne's rules for the game",
        stack: ['React', 'CSS3'],
        links: [
            {title: 'View App', href: 'https://one-d-chess.vercel.app/'},
            {title: 'Game Code', href: 'https://github.com/Rachanastasia/one-dimensional-chess'},
        ]
    },
    {
        title: 'Loan Calculator',
        description: 'A loan calculator that uses a reducer for state management',
        stack: ['React', 'CSS3'],
        links: [
            {title: 'View App', href: 'https://loan-calculator-two.vercel.app/'},
            {title: 'App Code', href: 'https://github.com/Rachanastasia/loan-calculator'},
            {title: 'Blog Post', href: 'https://rachanastasia.medium.com/usestate-vs-usereducer-9bbfca768f51'}
        ]
    },
    {
        title: 'Init',
        description: "Init is a social media platform for developers to connect over their work. Init was created by Rachel Reilly, Adyceum Magna Ccarri, Trevor J Alt, and Steven Henderson for the final capstone at Thinkful's Engineering Immersion program.",
        stack: ['React', 'Node.js', 'Express', 'CSS3', 'PostgreSQL'],
        links: [
            {title: 'View App', href: 'https://init-rachel.vercel.app/'},
            {title: 'Client Code', href: 'https://github.com/Rachanastasia/init'},
            {title: 'Server Code', href: 'https://github.com/Rachanastasia/init-api'}
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


