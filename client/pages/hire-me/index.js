import Layout from '../../components/layout'
import Hire from '../../components/Hire'


export default function HireMePage(){
    const pageTitle = 'Hire Rachel Reilly, Chicago Based Software Engineer'
    const pageDescription = "Hire Rachel Reilly, Chicago based software engineer"
    return (
        <Layout title={pageTitle} description={pageDescription}>
            <Hire />
        </Layout>
    )
}