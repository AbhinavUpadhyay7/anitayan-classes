function About() {
  return (
    <>
      {/* Header */}

      <section className="page-header">
        <div className="container">

          <span className="section-label">
            👨‍🏫 ABOUT US
          </span>

          <h1>
            About Anitayan Classes
          </h1>

          <p>
            Exam preparation के लिए
            educational platform.
          </p>

        </div>
      </section>


      {/* Main About */}

      <section className="section">
        <div className="container">

          <div className="about-main">

            <div className="about-visual">

              <div className="about-avatar">
                A
              </div>

              <div className="about-floating-card">
                <strong>
                  Anitayan Classes
                </strong>

                <span>
                  By Ayush Sir
                </span>
              </div>

            </div>


            <div className="about-content">

              <span className="section-label">
                WHO WE ARE
              </span>

              <h2>
                Anitayan Classes
              </h2>

              <p>
                Anitayan Classes एक educational
                platform है जहां students को
                competitive और teaching exams
                की preparation के लिए classes,
                notes और mock tests उपलब्ध
                कराए जाते हैं।
              </p>

              <p>
                हमारा focus exam-oriented
                preparation, useful study
                material और regular practice
                के माध्यम से students को उनकी
                preparation में support करना है।
              </p>

              <div className="about-stats">

                <div>
                  <strong>
                    📚
                  </strong>

                  <span>
                    Study Material
                  </span>
                </div>

                <div>
                  <strong>
                    📝
                  </strong>

                  <span>
                    Mock Tests
                  </span>
                </div>

                <div>
                  <strong>
                    ▶️
                  </strong>

                  <span>
                    Free Classes
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* Creator */}

      <section className="section about-creator-section">
        <div className="container">

          <div className="section-heading centered">

            <span className="section-label">
              CREATOR
            </span>

            <h2>
              Meet Ayush Sir
            </h2>

            <p>
              Anitayan Classes के creator.
            </p>

          </div>


          <div className="creator-card">

            <div className="creator-avatar">
              A
            </div>

            <div className="creator-info">

              <span>
                CREATOR & EDUCATOR
              </span>

              <h2>
                Ayush Maurya
              </h2>

              <h4>
                Ayush Sir
              </h4>

              <p>
                Profession: Student /
                UPPSC Aspirant
              </p>

              <p>
                Educational content और exam
                preparation के माध्यम से
                students तक useful learning
                resources पहुंचाने का प्रयास।
              </p>

              <a
                href="https://instagram.com/Ayush_sir1"
                target="_blank"
                rel="noreferrer"
                className="primary-btn"
              >
                📸 Instagram Profile
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* What We Provide */}

      <section className="section">
        <div className="container">

          <div className="section-heading centered">

            <span className="section-label">
              WHAT WE PROVIDE
            </span>

            <h2>
              Students के लिए Resources
            </h2>

          </div>


          <div className="about-feature-grid">

            <div className="about-feature-card">
              <span>🎥</span>

              <h3>
                Free Classes
              </h3>

              <p>
                YouTube पर educational
                classes और preparation content.
              </p>
            </div>


            <div className="about-feature-card">
              <span>📖</span>

              <h3>
                Study Notes
              </h3>

              <p>
                Exam-oriented notes और
                study material.
              </p>
            </div>


            <div className="about-feature-card">
              <span>📝</span>

              <h3>
                Mock Tests
              </h3>

              <p>
                Practice के लिए mock tests
                और question sets.
              </p>
            </div>


            <div className="about-feature-card">
              <span>📢</span>

              <h3>
                Updates
              </h3>

              <p>
                Telegram और WhatsApp के
                माध्यम से updates.
              </p>
            </div>

          </div>

        </div>
      </section>

    </>
  );
}

export default About;