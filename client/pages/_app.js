import '../styles/styles.sass'
import BlogContext from '../context/blogContext'

function MyApp({ Component, pageProps }) {
  return <BlogContext><Component {...pageProps} /></BlogContext>
}

export default MyApp
