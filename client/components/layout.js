import Head from 'next/head'
import {PAGES} from '../utils/constants'
import Header from './Header'

const {DESCRIPTION, PATH, TITLE} = PAGES.DEFAULT

export default function Layout({
  description=DESCRIPTION, 
  title=TITLE, 
  path=PATH,
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
        <Header path={path}/>
        {children}
      </main>
    </div>
  )
}
