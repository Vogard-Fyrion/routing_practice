import React from 'react'
import { useParams } from 'react-router-dom'


const Hello = (props) => {
    const {word} = useParams()
    let isNum = Number.isNaN(+word)
    return (
        <div>
            {
                isNum?
                <h1>The word is: {word}</h1>:
                <h1>The number is: {word}</h1>
            }
        </div>
    )
}

export default Hello

