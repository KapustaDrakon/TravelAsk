import "./Message.css";

export function Message({ message }) {
  if (message.role === "admin")
    return (
      <div className="message">
        <img src={message.avatar} alt="avatar" className="chat__avatar-image" />
        <div className="message__container">
          <p className="message__text">{message.message}</p>
          <span className="message__date">{message.date}</span>
        </div>
      </div>
    );
  else
    return (
      <div className="message message_background-color">
        <img src={message.avatar} alt="avatar" className="chat__avatar-image" />
        <div className="message__container">
          <p className="message__text">{message.message}</p>
          <span className="message__date">{message.date}</span>
        </div>
      </div>
    );
}
