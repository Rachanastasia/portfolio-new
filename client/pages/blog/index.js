import {PAGES} from '../../utils/constants'
import Layout from '../../components/layout'
import Blog from '../../components/Blog/index'


export default function BlogPage(){
    const {BLOG: {TITLE, DESCRIPTION, PATH}} = PAGES
    //TODO: 
    //get blog posts from context
    //if no blog posts display error screen
    //else display blog posts
    return (
        <Layout title={TITLE} description={DESCRIPTION} path={PATH}>
            <Blog />
        </Layout>
    )
}