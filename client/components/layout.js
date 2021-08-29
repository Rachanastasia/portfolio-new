import Head from 'next/head'
import {PAGES} from '../utils/constants'
import Header from './Header'

const {DESCRIPTION, PATH, TITLE} = PAGES.DEFAULT

export default function Layout({
  description=DESCRIPTION, 
  title=TITLE, 
  path=PATH,
  contentWrapperClass='',
  children
}) {
  const contentWrapperClassName = contentWrapperClass + ' ' + 'content-wrapper'
  return (
    <div className='container'>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header path={path}/>
        <div className={contentWrapperClassName}>
          {children}
        </div>
      </main>
    </div>
  )
}

//content-wrapper === outer-wrapper