import {PAGES} from '../../utils/constants'
import Layout from '../../components/layout'
import Projects from '../../components/Projects/index'


export default function ProjectsPage(){
    const {PROJECTS: {PATH}} = PAGES
    return (
        <Layout path={PATH} contentWrapperClass='projects-wrapper'>
            <Projects />
        </Layout>
    )
}