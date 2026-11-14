import { Link } from "react-router-dom";

function ExamCard({ exam }) {
  return (
    <article className="exam-card">

      {/* Top */}

      <div className="exam-card-top">

        <div className="exam-icon">
          {exam.icon}
        </div>

        <span className="exam-status">
          ✓ {exam.status}
        </span>

      </div>


      {/* Category */}

      <div className="exam-category">
        {exam.category}
      </div>


      {/* Title */}

      <h3>
        {exam.title}
      </h3>


      {/* Description */}

      <p className="exam-description">
        {exam.description}
      </p>


      {/* Information */}

      <div className="exam-info">

        <div>
          <span>📍</span>
          {exam.level}
        </div>

        <div>
          <span>🌐</span>
          {exam.language}
        </div>

      </div>


      {/* Resources */}

      <div className="exam-resources">

        <div>
          <strong>
            {exam.mockTests}
          </strong>

          <span>
            Mock Tests
          </span>
        </div>

        <div>
          <strong>
            {exam.notes ? "✓" : "—"}
          </strong>

          <span>
            Notes
          </span>
        </div>

        <div>
          <strong>
            {exam.classes ? "✓" : "—"}
          </strong>

          <span>
            Classes
          </span>
        </div>

      </div>


      {/* Button */}

      <Link
        to={`/exams/${exam.id}`}
        className="exam-details-btn"
      >
        Explore Exam
        <span>→</span>
      </Link>

    </article>
  );
}

export default ExamCard;