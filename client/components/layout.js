import { useEffect, useState } from 'react'
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
  const [dimensions, setDimensions] = useState({width: undefined, height: undefined})
  
  useEffect(()=>{
    function getDimensions(){
        const { innerWidth, innerHeight} = window
        setDimensions({width: innerWidth, height: innerHeight})
    }
    const getDimensionsEvent = getDimensions()
    window.addEventListener("resize", getDimensionsEvent)
    return () => window.removeEventListener("resize", getDimensionsEvent)
  },[])

  const isLandingPage = path === PATH
  const {width, height} = dimensions
  const isLargeScreen = width > 1200
  const showHireMeBanner = isLandingPage && isLargeScreen
  const largeScreenClass = 'content-with-banner'
  const contentWrapperClassName = contentWrapperClass + ' ' + 'content-wrapper'
  return (
    <div className='container'>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header path={path} dimensions={dimensions}/>
        <div className={contentWrapperClassName}>
          {children}
        </div>
        <footer>
          <span>Rachel Reilly | 2021</span>
        </footer>
      </main>
    </div>
  )
}

//content-wrapper === outer-wrapper