import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">

        <div className="container">

          {/* =====================================================
              FOOTER MAIN
          ===================================================== */}

          <div className="footer-grid">


            {/* =================================================
                BRAND
            ================================================= */}

            <div>

              <div className="footer-brand">
                Anitayan Classes
              </div>

              <p className="footer-description">
                By Ayush Sir — शिक्षक भर्ती परीक्षाओं की
                तैयारी के लिए Notes, Mock Tests, Video
                Classes, PYQ और exam-focused guidance.
              </p>

            </div>



            {/* =================================================
                QUICK LINKS
            ================================================= */}

            <div className="footer-column">

              <h4>
                Quick Links
              </h4>

              <Link to="/">
                Home
              </Link>

              <Link to="/exams">
                Exams
              </Link>

              <Link to="/mock-tests">
                Mock Tests
              </Link>

              <Link to="/notes">
                Notes
              </Link>

            </div>



            {/* =================================================
                MORE
            ================================================= */}

            <div className="footer-column">

              <h4>
                More
              </h4>

              <Link to="/classes">
                Video Classes
              </Link>

              <Link to="/about">
                About Ayush Sir
              </Link>

              <Link to="/contact">
                Contact
              </Link>

            </div>



            {/* =================================================
                CONNECT
            ================================================= */}

            <div className="footer-column">

              <h4>
                Connect
              </h4>


              <a
                href="https://youtube.com/@anitayanclasses?si=1EGnC1NFrYZl-uvdo"
                target="_blank"
                rel="noreferrer"
              >
                ▶ YouTube
              </a>


              <a
                href="https://t.me/Anitayan_classes"
                target="_blank"
                rel="noreferrer"
              >
                ✈ Telegram
              </a>


              <a
                href="https://instagram.com/Ayush_sir1"
                target="_blank"
                rel="noreferrer"
              >
                ◎ Instagram
              </a>


              <a
                href="https://wa.me/919454064340"
                target="_blank"
                rel="noreferrer"
              >
                ☎ WhatsApp
              </a>

            </div>

          </div>



          {/* =====================================================
              FOOTER BOTTOM
          ===================================================== */}

          <div className="footer-bottom">


            {/* COPYRIGHT */}

            <span>
              © 2026 Anitayan Classes By Ayush Sir
            </span>


            {/* RIGHTS */}

            <span>
              All Rights Reserved
            </span>


          </div>



          {/* =====================================================
              DEVELOPER CREDIT
          ===================================================== */}

          <div className="footer-developer">

            <span className="developer-line">
              Developed by
            </span>

            <span className="developer-name">
              Abhinav Upadhyay
            </span>

            <span className="developer-heart">
              ❤️
            </span>

          </div>


        </div>

      </footer>



      {/* =====================================================
          FLOATING WHATSAPP
      ===================================================== */}

      <a
        href="https://wa.me/919454064340"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
      >
        ☎ WhatsApp
      </a>

    </>
  );
}

export default Footer;