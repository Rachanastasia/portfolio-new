import BaseButton from './BaseButton'
import Image from 'next/image'

export default function Project({title, stack, description, images, links}){

    return(
        <div className='project-wrapper'>
            <div className='title-desc-wrapper'>
                <h3>{title}</h3>
                <ProjectStack stack={stack}/>
            </div>
            <p>{description}</p>
            
            <ProjectImages images={images}/>
            <ProjectLinks links={links}/>
        </div>
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

function ProjectLinks({links}){
    return (
        <div className='link-wrapper'>
            {links.map(({title, link}) => <BaseButton content={title.toUpperCase()} href={link} />)}
        </div>
    )
}