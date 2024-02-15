import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions , onDeleteQuestion }) {  

  const lis = questions.map((obj) => { 
    return <QuestionItem key={obj.id} onDeleteQuestion={onDeleteQuestion} question={obj}  />
  })


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{lis}</ul>
    </section>
  );
}

export default QuestionList;
