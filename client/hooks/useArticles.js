import { useEffect, useState } from "react"
import { fetchArticlesAndSetInStorage, getArticlesFromStorage } from '../services/getMediumArticles'

export function useSetArticlesInStorage(){
    useEffect(fetchArticlesAndSetInStorage,[])
}

export function useGetArticlesFromStorage(){
    const [articles, setArticles] = useState(null)
    useEffect(()=>{
        getArticlesFromStorage().then(res => setArticles(res))
        .catch(error => console.error('Error setting articles', error?.message || error))
    }, [])

    if (articles) return articles
}



