import Screen from '../../components/Screen'
import Link from 'next/link'


export default function BlogPage(){
    return (
        <Screen>
            <div className='blog-temp-content-wrapper'>
                <h2>Coming soon...</h2>
                <span>until then, you can read the blog at <Link href='https://rachelrly.medium.com'>rachelrly.medium.com</Link></span>
            </div>
        </Screen>
    )
}