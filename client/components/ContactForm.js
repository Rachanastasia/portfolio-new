import {useState} from 'react'
import DOMPurify from 'dompurify'
import { postContactForm } from '../services/postContactForm'

export default function ContactForm(){
    const [error, setError] = useState('testing testing')

    const handleSubmit = (e) => {
        try{
            if (error) setError(null)
            e.preventDefault()

            const {name, email, message} = e.target
            const hasAllFields = name && email && message
            if (!hasAllFields){
                setError('Please enter all all fields')
                return null
            }
    
            const isValidEmail = validateEmail(email.value)
            if (!isValidEmail){
                setError('Please enter a valid email address')
                return null
            }
    
            const sanitizedData = {
                name: DOMPurify.sanitize(name.value),
                email: DOMPurify.sanitize(email.value),
                message: DOMPurify.sanitize(message.value)
            }
           postContactForm(sanitizedData)
           //TODO: display message on screen if successful
        } catch (err) {
            console.error('Error sending email from contact form: ', err || err?.message)
            setError(null)
        }
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
            <button  type='submit'>submit</button>
        </form>
    )
}

function validateEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const isValid = regex.test(email.toLowerCase())
    return isValid;
}
