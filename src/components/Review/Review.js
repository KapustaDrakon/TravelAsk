import "./Review.css";
import like from "../../assets/images/like.svg";

export function Review({ review, showPopup }) {
  return (
    <div className="review">
      <div className="review__author">
        <img src={review.avatar} alt="аватар" className="review__avatar" />
        {review.author}
      </div>
      <span className="review__title">
        <span className="review__title-beginning">
          {`${review.title.split(" ")[0]}`}
        </span>
        {` ${review.title.split(" ").slice(1).join(" ")}`}
      </span>
      <p className="review__text">{review.text}</p>
      <div className="review__images">
        {review.images.map((img, index) => {
          if (index >= 3) return null;
          return (
            <img
              src={img}
              key={index}
              alt="review-image"
              className="review__image"
              onClick={() => showPopup(img)}
            />
          );
        })}

        {review.images.length > 3 ? (
          <div className="review__image-more">
            <span className="review__image-counter">{`+${review.images.length - 3}`}</span>
            <img
              src={review.images[3]}
              alt="review-image"
              className="review__image review__image_opacity"
            />
          </div>
        ) : null}
      </div>
      <div className="review__inf">
        <span className="review__date">{review.date}</span>
        <span className="review__comments">
          {review.comments.length} комментариев
        </span>
        <span className="review__likes">
          <img src={like} alt="like" className="review__like-image" />
          {review.likes}
        </span>
      </div>
    </div>
  );
}
