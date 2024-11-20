import "./About.css";
import barcelona from "../../assets/images/Барселона_Испания.png";

export function About() {
  return (
    <article className="about">
      <div className="about_flex">
        <img src={barcelona} alt="Барселона" className="about__image" />
        <div className="about__content">
          <h3 className="about__title">Барселона — обзор города</h3>
          <p className="about__text">
            Барселона с её золотистыми пляжами, архитектурными шедеврами Гауди,
            многочисленными фестивалями и гастрономическим разнообразием
            понравилась мне в первый же день пребывания и стала местом, в
            котором...
          </p>
          <button type="button" className="about__button-more">
            Читать дальше
          </button>
        </div>
      </div>
    </article>
  );
}
