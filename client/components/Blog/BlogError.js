import React from 'react'
import Link from 'next/link'
import {RectangleButtonLink} from '../RectangleButton'

export default function BlogError(){
    return (
        <section className='blog-error-wrapper full-section'>
            <div className='blog-error-section-wrapper'>
                <h3>The blog posts can't be displayed right now.</h3>
                <span>These articles were originally posted Medium. View them at 
                    <Link href='https://rachelrly.medium.com'>
                        <span> rachelrly.medium.com</span>
                    </Link>
                </span>
            </div>
            <RectangleButtonLink url='/' content='Go back' />
        </section>
    )
}