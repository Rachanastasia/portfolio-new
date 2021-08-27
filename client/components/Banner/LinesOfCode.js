import { FullLine, Word, Character } from "./LinesWordsAndCharacters"
//DELETE IF NOT USED
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



export function Line19({tabs=1}){
    return (
       <FullLine tabs={tabs}>
            <Word word='for' color='three' />
            <Word word='( ' color='two' />
            <Character char='i' color='two'  />
            <Character char='=' color='one'/>
            <Character char='0' color='one'/>
            <Character char=';' hasSpace={false}/>
            <Character char='i' />
            <Word word='<=' color='one' />
            <Word word='input.' color='two' />
            <Word word='length' color='one' hasSpace={false}/>
            <Character char=';' hasSpace={false}/>
            <Character char='i' />
            <Word word='++' color='one' hasSpace={false}/>
            <Character char=')' hasSpace={false}/>
            <Character char='{'/>
        </FullLine>
    )
}

export function Line20({tabs=1}){
    return (
       <FullLine tabs={tabs}>
            <Word word='const' color='three' />
            <Word word='currentChar' color='two' />
            <Word word='=' color='one' />
            <Word word='input[i]?.' color='two' />
            <Word word='toLowerCase' color='four' hasSpace={false} />
            <Word word='( )' color='two' hasSpace={false}/>
        </FullLine>
    )
}

export function Line21({tabs=1}){
    return (
       <FullLine tabs={tabs}>
            <Word word='if' color='three' />
            <Character char='(' />
            <Word word='currentChar' color='two' />
            <Word word='===' color='one' />
            <Word word="' '" color='two' />
            <Word word='||' color='one' />
            <Word word='currentChar' color='two' />

            <Word word='===' color='one' />
            <Word word="'\n'" color='two' />
            <Character char=')' hasSpace={false}/>
            <Character char='{' />
        </FullLine>
    )
}
export function Line22({tabs}){
    return (
        <FullLine tabs={tabs}>
            <Word word='validateIngredientAndAddToDataIngredients' color='four' />
            <Word word=' ( )' color='two' hasSpace={false} />
        </FullLine>
    )
}
export function Line23({tabs}){
    return (
        <FullLine tabs={tabs}>
            <Word word='sortCurrentWord' color='four' />
            <Word word=' ( )' color='two' hasSpace={false} />
        </FullLine>
    )
}
export function Line24({tabs}){
    return (
        <FullLine tabs={tabs}>
            <Word word='currentWord' color='two' />
            <Character char='=' color='one'/>
            <Character char="' '"/>
        </FullLine>
    )
}

export function Line25({tabs}){
    return (
        <FullLine tabs={tabs}>
            <Character char='}' />
            <Word word='else' color='three' />
            <Character char='{' />
        </FullLine>
    )
}

export function Line26({tabs=1}){
    return (
       <FullLine tabs={tabs}>
            <Word word='currentWord' color='two' />
            <Character char='=' color='one' />
            <Word word='currentWord' color='two' />
            <Character char='+' color='one'/>
            <Word word='currentChar' color='two' />
        </FullLine>
    )
}

export function LineClosingBracket({tabs}){
    return <FullLine tabs={tabs}>
        <Character char={`}`}/>
    </FullLine>
}







