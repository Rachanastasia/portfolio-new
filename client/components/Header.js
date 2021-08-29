import React from 'react'
import {PAGES} from '../utils/constants'
import { BaseButtonLink } from './BaseButton'

export default function Header({path}){
    //TODO: switch to use Object.entries syntax
    const validateAgainstPath = (pagePath) => pagePath === path ? 'active' : null
    const projectsClass = validateAgainstPath(PAGES.PROJECTS.PATH)
    const aboutClass = validateAgainstPath(PAGES.ABOUT.PATH)
    const blogClass = validateAgainstPath(PAGES.BLOG.PATH)
    const contactClass = validateAgainstPath(PAGES.CONTACT.PATH)
    const hireClass = validateAgainstPath(PAGES.HIRE_ME.PATH)
    const mainPageClass = path === PAGES.DEFAULT.PATH ? 'main-page' : ''
    console.log('THIS IS MY PATH', path === PAGES.DEFAULT.PATH)
    return (
        <header id={mainPageClass}>
            <h1 className='section-title main-title'>RR</h1>
            <div className='header-title-link-wrapper'>
                <BaseButtonLink url='/projects' className={projectsClass} content='Projects'/>
                <BaseButtonLink url='/about' className={aboutClass} content='About'/>
                <BaseButtonLink url='/contact' className={contactClass} content='Contact'/>
                <BaseButtonLink url='/blog' className={blogClass} content='Blog'/>
                <BaseButtonLink url='/hire-me' className={hireClass} content='Hire Me'/> 
            </div>
        </header>
    )
}


