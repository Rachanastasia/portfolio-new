import { useEffect, useState } from "react"
import { getMediumArticles } from '../services/getMediumArticles'

export function useSetArticlesInStorage(){
    useEffect(fetchArticlesAndSetInStorage,[])
}

export function useGetArticlesFromStorage(){
    const [articles, setArticles] = useState(null)
    useEffect(()=>{
        // const cachedArticles = getArticlesFromStorage()
        // const 
        // const hasArticles = !!cachedArticles.length
        // if (hasArticles) return cachedArticles
        fetchArticlesAndSetInStorage().then(res => setArticles(res))
    }, [])

    if (articles) return articles
}

export async function getArticlesFromStorage(){
    const localStorage = window.localStorage
    const key = process.env.LOCAL_STORAGE_KEY
    const cachedArticleString = await localStorage.getItem(key) || []
    const cachedArticles = JSON.parse(cachedArticleString)
    return cachedArticles
}

async function setArticlesInStorage(articles){
    const localStorage = window.localStorage
    const key = process.env.LOCAL_STORAGE_KEY
    const stringifiedArticles = JSON.stringify(articles)
    await localStorage.setItem(key, stringifiedArticles)
}

async function fetchArticlesAndSetInStorage(){
    const articles = await getMediumArticles()
    await setArticlesInStorage(articles)
    return articles
}

