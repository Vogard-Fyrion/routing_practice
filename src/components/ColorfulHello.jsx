import React from 'react'
import { useParams } from 'react-router-dom'


const ColorfulHello = (props) => {
    const {word, color1, color2} = useParams()
    return (
        <h1 style={{color: color1, backgroundColor: color2}}>The word is: {word}</h1>
    )
}

export default ColorfulHello