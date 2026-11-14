import { Link, useParams } from "react-router-dom";
import exams from "../data/exams";

function ExamDetails() {
  const { id } = useParams();

  const exam = exams.find(
    (item) => item.id === id
  );

  // Exam नहीं मिला
  if (!exam) {
    return (
      <section className="section">
        <div className="container">
          <div className="exam-not-found">
            <div className="not-found-icon">
              🔍
            </div>

            <h1>
              Exam Not Found
            </h1>

            <p>
              जिस exam को आप ढूंढ रहे हैं
              वह उपलब्ध नहीं है।
            </p>

            <Link
              to="/exams"
              className="primary-btn"
            >
              ← Back to Exams
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="exam-details-page">

      {/* =================================
          HERO
      ================================= */}

      <section className="exam-details-hero">

        <div className="container">

          <Link
            to="/exams"
            className="back-exams-link"
          >
            ← Back to All Exams
          </Link>


          <div className="exam-details-hero-content">

            <div className="exam-details-icon">
              {exam.icon}
            </div>


            <div className="exam-details-title">

              <span>
                {exam.category}
              </span>

              <h1>
                {exam.title}
              </h1>

              <p>
                {exam.description}
              </p>


              <div className="exam-detail-tags">

                <span>
                  📍 {exam.level}
                </span>

                <span>
                  🌐 {exam.language}
                </span>

                <span>
                  📝 {exam.mockTests} Mock Tests
                </span>

                {exam.notes && (
                  <span>
                    📖 Notes Available
                  </span>
                )}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          OVERVIEW
      ================================= */}

      <section className="section">

        <div className="container">

          <div className="exam-overview-grid">

            <div className="exam-overview-main">

              <span className="section-label">
                EXAM PREPARATION
              </span>

              <h2>
                {exam.title} की तैयारी
              </h2>

              <p>
                {exam.title} की preparation के
                लिए Anitayan Classes पर available
                resources explore करें।
              </p>

              <p>
                आप यहां mock tests attempt कर
                सकते हैं, study notes देख सकते हैं
                और available free classes के माध्यम
                से अपनी preparation कर सकते हैं।
              </p>

            </div>


            <div className="exam-overview-stats">

              <div>
                <strong>
                  {exam.mockTests}
                </strong>

                <span>
                  Demo Mock Tests
                </span>
              </div>

              <div>
                <strong>
                  {exam.notes ? "✓" : "—"}
                </strong>

                <span>
                  Study Notes
                </span>
              </div>

              <div>
                <strong>
                  {exam.classes ? "✓" : "—"}
                </strong>

                <span>
                  Free Classes
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          QUICK RESOURCES
      ================================= */}

      <section className="section exam-resources-section">

        <div className="container">

          <div className="section-heading centered">

            <span className="section-label">
              PREPARATION RESOURCES
            </span>

            <h2>
              अपनी Preparation शुरू करें
            </h2>

            <p>
              नीचे दिए गए resources से
              preparation continue करें।
            </p>

          </div>


          <div className="detail-resource-grid">

            {/* Mock Tests */}

            <div className="detail-resource-card">

              <div className="detail-resource-icon">
                📝
              </div>

              <span>
                PRACTICE
              </span>

              <h3>
                Mock Tests
              </h3>

              <p>
                {exam.mockTests} demo mock tests
                के साथ अपनी preparation और
                practice check करें।
              </p>

              <Link
                to="/mock-tests"
                className="resource-btn"
              >
                View Mock Tests →
              </Link>

            </div>


            {/* Notes */}

            <div className="detail-resource-card">

              <div className="detail-resource-icon">
                📖
              </div>

              <span>
                STUDY MATERIAL
              </span>

              <h3>
                Study Notes
              </h3>

              <p>
                Exam-oriented notes और
                preparation material explore करें।
              </p>

              <Link
                to="/notes"
                className="resource-btn"
              >
                View Notes →
              </Link>

            </div>


            {/* Classes */}

            <div className="detail-resource-card">

              <div className="detail-resource-icon">
                🎥
              </div>

              <span>
                FREE LEARNING
              </span>

              <h3>
                Free Classes
              </h3>

              <p>
                YouTube पर available free
                educational classes देखें।
              </p>

              <Link
                to="/classes"
                className="resource-btn"
              >
                View Classes →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          EXAM INFORMATION
      ================================= */}

      <section className="section">

        <div className="container">

          <div className="exam-information">

            <div className="exam-information-header">

              <span className="section-label">
                QUICK INFORMATION
              </span>

              <h2>
                {exam.title}
              </h2>

            </div>


            <div className="information-table">

              <div className="information-row">

                <span>
                  Exam Category
                </span>

                <strong>
                  {exam.category}
                </strong>

              </div>


              <div className="information-row">

                <span>
                  Level
                </span>

                <strong>
                  {exam.level}
                </strong>

              </div>


              <div className="information-row">

                <span>
                  Language
                </span>

                <strong>
                  {exam.language}
                </strong>

              </div>


              <div className="information-row">

                <span>
                  Mock Tests
                </span>

                <strong>
                  {exam.mockTests}
                </strong>

              </div>


              <div className="information-row">

                <span>
                  Study Notes
                </span>

                <strong>
                  {exam.notes
                    ? "Available"
                    : "Coming Soon"}
                </strong>

              </div>


              <div className="information-row">

                <span>
                  Free Classes
                </span>

                <strong>
                  {exam.classes
                    ? "Available"
                    : "Coming Soon"}
                </strong>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          PREPARATION TIPS
      ================================= */}

      <section className="section exam-tips-section">

        <div className="container">

          <div className="section-heading centered">

            <span className="section-label">
              PREPARATION
            </span>

            <h2>
              Smart Preparation Approach
            </h2>

          </div>


          <div className="exam-tips-grid">

            <div className="exam-tip">

              <div>
                01
              </div>

              <h3>
                Study
              </h3>

              <p>
                Important topics को regularly
                revise करें और notes का उपयोग करें।
              </p>

            </div>


            <div className="exam-tip">

              <div>
                02
              </div>

              <h3>
                Practice
              </h3>

              <p>
                Mock tests और questions के
                माध्यम से regular practice करें।
              </p>

            </div>


            <div className="exam-tip">

              <div>
                03
              </div>

              <h3>
                Analyze
              </h3>

              <p>
                Test के बाद अपनी mistakes को
                identify करके दोबारा revise करें।
              </p>

            </div>


            <div className="exam-tip">

              <div>
                04
              </div>

              <h3>
                Revise
              </h3>

              <p>
                पढ़े हुए topics का regular
                revision करते रहें।
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          FINAL CTA
      ================================= */}

      <section className="section exam-detail-cta-section">

        <div className="container">

          <div className="exam-detail-cta">

            <div className="exam-detail-cta-icon">
              🎯
            </div>

            <div>

              <span>
                READY TO PREPARE?
              </span>

              <h2>
                {exam.title} की तैयारी शुरू करें
              </h2>

              <p>
                Mock tests, notes और classes
                explore करें।
              </p>

            </div>

            <div className="exam-detail-cta-actions">

              <Link
                to="/mock-tests"
                className="primary-btn"
              >
                Start Practice
              </Link>

              <Link
                to="/exams"
                className="secondary-btn"
              >
                All Exams
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ExamDetails;