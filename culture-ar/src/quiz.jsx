import React, { useState } from "react";
import "./Quiz.css";
import BackButton from "./backbutton";

const questions = [
  {
    question: "In which city is Hawa Mahal located?",
    options: ["Delhi", "Jaipur", "Mumbai", "Agra"],
    answer: "Jaipur",
  },
  {
    question: "In which city is the Taj Mahal located?",
    options: ["Agra", "Jaipur", "Delhi", "Lucknow"],
    answer: "Agra",
  },
  {
    question: "In which state is the Brihadishwar Temple located?",
    options: ["Gujarat", "Tamil Nadu", "Kerala", "Punjab"],
    answer: "Tamil Nadu",
  },
  {
    question: "In which state is the Modhera Sun Temple located?",
    options: ["Gujarat", "Rajasthan", "Madhya Pradesh", "Odisha"],
    answer: "Gujarat",
  },
  {
    question: "In which state is Bekal Fort located?",
    options: ["Kerala", "Punjab", "West Bengal", "Rajasthan"],
    answer: "Kerala",
  },
  {
    question: "Ghoomar is a famous traditional dance of which state?",
    options: ["Rajasthan", "Kerala", "Assam", "Gujarat"],
    answer: "Rajasthan",
  },
  {
    question: "In which state is the Pushkar Fair held?",
    options: ["Rajasthan", "Punjab", "Bihar", "Goa"],
    answer: "Rajasthan",
  },
  {
    question: "Dal Baati Churma is a famous food of which state?",
    options: ["Rajasthan", "Tamil Nadu", "Kerala", "Punjab"],
    answer: "Rajasthan",
  },
  {
    question: "In which state are the Bishnupur Temples located?",
    options: ["West Bengal", "Gujarat", "Maharashtra", "Karnataka"],
    answer: "West Bengal",
  },
  {
    question: "What is the Sheesh Mahal famous for?",
    options: [
      "Mirror work",
      "Wood carving",
      "Stone wheels",
      "Terracotta pots",
    ],
    answer: "Mirror work",
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [answerChecked, setAnswerChecked] = useState(false);

  const handleAnswer = (option) => {
    // Answer already checked, so don't allow another selection
    if (answerChecked) return;

    setSelectedAnswer(option);
    setAnswerChecked(true);

    // Add score immediately if answer is correct
    if (option === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNext = () => {
    if (!answerChecked) return;

    if (currentQuestion === questions.length - 1) {
      setQuizFinished(true);
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedAnswer("");
      setAnswerChecked(false);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setQuizFinished(false);
    setAnswerChecked(false);
  };

  if (quizFinished) {
    return (
      <div className="quiz-page">
        <BackButton />

        <div className="quiz-result">
          <div className="result-icon">🏆</div>

          <h1>Quiz Completed!</h1>

          <p className="score-text">Your Score</p>

          <div className="score">
            {score} / {questions.length}
          </div>

          <p className="result-message">
            {score >= 8
              ? "Excellent! You are a Heritage Expert! 🎉"
              : score >= 5
              ? "Good job! Keep exploring Indian culture! 🌏"
              : "Keep learning and explore more heritage! 📚"}
          </p>

          <button className="restart-btn" onClick={restartQuiz}>
            🔄 Play Again
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="quiz-page">
      {/* BACK BUTTON - TOP LEFT */}
      <button
        className="page-back-btn"
        type="button"
        onClick={() => window.history.back()}
      >
        ← Back
      </button>

      <div className="quiz-container">
        <div className="quiz-header">
          <p>✦ CULTURE EXPLORER QUIZ</p>

          <h1>Indian Heritage Quiz</h1>

          <div className="progress-info">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>

        <div className="question-card">
          <h2>{question.question}</h2>

          <div className="options">
            {question.options.map((option, index) => {
              const isCorrect = option === question.answer;
              const isSelected = option === selectedAnswer;
              const isWrong = isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  className={`option ${
                    answerChecked && isCorrect ? "correct" : ""
                  } ${answerChecked && isWrong ? "wrong" : ""} ${
                    !answerChecked && isSelected ? "selected" : ""
                  }`}
                  onClick={() => handleAnswer(option)}
                  disabled={answerChecked}
                >
                  <span>{String.fromCharCode(65 + index)}</span>

                  {option}

                  {answerChecked && isCorrect && (
                    <span className="answer-icon">✓</span>
                  )}

                  {answerChecked && isWrong && (
                    <span className="answer-icon">✕</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* ANSWER FEEDBACK */}
          {answerChecked && (
            <div
              className={`answer-feedback ${
                selectedAnswer === question.answer
                  ? "correct-feedback"
                  : "wrong-feedback"
              }`}
            >
              {selectedAnswer === question.answer ? (
                <p>✓ Correct! Well done! 🎉</p>
              ) : (
                <p>
                  ✕ Wrong answer. The correct answer is{" "}
                  <strong>{question.answer}</strong>.
                </p>
              )}
            </div>
          )}

          <button
            className="next-btn"
            onClick={handleNext}
            disabled={!answerChecked}
          >
            {currentQuestion === questions.length - 1
              ? "Finish Quiz 🏆"
              : "Next Question →"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;