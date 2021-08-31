import BaseButton from './BaseButton'


export default function ContactForm(){
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
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