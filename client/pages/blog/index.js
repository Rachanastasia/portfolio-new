import { useEffect, useState } from 'react'
import {PAGES} from '../../utils/constants'
import Layout from '../../components/layout'
import Blog from '../../components/Blog/index'
import { getMediumArticles } from '../../services/getMediumArticles'

export default function BlogPage(){
    const {BLOG: {TITLE, DESCRIPTION, PATH}} = PAGES
    const [blogPosts, setBlogPosts] = useState([])
    //TODO: Set timeout. If there are no blog posts after x amount of time, display error screen from here
    //CONTROL ERROR SCREEN AT TOP LEVEL INSTEAD OF MOUNTING COMPONENTS!!!!
    useEffect(()=>{
        (async function(){
            const posts = await getMediumArticles()
            setBlogPosts(posts)
        })()
    },[])
    return (
        <Layout title={TITLE} description={DESCRIPTION} path={PATH} contentWrapperClass='blog-wrapper'>
            <Blog blogPosts={blogPosts} />
        </Layout>
    )
}