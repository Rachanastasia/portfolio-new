import React from 'react'
import Link from 'next/link'
import {BaseButtonLink} from '../BaseButton'

export default function BlogError(){
    return (
        <div className='blog-error-wrapper'>
            <div className='blog-error-section-wrapper'>
                <h3>The blog posts can't be displayed right now.</h3>
                <span>These articles were originally posted Medium. View them at 
                    <Link href='https://rachelrly.medium.com'>
                        <span> rachelrly.medium.com</span>
                    </Link>
                </span>
            </div>
            <BaseButtonLink url='/' content='Go back' />
        </div>
    )
}