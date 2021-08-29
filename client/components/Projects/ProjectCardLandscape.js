/**the "Landscape" in ProjectCardLandscape refers to the orientation of the project's image*/
import Image from 'next/image'
import Links from './Links'
import Stack from './Stack'

export default function ProjectCardLandscape({title, images, description, stack, links, imageOptions={}}){
    const image = images[0]
    return (
        <section>
            <div className='landscape-top-wrapper content-width-wrapper'>
                <div className='landscape-title-image-wrapper'>
                    <h3 className='section-title'>{title}</h3>
                    <Image src={image} {...imageOptions} className='project-image project-image-landscape'/>
                </div>
                <Stack stack={stack} className='lg-vertical' />
            </div>
            <div className='landscape-bottom-wrapper content-width-wrapper'>
                <Links  links={links} className='lg-vertical' buttonClassName='project-link'/>
                <p>{description}</p>
            </div>
        </section>
    )
}
