import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Components */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SiteSettingsProvider } from "./context/SiteSettings";

/* Pages */
import Home from "./pages/Home";
import Exams from "./pages/Exams";
import ExamDetails from "./pages/ExamDetails";

import MockTests from "./pages/MockTests";
import MockTest from "./pages/MockTest";
import TestResult from "./pages/TestResult";

import Notes from "./pages/Notes";
import NoteDetails from "./pages/NoteDetails";
import NotePayment from "./pages/NotePayment";
import PurchaseSuccess from "./pages/PurchaseSuccess";

import Classes from "./pages/Classes";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <SiteSettingsProvider>
    <BrowserRouter>
      <div className="app">

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Routes>

            {/* =========================
                HOME
            ========================= */}

            <Route
              path="/"
              element={<Home />}
            />


            {/* =========================
                EXAMS
            ========================= */}

            <Route
              path="/exams"
              element={<Exams />}
            />

            <Route
              path="/exams/:id"
              element={<ExamDetails />}
            />


            {/* =========================
                MOCK TESTS
            ========================= */}

            <Route
              path="/mock-tests"
              element={<MockTests />}
            />

            <Route
              path="/mock-tests/:id"
              element={<MockTest />}
            />

            <Route
              path="/mock-tests/:id/result"
              element={<TestResult />}
            />


            {/* =========================
                NOTES
            ========================= */}

            <Route
              path="/notes"
              element={<Notes />}
            />

            {/* IMPORTANT:
                Individual Note Details
            */}

            <Route
              path="/notes/:id"
              element={<NoteDetails />}
            />

            {/* Payment */}

            <Route
              path="/notes/:id/payment"
              element={<NotePayment />}
            />

            {/* Purchase Success */}

            <Route
              path="/notes/:id/success"
              element={<PurchaseSuccess />}
            />


            {/* =========================
                CLASSES
            ========================= */}

            <Route
              path="/classes"
              element={<Classes />}
            />


            {/* =========================
                ABOUT
            ========================= */}

            <Route
              path="/about"
              element={<About />}
            />


            {/* =========================
                CONTACT
            ========================= */}

            <Route
              path="/contact"
              element={<Contact />}
            />


            {/* =========================
                404
            ========================= */}

            <Route
              path="*"
              element={
                <div className="not-found-page">
                  <div className="container">
                    <div className="empty-state">
                      <div
                        style={{
                          fontSize: "55px",
                          marginBottom: "15px",
                        }}
                      >
                        🔍
                      </div>

                      <h1>
                        Page Not Found
                      </h1>

                      <p>
                        जिस page को आप ढूंढ रहे हैं
                        वह उपलब्ध नहीं है।
                      </p>

                      <a
                        href="/"
                        className="primary-btn"
                        style={{
                          marginTop: "20px",
                        }}
                      >
                        ← Go Home
                      </a>
                    </div>
                  </div>
                </div>
              }
            />

          </Routes>
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </BrowserRouter>
    </SiteSettingsProvider>
  );
}

export default App;