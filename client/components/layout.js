import Head from 'next/head'
const defaultDescription = "Rachel Reilly's portfolio website"

export default function Layout({description=defaultDescription, children}) {
  return (
    <div className='container'>
      <Head>
        <title>Rachel Reilly | Software Engineer</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {children}
      </main>
    </div>
  )
}
