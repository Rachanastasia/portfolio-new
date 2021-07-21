

export default function LineOfText({tabs=1}){
    return (
        <div className={`animation-line animated-tabs-${tabs}`}>
            <Word word='for' color='one' />
            <Character char='(' />
            <Word word='let' color='two' />
            <Character char='i' />
            <Character char='=' />
            <Character char='0' />
            <Character char=';' hasSpace={false}/>

            <Word word='from' color='one' />
            <Word word='"react"' color='three' />
        </div>
    )
}

function Line({tabs, children}){
    return (
        <div className={`animation-line animated-tabs-${tabs}`}>{children}</div>
    )
}

export function Line19({tabs=1}){
    return (
       <Line tabs={tabs}>
            <Word word='for' color='one' />
            <Word word='( ' color='one' />
            <Word word='let' color='two'  />
            <Character char='i' />
            <Character char='=' />
            <Character char='0' />
            <Character char=';' hasSpace={false}/>
            <Character char='i' />
            <Word word='<=' color='one' />
            <Word word='input.' color='one' />
            <Word word='length' color='one' hasSpace={false}/>
            <Character char=';' hasSpace={false}/>
            <Character char='i' />
            <Word word='++' color='one' hasSpace={false}/>
            <Character char=')' hasSpace={false}/>
            <Character char='{'/>
        </Line>
    )
}

export function Line20({tabs=1}){
    return (
       <Line tabs={tabs}>
            <Word word='for' color='one' />
            <Character char='(' />
            <Word word='let' color='two' />
            <Character char='i' />
            <Character char='=' />
            <Character char='0' />
            <Character char=';' hasSpace={false}/>

            <Word word='from' color='one' />
            <Word word='"react"' color='three' />
        </Line>
    )
}

export function Line21({tabs=1}){
    return (
       <Line tabs={tabs}>
            <Word word='for' color='one' />
            <Character char='(' />
            <Word word='let' color='two' />
            <Character char='i' />
            <Character char='=' />
            <Character char='0' />
            <Character char=';' hasSpace={false}/>

            <Word word='from' color='one' />
            <Word word='"react"' color='three' />
        </Line>
    )
}
export function Line22({tabs}){
    return (
        <Line tabs={tabs}>
            <Word word='validateIngredientAndAddToDataIngredients' color='two' />
            <Word word='( )' color='two' hasSpace={false} />
        </Line>
    )
}
export function Line23({tabs}){
    return (
        <Line tabs={tabs}>
            <Word word='sortCurrentWord' color='two' />
            <Word word='( )' color='two' hasSpace={false} />
        </Line>
    )
}
export function Line24({tabs}){
    return (
        <Line tabs={tabs}>
            <Word word='currentWord' color='two' />
            <Character char='=' />
            <Character char="''" />
        </Line>
    )
}

export function Line25({tabs}){
    return (
        <Line tabs={tabs}>
            <Character char='}' />
            <Word word='else' color='two' />
            <Character char='{' />
        </Line>
    )
}

export function Line26({tabs=1}){
    return (
       <Line tabs={tabs}>
            <Word word='currentWord' color='one' />
            <Character char='=' />
            <Word word='currentWord' color='two' />
            <Character char='+' />
            <Word word='currentChar' color='one' />
        </Line>
    )
}

export function LineClosingBracket({tabs}){
    return <Line tabs={tabs}>
        <Character char={`}`}/>
    </Line>
}








function Word({word, color, hasSpace=true}){
    const wordArr = word.split("")
    return <div className={hasSpace && 'animated-word'}>{wordArr.map((letter, index) => 
        <span className={`animation-${color} animated-letter`} key={index}>{letter}</span>)}</div>
}

function Character({char, color='one', hasSpace=true}){
    return <span className={`animation-${color} animated-letter ${hasSpace && 'animated-word'}`}>{char}</span>
}