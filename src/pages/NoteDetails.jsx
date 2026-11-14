import {
  Link,
  useParams,
} from "react-router-dom";

import { getNoteById } from "../data/notes";

function NoteDetails() {
  const { id } = useParams();

  const note = getNoteById(id);

  if (!note) {
    return (
      <section className="section">
        <div className="container">
          <div className="empty-state">
            <div
              style={{
                fontSize: "50px",
              }}
            >
              📖
            </div>

            <h2>
              Notes Not Found
            </h2>

            <p>
              यह Notes उपलब्ध नहीं है।
            </p>

            <Link
              to="/notes"
              className="primary-btn"
              style={{
                marginTop: "20px",
              }}
            >
              ← सभी Notes देखें
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const discount = Math.round(
    ((note.originalPrice -
      note.price) /
      note.originalPrice) *
      100
  );

  return (
    <>
      {/* Header */}

      <section className="page-header">
        <div className="container">
          <span className="section-label">
            📖 NOTES DETAILS
          </span>

          <h1>
            {note.title}
          </h1>

          <p>
            {note.description}
          </p>
        </div>
      </section>

      {/* Details */}

      <section className="section">
        <div className="container note-details-layout">

          {/* LEFT SIDE */}

          <div className="note-details-main">

            {/* Preview */}

            <div className="note-preview-box">
              <div className="note-preview-icon">
                {note.icon}
              </div>

              <div>
                <span>
                  {note.exam}
                </span>

                <h2>
                  {note.shortTitle}
                </h2>

                <p>
                  Complete Exam-oriented
                  Study Material
                </p>
              </div>
            </div>

            {/* Included */}

            <div className="note-content-card">
              <span className="section-label">
                WHAT'S INCLUDED
              </span>

              <h2>
                Notes में क्या मिलेगा?
              </h2>

              <div className="note-highlights">
                {note.highlights.map(
                  (item, index) => (
                    <div
                      className="note-highlight"
                      key={item}
                    >
                      <span>
                        {String(
                          index + 1
                        ).padStart(2, "0")}
                      </span>

                      <p>
                        {item}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Benefits */}

            <div className="note-content-card">
              <span className="section-label">
                WHY THESE NOTES?
              </span>

              <h2>
                Students के लिए फायदे
              </h2>

              <div className="benefit-list">
                {note.benefits.map(
                  (benefit) => (
                    <div
                      className="benefit-item"
                      key={benefit}
                    >
                      <span>
                        ✓
                      </span>

                      <p>
                        {benefit}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Description */}

            <div className="note-content-card">
              <span className="section-label">
                ABOUT THIS MATERIAL
              </span>

              <h2>
                इन Notes के बारे में
              </h2>

              <p className="note-long-description">
                {note.description}
                {" "}
                यह material exam preparation,
                revision और practice को ध्यान
                में रखकर व्यवस्थित किया गया है।
                विद्यार्थी अपनी preparation के
                अनुसार इन Notes का उपयोग कर
                सकते हैं।
              </p>
            </div>
          </div>

          {/* RIGHT BUY CARD */}

          <aside className="note-buy-card">

            <div className="note-buy-badge">
              {discount}% OFF
            </div>

            <div className="big-note-icon">
              {note.icon}
            </div>

            <h2>
              {note.shortTitle}
            </h2>

            <p>
              {note.description}
            </p>

            <div className="note-price-large">
              <strong>
                ₹{note.price}
              </strong>

              <del>
                ₹{note.originalPrice}
              </del>
            </div>

            <div className="note-buy-info">

              <div>
                <span>📄</span>

                <p>
                  <strong>
                    {note.pages}+
                  </strong>

                  Pages
                </p>
              </div>

              <div>
                <span>🌐</span>

                <p>
                  <strong>
                    {note.language}
                  </strong>

                  Language
                </p>
              </div>

              <div>
                <span>📁</span>

                <p>
                  <strong>
                    {note.format}
                  </strong>

                  Format
                </p>
              </div>

            </div>

            <div className="buy-discount-row">
              <span>
                You Save
              </span>

              <strong>
                ₹
                {note.originalPrice -
                  note.price}
              </strong>
            </div>

            <Link
              to={`/notes/${note.id}/payment`}
              className="buy-notes-btn"
            >
              Buy Notes — ₹
              {note.price}

              <span>
                →
              </span>
            </Link>

            <p className="secure-note">
              🔒 Secure Payment Process
            </p>

            <div className="buy-contact">
              <span>
                Need Help?
              </span>

              <a
                href="https://wa.me/919454064340"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp करें →
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export default NoteDetails;