export async function getMediumArticles(){
    try {
        const response = await fetch(process.env.API_URL, {headers: {'Content-Type': 'application/json'}})
        const json  = await response.json()
        return json
    } catch (error) {
        console.error('Error fetching Medium articles: ', error?.message)
    }

}