import {PAGES} from '../../utils/constants'
import Layout from '../../components/layout'
import Contact from '../../components/Contact'


export default function ContactPage(){
    const {CONTACT: {TITLE, DESCRIPTION, PATH}} = PAGES
    return (
        <Layout title={TITLE} description={DESCRIPTION} path={PATH}>
            <Contact />
        </Layout>
    )
}