export default function Stack({stack, className=null}){
    const fullClassName = className ? `${className} stack-wrapper` : 'stack-wrapper'
    const stackJsx = stack.map(s => <li key={s}>
        <span>{s}</span>
        </li>)
    return(
        <ul className={fullClassName}>
            {stackJsx}
        </ul>
    )
}