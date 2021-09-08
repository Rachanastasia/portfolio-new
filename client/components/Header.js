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
    const mainPageClass = path === PAGES.DEFAULT.PATH ? 'main-page' : ''
    return (
        <header id={mainPageClass}>
            <h1 className=' main-title'>Rachel Reilly</h1>
            <div className='header-title-link-wrapper'>
                <BaseButtonLink url='/projects' className={projectsClass} content='PROJECTS'/>
                <BaseButtonLink url='/about' className={aboutClass} content='ABOUT'/>
                <BaseButtonLink url='/contact' className={contactClass} content='CONTACT'/>
                <BaseButtonLink url='/blog' className={blogClass} content='BLOG'/>
            </div>
        </header>
    )
}


