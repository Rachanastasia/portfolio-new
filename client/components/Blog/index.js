import BlogPost from './BlogPost'
import BlogError from './BlogError'

export default function BlogPosts({blogPosts}){
    const hasBlogPosts = blogPosts?.length
    return (
        <section className='blog-wrapper'>
            <h2 className='section-title'>Blog</h2>
            {hasBlogPosts ? 
                blogPosts.map(post => <BlogPost {...post} key={post.datePosted}/>) : 
                <BlogError />}
        </section>
    )
}