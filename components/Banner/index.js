import LineOfText from "./LineOfText"

export default function Banner(){

    return (
        <div>
            <div className='animated-codeblock'>
                <LineOfText tabs={1} color='red' />
                <LineOfText tabs={5} color='green'/>
                <LineOfText tabs={1} color='pink'/>
                <LineOfText tabs={2} color='black'/>
                <LineOfText tabs={1} color='#fff'/>
            </div>
            <div className='animated-codeblock'>
                <LineOfText tabs={1} color='red' />
                <LineOfText tabs={5} color='green'/>
                <LineOfText tabs={1} color='pink'/>
                <LineOfText tabs={2} color='black'/>
                <LineOfText tabs={1} color='#fff'/>
            </div>
            <div className='animated-codeblock'>
                <LineOfText tabs={1} color='red' />
                <LineOfText tabs={5} color='green'/>
                <LineOfText tabs={1} color='pink'/>
                <LineOfText tabs={2} color='black'/>
                <LineOfText tabs={1} color='#fff'/>
            </div>
        </div>
    )
}