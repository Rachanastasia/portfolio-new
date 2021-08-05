async function getMediumArticles(){
    try {
        const response = await fetch(process.env.API_URL)
        const json  = await response.json()
        return json
    } catch (error) {
        console.error('Error fetching Medium articles: ', error?.message)
    }
}

export async function getArticlesFromStorage(){
    const localStorage = window.sessionStorage
    const key = process.env.LOCAL_STORAGE_KEY
    const cachedArticleString = await localStorage.getItem(key) || []
    const cachedArticles = JSON.parse(cachedArticleString)
    return cachedArticles
}

async function setArticlesInStorage(articles){
    const localStorage = window.sessionStorage
    const key = process.env.LOCAL_STORAGE_KEY
    const stringifiedArticles = JSON.stringify(articles)
    await localStorage.setItem(key, stringifiedArticles)
}

export async function fetchArticlesAndSetInStorage(){
    const articles = await getMediumArticles()
    await setArticlesInStorage(articles)
    return articles
}