import React from "react";
import { useStopwatch } from "react-timer-hook";
function MyStopwatch(props) {
  const { seconds, minutes, hours, days, start, pause } = useStopwatch({
    autoStart: false,
  });

  React.useEffect(() => {
    if (props.firstClick) {
      start();
    } else {
      pause();
      localStorage.setItem(
        "total_time",
        hours * 60 * 60 + minutes * 60 + seconds
      );
      localStorage.setItem(
        "total_score",
        Number(localStorage.getItem("total_time")) + Number(props.turns)
      );
    }
  }, [props.firstClick]);
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "5vh" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
    </div>
  );
}

export default function Timer(props) {
  return (
    <div className="timer effect8">
      <img
        src="https://st4.depositphotos.com/15539092/38148/v/600/depositphotos_381481628-stock-illustration-timer-logo-vibrating-effects.jpg"
        className="timerLogo"
      />
      <MyStopwatch firstClick={props.firstClick} turns={props.turn} />
    </div>
  );
}
