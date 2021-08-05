import BlogPost from './BlogPost'

export default function BlogPosts({articles=[]}){
    return (
        <section>
            <h2 className='section-title'>Blog</h2>
            {[].map(post => <BlogPost {...post} />)}
        </section>
    )
}