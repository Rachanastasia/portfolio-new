export async function getMediumArticles(){
    try {
        const response = await fetch(process.env.DEV_API_URL)
        const json  = await response.json()
        return json
    } catch (error) {
        console.error('Error fetching Medium articles: ', error?.message)
    }

}