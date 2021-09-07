import { useEffect, useState } from 'react'
import {PAGES} from '../../utils/constants'
import Layout from '../../components/layout'
import Blog from '../../components/Blog/index'
import TempLoader from '../../components/TempLoader'
import BlogError from '../../components/Blog/BlogError'
import { getMediumArticles } from '../../services/getMediumArticles'

//TODO: Load more blog posts when user reaches bottom

export default function BlogPage(){
    const {BLOG: {TITLE, DESCRIPTION, PATH}} = PAGES
    const [blogPosts, setBlogPosts] = useState([])
    const hasPosts = blogPosts?.length
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        (async function(){
            try{
                const posts = await getMediumArticles()
                setBlogPosts(posts)
            } catch (error) {
                console.error('Error fetching blog posts', error?.message)
            } finally {
               if (loading) setLoading(false)
            }
            
        })()
    },[])

    return (
        <Layout title={TITLE} description={DESCRIPTION} path={PATH} contentWrapperClass='blog-wrapper'>
            {loading ? <TempLoader /> : 
                hasPosts ? <Blog blogPosts={blogPosts} /> :
                <BlogError />}
        </Layout>
    )
}