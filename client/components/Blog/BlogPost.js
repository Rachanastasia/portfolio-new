import DOMPurify from 'dompurify'
import Card from '../Card'

export default function BlogPost({content, title, link, datePosted}){
    const posted = 'Posted ' + datePosted
    const sanitizedData = () => ({
        __html: DOMPurify.sanitize(content)
    })
    return (
        <Card date={posted} title={title} link={link}>
            <div className='post-body-wrapper' dangerouslySetInnerHTML={sanitizedData()}/>
        </Card>
    )
}