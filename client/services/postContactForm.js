export async function postContactForm({name, email, message}){
    try {
        console.log('TRYING THE CONTACT FORM')
        const response = await fetch(`${process.env.API_URL}/api/mail`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, message})
        })
        console.log('THIS ACTUALLY GOT A RESPONSE')
        const json  = await response.json()
        console.log('THIS IS THE JSON RESPONSE')
        return json
    } catch (error) {
        console.log('THIS DID NOT GO THROUGH!!!!!!')
        console.error('Error sending message: ', error?.message)
        return error
    } finally {
        console.log('THIS IS THE ENDDDDDDD')
    }
}