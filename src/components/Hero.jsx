import { Link } from "react-router-dom";

function Hero() {
  return (
    <header className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="hero-tag">
            🎯 शिक्षक भर्ती परीक्षा की संपूर्ण तैयारी
          </span>

          <h1 className="hero-title">
            सही मार्गदर्शन,
            <br />
            <span>स्मार्ट तैयारी</span> और सफलता
          </h1>

          <p className="hero-description">
            हस्तलिखित Notes, Daily Mock Test,
            Topic-wise Quiz, PPT, Video Classes,
            PYQ और परीक्षा तक लगातार Guidance —
            सब एक ही जगह।
          </p>

          <div className="hero-actions">
            <Link to="/mock-tests" className="primary-btn">
              📝 अभी Mock Test दें →
            </Link>

            <Link to="/notes" className="secondary-btn">
              📖 Notes देखें
            </Link>
          </div>

          <div className="hero-trust">
            <span>✓ Exam Oriented</span>
            <span>✓ सरल भाषा</span>
            <span>✓ Regular Updates</span>
          </div>
        </div>

        <div className="hero-visual-wrapper">
          <div className="hero-visual">
            <div className="hero-visual-inner">
              <div className="teacher-avatar">
                👨‍🏫
              </div>

              <h2>Ayush Sir</h2>

              <p>
                Educator • Mentor • Content Creator
              </p>
            </div>

            <div className="floating-note floating-note-one">
              ✍️ Handwritten Notes
            </div>

            <div className="floating-note floating-note-two">
              🏆 Target Selection
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;