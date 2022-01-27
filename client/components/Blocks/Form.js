import {useEffect, useState} from 'react'
import DOMPurify from 'dompurify'
import {BaseButton} from './BaseButton'

// MAKE THIS SUPER SIMPLE AND ACTUALLY WORK
// SWITCH BACKEND TO NODE MAILER??
// CAN THIS BE IN PAGES/API??
export default function Form(){
    const [error, setError] = useState(undefined)
    const [complete, setComplete] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        return () => complete ? setComplete(false) : {}
    },[])

    const handleSubmit = async (_e) => {
        // if (loading){
        //     setError("Sending form...")
        //     return null
        // }
        // try{
        //     e.preventDefault()
        //     setLoading(true)
        //     if (error) setError(null)

        //     const {name, email, message} = e.target
        //     const hasAllFields = !!name.value?.length && !!email.value?.length && !!message.value?.length
        //     if (!hasAllFields){
        //         setError('Please enter all fields')
        //         return null
        //     }
    
        //     const isValidEmail = validateEmail(email.value)
        //     if (!isValidEmail){
        //         setError('Please enter a valid email')
        //         return null
        //     }
    
        //     const sanitizedData = {
        //         name: DOMPurify.sanitize(name.value),
        //         email: DOMPurify.sanitize(email.value),
        //         message: DOMPurify.sanitize(message.value)
        //     }

        //    const response = await postContactForm(sanitizedData)
        //    if (response?.message === 'Email was successfully sent!') setComplete(true)
        //    else setError('Email could not be sent. Please try again!')
        // } catch (err) {
        //     console.error('Error sending email from contact form: ', err || err?.message)
        //     setError('This form could not be sent. Please try again. ')
        // } finally {
        //     setLoading(false)
        // }
    }

    return (
        <form onSubmit={handleSubmit} className='contact-form'>
           <fieldset>
                <label>Name</label>
                <input name='name' type='text' />
            </fieldset>
            <fieldset>
                <label>Email</label>
                <input name='email' type='text' />
            </fieldset>
            <fieldset>
                <label>Message</label>
                <textarea autoComplete="off" name='message' type='text'  />
            </fieldset>
            <div className='error-wrapper'>
                <span>{error}</span>
            </div>
            <BaseButton content='SEND' />
        </form>
    )
}

function validateEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const isValid = regex.test(email.toLowerCase())
    return isValid;
}
