import React from 'react'
import Link from 'next/link'
import { BaseButtonLink } from './Blocks/BaseButton'

// HAVE SHAPE BETWEEN BLOG AND ABOUT
export default function Header(){
    return (
        <header >
            <Link href='/'>
                <h1 className=' main-title'>RACHEL REILLY</h1>
            </Link>
            <div className='header-title-link-wrapper'>
                <BaseButtonLink url='#about'  content='ABOUT'/>
            </div>
            <div className='header-title-link-wrapper'>
                <BaseButtonLink url='/blog'  content='BLOG'/>
            </div>
        </header>
    )
}


