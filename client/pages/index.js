import { useEffect } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner/index'
import Layout from '../components/layout'
import { getMediumArticles } from '../services/getMediumArticles'

export default function Home() {
//TODO: fetch articles from API, sanitize, set in state
  return (
    <Layout>
      <Banner />
    </Layout>
  )
}
