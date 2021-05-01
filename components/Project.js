import BaseButton from './BaseButton'

export default function Project({title, stack, description, images, links}){

    return(
        <div className='project-wrapper'>
            <div className='title-desc-wrapper'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            
            <ProjectStack stack={stack}/>
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
    return null
}

function ProjectLinks({links}){
    return (
        <div className='link-wrapper'>
            {links.map(({title, link}) => <BaseButton content={title} href={link} />)}
        </div>
    )
}