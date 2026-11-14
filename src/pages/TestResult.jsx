import { useEffect, useState } from "react";
import {
  Link,
  useParams,
} from "react-router-dom";

function TestResult() {
  const { id } = useParams();

  const [result, setResult] = useState(null);

  const [showAnswers, setShowAnswers] =
    useState(true);

  useEffect(() => {
    const savedResult = localStorage.getItem(
      `mock-test-result-${id}`
    );

    if (savedResult) {
      setResult(JSON.parse(savedResult));
    }
  }, [id]);

  if (!result) {
    return (
      <section className="section">
        <div className="container">
          <div className="empty-state">
            <div style={{ fontSize: "50px" }}>
              📊
            </div>

            <h2>Result Not Available</h2>

            <p>
              इस test का result अभी उपलब्ध नहीं है।
            </p>

            <div style={{ marginTop: "20px" }}>
              <Link
                to="/mock-tests"
                className="primary-btn"
              >
                ← Mock Tests पर जाएँ
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="result-page">
      <div className="container">
        {/* Result Header */}
        <div className="result-header">
          <div className="result-success-icon">
            🎉
          </div>

          <span className="section-label">
            TEST COMPLETED
          </span>

          <h1>Great Job!</h1>

          <p>
            आपने{" "}
            <strong>{result.testTitle}</strong>{" "}
            successfully complete किया।
          </p>
        </div>

        {/* Score Card */}
        <div className="score-card">
          <div className="score-main">
            <span>Your Score</span>

            <strong>
              {result.score}
              <small>
                / {result.totalQuestions}
              </small>
            </strong>

            <b>{result.percentage}%</b>
          </div>

          <div className="score-stats">
            <div className="result-stat correct">
              <span className="result-stat-icon">
                ✓
              </span>

              <div>
                <strong>
                  {result.correct}
                </strong>

                <span>Correct</span>
              </div>
            </div>

            <div className="result-stat wrong">
              <span className="result-stat-icon">
                ✕
              </span>

              <div>
                <strong>
                  {result.wrong}
                </strong>

                <span>Wrong</span>
              </div>
            </div>

            <div className="result-stat skipped">
              <span className="result-stat-icon">
                −
              </span>

              <div>
                <strong>
                  {result.unanswered}
                </strong>

                <span>Unattempted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="result-actions">
          <Link
            to="/mock-tests"
            className="secondary-btn"
          >
            ← All Mock Tests
          </Link>

          <Link
            to={`/mock-tests/${id}`}
            className="primary-btn"
          >
            Try Again ↻
          </Link>

          <button
            className="secondary-btn"
            onClick={() =>
              setShowAnswers(!showAnswers)
            }
          >
            {showAnswers
              ? "Hide Answers"
              : "Review Answers"}
          </button>
        </div>

        {/* Review */}
        {showAnswers && (
          <div className="review-section">
            <div className="review-heading">
              <div>
                <span className="section-label">
                  ANSWER REVIEW
                </span>

                <h2>
                  Check Your Answers
                </h2>
              </div>

              <span className="review-count">
                {result.totalQuestions} Questions
              </span>
            </div>

            <div className="review-list">
              {result.questions.map(
                (question, index) => {
                  const userAnswer =
                    result.answers[index];

                  const correctAnswer =
                    question.answer;

                  const isCorrect =
                    userAnswer ===
                    correctAnswer;

                  const isSkipped =
                    userAnswer === null;

                  return (
                    <article
                      key={question.id}
                      className="review-card"
                    >
                      <div className="review-card-top">
                        <span className="review-question-number">
                          Q{index + 1}
                        </span>

                        {isSkipped ? (
                          <span className="review-status skipped">
                            Not Attempted
                          </span>
                        ) : isCorrect ? (
                          <span className="review-status correct">
                            ✓ Correct
                          </span>
                        ) : (
                          <span className="review-status wrong">
                            ✕ Wrong
                          </span>
                        )}
                      </div>

                      <h3>
                        {question.question}
                      </h3>

                      <div className="review-options">
                        {question.options.map(
                          (option, optionIndex) => {
                            const isCorrectOption =
                              optionIndex ===
                              correctAnswer;

                            const isUserOption =
                              optionIndex ===
                              userAnswer;

                            let optionClass =
                              "review-option";

                            if (
                              isCorrectOption
                            ) {
                              optionClass +=
                                " correct";
                            }

                            if (
                              isUserOption &&
                              !isCorrectOption
                            ) {
                              optionClass +=
                                " wrong";
                            }

                            return (
                              <div
                                key={option}
                                className={
                                  optionClass
                                }
                              >
                                <span>
                                  {String.fromCharCode(
                                    65 +
                                      optionIndex
                                  )}
                                </span>

                                <p>
                                  {option}
                                </p>

                                {isCorrectOption && (
                                  <b>
                                    Correct Answer
                                  </b>
                                )}

                                {isUserOption &&
                                  !isCorrectOption && (
                                    <b>
                                      Your Answer
                                    </b>
                                  )}
                              </div>
                            );
                          }
                        )}
                      </div>

                      <div className="explanation">
                        <strong>
                          💡 Explanation
                        </strong>

                        <p>
                          {question.explanation}
                        </p>
                      </div>
                    </article>
                  );
                }
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default TestResult;