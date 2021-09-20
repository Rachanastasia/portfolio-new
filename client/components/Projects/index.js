import React, {Fragment} from 'react'
import ProjectCard from './ProjectCard'

import SlicedNewImage from '../../assets/sliced-new.jpg'
import SlicedOldImage from '../../assets/sliced-old-recipe-view.png'
import Init from '../../assets/init.jpg'
import SpacedRepetition from '../../assets/spaced-repetition.jpg'
import OneDChess from '../../assets/one-d-chess.jpg'
import LoanCalculator from '../../loan-calculator.jpg'
import GraphQLBookshelf from '../../graphql-bookshelf.jpg'


const PROJECTS = [
    {
        title: 'Sliced',
        description: 'Sliced is a cooking aide that uses a custom string parsing algorithm to turn user text input into scalable ingredients. Sliced 2.0 focuses on perfecting the recipe slicing algorithm and allows users to scale and input recipes on the same screen.',
        stack: ['JavaScript', 'React.js', 'Next.js', 'CSS3'],
        images: [SlicedNewImage],
        links: [
            {title: 'View App', href: 'https://sliced.vercel.app/'},
            {title: 'App Code', href: 'https://github.com/rachelrly/sliced-client'},
        ],
        date: 'October 2020 - Present'
    },
    {
        title: 'Sliced - Old',
        description: 'Sliced is a recipe app that allows users to save their recipes and scale the ingredients up and down. Sliced 1.0 has an account system that allows users to store their recipes. This was dropped in Sliced 2.0 to limit the scope of the project to what makes Sliced most special.',
        stack: ['React', 'Node.js', 'Express', 'CSS3', 'PostgreSQL'],
        images: [SlicedOldImage],
        links: [
            {title: 'View App', href: 'https://sliced.rachanastasia.vercel.app/'},
            {title: 'Client Code', href: 'https://github.com/rachelrly/sliced-client'},
            {title: 'Server Code', href: 'https://github.com/rachelrly/sliced-API'},
            {title: 'Blog Post', href: 'https://rachelrly.medium.com/a-tale-of-three-string-parsing-algorithms-ed62a13bc62b'}
        ],
        date: 'October 2020 - January 2021',
    },
    {
        title: 'Spaced Repetition',
        description: 'Created with Test Driven Development with Mocha and Chia on the backend and Cypress on the front end, Spaced Repetition is a language learning app that uses the Linked List data structure to immitate the spaced repetition technique for learning.',
        stack: ['React', 'Node.js', 'Express', 'CSS3', 'PostgreSQL'],
        images: [SpacedRepetition],
        links: [
            {title: 'View App', href: 'https://spaced-repetition-dun.vercel.app/'},
            {title: 'Client Code', href: 'https://github.com/rachelrly/spaced-repetition-client'},
            {title: 'Server Code', href: 'https://github.com/rachelrly/spaced-repetition-server'}
        ],
        date: 'October 2020 - November 2020'
    },
  
    {
        title: 'One Dimensional Chess',
        description: "One Dimensional Chess is a static two-player game that follows Glimne's rules for the game",
        stack: ['React', 'CSS3'],
        images: [OneDChess],
        links: [
            {title: 'View App', href: 'https://one-d-chess.vercel.app/'},
            {title: 'Game Code', href: 'https://github.com/rachelrly/one-dimensional-chess'},
        ],
        date: 'October 2020 - January 2021',
    },
    {
        title: 'Loan Calculator',
        description: 'This loan calculator uses the useReducer() React Hook to process the changes in input and update the result immediately.',
        stack: ['React', 'CSS3'],
        images: [LoanCalculator],
        links: [
            {title: 'View App', href: 'https://loan-calculator-two.vercel.app/'},
            {title: 'App Code', href: 'https://github.com/rachelrly/loan-calculator'},
            {title: 'Blog Post', href: 'https://rachelrly.medium.com/usestate-vs-usereducer-9bbfca768f51'}
        ],
        date: 'February 2021',
    },
    {
        title: 'Init',
        description: "Init is a social media platform for developers to connect over their work by sharing images and ideas. Created as the final capstone for Thinkful's Sofware Engineering Immersion, this project uses stores base-64 encoded images in a Postgres database. It was created by Rachel Reilly, Adyceum Magna Ccarri, Trevor J Alt, and Steven Henderson.",
        stack: ['React', 'Node.js', 'Express', 'CSS3', 'PostgreSQL'],
        images: [Init],
        links: [
            {title: 'View App', href: 'https://init-rachel.vercel.app/'},
            {title: 'Client Code', href: 'https://github.com/rachelrly/init'},
            {title: 'Server Code', href: 'https://github.com/rachelrly/init-api'}
        ],
        date: 'November 2020 - December 2020'
    },
    {
        title: 'GraphQL Bookshelf',
        description: "This full stack project explores types and the connections between data in GraphQL",
        stack: ['React', 'GraphQL', 'Apollo', 'Node.js', 'Express', 'CSS3'],
        images: [GraphQLBookshelf],
        links: [
            {title: 'View App', href: 'https://bookshelf-orcin.vercel.app/'},
            {title: 'Client Code', href: 'https://github.com/rachelrly/graphql-bookshelf-client'},
            {title: 'Server Code', href: 'https://github.com/rachelrly/graphql-bookshelf-api'}
        ],
        date: 'January 2021',
    },
]

export default function Projects(){
    const projectJsx = PROJECTS.map(({
        title, 
        description, 
        stack, 
        links, 
        date, 
        images, 
    }, index) => <ProjectCard 
    key={title} 
    title={title} 
    description={description} 
    stack={stack} 
    links={links} 
    date={date} 
    images={images}
    priority={index == 0 ? true : false}/>
    )
    return (
        <Fragment>{projectJsx}</Fragment>
    )
}


