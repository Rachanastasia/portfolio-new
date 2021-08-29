/**the "Portrait" in ProjectCardPortrait refers to the orientation of the project's image*/
import Image from 'next/image'
import Links from './Links'
import Stack from './Stack'

export default function ProjectCardPortrait({title, images, description, stack, links, imageOptions={}}){
    const image = images[0]
    return (
        <section className='projects-wrapper'>
            <div className='portrait-top-wrapper content-width-wrapper'>
                <div>
                    <h3 className='section-title'>{title}</h3>
                    <p>{description}</p>
                </div>
                <Image src={image} {...imageOptions}/>
                <div className='links-stack-wrapper'>
                    <Links links={links} className='lg-vertical' buttonClassName='project-link'/>
                    <Stack stack={stack} className='lg-vertical'/>
                </div>
            </div>
        </section>
    )
}