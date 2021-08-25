import Layout from '../../components/layout'
import Contact from '../../components/Contact'


export default function ContactPage(){
    const pageTitle = 'Contact Rachel Reilly, Chicago Based Software Engineer'
    const pageDescription = "Contact Rachel Reilly, Chicago based software engineer"
    return (
        <Layout title={pageTitle} description={pageDescription}>
            <Contact />
        </Layout>
    )
}