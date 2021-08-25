import React from 'react'
import Link from 'next/link'
import Button from '../BaseButton'

export default function BlogError(){
    const emptyClickHandler = () => {}
    return (
        <div className='blog-error-wrapper'>
            <div className='blog-error-section-wrapper'>
                <h3>Oops! The blog posts can't be displayed!</h3>
                <span>These articles were originally posted Medium. View them at 
                    <Link href='https://rachelrly.medium.com'>
                        <span> rachelrly.medium.com</span>
                    </Link>
                </span>
            </div>
            <Link href='/'>
                <Button content='go back'  onClick={emptyClickHandler}/>
            </Link>
        </div>
    )
}