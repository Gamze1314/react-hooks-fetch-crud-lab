import React,{ useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {  
    const [ questions, setQuestions ] = useState([]);

  // this component need access to the question data
  // make fetch request to display the questions 
  // state => questions , setQuestions will hold the data
  // data flow => parent to child

  //When child components update the state of their parent components in Effects, the data flow becomes very difficult to trace. Since both the child and the parent need the same data, let the parent component fetch that data, and pass it down to the child instead:

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((res) => res.json())
    .then((questionsArr) => setQuestions(questionsArr))
  }, [])

  console.log(questions) // state updated

function handleDeleteQuestion(id) {

  const updatedList = questions.filter(question => question.id !== id);
  setQuestions(updatedList)
}

  const lis = questions.map((obj) => { 
    return <QuestionItem key={obj.id} onDeleteQuestion={handleDeleteQuestion} question={obj}  />
  })


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{lis}</ul>
    </section>
  );
}

export default QuestionList;
