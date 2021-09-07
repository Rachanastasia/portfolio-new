/**the "Landscape" in ProjectCardLandscape refers to the orientation of the project's image*/
import Image from 'next/image'
import Links from './Links'
import Stack from './Stack'

export default function ProjectCard({title, images, description, stack, links, imageOptions={}}){
    const image = images[0]
    return (
        <section className='project-wrapper'>
            <div className='title-stack-wrapper'>
                <h3 className='section-title'>{title}</h3>
                <Stack stack={stack} />
            </div>
            <div className='project-content-wrapper'>
                <div className='test-image-wrapper'>
                    <Image src={image} {...imageOptions} className='project-image project-image-landscape test-image-class' layout='fixed' />
                    <Links  links={links} className='lg-vertical' buttonClassName='project-link'/>
                </div>
                <p>{description}</p>           
            </div>
        </section>
    )
}
