import React from 'react'
import {RiArrowRightFill} from 'react-icons/ri'

export default function BaseButton({content, onClick=null}){
    return (
        <div className='base-button-wrapper' onClick={onClick}>
            <span className='base-button-content'>{content}</span>
            {true && <RiArrowRightFill className='arrow' />}
        </div>
    )
}