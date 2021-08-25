import React from 'react'
import { BaseButtonLink } from './BaseButton'

export default function Header(){
    return (
        <header>
            <h1 className='section-title main-title'>Rachel Reilly</h1>
            <div className='header-title-link-wrapper'>
            <BaseButtonLink url='/projects' content='Projects'/>
<BaseButtonLink url='/about' content='About'/>
<BaseButtonLink url='/contact' content='Contact'/>
<BaseButtonLink url='/blog' content='Blog'/>
<BaseButtonLink url='/hire-me' content='Hire Me'/> 
            </div>
        </header>
    )
}


