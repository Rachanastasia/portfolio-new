/**the "Landscape" in ProjectCardLandscape refers to the orientation of the project's image*/
import Image from 'next/image'
import Links from './Links'
import Stack from './Stack'

export default function ProjectCardLandscape({title, image, description, stack, links}){

    return (
        <section>
            <div>
                <div>
                    <h3>{title}</h3>
                    <Image src={image}/>
                </div>
                <Stack stack={stack} className='lg-vertical' />
            </div>
            <div>
                <Links  links={links} className='lg-horizontal'/>
                <p>{description}</p>
            </div>
        </section>
    )
}
