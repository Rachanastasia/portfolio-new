import {BaseButtonLink} from "../BaseButton"

export default function Links({links, className=null, buttonClassName=null}){
    const fullClassName = className ? `${className} links-wrapper` : 'links-wrapper'
    const linksJsx = links.map(({title, href}) => <li key={href}>
        <BaseButtonLink content={title} url={href} className={buttonClassName}/>
        </li>)
    return (
        <ul className={fullClassName}>
            {linksJsx}
        </ul>
    )
}