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
            <div className='link-p-wrapper project-content-wrapper'>
                <Image src={image} {...imageOptions} className='project-image project-image-landscape'/>
                <div className='link-p-wrapper '>
                    <Links  links={links} className='lg-vertical' buttonClassName='project-link'/>
                    <p>{description}</p>
                </div>
            </div>
        </section>
    )
}
