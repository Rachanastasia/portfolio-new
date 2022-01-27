import Main from '../components/Home/index'
import {Fragment} from 'react'
import Head from 'next/head'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Rachel Reilly | Software Engineer</title>
        <meta name="description" content="Rachel Reilly, Chicago based Software Engineer specializing in React" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Main /> 
      </Fragment>
  )
}
