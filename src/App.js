import React from 'react';
import {data} from "./data.js"
import Questions from './Questions.js'

function App() {

  return (
  <div class="container">
    <div class="title">
      <h1>Questions And Answers About Login</h1>
    </div>
    <div class="question-tag">
      {
        data.map((question) => {
          return <Questions key={question.id} {...question}></Questions>
        })
      }
    </div>
  </div>
  );
}

export default App;