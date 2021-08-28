/**the "Portrait" in ProjectCardPortrait refers to the orientation of the project's image*/
import Image from 'next/image'
import Links from './Links'
import Stack from './Stack'

export default function ProjectCardPortrait({title, images, description, stack, links}){
    const image = images[0]
    return (
        <section>
            <div>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div>
                    <Links links={links} className='lg-vertical'/>
                    <Stack stack={stack} className='lg-vertical'/>
                </div>
            </div>
            <Image src={image}/>
        </section>
    )
}