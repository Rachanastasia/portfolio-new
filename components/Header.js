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
                <Link href={''}><span>About</span></Link>
                <Link href={''}><span>Projects</span></Link>
            </div>
        </div>)
}