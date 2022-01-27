import React from 'react'
import Link from 'next/link'
import {PAGES} from '../utils/constants'
import { BaseButtonLink } from './Blocks/BaseButton'

// LINK TO ABOUT PLACE IN MAIN PAGE
export default function Header({path}){
    const validateAgainstPath = (pagePath) => pagePath === path ? 'active' : null
    const blogClass = validateAgainstPath(PAGES.BLOG.PATH)
    return (
        <header >
            <Link href='/'>
                <h1 className=' main-title'>RACHEL REILLY</h1>
            </Link>
            <div className='header-title-link-wrapper'>
                <BaseButtonLink url='/blog' className={blogClass} content='BLOG'/>
            </div>
        </header>
    )
}


