import {PAGES} from '../../utils/constants'
import Layout from '../../components/layout'
import About from '../../components/About'



export default function AboutPage(){
    const {ABOUT: {TITLE, DESCRIPTION, PATH}} = PAGES
    return (
        <Layout title={TITLE} description={DESCRIPTION} path={PATH}>
            <About />
        </Layout>
    )
}