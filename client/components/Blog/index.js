import {Fragment} from 'react'
import BlogPost from './BlogPost'

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