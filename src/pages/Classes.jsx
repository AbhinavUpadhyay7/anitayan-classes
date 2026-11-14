import VideoCard from "../components/VideoCard";
import SocialLinks from "../components/SocialLinks";

import { videos } from "../data/videos";

function Classes() {
  return (
    <>
      {/* =====================================
          PAGE HEADER
      ====================================== */}

      <section className="page-header classes-header">
        <div className="container">

          <span className="section-label">
            🎓 ANITAYAN CLASSES
          </span>

          <h1>
            Free Classes
          </h1>

          <p>
            Ayush Sir के साथ competitive exams
            की तैयारी करें।
          </p>

        </div>
      </section>


      {/* =====================================
          MAIN INTRO
      ====================================== */}

      <section className="section">
        <div className="container">

          <div className="classes-intro">

            <div className="classes-intro-content">

              <span className="section-label">
                LEARN • PRACTICE • PREPARE
              </span>

              <h2>
                आपकी Exam Preparation,
                अब आसान तरीके से
              </h2>

              <p>
                Anitayan Classes पर विभिन्न
                competitive और teaching exams
                की preparation के लिए free
                educational classes उपलब्ध हैं।
              </p>

              <div className="classes-intro-actions">

                <a
                  href="https://youtube.com/@anitayanclasses?si=1EGnC1NFrYZl-uvdo"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-btn"
                >
                  ▶ Free Classes देखें
                </a>

                <a
                  href="https://t.me/Anitayan_classes"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-btn"
                >
                  Telegram Join करें
                </a>

              </div>

            </div>

            <div className="classes-intro-visual">

              <div className="teacher-circle">
                👨‍🏫
              </div>

              <div className="teacher-card">

                <span>
                  CREATOR
                </span>

                <h3>
                  Ayush Maurya
                </h3>

                <p>
                  Ayush Sir
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================
          FREE CLASSES
      ====================================== */}

      <section className="section classes-video-section">
        <div className="container">

          <div className="section-heading-row">

            <div>

              <span className="section-label">
                FREE EDUCATION
              </span>

              <h2>
                Latest Classes
              </h2>

              <p>
                अपनी exam preparation के लिए
                free classes देखें।
              </p>

            </div>

            <a
              href="https://youtube.com/@anitayanclasses-ayushsir?si=NO53htMrBglPHGqH"
              target="_blank"
              rel="noreferrer"
              className="outline-btn"
            >
              Official YouTube →
            </a>

          </div>


          <div className="videos-grid">

            {videos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
              />
            ))}

          </div>

        </div>
      </section>


      {/* =====================================
          EXAMS
      ====================================== */}

      <section className="section">
        <div className="container">

          <div className="section-heading centered">

            <span className="section-label">
              EXAM PREPARATION
            </span>

            <h2>
              किन Exams की तैयारी करें?
            </h2>

            <p>
              अपने target exam के अनुसार
              preparation शुरू करें।
            </p>

          </div>


          <div className="class-exam-grid">

            <div className="class-exam-card">
              <span>📘</span>
              <h3>Super TET</h3>
              <p>
                Teacher eligibility और
                recruitment preparation.
              </p>

              <a
                href="https://youtube.com/@anitayanclasses?si=1EGnC1NFrYZl-uvdo"
                target="_blank"
                rel="noreferrer"
              >
                Watch Classes →
              </a>
            </div>


            <div className="class-exam-card">
              <span>🏫</span>
              <h3>UPTET</h3>
              <p>
                UPTET preparation के लिए
                useful educational content.
              </p>

              <a
                href="https://youtube.com/@anitayanclasses-ayushsir?si=NO53htMrBglPHGqH"
                target="_blank"
                rel="noreferrer"
              >
                Watch Classes →
              </a>
            </div>


            <div className="class-exam-card">
              <span>🧠</span>
              <h3>CTET</h3>
              <p>
                CTET preparation और
                important topics.
              </p>

              <a
                href="https://youtube.com/@anitayanclasses-ayushsir?si=NO53htMrBglPHGqH"
                target="_blank"
                rel="noreferrer"
              >
                Watch Classes →
              </a>
            </div>


            <div className="class-exam-card">
              <span>🎓</span>
              <h3>TGT / PGT</h3>
              <p>
                Teaching recruitment exams
                की तैयारी.
              </p>

              <a
                href="https://youtube.com/@anitayanclasses-ayushsir?si=NO53htMrBglPHGqH"
                target="_blank"
                rel="noreferrer"
              >
                Watch Classes →
              </a>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================
          SOCIAL COMMUNITY
      ====================================== */}

      <section className="section community-section">
        <div className="container">

          <div className="community-box">

            <div className="community-content">

              <span className="section-label">
                JOIN OUR COMMUNITY
              </span>

              <h2>
                जुड़े रहिए Anitayan Classes
                के साथ
              </h2>

              <p>
                Latest classes, updates,
                discussions और educational
                content के लिए हमारे social
                platforms से जुड़ें।
              </p>

            </div>

            <SocialLinks />

          </div>

        </div>
      </section>

    </>
  );
}

export default Classes;