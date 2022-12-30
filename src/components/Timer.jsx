import React from "react";
import { useStopwatch } from "react-timer-hook";

function MyStopwatch(props) {
  console.log(props.firstClick);
  const { seconds, minutes, hours, days, start, pause, reset } = useStopwatch({
    autoStart: false,
  });

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
  console.log(props.firstClick);
  return (
    <div
      style={{
        position: "absolute",
        top: "10%",
        right: "5%",
      }}
    >
      <MyStopwatch firstClick={props.firstClick} />
    </div>
  );
}
