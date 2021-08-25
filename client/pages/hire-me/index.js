import {PAGES} from '../../utils/constants'
import Layout from '../../components/layout'
import HireMe from '../../components/HireMe'


export default function HireMePage(){
    const {HIRE_ME: {TITLE, DESCRIPTION, PATH}} = PAGES
    return (
        <Layout title={TITLE} description={DESCRIPTION} path={PATH}>
            <HireMe />
        </Layout>
    )
}