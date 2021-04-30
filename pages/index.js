import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Rachel Reilly | Full Stack Developer</title>
        <meta name="description" content="Rachel Reilly's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
