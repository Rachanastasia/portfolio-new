export default function BlogCard({children, title, link, date}){

    return (
        <section>
            <div className='blog-post-wrapper '>
                <h3>{title}</h3>
                <span className='date-posted'>{date}</span>
                {children}
                <a href={link.href} className='link-tag'>
                    <span className='link-text'>{link.title}</span>
                </a>
            </div>
        </section>
    )
}