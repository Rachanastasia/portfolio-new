export async function postContactForm({name, email, message}){
    try {
        const response = await fetch(`${process.env.API_URL}/api/mail`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, message})
        })
        const json  = await response.json()
        return json
    } catch (error) {
        console.error('Error fetching Medium articles: ', error?.message)
    }
}