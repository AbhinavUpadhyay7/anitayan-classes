import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { questions } from "../data/questions";
import { mockTests } from "../data/mockTests";

function MockTest() {
  const { id } = useParams();
  const navigate = useNavigate();

  const test = useMemo(
    () => mockTests.find((item) => item.id === id),
    [id]
  );

  const testQuestions = questions.slice(
    0,
    test?.questions || 25
  );

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [answers, setAnswers] = useState(
    Array(testQuestions.length).fill(null)
  );

  const [timeLeft, setTimeLeft] = useState(
    (test?.duration || 20) * 60
  );

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!test || submitted) {
      return;
    }

    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((previous) => previous - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, submitted, test]);

  if (!test) {
    return (
      <section className="section">
        <div className="container">
          <div className="empty-state">
            <div style={{ fontSize: "50px" }}>
              ❌
            </div>

            <h2>Test Not Found</h2>

            <p>
              यह mock test उपलब्ध नहीं है।
            </p>

            <div style={{ marginTop: "20px" }}>
              <Link
                to="/mock-tests"
                className="primary-btn"
              >
                ← Back to Mock Tests
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const question =
    testQuestions[currentQuestion];

  const selectedAnswer =
    answers[currentQuestion];

  const answeredCount = answers.filter(
    (answer) => answer !== null
  ).length;

  const unansweredCount =
    testQuestions.length - answeredCount;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;

  const selectAnswer = (optionIndex) => {
    if (submitted) {
      return;
    }

    setAnswers((previous) => {
      const updated = [...previous];

      updated[currentQuestion] = optionIndex;

      return updated;
    });
  };

  const goNext = () => {
    if (
      currentQuestion <
      testQuestions.length - 1
    ) {
      setCurrentQuestion(
        (previous) => previous + 1
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const goPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(
        (previous) => previous - 1
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  function handleSubmit() {
    if (submitted) {
      return;
    }

    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    answers.forEach((answer, index) => {
      if (answer === null) {
        unanswered++;
      } else if (
        answer === testQuestions[index].answer
      ) {
        correct++;
      } else {
        wrong++;
      }
    });

    const result = {
      testId: test.id,
      testTitle: test.title,
      exam: test.exam,
      totalQuestions: testQuestions.length,
      totalMarks: testQuestions.length,
      correct,
      wrong,
      unanswered,
      score: correct,
      percentage: Math.round(
        (correct / testQuestions.length) * 100
      ),
      answers,
      questions: testQuestions,
      submittedAt: new Date().toISOString(),
    };

    localStorage.setItem(
      `mock-test-result-${test.id}`,
      JSON.stringify(result)
    );

    setSubmitted(true);

    navigate(
      `/mock-tests/${test.id}/result`
    );
  };

  return (
    <section className="mock-test-page">
      <div className="container">
        {/* Header */}
        <div className="test-page-header">
          <div>
            <Link
              to="/mock-tests"
              className="back-link"
            >
              ← All Mock Tests
            </Link>

            <div className="test-page-title">
              <span className="test-page-icon">
                {test.icon}
              </span>

              <div>
                <span className="test-page-exam">
                  {test.exam}
                </span>

                <h1>{test.shortTitle}</h1>
              </div>
            </div>
          </div>

          <div
            className={
              timeLeft <= 60
                ? "test-timer danger"
                : "test-timer"
            }
          >
            <span>⏱</span>

            <div>
              <small>Time Left</small>
              <strong>{formattedTime}</strong>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="test-progress-wrapper">
          <div className="test-progress-info">
            <span>
              Question{" "}
              <strong>
                {currentQuestion + 1}
              </strong>{" "}
              of {testQuestions.length}
            </span>

            <span>
              Answered{" "}
              <strong>{answeredCount}</strong> /{" "}
              {testQuestions.length}
            </span>
          </div>

          <div className="test-progress-bar">
            <span
              style={{
                width: `${
                  ((currentQuestion + 1) /
                    testQuestions.length) *
                  100
                }%`,
              }}
            />
          </div>
        </div>

        {/* Main Test Layout */}
        <div className="test-layout">
          {/* Question */}
          <div className="question-card">
            <div className="question-number">
              Question {currentQuestion + 1}
            </div>

            <h2>{question.question}</h2>

            <div className="options-list">
              {question.options.map(
                (option, index) => {
                  const isSelected =
                    selectedAnswer === index;

                  return (
                    <button
                      key={option}
                      className={
                        isSelected
                          ? "test-option selected"
                          : "test-option"
                      }
                      onClick={() =>
                        selectAnswer(index)
                      }
                    >
                      <span className="option-letter">
                        {String.fromCharCode(
                          65 + index
                        )}
                      </span>

                      <span className="option-text">
                        {option}
                      </span>

                      {isSelected && (
                        <span className="option-check">
                          ✓
                        </span>
                      )}
                    </button>
                  );
                }
              )}
            </div>

            {/* Navigation */}
            <div className="question-navigation">
              <button
                className="secondary-btn"
                onClick={goPrevious}
                disabled={currentQuestion === 0}
              >
                ← Previous
              </button>

              {currentQuestion ===
              testQuestions.length - 1 ? (
                <button
                  className="submit-test-btn"
                  onClick={handleSubmit}
                >
                  Submit Test ✓
                </button>
              ) : (
                <button
                  className="primary-btn"
                  onClick={goNext}
                >
                  Next →
                </button>
              )}
            </div>
          </div>

          {/* Question Palette */}
          <aside className="question-palette">
            <div className="palette-header">
              <h3>Questions</h3>

              <span>
                {answeredCount}/
                {testQuestions.length}
              </span>
            </div>

            <div className="palette-grid">
              {testQuestions.map(
                (item, index) => {
                  const answered =
                    answers[index] !== null;

                  const current =
                    currentQuestion === index;

                  return (
                    <button
                      key={item.id}
                      className={[
                        "palette-number",
                        answered
                          ? "answered"
                          : "",
                        current
                          ? "current"
                          : "",
                      ].join(" ")}
                      onClick={() =>
                        setCurrentQuestion(index)
                      }
                    >
                      {index + 1}
                    </button>
                  );
                }
              )}
            </div>

            <div className="palette-legend">
              <div>
                <span className="legend-dot answered" />
                Answered
              </div>

              <div>
                <span className="legend-dot unanswered" />
                Unanswered
              </div>

              <div>
                <span className="legend-dot current" />
                Current
              </div>
            </div>

            <div className="palette-summary">
              <div>
                <strong>
                  {answeredCount}
                </strong>
                <span>Answered</span>
              </div>

              <div>
                <strong>
                  {unansweredCount}
                </strong>
                <span>Remaining</span>
              </div>
            </div>

            <button
              className="palette-submit"
              onClick={handleSubmit}
            >
              Submit Test
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default MockTest;