import { useEffect } from 'react'
import Header from '../components/Header'
import Layout from '../components/layout'
import { getMediumArticles } from '../services/getMediumArticles'

export default function Home() {
  useEffect(()=>{
    const articles = getMediumArticles().then(r => console.log('FROM THE MAIN COMPONENT', r))

  },[])
  return (
    <Layout>
        <Header />
    </Layout>
  )
}
