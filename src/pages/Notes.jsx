import { useMemo, useState } from "react";

import NoteCard from "../components/NoteCard";

import { notes } from "../data/notes";

function Notes() {
  const [search, setSearch] =
    useState("");

  const filteredNotes = useMemo(() => {
    const keyword = search
      .trim()
      .toLowerCase();

    if (!keyword) {
      return notes;
    }

    return notes.filter((note) => {
      return (
        note.title
          .toLowerCase()
          .includes(keyword) ||
        note.exam
          .toLowerCase()
          .includes(keyword) ||
        note.description
          .toLowerCase()
          .includes(keyword)
      );
    });
  }, [search]);

  return (
    <>
      {/* Page Header */}

      <section className="page-header">
        <div className="container">
          <span className="section-label">
            📖 STUDY MATERIAL
          </span>

          <h1>
            Handwritten Notes
          </h1>

          <p>
            अपने exam के लिए
            exam-oriented handwritten
            notes देखें और खरीदें।
          </p>
        </div>
      </section>

      {/* Notes Section */}

      <section className="section">
        <div className="container">
          <div className="notes-intro">
            <div>
              <span className="section-label">
                AVAILABLE NOTES
              </span>

              <h2>
                Exam-wise Notes
              </h2>

              <p>
                जिस exam के Notes चाहिए,
                उस पर click करके पूरी
                details देखें।
              </p>
            </div>

            <div className="notes-search">
              <span>🔍</span>

              <input
                type="text"
                placeholder="Search Notes..."
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value
                  )
                }
              />
            </div>
          </div>

          {/* Notes Count */}

          <div className="notes-result-info">
            <span>
              Showing{" "}
              <strong>
                {filteredNotes.length}
              </strong>{" "}
              Notes
            </span>

            {search && (
              <button
                onClick={() =>
                  setSearch("")
                }
                className="clear-search-btn"
              >
                Clear Search ✕
              </button>
            )}
          </div>

          {/* Cards */}

          {filteredNotes.length > 0 ? (
            <div className="notes-grid">
              {filteredNotes.map(
                (note) => (
                  <NoteCard
                    key={note.id}
                    note={note}
                  />
                )
              )}
            </div>
          ) : (
            <div className="empty-state">
              <div
                style={{
                  fontSize: "48px",
                  marginBottom: "10px",
                }}
              >
                🔍
              </div>

              <h3>
                Notes नहीं मिले
              </h3>

              <p>
                Search keyword बदलकर
                फिर try करें।
              </p>

              <button
                className="primary-btn"
                style={{
                  marginTop: "18px",
                }}
                onClick={() =>
                  setSearch("")
                }
              >
                सभी Notes देखें
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom Info */}

      <section className="notes-info-section">
        <div className="container">
          <div className="notes-info-grid">
            <div>
              <span>📚</span>

              <div>
                <h3>
                  Exam Oriented
                </h3>

                <p>
                  महत्वपूर्ण topics को
                  ध्यान में रखकर तैयार।
                </p>
              </div>
            </div>

            <div>
              <span>✍️</span>

              <div>
                <h3>
                  Easy Language
                </h3>

                <p>
                  सरल भाषा में समझने
                  और revise करने योग्य।
                </p>
              </div>
            </div>

            <div>
              <span>📱</span>

              <div>
                <h3>
                  PDF Format
                </h3>

                <p>
                  Mobile और laptop दोनों
                  पर पढ़ सकते हैं।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Notes;