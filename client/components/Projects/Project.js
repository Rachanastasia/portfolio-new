import Image from 'next/image'
import Card from '../Card'

export default function Project({title, stack, description, images, links=[], date}){
    const created = date ? ('Worked on ' + date) : undefined
    return(
        <Card title={title} links={links} date={created}>
            <ProjectStack stack={stack}/>
            <p>{description}</p>
            <ProjectImages images={images}/>
        </Card>
    )
}


function ProjectStack({stack}){
    return (
        <div className='stack-wrapper'>
            {stack.map(s => <span className='stack-item'>{s}</span>)}
        </div>
    )
}

function ProjectImages({images}){
    return <div>{images && images.map((image, index) => <Image layout='fill' src={image} key={index}/>)}</div>
}

