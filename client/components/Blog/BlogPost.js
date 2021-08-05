import Card from '../Card'

export default function BlogPost({content, title, link, datePosted}){
    const posted = 'Posted ' + datePosted
    return (
        <Card date={posted} title={title} links={[link]}>
            {content}
        </Card>
    )
}