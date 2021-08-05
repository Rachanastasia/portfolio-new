import Card from '../Card'

export default function BlogPost({content, title, link, datePosted}){
    const posted = 'Posted ' + datePosted
    return (
        <Card date={posted} title={title} links={[link]}>
            <BlogContent content={content}/>
        </Card>
    )
}

function BlogContent({content}){
    return <p>{content}</p>
}