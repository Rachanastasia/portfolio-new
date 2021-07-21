import LineOfText from "./LineOfText"

export default function Banner(){

    return (
        <div>
            <LineOfText text='import React from "react"' color='red' />
            <LineOfText text='import React from "react"' color='green'/>
            <LineOfText text='import React from "react"' color='pink'/>
            <LineOfText text='import React from "react"' color='black'/>
            <LineOfText text='import React from "react"' color='#fff'/>
        </div>
    )
}