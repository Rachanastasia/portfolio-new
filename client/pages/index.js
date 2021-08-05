import Header from '../components/Header'
import Layout from '../components/layout'
import { useSetArticlesInStorage } from '../hooks/useFetchMediumArticles'


export default function Home() {
  useSetArticlesInStorage()
  return (
    <Layout>
        <Header />
    </Layout>
  )
}
