import "./Popup.css";

export function Popup({ image }) {
  const closePopup = () => {
    return (document.querySelector(".popup").style.display = "none");
  };

  return (
    <div className="popup" onClick={closePopup}>
      <div className="popup__container">
        <img src={image} alt="show-image" className="popup__image" />
        <button
          type="button"
          className="popup__button-close"
          onClick={closePopup}
        >
          X
        </button>
      </div>
    </div>
  );
}
