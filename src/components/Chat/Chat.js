import "./Chat.css";
import flag from "../../assets/images/flag.svg";
import avatar1 from "../../assets/images/author.svg";
import avatar2 from "../../assets/images/author2.svg";
import stars from "../../assets/images/stars.svg";
import { Message } from "../Message/Message";
import { useLayoutEffect, useState } from "react";

export function Chat({ messages, admin, setData }) {
  useLayoutEffect(() => {
    if (admin)
      document.getElementById("chatadmin").classList.add("chat_margin-left");
  });

  const [message, setMessage] = useState("");

  const onChangeMessage = (e) => {
    return setMessage(e.target.value);
  };

  const onSubmitMessage = (e) => {
    e.preventDefault();
    let time = new Date();
    if (message !== "" && message.split(" ").length - 1 !== message.length) {
      if (admin) {
        setData([
          ...messages,
          {
            author: "Наталия Полянская",
            role: "admin",
            avatar: avatar1,
            message: message,
            date: `Сегодня в ${time.getHours()}:${time.getMinutes()}`,
          },
        ]);
      } else {
        setData([
          ...messages,
          {
            author: "Лена Одинцова",
            role: "user",
            avatar: avatar2,
            message: message,
            date: `Сегодня в ${time.getHours()}:${time.getMinutes()}`,
          },
        ]);
      }
      setMessage("");
    }
  };

  return (
    <div id={`chat${admin}`} className="chat">
      <h3 className="chat__title">
        {admin ? "Чат с администратором" : "Чат с пользователем"}
      </h3>
      <div className="chat__container">
        <div className="chat__header">
          <div className="chat__person">
            <img src={avatar1} alt="avatar" className="chat__avatar-image" />
            <div className="chat__person-inf">
              <span className="chat__person-name">
                {admin ? "Администратор" : "Наталия Полянская"}
              </span>
              <span className="chat__person-description">
                <img src={flag} alt="flag" className="chat__flag-image" />
                {admin ? "TravelAsk" : "Гид по Баварии, фотограф"}
              </span>
            </div>
          </div>
          <div className="chat__rating">
            {admin ? null : (
              <img src={stars} alt="stars" className="chat__stars-image" />
            )}
          </div>
        </div>

        <div className="chat__messages">
          {messages.map((el, index) => (
            <div key={index}>
              <Message message={el} />
            </div>
          ))}
        </div>

        <form className="chat__form" onSubmit={onSubmitMessage}>
          <div className="chat__input-container">
            <img
              src={admin ? avatar1 : avatar2}
              alt="avatar"
              className="chat__avatar-image"
            />
            <input
              type="text"
              id={`input__send${admin}`}
              className="chat__input"
              placeholder="Напишите сообщение..."
              value={message}
              onChange={onChangeMessage}
            />
          </div>
          <button type="submit" className="chat__button-submit"></button>
        </form>
      </div>
    </div>
  );
}
