/**the "Landscape" in ProjectCardLandscape refers to the orientation of the project's image*/
import Image from 'next/image'
import Links from './Links'
import Stack from './Stack'

export default function ProjectCardLandscape({title, images, description, stack, links, imageOptions={}}){
    const image = images[0]
    return (
        <section>
            <div>
                <h3 className='section-title'>{title}</h3>
                <Stack stack={stack} />
            </div>
            <Image src={image} {...imageOptions} className='project-image project-image-landscape'/>
            <div className='link-p-wrapper'>
                <Links  links={links} className='lg-vertical' buttonClassName='project-link'/>
                <p>{description}</p>
            </div>
        </section>
    )
}
