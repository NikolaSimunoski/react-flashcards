import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
  {
    id: 6345,
    question:
      "What is the name of the lifecycle method that runs after the component is rendered?",
    answer: "componentDidMount",
  },
  {
    id: 8127,
    question:
      "Which hook is used to perform side effects in functional components?",
    answer: "useEffect",
  },
  {
    id: 4729,
    question:
      "What is the name of the object that holds the current state in a class component?",
    answer: "state",
  },
  {
    id: 5901,
    question: "How do you create a ref in a functional component?",
    answer: "useRef hook",
  },
  {
    id: 2648,
    question: "What do we call a function that returns a React element?",
    answer: "Functional component",
  },
  {
    id: 3754,
    question:
      "What is the term for updating only the part of the UI that has changed?",
    answer: "Reconciliation",
  },
  {
    id: 1582,
    question: "How do you prevent a component from re-rendering?",
    answer: "React.memo",
  },
  {
    id: 9943,
    question:
      "Which hook allows you to create a state that persists across renders?",
    answer: "useState",
  },
  {
    id: 6789,
    question: "How do you handle forms in React?",
    answer: "Controlled components",
  },
  {
    id: 5432,
    question: "What is the purpose of keys in React?",
    answer:
      "To help identify which items have changed, are added, or are removed",
  },
  {
    id: 3284,
    question:
      "What is the name of the library often used for managing global state in React applications?",
    answer: "Redux",
  },
  {
    id: 4930,
    question: "What is the purpose of the useContext hook?",
    answer: "To access the value of a context",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          // onClick={() => setSelectedId(question.id)}
          onClick={() => handleClick(question.id)}
          key={question.id}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
