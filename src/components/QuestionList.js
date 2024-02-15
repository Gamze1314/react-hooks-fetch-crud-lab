import React, { useEffect , useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [ questions, setQuestions ] = useState([])
  // this component need access to the question data
  // make fetch request to display the questions 
  // state => questions , setQuestions will hold the data

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((res) => res.json())
    .then((questionsArr) => setQuestions(questionsArr))
  }, [])

  console.log(questions) // state updated

  const lis = questions.map((obj) => { 
    return <QuestionItem key={obj.id} question={obj}/>
  })


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{lis}</ul>
    </section>
  );
}

export default QuestionList;
