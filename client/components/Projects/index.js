import React from 'react'
import Image from 'next/image'
import Sliced from '../../assets/scale-down.jpg'

const projects = [
    {
        title: 'Sliced',
        description: 'A recipe app that scales up and down ingredients',
        stack: ['React', 'Node.js', 'Express', 'CSS3', 'PostgreSQL'],
        images: [],
        links: [
            {title: 'View App', href: 'https://sliced.rachanastasia.vercel.app/'},
            {title: 'Client Code', href: 'https://github.com/rachelrly/sliced-client'},
            {title: 'Server Code', href: 'https://github.com/rachelrly/sliced-API'},
            {title: 'Blog Post', href: 'https://rachelrly.medium.com/a-tale-of-three-string-parsing-algorithms-ed62a13bc62b'}
        ],
        date: 'October 2020 - Present'
    },
    {
        title: 'Spaced Repetition',
        description: 'A language learning app that uses the spaced repetition technique',
        stack: ['React', 'Node.js', 'Express', 'CSS3', 'PostgreSQL'],
        images: [],
        links: [
            {title: 'View App', href: 'https://spaced-repetition-dun.vercel.app/'},
            {title: 'Client Code', href: 'https://github.com/rachelrly/spaced-repetition-client'},
            {title: 'Server Code', href: 'https://github.com/rachelrly/spaced-repetition-server'}
        ],
        date: 'October 2020 - November 2020'
    },
    {
        title: 'GraphQL Bookshelf',
        description: "This full-stack project explores types and the connections between data in GraphQL",
        stack: ['React', 'GraphQL', 'Apollo Client', 'Node.js', 'Express', 'CSS3'],
        links: [
            {title: 'View App', href: 'https://bookshelf-orcin.vercel.app/'},
            {title: 'Client Code', href: 'https://github.com/rachelrly/graphql-bookshelf-client'},
            {title: 'Server Code', href: 'https://github.com/rachelrly/graphql-bookshelf-api'}
        ],
        date: 'January 2021'
    },
    {
        title: 'One Dimensional Chess',
        description: "One Dimensional Chess is a static two-player game that follows Glimne's rules for the game",
        stack: ['React', 'CSS3'],
        links: [
            {title: 'View App', href: 'https://one-d-chess.vercel.app/'},
            {title: 'Game Code', href: 'https://github.com/rachelrly/one-dimensional-chess'},
        ],
        date: 'October 2020 - January 2021'
    },
    {
        title: 'Loan Calculator',
        description: 'A loan calculator that uses a reducer for state management',
        stack: ['React', 'CSS3'],
        links: [
            {title: 'View App', href: 'https://loan-calculator-two.vercel.app/'},
            {title: 'App Code', href: 'https://github.com/rachelrly/loan-calculator'},
            {title: 'Blog Post', href: 'https://rachelrly.medium.com/usestate-vs-usereducer-9bbfca768f51'}
        ],
        date: 'February 2021'
    },
    {
        title: 'Init',
        description: "Init is a social media platform for developers to connect over their work. Init was created by Rachel Reilly, Adyceum Magna Ccarri, Trevor J Alt, and Steven Henderson for the final capstone at Thinkful's Engineering Immersion program.",
        stack: ['React', 'Node.js', 'Express', 'CSS3', 'PostgreSQL'],
        links: [
            {title: 'View App', href: 'https://init-rachel.vercel.app/'},
            {title: 'Client Code', href: 'https://github.com/rachelrly/init'},
            {title: 'Server Code', href: 'https://github.com/rachelrly/init-api'}
        ],
        date: 'November 2020 - December 2020'
    }
]

export default function Projects(){

    return (
        <section>
            <h2 className='section-title'>Projects</h2>
        
            <div className='project1 project'>
                <Image  src={Sliced}/>
            </div>
            <div className='project2 project'>

            </div>
            <div className='project3 project'>

            </div>
            <div className='project4 project'>

            </div>
        </section>
    )
}


