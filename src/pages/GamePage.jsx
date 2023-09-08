import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import questions from '../questions.json'

export const GamePage = () => {
  const { category, dificulty } = useParams()
  console.log(category, dificulty)
  const filterQuestions = questions.filter(
    (q) => q.category === category && q.dificulty === dificulty
  )
  console.log(filterQuestions)
  // const questionsArray = filterQuestions.map((q) => q.preguntas)
  // console.log(questionsArray)
  return (
    <div>
      <h1>Game Page</h1>
      <div>
        {category} {dificulty}
      </div>

      <div className='container bg-white rounded-lg'>
        <div>
          {filterQuestions.map((item, index) => (
            <div key={index}>
              <h3>{item.category}</h3>
              {item.preguntas.map((pregunta, index) => (
                <div key={index}>
                  <p>{pregunta.question}</p>
                  
                  <p>Respuesta correcta: {pregunta.correct_answer}</p>
                  <p>
                    Respuestas incorrectas:{' '}
                    {pregunta.incorrect_answers.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
