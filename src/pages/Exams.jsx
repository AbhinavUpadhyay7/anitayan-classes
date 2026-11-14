import { useMemo, useState } from "react";
import ExamCard from "../components/ExamCard";
import exams from "../data/exams";

function Exams() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Teaching Exam",
    "Teaching Recruitment",
    "Government Exam",
  ];

  const filteredExams = useMemo(() => {
    return exams.filter((exam) => {

      const matchesCategory =
        activeCategory === "All" ||
        exam.category === activeCategory;

      const searchText = search
        .toLowerCase()
        .trim();

      const matchesSearch =
        !searchText ||
        exam.title
          .toLowerCase()
          .includes(searchText) ||
        exam.category
          .toLowerCase()
          .includes(searchText) ||
        exam.description
          .toLowerCase()
          .includes(searchText);

      return (
        matchesCategory &&
        matchesSearch
      );
    });
  }, [search, activeCategory]);


  return (
    <div className="exams-page">

      {/* ===================================
          HERO
      =================================== */}

      <section className="exams-hero">

        <div className="container">

          <div className="exams-hero-content">

            <span className="section-label">
              🎯 EXAM PREPARATION
            </span>

            <h1>
              अपना Target Exam
              <br />

              <span>
                चुनें और तैयारी शुरू करें
              </span>
            </h1>

            <p>
              Anitayan Classes पर अपने
              examination के लिए mock tests,
              notes और free classes explore करें।
            </p>


            {/* Search */}

            <div className="exam-search-box">

              <span>
                🔍
              </span>

              <input
                type="text"
                placeholder="Search exam..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                >
                  ×
                </button>
              )}

            </div>

          </div>


          {/* Hero Right */}

          <div className="exams-hero-visual">

            <div className="hero-exam-main-icon">
              📚
            </div>

            <div className="floating-exam-card floating-one">
              <span>📝</span>

              <div>
                <strong>
                  Mock Tests
                </strong>

                <small>
                  Practice regularly
                </small>
              </div>
            </div>


            <div className="floating-exam-card floating-two">
              <span>📖</span>

              <div>
                <strong>
                  Study Notes
                </strong>

                <small>
                  Exam-oriented
                </small>
              </div>
            </div>


            <div className="floating-exam-card floating-three">
              <span>🎥</span>

              <div>
                <strong>
                  Free Classes
                </strong>

                <small>
                  Learn online
                </small>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ===================================
          CATEGORY FILTER
      =================================== */}

      <section className="exam-filter-section">

        <div className="container">

          <div className="exam-filter-wrapper">

            <div className="filter-title">
              <span>
                EXPLORE
              </span>

              <strong>
                Exams
              </strong>
            </div>


            <div className="exam-filters">

              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    activeCategory === category
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveCategory(category)
                  }
                >
                  {category}
                </button>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ===================================
          EXAM LIST
      =================================== */}

      <section className="section exams-list-section">

        <div className="container">

          <div className="exam-list-heading">

            <div>

              <span className="section-label">
                AVAILABLE EXAMS
              </span>

              <h2>
                Choose Your Exam
              </h2>

            </div>

            <div className="exam-count">
              Showing{" "}
              <strong>
                {filteredExams.length}
              </strong>{" "}
              Exams
            </div>

          </div>


          {/* Cards */}

          {filteredExams.length > 0 ? (

            <div className="exams-grid">

              {filteredExams.map((exam) => (
                <ExamCard
                  key={exam.id}
                  exam={exam}
                />
              ))}

            </div>

          ) : (

            <div className="no-exams">

              <div>
                🔍
              </div>

              <h3>
                No Exam Found
              </h3>

              <p>
                आपकी search के लिए कोई
                exam नहीं मिला।
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
              >
                Show All Exams
              </button>

            </div>

          )}

        </div>

      </section>


      {/* ===================================
          WHY SECTION
      =================================== */}

      <section className="exam-why-section">

        <div className="container">

          <div className="section-heading centered">

            <span className="section-label">
              PREPARE SMARTER
            </span>

            <h2>
              एक ही जगह पर Preparation Resources
            </h2>

            <p>
              अपने target exam के लिए
              useful resources explore करें।
            </p>

          </div>


          <div className="exam-benefits">

            <div className="exam-benefit">

              <div>
                📝
              </div>

              <h3>
                Mock Tests
              </h3>

              <p>
                अपनी preparation check करने
                के लिए practice tests.
              </p>

            </div>


            <div className="exam-benefit">

              <div>
                📖
              </div>

              <h3>
                Exam Notes
              </h3>

              <p>
                Important topics के लिए
                exam-oriented notes.
              </p>

            </div>


            <div className="exam-benefit">

              <div>
                🎥
              </div>

              <h3>
                Free Classes
              </h3>

              <p>
                YouTube पर available
                educational classes.
              </p>

            </div>


            <div className="exam-benefit">

              <div>
                📢
              </div>

              <h3>
                Latest Updates
              </h3>

              <p>
                Telegram और WhatsApp के
                माध्यम से updates.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ===================================
          CTA
      =================================== */}

      <section className="section exam-cta-section">

        <div className="container">

          <div className="exam-cta">

            <div className="exam-cta-icon">
              🎓
            </div>

            <div className="exam-cta-content">

              <span>
                ANITAYAN CLASSES
              </span>

              <h2>
                तैयारी शुरू करने के लिए
                सही Exam चुनें
              </h2>

              <p>
                Exam select करें और उसके
                available resources explore करें।
              </p>

            </div>

            <a
              href="/mock-tests"
              className="primary-btn"
            >
              View Mock Tests →
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Exams;