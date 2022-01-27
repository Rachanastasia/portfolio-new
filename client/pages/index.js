import Banner from '../components/Banner/index'
import {Fragment} from 'react'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Rachel Reilly | Software Engineer</title>
        <meta name="description" content="Rachel Reilly, Chicago based Software Engineer specializing in React" />
        <link rel="icon" href="assets/favicon.ico" />
      </Head>
      <Banner /> 
      </Fragment>
  )
}
