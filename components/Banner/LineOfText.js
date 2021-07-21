

export default function Line19({text, delay, indentation, containerStyle}){
    return (
        <div className={`animation-line animation-tabs-${1}`}>
            <Word word='for' color='one' />
            <Punctuation char='(' />
            <Word word='let' color='two' />
            <Punctuation char='i' />
            <Punctuation char='=' />
            <Punctuation char='0' />
            <Punctuation char=';' hasSpace={false}/>

            <Word word='from' color='one' />
            <Word word='"react"' color='three' />
        </div>
    )
}

function Word({word, color}){
    const wordArr = word.split("")
    return <div className='animated-word'>{wordArr.map((letter, index) => 
        <span className={`animation-${color} animated-letter`} key={index}>{letter}</span>)}</div>
}

function Punctuation({char, color='one', hasSpace=true}){
    return <span className={`animation-${color} animated-letter ${hasSpace && 'animated-word'}`}>{char}</span>
}