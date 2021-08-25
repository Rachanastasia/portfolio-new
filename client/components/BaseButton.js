import React from 'react'
import Link from 'next/link'

export default function BaseButton({content, onClick=null}){
    return (
        <div className='base-button-wrapper' onClick={onClick}>
            <span className='base-button-content'>{content}</span>
        </div>
    )
}

export function BaseButtonLink({content, url='/'}){
    return (
        <div className='base-button-wrapper'>
            <Link href={url}>
                <span className='base-button-content'>{content}</span>
            </Link>
        </div>
    )
}