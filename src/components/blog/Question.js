
// // Question.js

// import React from 'react';

// const Question = ({ question, onAnswer }) => {
//   const handleOptionClick = (selectedAnswer) => {
//     // Pass selected answer to the parent component (EscapeRoomQuiz)
//     onAnswer(selectedAnswer);
//   };

//   return (
//     <div>
//       <h3>{question.question}</h3>
//       <ul>
//         {question.options.map((option, index) => (
//           <li key={index} onClick={() => handleOptionClick(option)}>
//             {option}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Question;
