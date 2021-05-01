import React from 'react'

export default function BaseButton({content, onClick=null}){
    return (
        <div className='base-button-wrapper' onClick={onClick}>
            <span className='base-button-content'>{content}</span>
        </div>
    )
}