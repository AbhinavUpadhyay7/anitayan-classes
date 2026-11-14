function Contact() {
  return (
    <>
      {/* Header */}

      <section className="page-header">
        <div className="container">

          <span className="section-label">
            📞 CONTACT
          </span>

          <h1>
            Contact Anitayan Classes
          </h1>

          <p>
            किसी भी query या information
            के लिए हमसे जुड़ें।
          </p>

        </div>
      </section>


      {/* Contact */}

      <section className="section">
        <div className="container">

          <div className="contact-layout">

            {/* Left */}

            <div className="contact-content">

              <span className="section-label">
                GET IN TOUCH
              </span>

              <h2>
                हमसे जुड़े रहें
              </h2>

              <p>
                Classes, Notes, Mock Tests या
                किसी अन्य educational query के
                लिए नीचे दिए गए platforms पर
                contact कर सकते हैं।
              </p>


              <div className="contact-cards">

                <a
                  href="https://t.me/ayush_sir1"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card telegram-contact"
                >

                  <div className="contact-icon">
                    ✈️
                  </div>

                  <div>
                    <span>
                      TELEGRAM DIRECT
                    </span>

                    <h3>
                      Ayush Sir
                    </h3>

                    <p>
                      Direct message करें
                    </p>
                  </div>

                  <b>
                    →
                  </b>

                </a>


                <a
                  href="https://t.me/Anitayan_classes1"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >

                  <div className="contact-icon">
                    💬
                  </div>

                  <div>
                    <span>
                      DISCUSSION GROUP
                    </span>

                    <h3>
                      Telegram Group
                    </h3>

                    <p>
                      Discussion में join करें
                    </p>
                  </div>

                  <b>
                    →
                  </b>

                </a>


                <a
                  href="https://whatsapp.com/channel/0029VaFcdVB5kg6yHIl1IM0V"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >

                  <div className="contact-icon">
                    📱
                  </div>

                  <div>
                    <span>
                      WHATSAPP
                    </span>

                    <h3>
                      WhatsApp Channel
                    </h3>

                    <p>
                      Latest updates पाएं
                    </p>
                  </div>

                  <b>
                    →
                  </b>

                </a>

              </div>

            </div>


            {/* Right */}

            <div className="contact-social-card">

              <div className="contact-social-top">

                <div className="contact-big-icon">
                  🎓
                </div>

                <span>
                  ANITAYAN CLASSES
                </span>

                <h2>
                  Follow Us
                </h2>

                <p>
                  Classes और educational
                  updates के लिए social
                  platforms से जुड़े रहें।
                </p>

              </div>


              <div className="contact-social-links">

                <a
                  href="https://youtube.com/@anitayanclasses-ayushsir?si=NO53htMrBglPHGqH"
                  target="_blank"
                  rel="noreferrer"
                >
                  ▶️ YouTube
                  <span>→</span>
                </a>

                <a
                  href="https://instagram.com/Ayush_sir1"
                  target="_blank"
                  rel="noreferrer"
                >
                  📸 Instagram
                  <span>→</span>
                </a>

                <a
                  href="https://www.facebook.com/ayushmaurya.maurya.14"
                  target="_blank"
                  rel="noreferrer"
                >
                  📘 Facebook
                  <span>→</span>
                </a>

                <a
                  href="https://t.me/Anitayan_classes"
                  target="_blank"
                  rel="noreferrer"
                >
                  ✈️ Telegram
                  <span>→</span>
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* Bottom CTA */}

      <section className="contact-cta-section">
        <div className="container">

          <div className="contact-cta">

            <div>
              <span>
                READY TO START?
              </span>

              <h2>
                अपनी preparation आज ही शुरू करें।
              </h2>

              <p>
                Free classes, mock tests और
                study notes explore करें।
              </p>
            </div>

            <div className="contact-cta-buttons">

              <a
                href="/mock-tests"
                className="primary-btn"
              >
                📝 Mock Tests
              </a>

              <a
                href="/notes"
                className="secondary-btn"
              >
                📖 Notes
              </a>

            </div>

          </div>

        </div>
      </section>

    </>
  );
}

export default Contact;