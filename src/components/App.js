import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
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

function handleDeleteQuestion(q) {
  setQuestions(prevQuestions => {
    // Create a new array that removes the deleted question from the list
    const updatedList = prevQuestions.filter(question => question.id !== q.id);
    // Return the updated list as the new state value
    return updatedList;
  });
}
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm  setQuestions={setQuestions} /> : <QuestionList questions={questions} onDeleteQuestion={handleDeleteQuestion}  />}
    </main>
  );
}

export default App;
