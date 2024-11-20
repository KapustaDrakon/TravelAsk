import { useState } from "react";
import { About } from "../About/About";
import { Chats } from "../Chats/Chats";
import { Popup } from "../Popup/Popup";
import { Reviews } from "../Reviews/Reviews";
import "./App.css";

function App() {
  const [image, setImage] = useState("");

  const showPopup = (img) => {
    document.querySelector(".popup").style.display = "flex";
    document.querySelector(".popup").style.alignItems = "center";
    document.querySelector(".popup").style.justifyContent = "center";
    return setImage(img);
  };

  return (
    <section className="app">
      <About />
      <Reviews showPopup={showPopup} />
      <Chats />
      <Popup image={image} />
    </section>
  );
}

export default App;
