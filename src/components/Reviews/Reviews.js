import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { Review } from "../Review/Review";
import "swiper/css";
import "swiper/css/pagination";
import "./Reviews.css";

import avatar from "../../assets/images/author.svg";
import img1 from "../../assets/images/IMG_2299.jpg";
import img2 from "../../assets/images/IMG_2675.jpg";
import img3 from "../../assets/images/IMG_2388.jpg";

export function Reviews({ showPopup }) {
  const data = [
    {
      author: "Наталия Полянская",
      avatar: avatar,
      title: "БАРСЕЛОНА — О ГОРОДЕ:",
      text: "Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...",
      images: [img1, img2, img3, img3, img3, img3, img3, img3, img3, img3],
      date: "около 1 года назад",
      comments: ["", "", "", "", "", "", "", "", ""],
      likes: 9,
    },
    {
      author: "Elena Bulgakova",
      avatar: avatar,
      title: "БАРСЕЛОНА — О ГОРОДЕ:",
      text: "Плюсы города: весь город одни плюсы! Минусы города: не видела. В наш марафон по Европе не вписалось 2 испанских города от усталости - решили остаток путешествия провести в Барселоне ...",
      images: [img1, img2, img3, img3, img3, img3, img3, img3, img3, img3],
      date: "5 месяцев назад",
      comments: ["", "", ""],
      likes: 7,
    },
    {
      author: "Наталия Полянская",
      avatar: avatar,
      title: "БАРСЕЛОНА — О ГОРОДЕ:",
      text: "Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...",
      images: [img1, img2, img3, img3, img3, img3, img3, img3, img3, img3],
      date: "около 1 года назад",
      comments: ["", "", "", "", "", "", "", "", ""],
      likes: 9,
    },
    {
      author: "Elena Bulgakova",
      avatar: avatar,
      title: "БАРСЕЛОНА — О ГОРОДЕ:",
      text: "Плюсы города: весь город одни плюсы! Минусы города: не видела. В наш марафон по Европе не вписалось 2 испанских города от усталости - решили остаток путешествия провести в Барселоне ...",
      images: [img1, img2, img3, img3, img3, img3, img3, img3, img3, img3],
      date: "5 месяцев назад",
      comments: ["", "", ""],
      likes: 7,
    },
    {
      author: "Наталия Полянская",
      avatar: avatar,
      title: "БАРСЕЛОНА — О ГОРОДЕ:",
      text: "Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...",
      images: [img1, img2, img3, img3, img3, img3, img3, img3, img3, img3],
      date: "около 1 года назад",
      comments: ["", "", "", "", "", "", "", "", ""],
      likes: 9,
    },
    {
      author: "Elena Bulgakova",
      avatar: avatar,
      title: "БАРСЕЛОНА — О ГОРОДЕ:",
      text: "Плюсы города: весь город одни плюсы! Минусы города: не видела. В наш марафон по Европе не вписалось 2 испанских города от усталости - решили остаток путешествия провести в Барселоне ...",
      images: [img1, img2, img3, img2, img3],
      date: "5 месяцев назад",
      comments: ["", "", ""],
      likes: 7,
    },
    {
      author: "Наталия Полянская",
      avatar: avatar,
      title: "БАРСЕЛОНА — О ГОРОДЕ:",
      text: "Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...",
      images: [img1, img2, img3, img3, img3, img3, img3, img3],
      date: "около 1 года назад",
      comments: ["", "", "", "", "", "", "", "", ""],
      likes: 9,
    },
  ];

  return (
    <article className="reviews">
      <h3 className="reviews__title">Отзывы о Барселоне</h3>
      <div className="reviews__slider">
        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
        >
          {data.map((el, index) => (
            <SwiperSlide key={index}>
              {<Review review={el} showPopup={showPopup} />}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <a href="все отзывы" className="reviews__button-all">
        Все отзывы
      </a>
    </article>
  );
}
