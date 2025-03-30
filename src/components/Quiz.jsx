// src/components/QuizModal.js
import React, { useState } from 'react';

const quizQuestions = [
  {
    question: 'Who directed the movie "Inception"?',
    options: ['Christopher Nolan', 'Quentin Tarantino', 'Steven Spielberg', 'Martin Scorsese'],
    answer: 'Christopher Nolan',
  },
  {
    question: 'Which movie won the Oscar for Best Picture in 1994?',
    options: ['The Shawshank Redemption', 'Forrest Gump', 'Pulp Fiction', 'The Lion King'],
    answer: 'Forrest Gump',
  },
  {
    question: 'Who played the character of Jack Dawson in Titanic?',
    options: ['Leonardo DiCaprio', 'Brad Pitt', 'Johnny Depp', 'Tom Hanks'],
    answer: 'Leonardo DiCaprio',
  },
  {
    question: 'Which movie features the character "Darth Vader"?',
    options: ['Star Wars', 'The Matrix', 'Avengers', 'Blade Runner'],
    answer: 'Star Wars',
  },
  {
    question: 'What is the highest-grossing film of all time?',
    options: ['Avatar', 'Avengers: Endgame', 'Titanic', 'The Lion King'],
    answer: 'Avatar',
  },
];

function QuizModal({ closeModal }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [bonus, setBonus] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    setSelectedAnswer('');
    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
      if (score === quizQuestions.length) {
        setBonus(true);
      }
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    setBonus(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#121212] p-6 rounded-lg max-w-lg w-full text-white shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Movie Quiz</h2>
          <button onClick={closeModal} className="text-xl font-bold text-red-500">
            X
          </button>
        </div>

        {!showResults ? (
          <div className="text-center">
            <h3 className="text-xl mb-4">{quizQuestions[currentQuestionIndex].question}</h3>
            <div className="flex flex-col gap-4">
              {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`${
                    selectedAnswer === option ? 'bg-blue-600' : 'bg-gray-800'
                  } text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300`}
                >
                  {option}
                </button>
              ))}
            </div>

            <button
              onClick={handleNextQuestion}
              className="mt-5 py-2 px-6 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
              disabled={!selectedAnswer}
            >
              Next
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl mb-4">
              You scored {score} out of {quizQuestions.length}!
            </h3>
            {bonus && (
              <h4 className="text-xl text-yellow-500 font-semibold mb-4">
                Congratulations! You completed the quiz perfectly! You've earned a BONUS!
              </h4>
            )}
            <button
              onClick={restartQuiz}
              className="py-2 px-6 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizModal;
