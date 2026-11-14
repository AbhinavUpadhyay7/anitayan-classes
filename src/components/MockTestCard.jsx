import { Link } from "react-router-dom";

function MockTestCard({ test }) {
  return (
    <article className="mock-test-card">
      <div className="mock-test-card-top">
        <div className="mock-test-icon">
          {test.icon}
        </div>

        <span
          className={`difficulty-badge ${test.difficulty.toLowerCase()}`}
        >
          {test.difficulty}
        </span>
      </div>

      <div className="mock-test-card-body">
        <span className="mock-test-exam">
          {test.exam}
        </span>

        <h3>{test.shortTitle}</h3>

        <p>{test.description}</p>

        <div className="mock-test-info">
          <div>
            <strong>{test.questions}</strong>
            <span>Questions</span>
          </div>

          <div>
            <strong>{test.marks}</strong>
            <span>Marks</span>
          </div>

          <div>
            <strong>{test.duration}</strong>
            <span>Minutes</span>
          </div>
        </div>

        <Link
          to={`/mock-tests/${test.id}`}
          className="mock-test-start-btn"
        >
          Start Test
          <span>→</span>
        </Link>
      </div>
    </article>
  );
}

export default MockTestCard;