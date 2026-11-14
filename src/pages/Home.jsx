import { Link } from "react-router-dom";
import ExamCard from "../components/ExamCard";
import SocialLinks from "../components/SocialLinks";
import { exams } from "../data/exams";

const features = [
  { icon: "✍", title: "Handwritten Notes", description: "Clear, exam-focused notes designed for quick revision." },
  { icon: "▤", title: "Practice Tests", description: "Topic-wise, subject-wise and full-length mock tests." },
  { icon: "▶", title: "Video Classes", description: "Concept-led lessons and focused preparation on YouTube." },
  { icon: "▣", title: "Quick Revision", description: "Concise PDFs and class resources to revise faster." },
  { icon: "◎", title: "PYQ & MCQ", description: "Previous-year questions and relevant practice sets." },
  { icon: "✦", title: "Study Guidance", description: "Practical direction to make your preparation consistent." },
];

function Home() {
  return <>
    <section className="home-hero">
      <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
      <div className="container home-hero-grid">
        <div className="home-hero-copy">
          <div className="eyebrow"><span /> YOUR TEACHING EXAM PREPARATION PARTNER</div>
          <h1>Prepare with purpose.<br /><span>Perform with confidence.</span></h1>
          <p>Everything you need for teaching recruitment exams — structured notes, focused video classes, mock tests and practical guidance, all in one place.</p>
          <div className="hero-actions"><Link to="/exams" className="primary-btn">Explore Exams <span>→</span></Link><Link to="/mock-tests" className="hero-secondary-link">Try a Mock Test <span>↗</span></Link></div>
          <div className="hero-proof"><div className="proof-avatars"><span>A</span><span>✓</span><span>✦</span></div><div><strong>Learn. Practice. Improve.</strong><small>A focused path to your teaching career.</small></div></div>
        </div>
        <div className="hero-art" aria-label="Illustration of books and learning">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="art-card art-card-top"><span className="art-icon">✦</span><div><strong>Daily Progress</strong><small>Small steps. Big goals.</small></div><b>↗</b></div>
          <div className="book-stack"><div className="book book-back"><span>LEARN</span></div><div className="book book-middle"><span>PRACTICE</span></div><div className="book book-front"><div className="book-mark">A</div><strong>YOUR NEXT<br />CHAPTER</strong><small>ANITAYAN CLASSES</small></div></div>
          <div className="art-card art-card-bottom"><span className="art-check">✓</span><div><strong>Stay Exam Ready</strong><small>Notes · Tests · Classes</small></div></div>
          <div className="art-spark spark-one">✧</div><div className="art-spark spark-two">✦</div>
        </div>
      </div>
      <div className="container hero-bottom-line"><span>BUILT FOR ASPIRING TEACHERS</span><span>SUPER TET · CTET · UPTET · TGT / PGT</span></div>
    </section>

    <section className="trust-strip"><div className="container trust-grid"><div><strong>01</strong><span>Structured learning</span></div><div><strong>02</strong><span>Exam-focused resources</span></div><div><strong>03</strong><span>Practice that builds confidence</span></div><div><strong>04</strong><span>Guidance at every step</span></div></div></section>

    <section className="section home-exams"><div className="container"><div className="section-heading"><span className="section-label">FIND YOUR PATH</span><h2>Explore teaching examinations</h2><p>Choose your target exam and access preparation resources made to keep you moving forward.</p></div><div className="exam-grid">{exams.map((exam) => <ExamCard key={exam.id} exam={exam} />)}</div><div className="center-action"><Link to="/exams" className="secondary-btn">View all examinations <span>→</span></Link></div></div></section>

    <section className="section section-light"><div className="container"><div className="section-heading"><span className="section-label">THE ANITAYAN ADVANTAGE</span><h2>Everything you need to prepare better</h2><p>A complete learning ecosystem that brings your study resources and practice together.</p></div><div className="feature-grid">{features.map((feature, index) => <article className="feature-card premium-feature" key={feature.title}><div className="feature-icon">{feature.icon}</div><span className="feature-number">0{index + 1}</span><h3>{feature.title}</h3><p>{feature.description}</p></article>)}</div></div></section>

    <section className="section practice-section"><div className="container practice-grid"><div><span className="section-label">PRACTICE WITH PURPOSE</span><h2>Turn preparation<br /><span>into progress.</span></h2><p>Build exam confidence with practice tests, instant results and question-wise review. Understand where you stand and what to work on next.</p><ul className="check-list"><li>Exam-oriented mock tests</li><li>Clear question navigation</li><li>Score and answer review</li></ul><Link to="/mock-tests" className="primary-btn">Explore mock tests →</Link></div><div className="practice-preview"><div className="preview-top"><span><i /> LIVE PRACTICE PREVIEW</span><b>01 / 25</b></div><div className="preview-progress"><span /></div><small>CHILD DEVELOPMENT & PEDAGOGY</small><h3>Learning is best described as a process that is...</h3><div className="preview-option"><b>A</b> Temporary and random</div><div className="preview-option selected"><b>B</b> Continuous and progressive <span>✓</span></div><div className="preview-option"><b>C</b> Limited to physical growth</div><div className="preview-option"><b>D</b> Identical for every learner</div><div className="preview-foot"><span>✓ Answer review included</span><span>Instant score</span></div></div></div></section>

    <section className="section educator-section"><div className="container educator-grid"><div className="educator-visual"><div className="educator-monogram">A<span>+</span></div><div className="educator-caption"><strong>ANITAYAN CLASSES</strong><small>BY AYUSH SIR</small></div></div><div className="educator-copy"><span className="section-label">A NOTE FROM YOUR EDUCATOR</span><h2>Learn with clarity.<br /><span>Grow with consistency.</span></h2><p>Anitayan Classes is built to support teaching-exam aspirants with accessible learning resources, useful practice and focused guidance. Our goal is to make preparation more organised, understandable and consistent.</p><div className="educator-points"><span>✓ Clear explanations</span><span>✓ Syllabus-led resources</span><span>✓ Consistent practice</span><span>✓ Learner-first approach</span></div><Link to="/about" className="text-link">Know more about Ayush Sir →</Link></div></div></section>

    <section className="cta-section"><div className="container"><div className="cta-box premium-cta"><div><span className="section-label">YOUR NEXT STEP STARTS HERE</span><h2>Make every study session count.</h2><p>Explore classes, notes and practice resources from Anitayan Classes.</p><div className="hero-actions"><Link to="/exams" className="primary-btn">Start exploring →</Link><Link to="/contact" className="cta-contact">Get in touch</Link></div></div><div className="cta-emblem">A<span>+</span></div></div><SocialLinks /></div></section>
  </>;
}
export default Home;
