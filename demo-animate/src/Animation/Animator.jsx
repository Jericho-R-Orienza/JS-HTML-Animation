import React, { useEffect } from "react";
import "./style.css";
import mandrakeImage from "./mandrake.png";
import initGame from "./script";

const Animator = () => {
  useEffect(() => {
    // Initialize the game logic when the component mounts
    initGame();
  }, []);

  return (
    <div id="container">
      {/* Hidden image for the sprite */}
      <img id="mandrake" src={mandrakeImage} alt="Mandrake Sprite" style={{ display: "none" }} />
      <div id="controls">
        <p>Play Animation:</p>
        <div>
          <input type="radio" name="animation" id="all" defaultChecked />
          <label htmlFor="all">All</label>
        </div>
        <div>
          <input type="radio" name="animation" id="grow" />
          <label htmlFor="grow">Grow</label>
        </div>
        <div>
          <input type="radio" name="animation" id="wink" />
          <label htmlFor="wink">Wink</label>
        </div>
        <div>
          <input type="radio" name="animation" id="float" />
          <label htmlFor="float">Float</label>
        </div>
        <div>
          <input type="radio" name="animation" id="hide" />
          <label htmlFor="hide">Hide</label>
        </div>
      </div>
      <canvas id="canvas1"></canvas>
    </div>
  );
};

export default Animator;
