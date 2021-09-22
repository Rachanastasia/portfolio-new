import { useEffect, useState, createContext } from "react"
import { getMediumArticles } from '../services/getMediumArticles'

export const BlogContext = createContext()

export default function BlogContextProvider({children}){
    const [blogPosts, setBlogPosts] = useState([])

    useEffect(()=>{
        (async function(){
            try{
                const posts = await getMediumArticles()
                setBlogPosts(posts)
            } catch (error) {
                console.error('Error fetching blog posts', error?.message)
            }
        })()
    },[])

    const value = {blogPosts}

    return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
}