import {Line19, Line20, Line21, Line22, Line24, Line23, Line26, Line25, Line28, Line29, LineClosingBracket} from "./LinesOfCode"

export default function Banner(){

    return (
        <div className='animated-container'>
            <div className='animated-codeblock'>
                <Line19 tabs={1} />
                <Line20 tabs={2} />
                <Line21 tabs={2} />
                <Line22 tabs={3} />
                <Line23 tabs={3} />
                <Line24 tabs={3} />
                <Line25 tabs={2} />
                <Line26 tabs={3} />
                <LineClosingBracket tabs={2} />
                <LineClosingBracket tabs={1} />
            </div>
        </div>
    )
}