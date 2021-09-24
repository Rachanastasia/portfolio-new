import { useContext} from 'react'
import {BlogContext} from '../../context/blogContext'
import {PAGES} from '../../utils/constants'
import Layout from '../../components/layout'
import Blog from '../../components/Blog/index'
import BlogError from '../../components/Blog/BlogError'

export default function BlogPage(){
    const {BLOG: {TITLE, DESCRIPTION, PATH}} = PAGES
    const {blogPosts} = useContext(BlogContext)
    const hasPosts = blogPosts?.length

    return (
        <Layout title={TITLE} description={DESCRIPTION} path={PATH} contentWrapperClass='blog-wrapper'>
            {hasPosts ? <Blog blogPosts={blogPosts} /> : <BlogError />}
        </Layout>
    )
}