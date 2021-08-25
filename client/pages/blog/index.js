import Layout from '../../components/layout'
import Blog from '../../components/Blog/index'


export default function BlogPage(){
    const pageTitle = "Rachel Reilly's Engineering Blog"
    const pageDescription = "View Rachel Reilly's engineering blog posts, originally posted on rachelrly.medium.com"
    //TODO: 
    //get blog posts from context
    //if no blog posts display error screen
    //else display blog posts
    return (
        <Layout title={pageTitle} description={pageDescription}>
            <Blog />
        </Layout>
    )
}