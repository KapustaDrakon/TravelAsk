import { useState } from "react";
import { Chat } from "../Chat/Chat";
import "./Chats.css";
import avatar1 from "../../assets/images/author.svg";
import avatar2 from "../../assets/images/author2.svg";

export function Chats() {
  const messages = [
    {
      author: "Наталия Полянская",
      role: "admin",
      avatar: avatar1,
      message:
        "Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотелf бы отметить очень важную область исследования",
      date: "Вчера в 17:45",
    },
    {
      author: "Лена Одинцова",
      role: "user",
      avatar: avatar2,
      message:
        "Что из себя представляет вулкан? Просто хочу убедиться, что готова к такому путешествию.",
      date: "Вчера в 18:45",
    },
    {
      author: "Наталия Полянская",
      role: "admin",
      avatar: avatar1,
      message:
        "Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотелf бы отметить очень важную область исследования",
      date: "Вчера в 17:45",
    },
  ];

  const [data, setData] = useState(messages);

  return (
    <article className="chats">
      <Chat messages={data} admin={""} setData={setData} />
      <div className="chats__line"></div>
      <Chat messages={data} admin={"admin"} setData={setData} />
    </article>
  );
}
