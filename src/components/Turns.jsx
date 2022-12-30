import React from "react";

export default function Turns(props) {
  return (
    <div className="turns effect8">
      <img
        src="https://w7.pngwing.com/pngs/184/404/png-transparent-computer-icons-symbol-gesture-encapsulated-postscript-click-miscellaneous-text-logo.png"
        className="turnLogo"
      />
      <h3>TURNS : {props.turns}</h3>
    </div>
  );
}
