import React, { useState } from "react";

function QuestionItem({ question, onDelete, onUpdateCorrectAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  // State for managing the correct answer dropdown selection
  const [selectedIndex, setSelectedIndex] = useState(correctIndex);

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  // Handle updating the correct answer in state and on the server
  const handleUpdate = (event) => {
    const newCorrectIndex = parseInt(event.target.value);
    setSelectedIndex(newCorrectIndex);
    onUpdateCorrectAnswer(id, newCorrectIndex); // Update on the server
  };

  // Handle deleting the question
  const handleDelete = () => {
    onDelete(id); // Delete the question both in state and from the server
  };

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select value={selectedIndex} onChange={handleUpdate}>
          {options}
        </select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
