import {Fragment} from 'react'
import BlogPost from './BlogPost'
import BlogError from './BlogError'

//TODO: Extract error screen to parent component level
export default function BlogPosts({blogPosts}){
    const hasBlogPosts = blogPosts?.length
    return (
        <Fragment>
            {hasBlogPosts ? 
                blogPosts.map(post => <BlogPost {...post} key={post.datePosted}/>) : 
                <BlogError />}
        </Fragment>
    )
}