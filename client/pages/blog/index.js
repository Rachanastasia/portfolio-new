import Layout from '../../components/layout'
import Blog from '../../components/Blog/index'
import { useGetArticlesFromStorage } from '../../hooks/useFetchMediumArticles'

export default function BlogPage(){
    const articles = useGetArticlesFromStorage()
    return (
        <Layout>
            <Blog articles={articles} />
        </Layout>
    )
}