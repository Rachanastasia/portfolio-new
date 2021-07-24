
export function Word({word, color, hasSpace=true}){
    const wordArr = word.split("")
    return <div className={hasSpace && 'animated-word'}>{wordArr.map((letter, index) => 
        <span className={`animation-${color} animated-letter`} key={index}>{letter}</span>)}</div>
}

export function Character({char, color='two', hasSpace=true}){
    return <span className={`animation-${color} animated-letter ${hasSpace && 'animated-word'}`}>{char}</span>
}

export function FullLine({tabs, children}){
    return (
        <div className={`animation-line animated-tabs-${tabs}`}>{children}</div>
    )
}