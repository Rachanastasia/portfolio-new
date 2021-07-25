import React from 'react'
import Banner from './Banner/index'
import Link from 'next/link'

export default function Header(){
    return (
        <header>
            <Banner />
            <HeaderTitle />
        </header>
    )
}


function HeaderTitle(){
    return (
        <div className='header-title-wrapper'>
            <h1 className='section-title main-title'>Rachel Reilly</h1>
            <div className='header-title-link-wrapper'>
                <Link href={'/projects'}><span>Projects</span></Link>
                <Link href={'/about'}><span>About</span></Link>
                <Link href={'/about#contact'}><span>Contact</span></Link>
                <Link href={'/blog'}><span>Blog</span></Link>
            </div>
        </div>)
}