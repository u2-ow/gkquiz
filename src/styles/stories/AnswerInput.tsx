import React from 'react'
import './AnswerInput.css'


export default function AnswerInput() {
  return (
    <form action="#" method='post' className='answerForm'>
        <input type="text" placeholder='Enterまたは改行で回答' className='answerInput' />
        <p>♡×5</p>
    </form>

  )
}