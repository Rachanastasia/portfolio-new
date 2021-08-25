import Head from 'next/head'
import Header from './Header'

const DEFAULT_DESCRIPTION = "Rachel Reilly's portfolio website"
const DEFAULT_TITLE = "Rachel Reilly | Software Engineer"

export default function Layout({
  description=DEFAULT_DESCRIPTION, 
  title=DEFAULT_TITLE, 
  children
}) {
  return (
    <div className='container'>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {children}
        <Header />
      </main>
    </div>
  )
}
