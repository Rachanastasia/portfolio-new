import BlogPost from './BlogPost'

export default function BlogPosts({blogPosts}){
    return (
        <section>
            <h2 className='section-title'>Blog</h2>
            {blogPosts.map(post => <BlogPost {...post} />)}
        </section>
    )
}