import BlogPost from './BlogPost'

export default function BlogPosts({articles=[]}){
    console.log('THESE ARE MY ARTICLES', articles)
    const hasArticles = !!articles?.length
    return (
        <section>
            <h2 className='section-title'>Blog</h2>
            {hasArticles && articles.map(post => <BlogPost key={post.title} {...post} />)}
        </section>
    )
}