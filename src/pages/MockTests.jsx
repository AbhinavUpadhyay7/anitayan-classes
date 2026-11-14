import { useMemo, useState } from "react";

import MockTestCard from "../components/MockTestCard";

import {
  mockTests,
  examFilters,
} from "../data/mockTests";

function MockTests() {
  const [selectedExam, setSelectedExam] =
    useState("all");

  const [search, setSearch] = useState("");

  const filteredTests = useMemo(() => {
    return mockTests.filter((test) => {
      const matchesExam =
        selectedExam === "all" ||
        test.examSlug === selectedExam;

      const searchText = search
        .trim()
        .toLowerCase();

      const matchesSearch =
        !searchText ||
        test.title
          .toLowerCase()
          .includes(searchText) ||
        test.exam
          .toLowerCase()
          .includes(searchText);

      return matchesExam && matchesSearch;
    });
  }, [selectedExam, search]);

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <span className="section-label">
            📝 FREE PRACTICE
          </span>

          <h1>Mock Tests</h1>

          <p>
            अपने exam की तैयारी को test करें।
            Topic-wise और exam-oriented demo
            mock tests से practice करें।
          </p>
        </div>
      </section>

      {/* Mock Tests */}
      <section className="section">
        <div className="container">
          {/* Search */}
          <div className="mock-test-toolbar">
            <div className="mock-test-search">
              <span>🔍</span>

              <input
                type="text"
                placeholder="Search Mock Test..."
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
              />
            </div>

            <div className="mock-test-count">
              <strong>
                {filteredTests.length}
              </strong>{" "}
              Tests Available
            </div>
          </div>

          {/* Filters */}
          <div className="exam-filter-wrapper">
            <div className="exam-filters">
              {examFilters.map((filter) => (
                <button
                  key={filter.slug}
                  className={
                    selectedExam === filter.slug
                      ? "exam-filter active"
                      : "exam-filter"
                  }
                  onClick={() =>
                    setSelectedExam(filter.slug)
                  }
                >
                  <span>{filter.icon}</span>
                  {filter.name}
                </button>
              ))}
            </div>
          </div>

          {/* Section Heading */}
          <div className="mock-list-heading">
            <div>
              <span className="section-label">
                AVAILABLE TESTS
              </span>

              <h2>
                {selectedExam === "all"
                  ? "All Mock Tests"
                  : examFilters.find(
                      (item) =>
                        item.slug === selectedExam
                    )?.name}
              </h2>
            </div>

            <p>
              प्रत्येक test में 25 questions और
              20 minutes का समय है।
            </p>
          </div>

          {/* Test Grid */}
          {filteredTests.length > 0 ? (
            <div className="mock-test-grid">
              {filteredTests.map((test) => (
                <MockTestCard
                  key={test.id}
                  test={test}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div
                style={{
                  fontSize: "45px",
                  marginBottom: "10px",
                }}
              >
                🔍
              </div>

              <h3>
                No Mock Test Found
              </h3>

              <p>
                Search keyword बदलकर फिर try करें।
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <div>
              <h2>
                रोज़ Practice करें
              </h2>

              <p>
                नियमित Mock Tests से अपनी preparation
                को मजबूत बनाएं।
              </p>
            </div>

            <button
              className="secondary-btn"
              onClick={() => {
                setSelectedExam("all");
                setSearch("");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              सभी Tests देखें →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default MockTests;