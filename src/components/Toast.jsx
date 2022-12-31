import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function Toast(props) {
  const notify = () =>
    toast("Wow!! Congratulations!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const Msg = () => {
    return (
      <center>
        <h2>YOUR SCORE : </h2>
        <hr />
        <h4>Turns : {props.turn}</h4>
        <h4>Time : {localStorage.getItem("total_time")}</h4>
        <hr />
        <h3>
          TOTAL SCORE :
          <span style={{ color: "yellow" }}>
            {" "}
            {" " +
              (300 -
                (Number(props.turn) +
                  Number(localStorage.getItem("total_time")))) *
                10}
          </span>
        </h3>
      </center>
    );
  };

  const info = () =>
    toast(<Msg />, {
      position: "top-center",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  React.useEffect(() => {
    if (props.show) {
      notify();
      info();
    }
  }, [props.show]);

  return (
    <div>
      <ToastContainer position="center" />
    </div>
  );
}
