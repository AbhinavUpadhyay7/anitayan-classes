function SocialLinks() {
  const links = [
    {
      icon: "▶️",
      title: "YouTube",
      text: "Free Classes",
      url: "https://youtube.com/@anitayanclasses-ayushsir?si=NO53htMrBglPHGqH",
      className: "youtube",
    },

    {
      icon: "📸",
      title: "Instagram",
      text: "Follow Ayush Sir",
      url: "https://instagram.com/Ayush_sir1",
      className: "instagram",
    },

    {
      icon: "📘",
      title: "Facebook",
      text: "Facebook Page",
      url: "https://www.facebook.com/ayushmaurya.maurya.14",
      className: "facebook",
    },

    {
      icon: "✈️",
      title: "Telegram",
      text: "Official Channel",
      url: "https://t.me/Anitayan_classes",
      className: "telegram",
    },

    {
      icon: "💬",
      title: "Discussion Group",
      text: "Join Discussion",
      url: "https://t.me/Anitayan_classes1",
      className: "telegram",
    },

    {
      icon: "📱",
      title: "WhatsApp",
      text: "WhatsApp Channel",
      url: "https://whatsapp.com/channel/0029VaFcdVB5kg6yHIl1IM0V",
      className: "whatsapp",
    },
  ];

  return (
    <div className="social-links">

      {links.map((link) => (
        <a
          key={link.title}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className={`social-link ${link.className}`}
        >

          <div className="social-link-icon">
            {link.icon}
          </div>

          <div>
            <strong>
              {link.title}
            </strong>

            <span>
              {link.text}
            </span>
          </div>

          <b>
            →
          </b>

        </a>
      ))}

    </div>
  );
}

export default SocialLinks;