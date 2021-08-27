import { useEffect, useState } from 'react'
import {PAGES} from '../../utils/constants'
import Layout from '../../components/layout'
import Blog from '../../components/Blog/index'
import { getMediumArticles } from '../../services/getMediumArticles'

export default function BlogPage(){
    const {BLOG: {TITLE, DESCRIPTION, PATH}} = PAGES
    const [blogPosts, setBlogPosts] = useState([])
    useEffect(()=>{
        (async function(){
            const posts = await getMediumArticles()
            setBlogPosts(posts)
        })()
    },[])
    return (
        <Layout title={TITLE} description={DESCRIPTION} path={PATH}>
            <Blog blogPosts={blogPosts} />
        </Layout>
    )
}