import Link from 'next/link'

export default function Card({children, title, link, date}){

    return (
        <article>
            <h3>{title}</h3>
            <span className='date-posted'>{date}</span>
            {children}
            <a href={link.href}>
                <span className='link-text'>{link.title}</span>
            </a>
        </article>
    )
}
/* <p> <h4> <image> format lists*/
