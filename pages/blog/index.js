import Layout from '../../components/layout'
import Link from 'next/link'
import {HeaderTitle} from '../../components/Header'

export default function BlogPage(){
    return (
        <Layout>
            <div className='blog-temp-wrapper'>
            <div className='blog-temp-content-wrapper'>
                <h2>Coming soon...</h2>
                <span>until then, you can read the blog at <Link href='https://rachelrly.medium.com'>rachelrly.medium.com</Link></span>
            </div>
            <HeaderTitle />
            </div>
        </Layout>
    )
}