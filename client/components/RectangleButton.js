import Link from 'next/link'

export default function RectangleButton({content, onClick, className}){
    const fullClassName = 'rectangle-button ' + className
    return (
        <button className={fullClassName} onClick={onClick}>
            {content}
        </button>
    )
}

export function RectangleButtonLink({content, url, className}){
    const fullClassName = 'rectangle-button ' + className
    return (
        <Link href={url}>
            <button className={fullClassName}>{content}</button>
        </Link>
    )
}