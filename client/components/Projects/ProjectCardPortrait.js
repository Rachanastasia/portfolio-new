/**the "Portrait" in ProjectCardPortrait refers to the orientation of the project's image*/
import Image from 'next/image'
import Links from './Links'
import Stack from './Stack'

export default function ProjectCardLandscape({title, photo, description, stack, links}){

    return (
        <section>
            <div>
                <div>
                    <h3>{title}</h3>
                    <Image src={photo}/>
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