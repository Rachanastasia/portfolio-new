import BaseButton from './BaseButton'
import { postContactForm } from '../services/postContactForm'

export default function ContactForm(){
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
        postContactForm({name: 'test', email: 'test@gmail.com', message: 'test. test. <math><mi//xlink:href="data:x,<script>alert(4)</script>"><p>abc<iframe//src=jAva&Tab;script:alert(3)>def</p>'})
    }
    return (
        <form>
            <fieldset>
                <label>Name</label>
                <input />
            </fieldset>
            <fieldset>
                <label>Email</label>
                <input />
            </fieldset>
            <fieldset>
                <label>Message</label>
                <textarea />
            </fieldset>
            <BaseButton onClick={handleSubmit} />
        </form>
    )
}