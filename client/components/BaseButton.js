import React from 'react'
import Link from 'next/link'

export default function BaseButton({content, onClick=null, className}){
    const concatClassName = className + ' ' + 'base-button-wrapper'
    return (
        <div className={concatClassName} onClick={onClick}>
            <span className='base-button-content'>{content}</span>
        </div>
    )
}

export function BaseButtonLink({content, url='/', className}){
    const concatClassName = className + ' ' + 'base-button-wrapper'
    return (
        <div className={concatClassName}>
            <Link href={url}>
                <span className='base-button-content' id={className}>{content}</span>
            </Link>
        </div>
    )
}