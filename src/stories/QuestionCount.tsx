import React from 'react'
import "./QuesionCount.css"

export default function QuestionCount() {
    const questionNumber = [1,2,3,4,5,6,7,8,9,10]
    return (
        <ul className='questionNumber'>
            {questionNumber.map((number) =>(
                <li className='questionNumberItem'>{number}</li>
            ))}
        </ul>
    )
}