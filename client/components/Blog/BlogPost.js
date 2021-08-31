import DOMPurify from 'dompurify'
import BlogCard from './BlogCard'

export default function BlogPost({content, title, link, datePosted}){
    const posted = 'Posted ' + datePosted
    const sanitizedData = () => ({
        __html: DOMPurify.sanitize(content)
    })
    return (
        <BlogCard date={posted} title={title} link={link}>
            <div className='post-body-wrapper' dangerouslySetInnerHTML={sanitizedData()}/>
        </BlogCard>
    )
}