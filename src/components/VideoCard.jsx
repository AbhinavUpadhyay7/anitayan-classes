function VideoCard({ video }) {
  return (
    <article className="video-card">

      <div className="video-thumbnail">
        <div className="video-play">
          ▶
        </div>

        <span>
          YouTube
        </span>
      </div>

      <div className="video-card-body">

        <small>
          {video.exam}
        </small>

        <h3>
          {video.title}
        </h3>

        <p>
          {video.description}
        </p>

        <a
          href={video.youtubeUrl}
          target="_blank"
          rel="noreferrer"
          className="watch-video-btn"
        >
          ▶ Watch on YouTube
        </a>

      </div>
    </article>
  );
}

export default VideoCard;