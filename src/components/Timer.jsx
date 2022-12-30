import React from "react";
import { useStopwatch } from "react-timer-hook";

function MyStopwatch(props) {
  console.log(props.firstClick);
  const { seconds, minutes, hours, days, start, pause } = useStopwatch({
    autoStart: false,
  });
  console.log(props.firstClick);

  React.useEffect(() => {
    if (props.firstClick) {
      start();
    } else {
      pause();
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
      <MyStopwatch firstClick={props.firstClick} />
    </div>
  );
}
