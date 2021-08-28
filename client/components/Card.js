export default function Card({children, title, link, date}){

    return (
        <article>
            <h3>{title}</h3>
            <span className='date-posted'>{date}</span>
            {children}
            <a href={link.href} className='link-tag'>
                <span className='link-text'>{link.title}</span>
            </a>
        </article>
    )
}