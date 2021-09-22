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
        <div className='large-screen-wrapper'>
          <div className={contentWrapperClassName}>
            {children}
          </div>
        </div>
        <footer>
          <span>Designed and Built by Rachel Reilly | 2021</span>
        </footer>
      </main>
    </div>
  )
}