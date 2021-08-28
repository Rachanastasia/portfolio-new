/**the "Landscape" in ProjectCardLandscape refers to the orientation of the project's image*/
import Image from 'next/image'
import Links from './Links'
import Stack from './Stack'

export default function ProjectCardLandscape({title, images, description, stack, links}){
    console.log('THIS IS FROM CARD',images, title)
    const image = images[0]
    return (
        <section>
            <div className='landscape-top-wrapper'>
                <div className='landscape-title-image-wraper'>
                    <h3>{title}</h3>
                    <Image src={image}/>
                </div>
                <Stack stack={stack} className='lg-vertical' />
            </div>
            <div className='landscape-bottom-wrapper'>
                <Links  links={links} className='lg-vertical' buttonClassName='project-link'/>
                <p>{description}</p>
            </div>
        </section>
    )
}
