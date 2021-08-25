import Layout from '../../components/layout'
import About from '../../components/About'


export default function AboutPage(){
    const pageTitle = 'About Rachel Reilly, Chicago Based Software Engineer'
    const pageDescription = "About Rachel Reilly, Chicago based software engineer"
    return (
        <Layout title={pageTitle} description={pageDescription}>
            <About />
        </Layout>
    )
}