import { Link } from "react-router-dom";

function NoteCard({ note }) {
  const discount = Math.round(
    ((note.originalPrice - note.price) /
      note.originalPrice) *
      100
  );

  return (
    <article className="note-card">
      <div className="note-card-top">
        <div className="note-icon">
          {note.icon}
        </div>

        <span className="note-format">
          {note.format}
        </span>
      </div>

      <div className="note-card-body">
        <span className="note-exam">
          {note.exam}
        </span>

        <h3>{note.shortTitle}</h3>

        <p>{note.description}</p>

        <div className="note-meta">
          <span>
            📄 {note.pages}+ Pages
          </span>

          <span>
            🌐 {note.language}
          </span>
        </div>

        <div className="note-price">
          <strong>
            ₹{note.price}
          </strong>

          <del>
            ₹{note.originalPrice}
          </del>

          <span>
            {discount}% OFF
          </span>
        </div>

        <Link
          to={`/notes/${note.id}`}
          className="note-view-btn"
        >
          View Notes Details

          <span>→</span>
        </Link>
      </div>
    </article>
  );
}

export default NoteCard;